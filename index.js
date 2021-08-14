/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './pages/Home';
import { TabNavi } from './pages/TabNavi';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
