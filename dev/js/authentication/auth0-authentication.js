import jwtDecode from 'jwt-decode';
import Auth0Lock from 'auth0-lock';
import auth0 from 'auth0-js';

import Redirector from './redirector';
import { client } from '../client';



const AUTHENTICATED_EVENT = 'authenticated';
const AUTHENTICATION_ERROR_EVENT = 'authorization_error';
const RESPONSE_TYPE = 'token';
const TOKEN_STORE_KEY = 'auth0_jwt_id';
const AUTH0_USER_EMAIL_STORE_KEY = 'auth0_email';

export default class Auth0Authentication {
  constructor(clientId, domain, redirectUrl, localStorage) {
    this.localStorage = localStorage;

    const options = this._buildLockOptions(redirectUrl);
    this.lock = new Auth0Lock(clientId, domain, options);
    this.redirector = new Redirector();
    this.webAuth = new auth0.WebAuth({
      domain: domain,
      clientID: clientId,
      redirectUri: redirectUrl,
      audience: 'https://' + domain + '/userinfo',
      responseType: 'token id_token',
      scope: 'openid profile',
      leeway: 60
    });
    this._setUpEventListeners();

    client.defaults.headers.common.Authorization = this.getToken();
  }

  _setUpEventListeners() {
    this.lock.on(AUTHENTICATION_ERROR_EVENT, error => {
      this.error = error;
      this.redirector.onAuthenticationFailed();
    });
    this.lock.on(AUTHENTICATED_EVENT, result => {
      const jwt = result.idToken;
      this.setToken(jwt);
      this._fetchUserProfile(result.accessToken);
      this.redirector.onAuthenticationSucceed();
    });
  }

  setToken(idToken) {
    client.defaults.headers.common.Authorization = idToken;
    this.localStorage.setItem(TOKEN_STORE_KEY, idToken);
  }

  _fetchUserProfile(idToken) {
    const localStorage = this.localStorage;
    this.webAuth.client.userInfo(idToken, function(err, profile) {
      if (profile) {
        localStorage.setItem(AUTH0_USER_EMAIL_STORE_KEY, profile.email);
      }
    });
  }

  showLoginDialog() {
    const flashMessage = this._getFlashMessage();
    this.lock.show(flashMessage);
    this.error = null;
  }

  _getFlashMessage() {
    let flashMessage = {};
    if (this.error) {
      flashMessage = {
        flashMessage: {
          type: 'error',
          text: this.error.error_description
        }
      };
    }
    return flashMessage;
  }

  isLoggedIn() {
    const token = this.getToken();
    if (token) {
      const decodedToken = jwtDecode(token);
      return !this._isTokenExpired(decodedToken.exp);
    }
    return false;
  }

  getToken() {
    return this.localStorage.getItem(TOKEN_STORE_KEY);
  }

  logout() {
    client.defaults.headers.common.Authorization = '';
    this.localStorage.removeItem(TOKEN_STORE_KEY);
  }

  _isTokenExpired(expirationTime) {
    const d = new Date();
    const currentTime = d.getTime() / 1000;
    return expirationTime < currentTime;
  }

  _buildLockOptions(redirectUrl) {
    return {
      auth: {
        redirectUrl,
        responseType: RESPONSE_TYPE,
        redirect: true
      },
      theme: {
        logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/v1397755025/5669db125976663f9f81293fac2b0142.png',
        primaryColor: '#f5f6f7',
        labeledSubmitButton: true
      }
    };
  }
}
