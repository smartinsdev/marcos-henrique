import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, CreateContact } from "./src/screens";
import { ButtonHeader } from "./src/components/ButtonHeader";
import ContactProvider from "./src/contexts/contact";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ContactProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Contacts"
            component={Home}
            options={({ navigation }) => ({
              headerRight: () => (
                <ButtonHeader
                  onPress={() => navigation.navigate("Create Contact")}
                  nameIcon="add-outline"
                  size={24}
                  screen="Create Contact"
                />
              ),
            })}
          />
          <Stack.Screen
            name="Create Contact"
            component={CreateContact}
            options={({ navigation }) => ({
              headerBackTitleVisible: false,
              headerLeft: () => (
                <ButtonHeader
                  onPress={() => navigation.navigate("Contacts")}
                  nameIcon="chevron-back-outline"
                  size={24}
                  screen="Contacts"
                />
              ),
            })}
          />
        </Stack.Navigator>
      </ContactProvider>
    </NavigationContainer>
  );
}
