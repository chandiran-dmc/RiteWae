import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ImageBackground } from 'react-native';
import driving from './driving.js';
import {
  createStackNavigator,
} from 'react-navigation';
import { FooterTab } from 'native-base';
import { Button, Avatar } from 'react-native-elements';




class LogInScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require('./dudedrive.jpg')}
          imageStyle={{resizeMode: 'cover'}}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            {/* <Avatar
              xlarge
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={1}
            /> */}
            <TextInput style = {styles.input} 
              autoCapitalize="none" 
              onSubmitEditing={() => this.passwordInput.focus()} 
              autoCorrect={false} 
              keyboardType='email-address' 
              returnKeyType="next"
              placeholder='Email'
              placeholderTextColor='black'
            />

            <TextInput style = {styles.input}
                  returnKeyType="go" 
                  ref={(input)=> this.passwordInput = input}
                  placeholder='Password'
                  placeholderTextColor='black' 
                  secureTextEntry
            />
            <Button style={styles.buttonContainer} title='Log In' 
                        onPress={() => this.props.navigation.navigate('Driving')}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </Button> 
          </View>
        </ImageBackground>
      </View>
    );
  }
}
/*

class CoolBackgroundImage extends Component {
  render() {

  }
}

*/
const styles = StyleSheet.create({
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(25, 50, 60, .8)',
  },
    backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default class App extends React.Component {
  render() {
    return <StackNavigation />;
  }
}

const StackNavigation = createStackNavigator({
  Home: { screen: LogInScreen,
    navigationOptions:  {
      title: 'RiteWae' }},
  Driving: { screen: driving,
      navigationOptions:  {
        title: 'Driving Mode',
        headerLeft: null,
        
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
);