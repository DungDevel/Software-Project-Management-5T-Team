import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import Input from '../components/Input'
import Button from '../components/Button'
import { supabase } from '../lib/supabase'

const SignUp = () => {
    const router = useRouter();
    const nameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Login', "Please fill all the fields");
            return;
        }

        let name = nameRef.current.trim();
        let email = emailRef.current.trim();
        let phone = phoneRef.current.trim();
        let password = passwordRef.current.trim();

        setLoading(true);
        const {data: {session}, error} = await supabase.auth.signUp({
            email,
            phone,
            password,
            options:{
                data:{
                    name
                }
            }
        });
        setLoading(false);

        console.log('session: ', session);
        console.log('error: ', error);

        if(error){
            Alert.alert('Sign up', error.message)
        }
    }

    return (
        <ScreenWrapper bg='white'>
            <StatusBar style="dark" />
            <View style={styles.container}>
                <BackButton router={router} />
                <View>
                    <Text style={styles.welcomeText}>Let's</Text>
                    <Text style={styles.welcomeText}>Get Started</Text>
                </View>
                <View style={styles.form}>
                    <Text style={{ fontSize: hp(2.4), color: 'white' }}>
                        Please fill the details to create an account
                    </Text>
                    <Input
                        icon={<Icon name="user" size={26} strokeWidth={1.6} />}
                        placeholder='Enter your name account'
                        onChangeText={value => nameRef.current = value}
                    />
                    <Input
                        icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                        placeholder='Enter your email'
                        onChangeText={value => emailRef.current = value}
                    />
                    <Input
                        icon={<Icon name="phone" size={26} strokeWidth={1.6} />}
                        placeholder='Enter your phone number'
                        keyboardType='numeric'
                        onChangeText={value => phoneRef.current = value}
                    />
                    <Input
                        icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                        placeholder='Enter your password'
                        secureTextEntry
                        onChangeText={value => passwordRef.current = value}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title={'Sign Up'} loading={loading} onPress={onSubmit} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Already have an account!
                    </Text>
                    <Pressable onPress={()=>router.push('login')}>
                        <Text style={[styles.footerText, { color: theme.colors.text, fontWeight: theme.fonts.semibold, textDecorationLine: 'underline' }]}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#052036',
        gap: 45,
        paddingHorizontal: wp(4),
    },
    welcomeText: {
        fontSize: hp(6),
        fontWeight: theme.fonts.semibold,
        color: 'white'
    },
    form: {
        gap: 20,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: theme.fonts.semibold,
        color: 'white'
    },
    buttonContainer: {
        marginTop: -30,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginTop: -35,
    },
    footerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: hp(2)
    },
})
