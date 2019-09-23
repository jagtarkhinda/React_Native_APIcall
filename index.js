/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import logf from './Components/LoginForm';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => logf);
