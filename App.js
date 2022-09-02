import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Amplify , { Logger } from 'aws-amplify';
import { AWSCloudWatchProvider } from '@aws-amplify/core';

import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
Amplify.Logger.LOG_LEVEL = 'INFO';
const logger = new Logger('amplify-mobile-logging');
logger.configure({
  logGroupName: 'amplify-mobile-logging',
  logStreamName: 'amplify-mobile-logging',
  region: 'ap-southeast-1'
});
logger.addPluggable(new AWSCloudWatchProvider());

export default function App() {
  logger.debug('Logging debug');
  logger.info('Logging info');
  logger.warn('Logging warninng');
  logger.error('Logging error');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
