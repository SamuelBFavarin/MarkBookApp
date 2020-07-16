import { Ionicons } from '@expo/vector-icons';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  SectionList
} from "react-native";
import Constants from "expo-constants";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
      />
    </SafeAreaView>
  );
}

const DATA = [
  {
    data: ["Clean Code", "Data Science from Zero", "How do friends and influence people", "Arquitetura limpa", "Padrões de Projetos em Python", "Php o guia definitivo"]
  }
];

const Item = ({ title }) => (

  <TouchableOpacity >
    <View style={styles.item}>
      <Ionicons size={20} style={styles.icon} name="ios-bookmark" />
      <Text style={styles.title}>{title}</Text>
    </View>

  </TouchableOpacity>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row"
  },

  title: {
    fontSize: 16,
    color: "#3b3a39"
  },
  icon: {
    marginHorizontal: 8,
    color: 'red'
  }

});
