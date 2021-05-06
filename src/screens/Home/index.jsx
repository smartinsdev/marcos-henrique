import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { globalCss } from "../../css";
import { useContact } from "../../contexts/contact";

const Home = () => {
  const { contact, setContact } = useContact();

  const handleRemoveItem = (id) => {
    console.log(id);
    setContact(contact.slice().filter((item) => item.id !== id));
  };

  if (!contact.length) {
    return (
      <View style={globalCss.container}>
        <Text>Nenhum contato</Text>
      </View>
    );
  }

  return (
    <View style={globalCss.container}>
      <FlatList
        data={contact}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemList}
            onLongPress={() => handleRemoveItem(item.id)}
          >
            {item.image && (
              <Image
                source={{ uri: item.image }}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
            )}
            <Text style={styles.textItem}>{item.name.toUpperCase()}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => "key" + index}
        style={{ width: "95%", marginVertical: 14 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  itemList: {
    width: "100%",
    padding: 16,
    marginTop: 4,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  textItem: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
});
