import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../assets/FundoTelas.png')} style={styles.container} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={require('../../assets/LogoMonstroPixelado.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.headerTitle}>NOXUS</Text>
          <Text style={styles.headerSubtitle}>STEAM</Text>
        </View>

        <Text style={styles.title}>CRIAR <Text style={styles.titleHighlight}>NOVA CONTA</Text></Text>
        <Text style={styles.subtitle}>Junte-se à comunidade Noxus Steam{'\n'}e receba ofertas exclusivas!</Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/IconeUsuario.png')} style={styles.inputIcon} />
            <TextInput placeholder="NOME COMPLETO" placeholderTextColor="#666" style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Image source={require('../../assets/IconeEmail.png')} style={styles.inputIcon} />
            <TextInput placeholder="E-MAIL" placeholderTextColor="#666" style={styles.input} keyboardType="email-address" />
          </View>

          <View style={styles.inputContainer}>
            <Image source={require('../../assets/IconeCadeado.png')} style={styles.inputIcon} />
            <TextInput placeholder="SENHA" placeholderTextColor="#666" style={styles.input} secureTextEntry />
          </View>

          <View style={styles.inputContainer}>
            <Image source={require('../../assets/IconeCadeado.png')} style={styles.inputIcon} />
            <TextInput placeholder="CONFIRMAR SENHA" placeholderTextColor="#666" style={styles.input} secureTextEntry />
          </View>

          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxChecked}>
              <Image source={require('../../assets/IconeCorreto.png')} style={styles.checkIcon} />
            </View>
            <Text style={styles.checkboxText}>Quero receber novidades e ofertas</Text>
          </View>

          <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnRegisterText}>CADASTRAR</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OU</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={styles.btnGoogle}>
            <Image source={require('../../assets/LogoGoogle.png')} style={styles.googleIcon} />
            <Text style={styles.btnGoogleText}>ENTRAR COM GOOGLE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Já tem uma conta? <Text style={styles.loginTextHighlight}>Entrar</Text></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollContent: { paddingHorizontal: 25, paddingVertical: 40, alignItems: 'center' },
  header: { alignItems: 'center', marginBottom: 15 },
  logo: { width: 35, height: 35 },
  headerTitle: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  headerSubtitle: { color: '#FD02A8', fontSize: 8, fontWeight: 'bold' },
  title: { color: '#FFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
  titleHighlight: { color: '#FD02A8' },
  subtitle: { color: '#888', fontSize: 11, textAlign: 'center', marginTop: 6, marginBottom: 20 },
  form: { width: '100%' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#FD02A8', borderRadius: 8, paddingHorizontal: 15, height: 48, marginBottom: 12, backgroundColor: 'rgba(0,0,0,0.6)' },
  inputIcon: { width: 16, height: 16, tintColor: '#FFF', marginRight: 12 },
  input: { flex: 1, color: '#FFF', fontSize: 11 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  checkboxChecked: { width: 16, height: 16, backgroundColor: '#5555FF', borderRadius: 4, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  checkIcon: { width: 10, height: 10, tintColor: '#FFF' },
  checkboxText: { color: '#AAA', fontSize: 11 },
  btnRegister: { backgroundColor: '#FD02A8', height: 48, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  btnRegisterText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#333' },
  dividerText: { color: '#666', paddingHorizontal: 10, fontSize: 11 },
  btnGoogle: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#333', borderRadius: 8, height: 48, backgroundColor: 'rgba(0,0,0,0.8)', marginBottom: 15 },
  googleIcon: { width: 18, height: 18, marginRight: 10 },
  btnGoogleText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  loginLink: { alignItems: 'center' },
  loginText: { color: '#888', fontSize: 12 },
  loginTextHighlight: { color: '#FD02A8', fontWeight: 'bold' },
});