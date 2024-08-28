import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [img, setImg] = useState(require("./assets/biscoitoaberto-removebg-preview.png"));
  const [textFrase, setTextFrase] = useState("");

  let frases = [
    "A paciência é a chave para grandes conquistas.",
    "Espalhe amor e alegria, e a paz virá ao seu encontro.",
    "Cultive a razão e a serenidade em todos os momentos.",
    "Aceite seus defeitos, eles fazem parte do seu caminho para a virtude.",
    "Toda grande jornada começa com um pequeno passo.",
    "Acredite em si mesmo, e você estará no caminho certo.",
    "Tudo acontece por uma razão; confie no processo.",
    "O que é para ser seu encontrará uma forma de chegar até você.",
    "Tudo passa, e o que permanece é o que realmente importa.",
    "Você é parte de um universo grandioso e cheio de possibilidades.",
    "Até os maiores sonhos começaram com um pequeno pensamento.",
    "Agora é o momento de escrever uma nova história de sucesso.",
    "Hoje pode ser o dia em que tudo muda para melhor.",
    "Enfrente seus medos, e você encontrará o que procura.",
    "Cada novo dia traz uma nova oportunidade de ser feliz.",
    "O universo conspira a favor daqueles que acreditam.",
    "Grandes conquistas começam com um único passo.",
    "Acredite que o melhor ainda está por vir.",
    "A sorte favorece os corajosos.",
    "A sabedoria vem para aqueles que sabem ouvir.",
    "A vida é um presente; aproveite cada momento.",
    "Seja a mudança que você deseja ver no mundo.",
    "A força interior é a chave para superar qualquer desafio.",
    "Os desafios são oportunidades disfarçadas de dificuldades.",
    "Sua determinação é a luz que guiará seu caminho.",
];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextFrase(' "' + frases[numeroAleatorio] + '" ');
    setImg(require("./assets/biscoitoaberto-removebg-preview.png"));
  }

  function reiniciarBiscoito() {
    setImg(require("./assets/biscoitofechado-removebg-preview.png"));
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