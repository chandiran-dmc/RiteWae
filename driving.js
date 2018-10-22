import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import {Button} from 'native-base';
const { Stitch, AnonymousCredential } = require('mongodb-stitch-react-native-sdk');
import {
  createStackNavigator,
} from 'react-navigation';
import { Card, Avatar } from 'react-native-elements';
import * as Progress from 'react-native-progress';


var banana = [];

var newLatitude = 0;
var newLongitude = 0;
var bigData = [];

// function storeUserInfo() {

      

//   var object1 = {
//     loc : { type: "Point", coordinates: [ newLatitude, newLongitude ] },
//     name: 'Bob',
//     category : "Rash Driving"
//   }
//   // console.log("no.1");
  
//   if(object1.newLongitude!=null&&object1.newLatitude!=null){
//     bob.callFunction("updatePos", [object1]).then(echoedResult => {
//       //console.log(`Success!`);
//       // console.log(echoedResult);
      
//     }).catch(function (data) {  })
//   }
// };


function sendWarning(x) {
  
  bob.callFunction("addEvent", [{
    loc : { type: "Point", coordinates: [ newLatitude, newLongitude ] },
    name: 'Bob',
    category: x
  }]);
}

function sendCrashWarning() { return sendWarning("Crash") }

function sendBadDrivingWarning() { return sendWarning("Bad Driving") }

function sendObstacleWarning() { return sendWarning("Obstacle") }

Stitch.initializeDefaultAppClient('csdh-hcbvo').then(client => {
  // use the client.
  bob = client;
  // console.log(client);
  // console.log("logging in anonymously");
  client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
    // console.log(`logged in anonymously as user ${user.id}`)
  });
}).then(() => {
  bob.callFunction("giveBigData").then(result => {
    bigData = result;
    // console.log(JSON.stringify(bigData));
  });
});





export default class driving extends React.Component {

 

  constructor() {
    super();
    this.locationUpdater();
    this.currlat = 35.8451;
    this.currlong = -78.8987;
    this.state = {
      safetyScore: 0,
      warn: {opacity: 0}
    }
  }

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: this.currlat,
            longitude: this.currlong,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          onRegionChange={e => this.onRegionChange(e)}
          customMapStyle={[
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#232b32"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8ec3b9"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1a3646"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#64779e"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#334e87"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#012f43"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#22355b"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6f9ba5"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#214045"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3C7680"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#334b79"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2b58ac"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#b0d5ce"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3d4045"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#283d6a"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3a4762"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#0e1626"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#4e6d70"
                }
              ]
            }
          ]}
        >
        {bigData.map((object, i) => <Circle key={object._id} center={{latitude: object.loc.coordinates[0], longitude: object.loc.coordinates[1]}} radius={700} strokeWidth={0} fillColor="rgba(255,0,0,0.5)"/>)}
        
        {/* <MapView.Heatmap points={points}
        opacity={1}
        radius={20}
        maxIntensity={100}
        gradientSmoothing={10}
        heatmapMode={"POINTS_DENSITY"}/> */}
        </MapView>
        <Button style={this.fabStyle(0)} onPress={
          sendCrashWarning.bind()
        }>
        <Text style={this.btnTextStyle()}>
        CRASH
        </Text>
        </Button>
        <Button style={this.fabStyle(1)} onPress={
          sendBadDrivingWarning.bind()
        }>
        <Text style={this.btnTextStyle()}>
        BAD DRIVING
        </Text>
        </Button>
        <Button style={this.fabStyle(2)} onPress={
          sendObstacleWarning.bind()
        }>
        <Text style={this.btnTextStyle()}>
        OBSTACLE
        </Text>
        </Button>
        <Text style={this.state.warn}>Warning: Drive Safe!</Text>
        <Progress.Circle style={styles.progress} size={90} progress={this.state.safetyScore} showsText={true} formatText={()=>'Safety'} color='white'/>
      </View>
    );
  }

  onRegionChange(event) {
    this.currlat = event.latitude;
    this.currlong = event.longitude;
  }

  warningStyle(b) {
    let css = {
      position: "absolute",
      top: '20%',
      left: 50,
      right: 50,
      height: 72,
      backgroundColor: "#f1c40f",
      color: "black",
      opacity: 0,
      textAlign: 'center',
      fontSize: 20,
      paddingTop: 30
    }
    if (b) {
      css.opacity = 1;
    }
    return css;
  }

  warnPopup() {
    this.setState({warn: {
      position: "absolute",
      top: '20%',
      left: 50,
      right: 50,
      height: 72,
      backgroundColor: "#f1c40f",
      color: "black",
      opacity: 1,
      textAlign: 'center',
      fontSize: 20,
      paddingTop: 30
    }});
    setTimeout(() => {
      this.setState({warn: {
        position: "absolute",
        top: '20%',
        left: 50,
        right: 50,
        height: 72,
        backgroundColor: "#f1c40f",
        color: "black",
        opacity: 0,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 26
      }});
    },6000);
  }

  locationUpdater() {
    try {
      this._interval = setInterval(() => {
        function getlocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(getCoordinates);
          } else { 
              alert("4");
          }
        }

        getlocation();
        
        function getCoordinates(position) {
          currentLatitude = position.coords.latitude;
          currentLongitude = position.coords.longitude; 
        
          // now latitude and longitude are available
          newLatitude=currentLatitude;
          newLongitude=currentLongitude;
        }

        bob.callFunction("getSafetyTraffic", [[this.currlat, this.currlong]]).then(result => {
          this.setState({safetyScore: result[0]/100});
          console.log(result[0]);
        }).catch((data) => {
          console.log(data, this.currlat, this.currlong);
        });

        // console.log('latitude: '+newLatitude+'  longitude: '+newLongitude);    
        bob.callFunction("updatePos", [{
          loc: {type: "Point", coordinates: [ newLatitude, newLongitude]},
          name: "na",
          category: "Rash Driving"
        }]).then(echoedResult => {
          if(banana.length==0){
            for(let i=0;i<echoedResult.length;i++){
              banana.push(echoedResult[i]._id);
            }
          }
          // console.log(`Success!`);
          for (var i = 0; i < echoedResult.length; i++) {
            // console.log("Type of: ");
            // console.log(echoedResult[i]._id);
            if (banana.indexOf(echoedResult[i]._id.toString()) > -1)
            {
                // console.log("already contains thing");
            }
            else {
              banana.push(echoedResult[i]._id.toString());
              this.warnPopup();
              // notify user
              // console.log("notify");
            }
            
          }
        }).catch(function (data) { })
  
        
      }
      
      
      , 4000);
    } catch (error) {
      console.log(error);
    }
  }

  fabStyle(pos) {
    return {
      borderWidth: 0,
      height: 90,
      width: 90,
      borderRadius: 45,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: 20+pos*100,
      left: 20,
      shadowColor: "#000",
      shadowOpacity: 1,
      shadowRadius: 3,
      shadowOffset: {
          height: 1,
          width: 0
      },
      backgroundColor: "white"
    }
  }

  btnTextStyle() {
    return {fontSize: 16, fontWeight: "bold", color: "#2b58ac", textAlign: "center"};
  }
}

let styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  speech: {
    position: "absolute",
    top: 20,
    left: 20,
    color: "#FFF",
    fontSize: 12
  },
  progress: {
    position: "absolute",
    right: 20,
    bottom: 20
  }
});