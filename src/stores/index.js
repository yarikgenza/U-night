import UiStore from './ui.store';
import EventStore from './event.store';

export default {
  ui: new UiStore(),
  event: new EventStore(),
} 