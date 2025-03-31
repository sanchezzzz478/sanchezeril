import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    alert(`Teléfono actualizado: ${phone}`);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/erik.jpg')} style={styles.profilePic} />
      <Text style={styles.name}>Sánchez Erik</Text>
      <Text style={styles.email}>erik@example.com</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Actualizar teléfono"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      
      <Button title="Guardar cambios" onPress={handleSave} color="#6a0dad" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3e5f5',
    padding: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
  },
  email: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#6a0dad',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default ProfileScreen;
