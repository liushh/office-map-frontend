import { client } from '../client';

class SpaceAPI {
  createSpace(officeId, selectedEmptySpaces) {
    const url = `/space/${officeId}`;
    const params = {
        office_id: officeId,
        owner_name: "Liusha",
        owner_id: "owner_id",
        team: "engineering",
        space_type: "employee_desk",
        basic_units: selectedEmptySpaces
    }
    return client.post(url, params).then(response => response.data);
  }

  getSpaces(officeId) {
    const url = `/space/${officeId}`;
    return client.get(url).then(response => response.data);
  }

  deleteSpace(officeId, selectedSpaceId) {
    const url = `/space/${officeId}`;
    const params = {
        office_id: officeId,
        space_id: selectedSpaceId
    }
    return client.delete(url, params).then(response => response.data);
  }
}

export default SpaceAPI;
