import React, {Fragment} from 'react';
import App from '../App'
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




export default class Welcome extends React.Component{
    constructor(){
        super()
        this.state = {
            datasource: []
        }
      
    }
    componentDidMount(){
        fetch("https://swapi.co/api/people/1/")
        .then((response) => response.json() )
        .then((responseJson) => {
                this.setState({
                    datasource: responseJson
                })
        } )
    }
    render(){
       

      

        return (
             <View style={{flex: 1, width: '100%',flexDirection: "row",flexWrap: "wrap"}}>
                 <Text style={StyleSheet.textFileds}>Welcome {this.state.datasource.name}</Text>
                 <Text style={StyleSheet.textFileds}>Your height: {this.state.datasource.height}</Text>
                 <Text style={StyleSheet.textFileds}>hair color: {this.state.datasource.hair_color}</Text>
                 <Text style={StyleSheet.textFileds}>weight: {this.state.datasource.mass}</Text>
                 <Text style={StyleSheet.textFileds}>Sking color: {this.state.datasource.skin_color}</Text>
                 <Text style={StyleSheet.textFileds}>Eye Color: {this.state.datasource.eye_color}</Text>
                 <Text style={StyleSheet.textFileds}>Gender: {this.state.datasource.gender}</Text>
               
                <Button 
                title = "go back"
                onPress = { () => this.props.navigation.goBack()}
                />


            </View>
        )
    }

     

}

const styles = StyleSheet.create({
    textFileds:{
       
        width: '50%'
    }

})


