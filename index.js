/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

import 'react-native-gesture-handler';

YellowBox.ignoreWarnings(['Warning', 'Remote']);

AppRegistry.registerComponent(appName, () => App);
