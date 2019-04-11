import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {

state = {
  placeName:"",
  places:[]
};

placeNameChangedHandler = val => {
  this.setState({
    placeName: val
  });
};

placeSubmitHandler = () => {
  if (this.state.placeName.trim() === ""){
    return;
  }

  this.setState(prevState => {
    return {
      places: prevState.places.concat(prevState.placeName)
    };
  });
};

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place}/>
      ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput 
        style = {{width:300, borderColor: "red", borderWidth: 0.5, display: 'flex', borderRadius: 15}}
        value={this.state.placeName}
        placeholder={"place name"}
        onChangeText={this.placeNameChangedHandler}
        />
        <Button 
          style={styles.placeButton}
          title="Add"
          onPress={this.placeSubmitHandler}
        />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    backgroundColor: '#F5FCFF',
  },
  inputContainer:{
    //flex:1,
    flexDirection:"row"
  },
  placeButton:{
    borderRadius:20,
    width:"30%"
  },
  listContainer:{
    width:"100%",
    paddingLeft:20,
    paddingRight:20
  }
});
