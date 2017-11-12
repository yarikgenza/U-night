import config from '../../config';

const { backendUrl } = config;

/**
 * @name Class Api
 * @description Provides basic CRUD operations
 * @param {String(Url)} resource e.g api/users
 */

export default class Api {
  constructor(resource) {
    this.resource = resource;
    this.backendUrl = backendUrl;
  }

  create = body => fetch(`${this.backendUrl}/${this.resource}`, { method: 'POST', body });

  getList = () => fetch(`${this.backendUrl}/${this.resource}`);

  getOne = _id => fetch(`${this.backendUrl}/${this.resource}/${_id}`);

  update = (_id, body) => fetch(`${this.backendUrl}/${this.resource}/${_id}`, { method: 'PATCH', body });

  remove = _id => fetch(`${this.backendUrl}/${this.resource}/${_id}`, { method: 'DELETE' });
}