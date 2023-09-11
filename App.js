import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [img, setImg] = useState(require("../biscoito_da_sorte/assets/biscoitoaberto-removebg-preview.png"));
  const [textFrase, setTextFrase] = useState("");

  let frases = [
    "O caminho é longo, mas a derrota é certa.",
    "É só uma fase ruim, logo vai piorar.",
    "Pare de desejar e comece a desistir.",
    "Seja o protagonista do seu fracasso.",
    "Seu maior problema é você.",
    "Acreditar que você pode já é meio caminho errado.",
    "Nada é em vão. Tudo vem para te decepcionar.",
    "Se ainda não deu errado, é porque ainda não acabou.",
    "Tudo passa, nem que seja por cima de você.",
    "O universo não tá nem aí para você.",
    "Até as torres mais altas começaram do chão.",
    "É hora de criar espaço para uma nova história.",
    "Você decide se hoje é apenas mais um dia ou se é o dia em que tudo muda.",
    "Tudo que você desejam está do outro lado do medo.",
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextFrase(' "' + frases[numeroAleatorio] + '" ');
    setImg(require("../biscoito_da_sorte/assets/biscoitoaberto-removebg-preview.png"));
  }

  function reiniciarBiscoito() {
    setImg(require("../biscoito_da_sorte/assets/biscoitofechado-removebg-preview.png"));
    setTextFrase("");
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}>{textFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: "#732002" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#732002" }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#F2C299',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: "#732002",
    margin: 30,
    fontStyle: "bold",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#732002",
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor:"#D99255",
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#732002",
    
  },
});