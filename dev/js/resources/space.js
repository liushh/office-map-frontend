import { client } from '../client';

class SpaceAPI {
  createSpace(officeId, selectedEmptySpaces) {
    const url = `/space`;
    const params = {
        office_id: officeId,
        owner_name: "",
        owner_id: "",
        team: "Engineering",
        space_type: "Employee Desk",
        basic_units: selectedEmptySpaces
    }
    return client.post(url, params).then(response => response.data);
  }

  updateSpace(selectedSpace) {
    const url = `/space/${selectedSpace.id}`;
    const params = {
        id: selectedSpace.id,
        office_id: selectedSpace.office_id,
        owner_name: selectedSpace.owner_name,
        owner_id: selectedSpace.owner_id,
        team: selectedSpace.team,
        space_type: selectedSpace.space_type,
        project: selectedSpace.project,
    }
    return client.patch(url, params).then(response => response.data);
  }

  getSpaces(officeId) {
    const url = `/spaces/${officeId}`;
    return client.get(url).then(response => response.data);
  }

  deleteSpace(officeId, selectedSpaceId) {
    const url = `/space/${selectedSpaceId}`;
    return client.delete(url).then(response => response.data);
  }
}

export default SpaceAPI;
