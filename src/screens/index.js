import LaunchScreen from './launch.screen';
import LoginScreen from './login.screen';
import EventScreen from './event.screen';
import EventCardScreen from './event.card.screen';
import ScanScreen from './scan.screen';
import ClubScreen from './club.screen';

import SoonScreen from './soon.screen';

const screens = {
  Start: { screen: LaunchScreen },
  Login: { screen: LoginScreen },
  Event: { screen: EventScreen },
  EventCard: { screen: EventCardScreen },
  Scan: { screen: ScanScreen },
  Soon: { screen: SoonScreen },
  Club: { screen: ClubScreen },
}

export { screens };