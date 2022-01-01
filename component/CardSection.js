import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
    return (
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    );
};
const styles = {
    containerStyles: {
        flex: 1,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',



    }
};

export default CardSection;