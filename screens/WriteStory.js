import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase';
import db from '../config';

export default class WriteStory extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      story: '',
    };
  }
  submitStory = async () => {
    await db.collection('story').add({
      title: this.state.title,
      author: this.state.author,
      story: this.state.story,
    });
    ToastAndroid.show('Story Saved To The Database', ToastAndroid.SHORT);
  };
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        />
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          Bedtime Stories
        </Text>
        <TextInput
          style={styles.title}
          placeholder="Add the story title here"
          onChangeText={(title) => {
            this.setState({ title: title });
          }}
          value={this.state.title}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.title}
            placeholder="Name of the auther here"
            onChangeText={(author) => {
              this.setState({ author: author });
            }}
            value={this.state.author}
          />
        </View>

        <TextInput
          style={styles.inputBox}
          placeholder="Start writing your story here"
          onChangeText={(story) => {
            this.setState({ story: story });
          }}
          value={this.state.story}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={async () => {
            this.submitStory();
            this.setState({
              story: '',
            });
          }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    height: 350,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 20,
    textAlign: ' center',
  },
  submitButton: {
    backgroundColor: '#FBC02D',
    width: 100,
    height: 50,
  },
  submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    width: 300,
    height: 30,
    borderWidth: 1.5,
     textAlign: ' center',
    fontSize: 20,
  },
  inputView: {
    flexDirection: 'row',
    margin: 10,
  },
});
