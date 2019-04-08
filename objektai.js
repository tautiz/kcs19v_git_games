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
            vardas: "Vita",
            banko_pin: 4567,
            amzius: 35,
            vaikai: [
                {vardas: "katinas"}
            ],
            adresas: {
                gatve: "Aguonu g.",
                rajonas: "Eiguliai",
                namoNr: 16,
                miestas: 'Jonavos km.',
                salis: "Sveicarija"
            },
        },

        {
            vardas: "Egidijus",
            banko_pin:
                2545,
            amzius:
                33,
            gyvunas:
                [
                    {suo: "Mazgė"}
                ],
            adresas:
                {
                    gatve: "J. Basanavičiaus al.",
                    rajonas:
                        "Žaliakalnis",
                    namoNr:
                        62,
                    miestas:
                        'Kaunas',
                    salis:
                        "Lietuva"
                }
        }
        ,
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
        }
    ]
;

console.log("Klasiokų kiekis: ", klase.length);
