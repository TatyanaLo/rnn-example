import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ChartsScreen from './screens/ChartsScreen';
import MoreScreen from './screens/MoreScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {

  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      main: { screen: TabNavigator({
        Home: { screen: StackNavigator({
          home: { screen: HomeScreen }
        }) },
        Charts: { screen: StackNavigator({
          charts: { screen: ChartsScreen }
        }) },
        More: { screen: StackNavigator({
            more: { screen: MoreScreen }
        }) },
      },
        {
          activeTintColor: '#00ffff',
          tabBarPosition: 'bottom',
          tabBarComponent: TabBarBottom,
          swipeEnabled: false,
          lazyLoad: true,
          animationEnabled: false
        })
      },
    },
    {
      navigationOptions: {
        tabBarVisible: false
      },
    },
  );


    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
