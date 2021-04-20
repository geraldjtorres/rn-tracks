import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({ headertext, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <Spacer>
        <Text h3>{headertext}</Text>
      </Spacer>

      <Input
        label='Email'
        value={email}
        onChangeText={newEmail => setEmail(newEmail)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label='Password'
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
        autoCapitalize='none'
        autoCorrect={false}
      />

      {errorMessage ? (
        <Text style={styles.errorMsg}>{errorMessage}</Text>
      ) : null}

      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  )
}

export default AuthForm

const styles = StyleSheet.create({
  errorMsg: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15
  }
})
