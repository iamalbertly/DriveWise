import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const App = () => {
    useEffect(() => {
        // Add error handler for uncaught JS errors
        const errorHandler = (error: Error) => {
            console.error('Uncaught error:', error);
        };

        if (__DEV__) {
            console.log('App started in development mode');
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

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Hello Universe!</Text>
            </View>
        </SafeAreaView>
    );
};

export default App;
