import React, {Fragment} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends React.Component {
  constructor(){
    super();
  }

  _onPressButton() {
    alert('You tapped the button!')
  }



  render() {
   
      const textaray = [];
      for(let i=0; i< 100 ; i++)
      {
        textaray.push(<Text>Hello</Text>)
      }

    return (
    
      <View style={styles.container}>
         <Text>Welcome! </Text>
 
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default App;
