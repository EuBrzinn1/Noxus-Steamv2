import React from 'react';
import { View, Text, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './Home.styles';

export default function Home({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/FundoTelas.png')} style={styles.container} resizeMode="cover">
      <View style={styles.topBar}>
        <Image source={require('../../assets/Icone3Riscos.png')} style={styles.topIcon} />
        <View style={styles.brandGroup}>
          <Image source={require('../../assets/LogoMonstroPixelado.png')} style={styles.brandLogo} />
          <Text style={styles.brandText}>NOXUS STEAM</Text>
        </View>
        <View style={styles.topRightIcons}>
          <Image source={require('../../assets/IconeNotificacao.png')} style={styles.topIcon} />
          <Image source={require('../../assets/IconeCarrinho.png')} style={styles.topIcon} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.searchBar}>
          <Image source={require('../../assets/IconeLupa.png')} style={styles.searchIcon} />
          <TextInput placeholder="Buscar jogos, DLCs, acessórios..." placeholderTextColor="#666" style={styles.searchInput} />
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerTag}>PROMOÇÃO DE INVERNO</Text>
          <Text style={styles.bannerTitle}>ATÉ 70% OFF</Text>
          <TouchableOpacity style={styles.bannerBtn}>
            <Text style={styles.bannerBtnText}>VER OFERTAS</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>DESTAQUES</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.gameCard}>
            <View style={styles.gameImagePlaceholder} />
            <Text style={styles.gameTitle}>SALLY FACE</Text>
            <Text style={styles.gamePrice}>R$ 48,98</Text>
          </View>
          <View style={styles.gameCard}>
            <View style={styles.gameImagePlaceholder} />
            <Text style={styles.gameTitle}>FRANBOW</Text>
            <Text style={styles.gamePrice}>R$ 27,99</Text>
          </View>
          <View style={styles.gameCard}>
            <View style={styles.gameImagePlaceholder} />
            <Text style={styles.gameTitle}>CUPHEAD</Text>
            <Text style={styles.gamePrice}>R$ 36,99</Text>
          </View>
        </ScrollView>

        <Text style={styles.sectionTitle}>CATEGORIAS</Text>
        <View style={styles.categoriesGrid}>
          <TouchableOpacity style={styles.categoryCard}>
            <Image source={require('../../assets/CategoriaEspada.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>AÇÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image source={require('../../assets/CategoriaCaveira.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>TERROR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image source={require('../../assets/CategoriaEstrela.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>INDIE</Text>
          </TouchableOpacity>
          {/* Ação do Botão MAIS chamando a 5ª tela */}
          <TouchableOpacity 
            style={styles.categoryCard} 
            onPress={() => navigation?.navigate('Categorias')}
            activeOpacity={0.7}
          >
            <Image source={require('../../assets/CategoriaMais.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>MAIS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation?.navigate('Home')}>
          <Image source={require('../../assets/IconeHome.png')} style={[styles.navIcon, { tintColor: '#FD02A8' }]} />
          <Text style={[styles.navText, { color: '#FD02A8' }]}>INÍCIO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation?.navigate('Categorias')}>
          <Image source={require('../../assets/IconeMaleta.png')} style={styles.navIcon} />
          <Text style={styles.navText}>LOJA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/IconeEmail.png')} style={styles.navIcon} />
          <Text style={styles.navText}>BIBLIOTECA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/IconePessoas.png')} style={styles.navIcon} />
          <Text style={styles.navText}>COMUNIDADE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/IconeUsuario.png')} style={styles.navIcon} />
          <Text style={styles.navText}>PERFIL</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}