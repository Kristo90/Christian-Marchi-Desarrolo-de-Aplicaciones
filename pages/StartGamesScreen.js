import { Button, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"

import Card from "../components/Card"
import Colors from "../constants/Colors"
import NumberContainer from "../components/NumerContainer"
import TextInput from '../components/Input'
import { TouchableWithoutFeedback } from "react-native-web"

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');
    
    const handlerInputNumber = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''))
    }
    // Borrar lo escrito
    const handlerResetInput = () => {
        setConfirmed(false);
        setEnteredValue('');
    }

    const handlerConfirmInput = () => {
        const choseNumber = parseInt(enteredValue)
        if(choseNumber === NaN || choseNumber < 0 || choseNumber > 99) return;

        setConfirmed(true)
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
    }

    //const confirmedOutput = confirmed ? <Text>Número elegido: {selectedNumber}</Text> :null

    return (
        <TouchableWithoutFeedback onPress={() => keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Que comienze el juego!</Text>
                <Card style={styles.inputContainer}>
                <Text>Elija una número de 1 al 99</Text>
                <TextInput
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='numeric'
                    maxLength={2}
                    value={enteredValue}
                    onChangeText={handlerInputNumber}
                />
                <View style={styles.buttonContainer}>
                    <Button title='Limpiar' onPress={handlerResetInput} color={Colors.accent} />
                    <Button title='Confirmar' onPress={handlerConfirmInput} color={Colors.primary} />
                </View>
                </Card>
                {confirmed && (
                    <Card style={styles.summaryContainer}>
                        <Text>Tu seleccion</Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <Button title='Empieza el juego' onPress={() => props.onStartGame(selectedNumber)} />
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        height: '15%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
})

export default StartGameScreen