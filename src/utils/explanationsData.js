const explanations = [
  {
    name: 'Was sind Kryptowährungen?',
    _id: 'crypto',
    question: 'Was sind Kryptowährungen?',
    answer: {
      p1: 'Kryptowährungen sind digitales Geld - sogenannte Coins oder Token, das als Belohnung für bestimmte erfüllte Aufgaben an Unterstützer des dazugehörigen Netzwerks ausbezahlt wird.',
    },
  },
  {
    name: 'Was steckt hinter Kryptowährungen?',
    _id: 'background',
    question: 'Was steckt hinter Kryptowährungen?',
    answer: {
      p1: 'Hinter jeder Kryptowährung steckt ein dazugehöriges Netzwerk, in dem auf tausenden Servern gleichzeitig fortlaufende Rechnungsketten (Blockchains) berechnet werden.',
    },
  },
  {
    name: 'Was ist eine Blockchain?',
    _id: 'blockchain',
    question: 'Was ist eine Blockchain?',
    answer: {
      p1: 'Eine Blockchain ist eine Kette von Blöcken, in denen fortlaufend Informationen gespeichert werden.',
      p2: 'Dabei kommen eine Reihe von Sicherheitsmaßnahmen ins Spiel, die die Transaktionen der Token und Daten über deren Besitzer so gut verschlüsseln, dass eine Reproduktion des Tokens unmöglich ist und die Besitzer anonym bleiben.',
    },
  },
  {
    name: 'Was ist ein Block?',
    _id: 'block',
    question: 'Was ist ein Block?',
    answer: {
      p1: 'Ein Block ist ein Teil einer Blockchain und immer nur mit seinem Vorgänger und Nachfolger verbunden. Er ist ein virtueller Datenspeicher, der Informationen beinhaltet und verschlüsselt.',
      p2: 'Ein Teil der Verschlüsselung kommt aus dem Vorgängerblock, einen Teil stellt der aktuelle Block selbst zur Verfügung, ein Teil ist eine geheime, separat verschlüsselte Komponente (salt/Salz) und ein Teil kann nur durch Daten interpretiert werden, die im Token selbst stecken, wodurch der nur durch den Besitzer gefunden werden kann, der den Token lokal gespeichert hat.',
    },
  },
  {
    name: 'Wo wird Kryptowährung aufbewahrt?',
    _id: 'wallet',
    question: 'Wo wird Kryptowährung aufbewahrt?',
    answer: {
      p1: 'Auch wenn man digitales Geld nicht in die Hand nehmen kann, gehört es in eine Geldbörse, die sogenannte Wallet. Und wie eine echte Geldbörse darf eine Krypto-Wallet nicht verloren werden.',
      p2: 'Sie ist auf einem physischen Datenträger, einer Festplatte in einem Computer oder in einem Smartphone, gespeichert und sollte immer zusätzlich durch Back-Ups geschützt sein.',
    },
  },
  {
    name: 'Ist Kryptowährung gefährlich?',
    _id: 'danger',
    question: 'Ist Kryptowährung gefährlich?',
    answer: {
      p1: 'Nein. Kryptowährung ist eine Innovation. Irgendwann war es den Menschen mit zunehmender Verfügbarkeit zu kompliziert, Waren gegen Waren zu tauschen. Sie erfanden das Geld, dem ein bestimmter Wert zugeordnet wird, auf den man sich geeinigt hat.',
      p2: 'Genau so - nur fast 2700 Jahre später - verhält es sich mit Kryptowährungen. Sie sind der Versuch einer Lösung zunehmender Problematik des Echtgelds und seinen weltweiten Transaktionen.',
    },
  },
  {
    name: 'Aber... aber... Darknet?',
    _id: 'darknet',
    question: 'Aber... aber... Darknet?',
    answer: {
      p1: 'Kryptowährungen werden teilweise missbraucht, um anonyme, illegale Geschäfte im Internet - oft verallgemeinert im Darknet - zu tätigen. Etwa so wie das Bargeld des Dollars, Euros, Renminbis oder des Rubels auf der Straße, um Drogen, Waffen und Menschen zu handeln, nur machen illegale Kryptogeschäfte einen Bruchteil der illegalen Echtgeldgeschäfte aus, was auch daran liegt, dass die Zahlungsmöglichekeiten mit Kryptowährungen noch sehr eingeschränkt sind.',
      p2: 'Kleiner Ausflug: Wer im Jahr 2010 25.000 Bitcoin für zwei Gramm Koks aus dem Darknet ausgegeben hat, hat sich zum Stand heute Koks für über eine Milliarde Dollar in die Gesundheit gepfiffen. Eine goldene Nase ist nichts dagegen.',
    },
  },
  {
    name: 'Haben Kryptowährungen Vorteile?',
    _id: 'advantages',
    question: 'Haben Kryptowährungen Vorteile?',
    answer: {
      p1: 'Viele denken an Umweltschutz und Stromverbrauch als Gegenargument für Kryptowährung. Tatsächlich ist es so, dass der gesamte Energiebedarf rund um Kryptowährungen nur einen Bruchteil des Energiebedarfs rund um Echtgeld ausmacht.',
      p2: 'Man denke an die Server der Banken, die Geldkartentransaktionen und- terminals, an Geldautomaten, die Herstellung und den Umlauf von Echtgeld. Echtgeldüberweisungen dauern mehrere Tage, sind oft mit hohen Gebühren verbunden - vor allem bei Auslandsüberweisungen - und bergen hohe Sicherheitsrisiken.',
      p3: 'Kryptotransktionen dauern nur Minuten, haben niedrige Gebühren und sind viel sicherer. Dabei sind sie auch transparenter, weil jeder jederzeit alle Krypto-Transaktionen in einer Art öffentlichen Kassenbuch der jeweiligen Währung nachprüfen kann.',
      p4: 'Zudem kann man die Verschlüsselungs- und Speicherfunktionen der Krypto-Blockchains für viele zusätzliche Einsatzzwecke nutzen:',
      p5: 'Datensicherung und Datenschutz sensibler Daten, Automatisierung und Beschleunigung von Sachbearbeitungsprozessen, Lebensmittel können in der Produktionskette zum Ursprungsort zurück verfolgt werden, digitale Wahlen können weltweit umgesetzt werden und die Verwaltung und das Ausstellen von Zertifikaten (Zeugnisse, Besitzurkunden, Eintrittskarten - alle diese Vorteile und viele mehr bietet die Technologie hinter Kryptowährungen. Schnell, transparent und fälschungssicher!',
    },
  },
];

export default explanations;
