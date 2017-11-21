import Api from '../api';

const resource = 'api/events';

/**
 * @name Class EventApi
 * @extends Api
 * @description Api for Event resource
 * @method getOne (inherited from Api)
 * @method getList (inherited from Api)
 */
export default class EventApi extends Api {
  constructor() {
    super(resource);
  }
}