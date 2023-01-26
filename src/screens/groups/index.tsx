import { StyleSheet, Text, View } from 'react-native';
import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Text style={styles.texto}>Groups text</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#000'
  }
});
