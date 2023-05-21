import React from 'react';
import { View, Text, Modal, Pressable, ImageBackground } from 'react-native';
import {styles} from './LoginModalStyleSheet'

export const LoginModal = (props) => {
  return (
    <>
      <Modal visible={props.modalVisible} animationType="slide"  style={styles.modal}>
        
          <View style={styles.imageView}>
            <ImageBackground style={styles.image} source={require('./../../../assets/logo.png')}>
            </ImageBackground>
          </View>

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


