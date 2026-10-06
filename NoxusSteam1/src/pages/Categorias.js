import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';

import { CATEGORIAS_DATA } from '../data/mockCategorias';
import { styles } from './Categorias.styles';

export default function Categorias({ navigation }) {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  function carregarCategorias() {
    setLoading(true);
    setTimeout(() => {
      setCategorias(CATEGORIAS_DATA);
      setLoading(false);
    }, 600);
  }

  useEffect(() => {
    carregarCategorias();
  }, []);

  function handleOpenModal(item) {
    setSelectedCategoria(item);
    setModalVisible(true);
  }

  return (
    <ImageBackground
      source={require('../../assets/FundoTelas.png')}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Barra Superior */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Image source={require('../../assets/Icone3Riscos.png')} style={styles.topIcon} />
        </TouchableOpacity>
        <View style={styles.brandGroup}>
          <Image source={require('../../assets/LogoMonstroPixelado.png')} style={styles.brandLogo} />
          <Text style={styles.brandText}>NOXUS STEAM</Text>
        </View>
        <View style={styles.topRightIcons}>
          <Image source={require('../../assets/IconeNotificacao.png')} style={styles.topIcon} />
          <Image source={require('../../assets/IconeCarrinho.png')} style={styles.topIcon} />
        </View>
      </View>

      {/* Campo de Busca */}
      <View style={styles.searchBar}>
        <Image source={require('../../assets/IconeLupa.png')} style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar categoria..."
          placeholderTextColor="#666"
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.sectionTitle}>CATEGORIAS</Text>

      {/* Lista Dinâmica com FlatList */}
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={carregarCategorias}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <View style={styles.loadingContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#FD02A8" />
            ) : (
              <Text style={styles.emptyText}>Nenhuma categoria encontrada.</Text>
            )}
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => handleOpenModal(item)}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              <Image source={item.icone} style={styles.categoryIcon} />
              <Text style={styles.categoryTitle}>{item.titulo}</Text>
            </View>
            <Text style={styles.categoryDescription}>{item.descricao}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal de Detalhes da Categoria */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedCategoria && (
              <>
                <Image source={selectedCategoria.icone} style={styles.modalIcon} />
                <Text style={styles.modalTitle}>{selectedCategoria.titulo}</Text>
                <Text style={styles.modalDescription}>{selectedCategoria.descricao}</Text>

                <TouchableOpacity
                  style={styles.modalBtn}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalBtnText}>FECHAR</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation?.navigate('Home')}>
          <Image source={require('../../assets/IconeHome.png')} style={styles.navIcon} />
          <Text style={styles.navText}>INÍCIO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation?.navigate('Categorias')}>
          <Image source={require('../../assets/IconeMaleta.png')} style={[styles.navIcon, { tintColor: '#FD02A8' }]} />
          <Text style={[styles.navText, { color: '#FD02A8' }]}>LOJA</Text>
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