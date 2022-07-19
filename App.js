import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useState } from 'react';

export default function App() {

  const [textItem, setTextItem] = useState ('');
  const [itemList, setItemList] = useState ([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});


  const onHandlerChangeItem = (text) => setTextItem(text) 
  const onHandlerAddItem = () => {
    setItemList(currentItems => [...currentItems, { id: itemList.length + 1, value: textItem}])
    setTextItem('')
  }

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerModal = id => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  }
  
  return (
    <View style={styles.screen}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalTitlle}>
          <Text>
            Mi modal
          </Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>¿Está seguro que desea borrar?</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text style={styles.modalItem}>{itemSelected.value}</Text>
        </View>
        <View style={styles.modalButtom}>
          <Button onPress={onHandlerDeleteItem.bind(this, itemSelected.id)} title='comfirmar' />
        </View>
      </Modal>
      <View style={styles.container}>
        <TextInput 
          placeholder='Ingrese aqui'
          style={styles.input}
          value={textItem}
          onChangeText={onHandlerChangeItem}
        />
        <Button title='Add' style={styles.buttom} onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false}/>
      </View>
      <FlatList
        data={itemList}
        rederItem={data => (
          <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
            <Text>{data.item.value}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'Black',
    borderRadius: 10,
    marginTop: '10%',
    height: 50,
  },
  modalTitlle: {
    backgroundColor: '#ccc',
    color: 'white',
    fontSize: 18,
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtom: {
    marginTop: 15,
  },
  modalItem: {
    fontSize: 30,
  }
})