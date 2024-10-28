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

const Login = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Login', "Please fill all the fields");
            return;
        }
    
        let email = emailRef.current.trim();
        let password = passwordRef.current.trim();
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
    
        setLoading(false);
    
        console.log('error: ', error);
        if (error) {
            Alert.alert('Login', error.message);
        }
    };

    return (
        <ScreenWrapper bg='white'>
            <StatusBar style="dark" />
            <View style={styles.container}>
                <BackButton router={router} />
                <View>
                    <Text style={styles.welcomeText}>Hey,</Text>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                </View>
                <View style={styles.form}>
                    <Text style={{ fontSize: hp(3), color: 'white' }}>
                        Please login to continue
                    </Text>
                    <Input
                        icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                        placeholder='Enter your mail'
                        onChangeText={value => emailRef.current = value}
                    />
                    <Input
                        icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                        placeholder='Enter your password'
                        secureTextEntry
                        onChangeText={value => passwordRef.current = value}
                    />
                    <Text style={styles.forgotPassword}>
                        Forgot Password?
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Button title={'LOGIN'} loading={loading} onPress={onSubmit} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Don't have an account?
                    </Text>
                    <Pressable onPress={()=>router.push('signup')}>
                        <Text style={[styles.footerText, { color: theme.colors.text, fontWeight: theme.fonts.semibold, textDecorationLine: 'underline' }]}>Sign up</Text>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Login

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
