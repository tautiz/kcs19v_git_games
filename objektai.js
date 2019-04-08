var klase = [
        {
            vardas: "Tautvydas",
            banko_pin: 1234,
            amzius: 33,
            vaikai: [
                {vardas: "Amelija"}
            ],
            adresas: {
                gatve: "Gatvinė g.",
                rajonas: "Kauno raj.",
                namoNr: 777,
                miestas: 'Ilgakiemio km.',
                salis: "Lenkija"
            }
        },
        {
            vardas: "Egidijus",
            banko_pin: 2545,
            amzius: 33,
            gyvunas: [
                {suo: "Mazgė"}
            ],
            adresas: {
                gatve: "J. Basanavičiaus al.",
                rajonas: "Žaliakalnis",
                namoNr: 62,
                miestas: 'Kaunas',
                salis: "Lietuva"
            }
        },
        {
            vardas: "Vita",
            banko_pin: 4567,
            amzius: 37,
            gyvunas: [
                {katinas: "katinas"}
            ],
            adresas: {
                gatve: "Aguonu g.",
                rajonas: "Eiguliai",
                namoNr: 16,
                miestas: 'Kauno m.',
                salis: "Latvija"
            }
        },
        {
            vardas: "Romanas",
            banko_pin:
                1111,
            amzius:
                30,
            vaikai:
                [null],
            adresas:
                {
                    gatve: "gatve",
                    rajonas:
                        "Kauno",
                    namoNr:
                        15,
                    miestas:
                        "gatve",
                    salis:
                        "Lietuva"
                }
        },
        {
            vardas: "Imantas",
            banko_pin:
                5538,
            amzius:
                25,
            gyvunai:
                [
                    {gyvunas: "Pūkė"}
                ],
            adresas:
                {
                    gatve: "Šalkauskio g.",
                    rajonas:
                        "Šiaulių raj.",
                    namoNr:
                        16,
                    miestas:
                        'Konfilktinis',
                    salis:
                        "Wonderland"
                }
        }
        ,
        {
            vardas: "Tautvydas",
            banko_pin:
                1234,
            amzius:
                33,
            vaikai:
                [{vardas: "Amelija"}],
            adresas:
                {
                    gatve: "Gatvinė g.",
                    rajonas:
                        "Kauno raj.",
                    namoNr:
                        777,
                    miestas:
                        "Ilgakiemio km.",
                    salis:
                        "Lenkija"
                }
        }
        ,
        {
            vardas: "Violeta",
            amzius:
                39,
            vaikai:
                [
                    {vardas: "Egidijus"},
                    {vardas: "Emilija"},
                    {vardas: "Jonas"}
                ],
            adresas:
                {
                    gatve: "P.Plechavičiaus",
                    namoNr:
                        5,
                    miestas:
                        "Kaunas",
                    salis:
                        "Lietuva"
                }
        }
        ,
        {
            vardas: "Jolita",
            banko_pin:
                1521,
            amzius:
                35,
            vaikai:
                [{vardas: "Ema"}],
            adresas:
                {
                    gatve: "Alyvu g.",
                    rajonas:
                        "Kauno raj.",
                    namoNr:
                        13,
                    miestas:
                        "Smiltynu km.",
                    salis:
                        "Lietuva"
                }
        }
        ,
        {
            vardas: "Egidijus",
            banko_pin:
                2545,
            amzius:
                33,
            gyvunas:
                [{suo: "Mazgė"}],
            adresas:
                {
                    gatve: "J. Basanavičiaus al.",
                    rajonas:
                        "Žaliakalnis",
                    namoNr:
                        62,
                    miestas:
                        "Kaunas",
                    salis:
                        "Lietuva"
                }
        }
        ,
        {
            vardas: "Romanas",
            banko_pin:
                4321,
            amzius:
                30,
            vaikai:
                [null],
            adresas:
                {
                    gatve: "gatve",
                    rajonas:
                        "Kauno",
                    namoNr:
                        15,
                    miestas:
                        "gatve",
                    salis:
                        "Lietuva"
                }
        }
    ]
;

console.log("Klasiokų kiekis: ", klase.length);
klase.forEach(function(obj) {
  console.log(obj.vardas);
});


for (var i=0; i<klase.length; i++) {
    console.log(klase[i].vardas +" "+ klase[i].banko_pin);

};
