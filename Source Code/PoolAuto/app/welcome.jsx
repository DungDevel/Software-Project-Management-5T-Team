import { Image, StyleSheet, Text, View, Pressable  } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import {theme} from '../constants/theme'
import Button from '../components/Button'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style ="dark" />
      <View style = {styles.container}>
        <Image style={styles.logoImage} resizeMode='contain' source={require('../assets/images/LogoImage1.jpeg')} />
        {/* Title */}
        <View style = {{gap: 20}}>
          <Text style = {styles.title}>POOL AUTO</Text>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{marginHorizontal: wp(3)}}
            onPress={()=>router.push('signup')}
          />
          <View style = {styles.bottomTextComtainer}>
            <Text style = {[styles.loginText, {color: 'white'}]}>
              Already have an account !
            </Text>
            <Pressable onPress={()=>router.push('login')}>
              <Text style={[styles.loginText, {color: theme.colors.text, fontWeight: theme.fonts.semibold, textDecorationLine: 'underline'}]}>
                Login 
              </Text>
            </Pressable> 
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#052036',
    paddingHorizontal: wp(4),
  },
  logoImage:{
    height: hp(50),
    width: wp(100),
    alignItems: 'center',
    marginTop: hp(-10),
    marginBottom: hp(-10),
  },
  title:{
    color: theme.colors.text,
    fontSize: hp(6),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold
  },
  footer:{
    gap: 30,
    width: '100%'
  },
  bottomTextComtainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: -20,
  },
  loginText:{
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(2),
  }
})