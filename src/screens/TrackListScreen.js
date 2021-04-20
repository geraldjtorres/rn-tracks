import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const TrackListSCreen = ({ navigation }) => {
  return (
    <>
      <Text>TrackListSCreen</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  )
}

export default TrackListSCreen

const styles = StyleSheet.create({})
