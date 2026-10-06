import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../assets/FundoBemVindo.png')} style={styles.container} resizeMode="cover">
      <View style={styles.header}>
        <Image source={require('../../assets/LogoMonstroPixelado.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>NOXUS</Text>
        <Text style={styles.subtitle}>STEAM</Text>
        <View style={styles.textGroup}>
          <Text style={styles.description}>SEU UNIVERSO DE JOGOS.</Text>
          <Text style={styles.descriptionHighlight}>SEM LIMITES!</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.navigate('Register')}>
          <View style={styles.btnContent}>
            <Text style={styles.btnPrimaryText}>CRIAR CONTA</Text>
            <Image source={require('../../assets/IconeSetaDireita.png')} style={styles.iconArrow} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnSecondaryText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnGuest} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.guestText}>EXPLORAR COMO CONVIDADO</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between' },
  header: { alignItems: 'center', marginTop: 80 },
  logo: { width: 60, height: 60, marginBottom: 10 },
  title: { color: '#FFF', fontSize: 36, fontWeight: 'bold', letterSpacing: 2 },
  subtitle: { color: '#FD02A8', fontSize: 22, fontWeight: 'bold', letterSpacing: 4 },
  textGroup: { alignItems: 'center', marginTop: 25 },
  description: { color: '#A0A0A0', fontSize: 12 },
  descriptionHighlight: { color: '#FD02A8', fontSize: 12, fontWeight: 'bold', marginTop: 4 },
  footer: { paddingHorizontal: 30, paddingBottom: 40 },
  btnPrimary: { backgroundColor: '#FD02A8', height: 50, borderRadius: 8, justifyContent: 'center', marginBottom: 12 },
  btnContent: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 },
  btnPrimaryText: { color: '#FFF', fontSize: 14, fontWeight: 'bold', flex: 1, textAlign: 'center' },
  iconArrow: { width: 14, height: 14, tintColor: '#FFF' },
  btnSecondary: { backgroundColor: 'transparent', height: 50, borderRadius: 8, borderWidth: 1, borderColor: '#FD02A8', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  btnSecondaryText: { color: '#FFF', fontSize: 14, fontWeight: 'bold' },
  btnGuest: { alignItems: 'center' },
  guestText: { color: '#BADD7F', fontSize: 12, fontWeight: 'bold', textDecorationLine: 'underline' }
});