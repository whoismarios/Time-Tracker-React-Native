import React from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';

export const LoginModal = (props) => {
  return (
    <>
      <Modal visible={props.modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Please login to continue</Text>
            <Pressable style={styles.button} onPress={props.handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
