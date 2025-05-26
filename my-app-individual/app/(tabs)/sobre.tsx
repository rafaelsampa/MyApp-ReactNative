import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function SobreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>
        Esta aplicação foi desenvolvida utilizando React Native com Expo Router, aproveitando navegação por abas e pilha, componentes funcionais, e integração com EAS para deploy e preview. O layout utiliza componentes customizados e estilização via StyleSheet, além de imagens locais e links para redes sociais.
        {'\n\n'}
        O projeto inclui:
        {'\n'}- Estrutura modular de telas (Home, Currículo, Jogo da Senha, Experiência, Sobre)
        {'\n'}- Jogo da Senha implementado em React Native
        {'\n'}- Deploy via EAS Preview para fácil compartilhamento
        {'\n'}- Código organizado para facilitar manutenção e expansão
        {'\n\n'}
        
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 20, textAlign: 'justify' },
});
