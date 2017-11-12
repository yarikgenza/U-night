import Api from '../api';

const resource = 'api/events';


/**
 * @name Class EventApi
 * @extends Api
 * @description Api for Event resource
 * @method create (inherited from Api)
 * @method getOne (inherited from Api)
 * @method getList (inherited from Api)
 * @method update (inherited from Api)
 * @method remove (inherited from Api)
 */
export default class EventApi extends Api {
  constructor() {
    super(resource);
  }
}