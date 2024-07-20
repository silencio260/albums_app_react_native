/**
 * @format
 */

import {name as appName} from './app.json';
import React from 'react';
import {View, Text, AppRegistry} from 'react-native';
import Header from './src/component/Header'
import AlbumList from './src/component/AlbumsList'

const App = () => {
    return (
        <View style={{flex: 1}} >
            
            <Header headerText={'Albums!'} />
            <AlbumList />
            {console.log('component')}
        </View>
    )
  }


AppRegistry.registerComponent(appName, () => App);
