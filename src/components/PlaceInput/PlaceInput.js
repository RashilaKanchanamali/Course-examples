import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button} from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName:""
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
      
        this.props.onPlaceAdded(this.state.placeName);
      };

    render() {
        return (
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
        )
    }

}

const styles = StyleSheet.create({
    inputContainer:{
        //flex:1,
        flexDirection:"row"
      },
      placeInput:{
        width:"70%"
      },
      placeButton:{
        width:"30%"
      },
});

export default PlaceInput;