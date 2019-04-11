import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { blue } from 'ansi-colors';

const listItem = (props) => (
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        margin:5,
        paddingLeft:30,
        padding: 10,
        backgroundColor: '#87cefa',
        borderRadius:5
    }
})

export default listItem;