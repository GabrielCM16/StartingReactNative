import React, { Component } from 'react';
import { Text, TextInput, View, Button, Alert, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', senha: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxEmail}>
          <View style={styles.iconContainer}>
            <Icon name="envelope" size={20} color="black" />
          </View>
          <TextInput
            style={styles.inputEmail}
            placeholder="Seu Email"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
          <Text style={styles.textEmail}>
            {ValidateEmail(this.state.email)}
          </Text>
        </View>
        <View style={styles.boxEmail}>
          <View style={styles.iconContainer}>
            <Icon name="key" size={20} color="black" />
          </View>
          <TextInput
            style={styles.inputEmail}
            placeholder="Senha"
            onChangeText={(senha) => this.setState({ senha })}
            value={this.state.senha}

          />
        </View>
        <View>
          <Pressable
            style={styles.pressed}

            onPress={() => 
              senhaAndEmail(this.state.senha, this.state.email)}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </View>

      </View>
    );
  }
}

function senhaAndEmail(senha, email) {
  console.log("senha ", senha, " email ", email);
}

function ValidateEmail(email) {
  if (email.includes(".com") && email.includes("@") || !email) {
    return "";
  } else {
    return "Email Invalido";
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    backgroundColor: '#ddd',
  },
  boxEmail: {
    alignItems: 'left',
    justifyContent: 'left',
  },
  textEmail: {
    padding: '10px',
    fontSize: '15px',
  },
  inputEmail: {
    width: '250px',
    height: '40px',
    borderWidth: '1px',
    paddingLeft: '40px',
    borderColor: 'black',
    borderRadius: "5px",
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});

