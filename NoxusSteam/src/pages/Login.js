import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../assets/FundoTelas.png')} style={styles.container} resizeMode="cover">
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={require('../../assets/LogoMonstroPixelado.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.headerTitle}>NOXUS</Text>
          <Text style={styles.headerSubtitle}>STEAM</Text>
        </View>

        <Text style={styles.title}>ENTRAR NA <Text style={styles.titleHighlight}>SUA CONTA</Text></Text>
        <Text style={styles.subtitle}>Acesse para gerenciar seus jogos,{'\n'}pedidos e muito mais.</Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/IconeUsuario.png')} style={styles.inputIcon} />
            <TextInput placeholder="E-MAIL OU NOME DE USUÁRIO" placeholderTextColor="#666" style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Image source={require('../../assets/IconeCadeado.png')} style={styles.inputIcon} />
            <TextInput placeholder="SENHA" placeholderTextColor="#666" style={styles.input} secureTextEntry />
          </View>

          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxChecked}>
              <Image source={require('../../assets/IconeCorreto.png')} style={styles.checkIcon} />
            </View>
            <Text style={styles.checkboxText}>Lembrar de mim</Text>
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnLoginText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotLink}>
            <Text style={styles.forgotText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OU</Text>
            <View style={styles.dividerLine} />
          </View>

          <Text style={styles.socialTitle}>LOGIN SOCIAL</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.btnSocial}>
              <Image source={require('../../assets/LogoSteam.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSocial}>
              <Image source={require('../../assets/LogoGoogle.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSocial}>
              <Image source={require('../../assets/LogoDiscord.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Não tem uma conta? <Text style={styles.registerTextHighlight}>Cadastre-se</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  content: { flex: 1, paddingHorizontal: 25, paddingVertical: 50, justifyContent: 'center', alignItems: 'center' },
  header: { alignItems: 'center', marginBottom: 20 },
  logo: { width: 35, height: 35 },
  headerTitle: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  headerSubtitle: { color: '#FD02A8', fontSize: 8, fontWeight: 'bold' },
  title: { color: '#FFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  titleHighlight: { color: '#FD02A8' },
  subtitle: { color: '#888', fontSize: 11, textAlign: 'center', marginTop: 6, marginBottom: 25 },
  form: { width: '100%' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#FD02A8', borderRadius: 8, paddingHorizontal: 15, height: 48, marginBottom: 15, backgroundColor: 'rgba(0,0,0,0.6)' },
  inputIcon: { width: 16, height: 16, tintColor: '#FFF', marginRight: 12 },
  input: { flex: 1, color: '#FFF', fontSize: 11 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkboxChecked: { width: 16, height: 16, backgroundColor: '#5555FF', borderRadius: 4, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  checkIcon: { width: 10, height: 10, tintColor: '#FFF' },
  checkboxText: { color: '#AAA', fontSize: 11 },
  btnLogin: { backgroundColor: '#FD02A8', height: 48, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  btnLoginText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
  forgotLink: { alignItems: 'center', marginBottom: 20 },
  forgotText: { color: '#FD02A8', fontSize: 11 },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#333' },
  dividerText: { color: '#666', paddingHorizontal: 10, fontSize: 11 },
  socialTitle: { color: '#888', fontSize: 10, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  socialButtons: { flexDirection: 'row', justifyContent: 'center', gap: 15, marginBottom: 25 },
  btnSocial: { width: 50, height: 50, borderWidth: 1, borderColor: '#FD02A8', borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' },
  socialIcon: { width: 22, height: 22, resizeMode: 'contain' },
  registerLink: { alignItems: 'center' },
  registerText: { color: '#888', fontSize: 12 },
  registerTextHighlight: { color: '#FD02A8', fontWeight: 'bold' },
});