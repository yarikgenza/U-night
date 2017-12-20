import { extendObservable, action } from 'mobx';
import APIs from '../api';

const { EventApi } = APIs;
const api = new EventApi();

/**
 * @class Event
 */
export default class Event {
  constructor(state = {}) {
    extendObservable(this, {}, state);
  }
  
  @action getList = () => api.getList();

  @action getOne = _id => api.getOne(_id);
}