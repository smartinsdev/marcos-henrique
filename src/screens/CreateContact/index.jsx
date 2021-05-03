import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  Button,
} from "react-native";
import { globalCss } from "../../css";
import { useContact } from "../../contexts/contact";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

const CreateContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [id, setId] = useState(0);

  const { setContact } = useContact();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const saveContact = () => {
    setId(id + 1);
    setContact((currentState) => [...currentState, { id, name, phone, image }]);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={globalCss.container}>
      <ScrollView style={{ width: "100%" }}>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.containerImage}>
            <Ionicons name="add-outline" size={32} />
          </View>
        </TouchableOpacity>
        <Text style={{ alignSelf: "center" }}>Adicionar uma foto</Text>
        <TextInput
          style={globalCss.input}
          placeholder="Nome"
          onChangeText={(text) => setName(text)} // essa prop significa q cada letra que eu digito atualiza o estado name
          value={name}
        />

        <TextInput
          style={globalCss.input}
          placeholder="Telefone"
          keyboardType={"numeric"} // essa prop significa que quero apenas numeros no teclado
          onChangeText={(phone) => setPhone(phone)}
          value={phone}
        />

        <TouchableOpacity style={styles.button} onPress={saveContact}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateContact;

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: "95%",
    margin: 12,
    backgroundColor: "#6200EE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  containerImage: {
    width: 100,
    height: 100,
    backgroundColor: "#cecece",
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
