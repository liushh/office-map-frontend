export function setSelectedOfficeId(selected_office_id) {
  localStorage.setItem('selected_office_id', selected_office_id);
}

export function getSelectedOfficeId() {
  return localStorage.getItem('selected_office_id');
}
