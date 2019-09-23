import React, {Fragment} from 'react';
import App from '../App'
import {
    TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { white } from 'ansi-colors';
import { ListItem } from 'react-native-elements';


// MAP Function
//render: function(){
//     return (<div>
//             lists.map(function(listItem, index){
//                 return (<div key={index}>
//                     <span>{listItem.caption}</span>
//                 </div>)
//         })
//         </div>
//     )    
// }



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

    //  statedata(){
    //    // map can o ly be use on arrays
    //     this.state.datasource.name.map(function(listItem, index){
    //                 return (<Text key={index}>
    //                      {listitem.name}
    //                  </Text>)
    //          })   
    //  }
    render(){

        const { name, height, hair_color, mass, skin_color, eye_color, gender} = this.state.datasource;

        return (
            <ScrollView>
                
             <View style={{flex: 1, width: '100%',flexDirection: "column", alignItems: "center"}}>
                 <Text style={styles.textFileds}>Welcome {name}</Text>
                 <Text style={styles.textFileds}>Your height: {height}</Text>
                 <Text style={styles.textFileds}>Hair color: {hair_color}</Text>
                 <Text style={styles.textFileds}>Weight: {mass}</Text>
                 <Text style={styles.textFileds}>Skin color: {skin_color}</Text>
                 <Text style={styles.textFileds}>Eye Color: {eye_color}</Text>
                 <Text style={styles.textFileds}>Gender: {gender}</Text>

            
                <Button 
                title = "go back"
                onPress = { () => this.props.navigation.goBack()}
                />


            </View>
            </ScrollView>
        )
    }

     

}

const styles = StyleSheet.create({
    textFileds:{
        width: '100%',
        margin: 10,
        color: "white",
        padding: 20,
        fontSize: 30,
        
        backgroundColor: "#564787",
    }

})


