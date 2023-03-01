import axios from 'axios';

axios.defaults.baseURL = 'https://63fcff2a8ef914c555a3c3cc.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
  async register(formData) {
    const { data } = await $publicHost.post('/users/signup', formData);
    return data;
  },
  async login(formData) {
    const { data } = await $privateHost.post('/users/login', formData);
    return data;
  },
};

//
//
//
//

export const contactsAPI = {
  async fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
  },
  async addContact(contact) {
    const { data } = await axios.post('/contacts', contact);
    return data;
  },
  async deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`, id);
    return data;
  },
};
