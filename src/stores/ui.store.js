import { extendObservable, action } from 'mobx';

/**
 * @class Ui
 */
export default class Ui {

  constructor(state = {}) {
    extendObservable(this, {
      title: 'U-night',
      isDrawerOpen: false,
      navigation: {},
    }, state);
  }

  @action closeDrawer() {
    this.isDrawerOpen = false;
  }

  @action openDrawer() {
    this.isDrawerOpen = true;
  }

  @action setNavigation(obj) {
    this.navigation = obj;
  }
}