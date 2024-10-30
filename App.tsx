import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  LogBox,
  Platform,
  NativeModules,
} from 'react-native';

const App = () => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Disable yellow box warnings in dev mode
    LogBox.ignoreLogs(['Warning:']);

    // Add detailed error handler
    const errorHandler = (error: Error) => {
      const errorMessage = `Error: ${error.message}\nStack: ${error.stack}`;
      console.error('DriveWise Error:', errorMessage);
      setError(errorMessage);
    };

    // Log app startup
    console.log('DriveWise App Starting:', {
      platform: Platform.OS,
      version: Platform.Version,
      apiLevel: Platform.OS === 'android' ? Platform.constants.Release : null,
      deviceModel: Platform.constants.Model,
    });

    // Set up error boundary
    if (__DEV__) {
      console.log('DriveWise running in development mode');
    }

    // @ts-ignore
    if (global.ErrorUtils) {
      // @ts-ignore
      global.ErrorUtils.setGlobalHandler(errorHandler);
    }

    return () => {
      // @ts-ignore
      if (global.ErrorUtils) {
        // @ts-ignore
        global.ErrorUtils.setGlobalHandler(null);
      }
    };
  }, []);

  // Show error UI if there's an error
  if (error) {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ff0000'}}>
        <View style={{padding: 20}}>
          <Text style={{color: 'white', fontSize: 16}}>
            An error occurred in DriveWise:
          </Text>
          <Text style={{color: 'white', marginTop: 10}}>{error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>DriveWise App Running</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
