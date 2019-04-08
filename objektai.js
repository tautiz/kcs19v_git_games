var klase = [
  {
    vardas: "Tautvydas",
    banko_pin: 1234,
    amzius: 33,
    vaikai: [{ vardas: "Amelija" }],
    adresas: {
      gatve: "Gatvinė g.",
      rajonas: "Kauno raj.",
      namoNr: 777,
      miestas: "Ilgakiemio km.",
      salis: "Lenkija"
    }
  },
  {
    vardas: "Romanas",
    banko_pin: 1234123412341234,
    amzius: 30,
    vaikai: [null],
    adresas: {
      gatve: "gatve",
      rajonas: "Kauno",
      namoNr: 15,
      miestas: "gatve",
      salis: "Lietuva"
    }
  }
];

console.log("Klasiokų kiekis: ", klase.length);
