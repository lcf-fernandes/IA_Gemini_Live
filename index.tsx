
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Internals
import { Router } from './src';

export default function App() {
  return <Router />;
}

RN.AppRegistry.registerComponent('App', () => App);

RN.AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});

