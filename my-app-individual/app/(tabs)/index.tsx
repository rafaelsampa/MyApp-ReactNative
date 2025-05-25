
import { View, Text, StyleSheet } from 'react-native';


export default function HomeScreen() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bem-vindo ao meu Portfólio</Text>
      <Text style={styles.text}>
        Use a barra inferior para navegar entre as telas: Sobre, Currículo e Jogo da Senha.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, textAlign: 'center' },

});


