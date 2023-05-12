import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export function Login() {
  return (
    <LinearGradient colors={["#0E1647", "#0A1033"]} className="flex-1 py-12">
      <Image
        source={require("../assets/fighter.png")}
        contentFit="contain"
        className="flex-1"
      />

      <View className="mb-4">
        <Text className="font-heading text-5xl text-heading text-center">
          Conecte-se
        </Text>
        <Text className="font-heading text-5xl text-heading text-center">
          e organize suas jogatinas
        </Text>
      </View>
      <Text className="text-heading text-base font-body text-center px-16">
        Crie grupos para jogar seus games favoritos com seus amigos
      </Text>

      <TouchableOpacity
        className="bg-[#E51C44] mt-12 mx-12 rounded-lg flex-row items-center"
        activeOpacity={0.7}
      >
        <View className="border-r border-r-[#991F36] w-14 h-14 p-4">
          <Image
            source={require("../assets/discord-logo.png")}
            contentFit="contain"
            className="flex-1"
          />
        </View>
        <Text className="text-heading font-body text-center text-lg flex-1">
          Entrar com Discord
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
