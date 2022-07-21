import { StyleSheet, View } from 'react-native'

import React from 'react'

const Card = props => (
    <View style={{...styles.inputCard, ...props.style}}>
        {props.children}
    </View>
)

const styles= StyleSheet.create ({
    inputCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadow0pacity: 0.28,
        shadowRadius: 3.85,
        elevation: 5,
    }
})

export default Card