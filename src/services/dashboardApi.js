import config from '../config';
const baseUrl = `${config.API_ENDPOINT}`;

const DashboardApiService = {
  getClients() {
    return fetch(`${baseUrl}/clients`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
  postNewClean(clean) {
    return fetch(`${baseUrl}/clean`, {
      method: 'POST',
      body: JSON.stringify(clean),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
  postNewLawn(lawn) {
    return fetch(`${baseUrl}/lawn`, {
      method: 'POST',
      body: JSON.stringify(lawn),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
  postNewSod(sod) {
    return fetch(`${baseUrl}/sod`, {
      method: 'POST',
      body: JSON.stringify(sod),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
  deleteClient(clientId) {
    return fetch(`${baseUrl}/clients/${clientId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : true;
    });
  },
  moveClient(clientId, movedClient) {
    return fetch(`${baseUrl}/clients/${clientId}`, {
      method: 'PATCH',
      body: JSON.stringify(movedClient),
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : true;
    });
  },
};
export default DashboardApiService;
