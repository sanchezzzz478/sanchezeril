import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

// Componente personalizado para la tarjeta del perfil del usuario
const UserProfileCard = ({ name, email, profileImage }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

const App = () => {
  const [phone, setPhone] = useState('');

  const handleSaveChanges = () => {
    alert(`Número de teléfono actualizado: ${phone}`);
  };

  return (
    <View style={styles.container}>
      <UserProfileCard
        name="Juan Pérez"
        email="juan.perez@ecoexpress.com"
        profileImage="https://via.placeholder.com/150"
      />
      <Text style={styles.label}>Número de teléfono:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu número de teléfono"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Guardar cambios" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;