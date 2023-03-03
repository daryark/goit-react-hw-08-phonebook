import axios from 'axios';

const $publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: { 'Content-Type': 'application/json' },
});

const $privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: { 'Content-Type': 'application/json' },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const userAPI = {
  async registerUser(formData) {
    const { data } = await $publicHost.post('/users/signup', formData);
    return data;
  },
  async loginUser(formData) {
    const { data } = await $privateHost.post('/users/login', formData);
    return data;
  },
  async logoutUser() {
    const { data } = await $privateHost.post('users/logout');
    return data;
  },
};

//
//
//
//

export const contactsAPI = {
  async fetchContacts() {
    const { data } = await $privateHost.get('/contacts');
    return data;
  },
  async addContact(contact) {
    const { data } = await $privateHost.post('/contacts', contact);
    return data;
  },
  async deleteContact(id) {
    const { data } = await $privateHost.delete(`/contacts/${id}`, id);
    return data;
  },
};
