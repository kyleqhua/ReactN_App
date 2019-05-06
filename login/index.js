/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import signUp from './signUp';
import login from './login';
import dashboard from './dashboard'

AppRegistry.registerComponent(appName, () => dashboard);
