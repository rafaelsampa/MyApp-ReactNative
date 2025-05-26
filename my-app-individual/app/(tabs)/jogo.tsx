import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';

function gerarSenha() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export default function JogoScreen() {
  const [senha, setSenha] = useState(gerarSenha());
  const [tentativa, setTentativa] = useState('');
  const [tentativas, setTentativas] = useState<string[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(10);
  const [acabou, setAcabou] = useState(false);

  function verificarTentativa() {
    if (tentativa.length !== 4 || isNaN(Number(tentativa))) {
      Alert.alert('Digite um número de 4 dígitos!');
      return;
    }
    if (tentativas.includes(tentativa)) {
      Alert.alert('Você já tentou esse número!');
      return;
    }
    let corretos = 0, posicao = 0;
    for (let i = 0; i < 4; i++) {
      if (senha.includes(tentativa[i])) corretos++;
      if (tentativa[i] === senha[i]) posicao++;
    }
    const resultado = `Tentativa: ${tentativa} - ${corretos} corretos, ${posicao} na posição`;
    setTentativas([resultado, ...tentativas]);
    setTentativasRestantes(tentativasRestantes - 1);
    if (tentativa === senha) {
      setAcabou(true);
      Alert.alert('Parabéns!', `Você acertou a senha: ${senha}`);
    } else if (tentativasRestantes - 1 === 0) {
      setAcabou(true);
      Alert.alert('Game Over', `A senha era: ${senha}`);
    }
    setTentativa('');
  }

  function resetarJogo() {
    setSenha(gerarSenha());
    setTentativas([]);
    setTentativasRestantes(10);
    setAcabou(false);
    setTentativa('');
  }

  function mostrarSenha() {
    Alert.alert('Senha', senha);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Senha</Text>
      <Text style={styles.instructions}>
        Tente adivinhar a senha de 4 dígitos! Você tem {tentativasRestantes} tentativas.
      </Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={tentativa}
          onChangeText={setTentativa}
          keyboardType="number-pad"
          maxLength={4}
          editable={!acabou}
          placeholder="Digite sua tentativa"
        />
        <Button title="Tentar" onPress={verificarTentativa} disabled={acabou} />
        <Button title="Desistir" onPress={resetarJogo} color="#e74c3c" />
      </View>
      <Button title="Mostrar Senha" onPress={mostrarSenha} color="#888" />
      <FlatList
        data={tentativas}
        renderItem={({ item }) => <Text style={styles.history}>{item}</Text>}
        keyExtractor={(_, idx) => idx.toString()}
        style={styles.historyList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  instructions: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 8, width: 100, marginRight: 8, fontSize: 18, backgroundColor: '#fff' },
  historyList: { width: '100%', marginTop: 10 },
  history: { fontSize: 16, padding: 4, borderBottomWidth: 1, borderBottomColor: '#eee' },
});
