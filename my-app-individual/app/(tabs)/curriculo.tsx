

import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';


export default function CurriculoScreen() 
{
  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>Currículo</Text>
      <Text style={styles.sectionTitle}>Projetos</Text>

      <View style={styles.projectCard}>
        <Image
          source={require('../../assets/images/egg.jpeg')}
          style={styles.projectImage}
        />

        <Text style={styles.projectTitle}>Projeto Robótica</Text>
        <Text style={styles.text}>
          Recentemente eu e minha parceira Tarsila Amado concluímos um projeto da cadeira de Robótica Inclusiva, com a orientação do professor Wilmer yecid Cordoba. Nesse projeto construímos um vaso autoirrigável, a ideia surgiu para ajudar pessoas com rotinas mais corridas e também idosos a cuidarem de plantas sem dificuldades. O sistema usa um sensor de umidade para acionar a irrigação automaticamente, adaptando-se às necessidades das plantas.
        </Text>

        <Text style={styles.text}>
          Aprendi que tecnologia pode ser simples, mas eficaz. A interface permite que o usuário escolha a frequência de irrigação, e o design do vaso é super prático, com uma parte superior que abre para ajustes e manutenções. Por isso, chamamos carinhosamente o robô de "Egg" — pela semelhança com um ovo quebrado.
        </Text>

        <Text style={styles.text}>
          Fico feliz com o resultado e com tudo que aprendi nesse processo. E quem sabe, futuramente, podemos adicionar ainda mais funcionalidades e tornar o projeto ainda mais acessível!
        </Text>

        <Text style={styles.techs}>C++ | Arduino UNO | Robótica</Text>
      </View>
      <View style={styles.projectCard}>
        <Image
          source={require('../../assets/images/eviroquest-team.jpeg')}
          style={styles.projectImage}
        />

        <Text style={styles.projectTitle}>Hackathon NASA</Text>
        <Text style={styles.text}>
          Nosso desafio do NASA Space Apps foi trazer os dados e descobertas incríveis do satélite PACE para dentro de salas de aula. Por isso criamos o EnviroQuest, uma plataforma divertida e educativa para crianças aprenderem sobre esses temas enquanto resolvem mistérios!
        </Text>

        <Text style={styles.techs}>Python | Figma | Data Visualization</Text>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },

  projectCard: { backgroundColor: '#fff', borderRadius: 10, padding: 16, marginBottom: 20, elevation: 2 },
  projectImage: { width: '100%', height: 180, borderRadius: 8, marginBottom: 10 },
  projectTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  
  text: { fontSize: 15, marginBottom: 6, textAlign: 'justify' },
  techs: { fontSize: 14, color: '#007AFF', fontWeight: 'bold', marginTop: 4 },

});



