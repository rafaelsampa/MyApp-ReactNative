


import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';

export default function SobreScreen() {
  
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.text}>
        Sou estudante de Ciência da Computação. Me interesso profundamente por áreas como astroinformática e sistemas embarcados, onde posso unir lógica, hardware e inovação para resolver problemas do mundo real (ou até fora dele!).{'\n\n'}
        Já participei de projetos diversos, desde desafios da NASA até sistemas inteligentes com Arduino, sempre buscando aplicar meu conhecimento de forma criativa e funcional. Levo comigo o desejo constante de aprender e me desafiar.{'\n\n'}
        Além da tecnologia, tive a chance de fazer um intercâmbio na França — uma experiência incrível que me fez aprender francês, fazer amizades e expandir meus horizontes. No tempo livre, sou fã de RPG, um hobby que alimenta minha criatividade e meu gosto por narrativas e estratégia. Gosto de equilibrar teoria e prática, estudo e diversão, e acredito que são essas vivências que definem meu jeito de pensar e construir projetos.
      </Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/sem-contexto.jpeg')}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://github.com/rafaelsampa')}
        >
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/rafael-in-a-nutshell/')}
        >
          <Text style={styles.link}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://instagram.com/_rafaelsampa')}
        >
          <Text style={styles.link}>Instagram</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 20, textAlign: 'justify' },
  imageContainer: { alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 250, height: 180, borderRadius: 10, resizeMode: 'cover' },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 30,
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  link: {
    color: '#007AFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
