import { StyleSheet, Text, View } from 'react-native';

import GameScreen from './pages/GameScreen.js';
import Header from './components/Header.js';
import StartGameScreen from './pages/StartGamesScreen.js';
import { useState } from 'react';

export default function App() {

  const [userNumber, setUserNumber] = useState()

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handlerStartGame} />

  if(userNumber) {
    content = <GameScreen />
  }


  return (
    <View style={styles.container}>
      <Header title={'Comodin de Promociones'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});