import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Card from '../components/Card'
import NumberContainer from '../components/NumerContainer'

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userOption))

    const generateRandomBetween = (min, max, userChoice) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        let randomNumber = Math.floor(Math.random() * (max -min) + min)
        if(randomNumber === userChoice) {
            return generateRandomBetween(min, max, userChoice)
        } else {
            return setCurrentGuess(randomNumber)
        }
            
    }

    useEffect(() => {
        generateRandomBetween(1, 100, props.userOption)
    }, [])

    render (
        <View style={styles.screen}>
            <Text>La suposición del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button tittle='Menor' onPress={() => {}}/>
                <Button tittle='Mayor' onPress={() => {}}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    },
})

export default GameScreen