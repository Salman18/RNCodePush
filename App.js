/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };


class App extends React.Component {


  onButtonPress() {
    codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE
    });
}

  render() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        
          <Header />
          <View>
            <TouchableOpacity onPress={this.onButtonPress}>
                <Text>Check for updates</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
 };
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

 App = codePush(codePushOptions)(App);
export default App;
