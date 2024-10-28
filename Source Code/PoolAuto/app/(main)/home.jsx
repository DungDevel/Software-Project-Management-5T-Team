import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'

const home = () => {
    const {user, setAuth } = useAuth();

    console.log('user: ', user);

    const onLogout = async ()=>{
      const {error} = await supabase.auth.signOut();
      if(error){
        Alert.alert('Sign out', "Error signing out")
      }
    }
  return (
    <ScreenWrapper>
      <Text>home</Text>
      <Button title="Logout" onPress={onLogout}/>
    </ScreenWrapper>
  )
}

export default home

const styles = StyleSheet.create({})