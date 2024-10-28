import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'
import { theme } from '../constants/theme'
import { router } from 'expo-router'

const BackButton = ({size=40, router}) => {
  return (
    <Pressable onPress={()=>router.back()} style={styles.button}>
      <Icon name="arrowLeft" strokeWidth={2} size={size} color='white' />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  button:{
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: theme.radius.sm,
  }
})