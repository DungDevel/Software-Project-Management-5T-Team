import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import ArrowLeft from './ArrowLeft'
import Mail from './Mail'
import Phone from './Phone'
import Lock from './Lock'
import User from './User'
import { theme } from '../../constants/theme'


const icons = {
    home: Home,
    arrowLeft: ArrowLeft,
    mail: Mail,
    phone: Phone,
    lock: Lock,
    user: User
}

const Icon = ({name, ...props}) => {
    const IconCompoment = icons[name];
  return (
    <IconCompoment
        height={props.size || 24}
        width={props.size || 24}
        strokeWidth={props.strokeWidth || 1.9}
        color={theme.colors.primary}
        {...props}
    />
  )
}

export default Icon

const styles = StyleSheet.create({})