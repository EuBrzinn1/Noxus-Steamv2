import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 45, paddingBottom: 15 },
  topIcon: { width: 18, height: 18, tintColor: '#FFF' },
  brandGroup: { alignItems: 'center' },
  brandLogo: { width: 22, height: 22 },
  brandText: { color: '#FD02A8', fontSize: 10, fontWeight: 'bold' },
  topRightIcons: { flexDirection: 'row', gap: 15 },
  searchBar: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#FD02A8', borderRadius: 8, paddingHorizontal: 12, height: 40, marginHorizontal: 20, marginVertical: 10, backgroundColor: 'rgba(0,0,0,0.6)' },
  searchIcon: { width: 14, height: 14, tintColor: '#666', marginRight: 10 },
  searchInput: { flex: 1, color: '#FFF', fontSize: 11 },
  sectionTitle: { color: '#FFF', fontSize: 14, fontWeight: 'bold', marginHorizontal: 20, marginVertical: 10 },
  listContent: { paddingHorizontal: 20, paddingBottom: 80 },
  loadingContainer: { padding: 40, alignItems: 'center' },
  emptyText: { color: '#888', fontSize: 12 },
  categoryCard: { borderWidth: 1, borderColor: '#FD02A8', borderRadius: 8, padding: 14, marginBottom: 12, backgroundColor: 'rgba(0, 0, 0, 0.7)' },
  iconContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  categoryIcon: { width: 28, height: 28, resizeMode: 'contain', marginRight: 10 },
  categoryTitle: { color: '#FFF', fontSize: 13, fontWeight: 'bold' },
  categoryDescription: { color: '#AAA', fontSize: 11, lineHeight: 16 },

  /* Modal Styles */
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.85)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalContent: { width: '85%', backgroundColor: '#0F0919', borderWidth: 1, borderColor: '#FD02A8', borderRadius: 12, padding: 20, alignItems: 'center' },
  modalIcon: { width: 50, height: 50, resizeMode: 'contain', marginBottom: 12 },
  modalTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  modalDescription: { color: '#CCC', fontSize: 12, textAlign: 'center', marginBottom: 20 },
  modalBtn: { backgroundColor: '#FD02A8', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 6 },
  modalBtnText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },

  /* Bottom Nav */
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60, backgroundColor: '#050505', borderTopWidth: 1, borderTopColor: '#222', position: 'absolute', bottom: 0, left: 0, right: 0 },
  navItem: { alignItems: 'center' },
  navIcon: { width: 18, height: 18, tintColor: '#666' },
  navText: { color: '#666', fontSize: 8, marginTop: 4 },
});