import UiStore from './ui.store';
import EventStore from './event.store';
import AuthStore from './auth.store';

export default {
  ui: new UiStore(),
  auth: new AuthStore(),
  event: new EventStore(),
} 