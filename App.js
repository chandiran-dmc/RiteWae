import React from 'react';
import { Button } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import { View } from 'react-native';

var newLatitude = null;
var newLongitude = null;

function getlocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
  } else { 
      alert("4");
  }
}

function getCoordinates(position) {
  currentLatitude = position.coords.latitude;
  currentLongitude = position.coords.longitude; 

  // now latitude and longitude are available
  newLatitude=currentLatitude;
  newLongitude=currentLongitude;
}


const storeUserInfo = async () => {
  try {
    this._interval = setInterval(() => {
      bob.callFunction("updatePos", [object1]).then(echoedResult => {
        console.log(`Success!`);
        console.log(echoedResult);   
      })
      // getlocation();
      // console.log('latitude: '+newLatitude+'  longitude: '+newLongitude);
    }
    
    
    , 2000);
  } catch (error) {
    console.log(error);
  }
};


const { Stitch, AnonymousCredential } = require('mongodb-stitch-react-native-sdk');
var bob = null;
Stitch.initializeDefaultAppClient('csdh-hcbvo').then(client => {
    // use the client.
    bob = client;
    console.log(client);
    console.log("logging in anonymously");
client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
  console.log(`logged in anonymously as user ${user.id}`)
});
});





var object1 = {
  loc : { type: "PointBitch", coordinates: [ -73.95, 40.75 ] },
  name: "FuckingHereAsshole",
  category : "WorkBitch"
}


class LogInScreen extends React.Component {
    
  render() {

    const { navigate } = this.props.navigation;
    return (
      <View>
      <Button
        title="Go to LogIn"
        onPress={() =>
          storeUserInfo()

        }
      />
      
      </View>
      
      
    );
  }
}

export default class App extends React.Component {
  render() {
    return <StackNavigation />;
  }
}


const StackNavigation = createStackNavigator({
  Home: { screen: LogInScreen },
  
},
{
  initialRouteName: 'Home',
}
);

