import React, {Fragment} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements'
import Welcome from './Welcome'
import {
    TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';




class LoginForm extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this._onPressButton = this._onPressButton.bind(this)
    }

    _onPressButton(){
        // if(this.state.username == "Jagtar" && this.state.password == "123")
        // {
            return this.props.navigation.navigate('Welcome')
      //  }
    }

    render(){
        return (
             <View style = {{flex: 1}}>
                  <View style = {{alignItems: "center", marginTop: 20}}>
                <Icon 
                //  reverse
                name='user'
                type='font-awesome'
                iconStyle = {{fontSize: 100}}
                 color='#262F30'
                />
                </View>
                 
                <TextInput
                style={styles.textFields}
                placeholder="Username"
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                />
                 <TextInput
                style={styles.textFields}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                />
                 <Button
                    onPress={this._onPressButton}
                    title="Log In"
                    color= "orange"
                />



            </View>
        )
    }

}

const styles = StyleSheet.create({

    textFields: {
        borderColor: 'gray', borderBottomWidth: 1,
        height: 40,
      
        margin: 30,
        alignItems: "flex-start"
        

    }

})



const AppNavigator = createStackNavigator({
        Home: LoginForm,
         Welcome: Welcome,
      },
      {
        initialRouteName: 'Home',
      }
  );
  
  const logf =  createAppContainer(AppNavigator);

export default logf
