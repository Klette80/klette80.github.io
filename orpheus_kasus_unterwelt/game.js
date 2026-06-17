const levels = [
  {
    id: "styx",
    title: "Ufer des Styx",
    declension: "a-Deklination",
    kicker: "Level 1",
    enemy: "Charons Probe",
    lore: "Charon verlangt sichere Formen, bevor die Fahrt über den Styx beginnt.",
    icon: "boat",
    help: { hints: 2, table: true, grace: true, note: "Hermes hilft noch offen: Zwei Hinweise sind in diesem Abschnitt möglich." },
    story: {
      title: "Die erste Schwelle",
      text: "Orpheus tritt an den Styx. Hinter ihm liegt die Welt der Lebenden, vor ihm das Reich des Hades. Charon hebt den Stab: Nur wer die Namen der Dinge richtig beugt, darf in sein Boot.",
      culture: "Die Griechen stellten sich den Übergang ins Totenreich als Reise über einen Grenzfluss vor. Die Sprache selbst wird hier zum Fährgeld."
    },
    codex: {
      title: "Charon und der Styx",
      text: "Charon ist der Fährmann der Unterwelt. In vielen Vorstellungen erhält der Tote eine Münze, damit er über den Styx gelangt."
    },
    table: [
      ["Kasus", "Singular", "Plural"],
      ["Nom.", "-a", "-ae"],
      ["Gen.", "-ae", "-arum"],
      ["Dat.", "-ae", "-is"],
      ["Akk.", "-am", "-as"],
      ["Abl.", "-a", "-is"]
    ],
    tasks: [
      task("Bilde den Akkusativ Singular von puella.", "puellam", ["puella", "puellam", "puellae", "puellas"], "puella, puellae f. = Mädchen"),
      task("Bilde den Genitiv Plural von umbra.", "umbrarum", ["umbrae", "umbram", "umbrarum", "umbris"], "umbra, umbrae f. = Schatten"),
      task("Bilde den Dativ Plural von lyra.", "lyris", ["lyrae", "lyris", "lyram", "lyrarum"], "lyra, lyrae f. = Leier"),
      task("Bestimme die Form portis.", "Dativ oder Ablativ Plural", ["Nominativ Singular", "Akkusativ Plural", "Dativ oder Ablativ Plural", "Genitiv Singular"], "portis kann Dativ oder Ablativ Plural sein."),
      task("Bilde den Ablativ Singular von insula.", "insula", ["insulam", "insula", "insulae", "insulis"], "Ablativ Singular der a-Deklination endet auf -a."),
      task("Tippe den Akkusativ Plural von aqua.", "aquas", null, "Erste freie Eingabe: Denke an den Plural.")
    ],
    boss: boss("Charons Ruderschlag", "Triff die geforderte Endung, während das Notenblatt über den Styx treibt.", 18, [
      note("puella", "Akk. Sg.", "-am", ["-a", "-ae", "-am", "-is"]),
      note("umbra", "Gen. Pl.", "-arum", ["-ae", "-arum", "-as", "-is"]),
      note("lyra", "Dat. Pl.", "-is", ["-a", "-ae", "-is", "-am"]),
      note("porta", "Akk. Pl.", "-as", ["-ae", "-as", "-arum", "-a"])
    ])
  },
  {
    id: "gate",
    title: "Tor des Hades",
    declension: "o-Deklination",
    kicker: "Level 2",
    enemy: "Kerberos' Wache",
    lore: "Am Tor zählt jedes Ende: maskuline und neutrale Formen trennen sich.",
    icon: "gate",
    help: { hints: 1, table: true, grace: false, note: "Die Götter werden leiser: Ein Hermes-Hinweis bleibt, Persephones Gnade ruht." },
    story: {
      title: "Der dreifache Wächter",
      text: "Vor dem Tor des Hades schnaubt Kerberos. Orpheus muss nicht kämpfen wie ein Krieger; er muss die Endungen so sicher spielen, dass selbst der Wächter innehält.",
      culture: "Hades ist im Mythos kein christlicher Teufel. Er bewacht eine Ordnung, in der auch Götter Regeln anerkennen."
    },
    codex: {
      title: "Hades ist kein Teufel",
      text: "Hades herrscht über die Unterwelt als Gott einer Ordnung. Er ist streng, aber nicht einfach eine Verkörperung des Bösen."
    },
    table: [
      ["Kasus", "servus Sg.", "servi Pl.", "templum Sg.", "templa Pl."],
      ["Nom.", "-us", "-i", "-um", "-a"],
      ["Gen.", "-i", "-orum", "-i", "-orum"],
      ["Dat.", "-o", "-is", "-o", "-is"],
      ["Akk.", "-um", "-os", "-um", "-a"],
      ["Abl.", "-o", "-is", "-o", "-is"]
    ],
    tasks: [
      task("Bilde den Akkusativ Plural von dominus.", "dominos", ["domini", "domino", "dominos", "dominorum"], "dominus, domini m. = Herr"),
      task("Bilde den Nominativ Plural von templum.", "templa", ["templum", "templi", "templa", "templis"], "Neutra haben im Nom. und Akk. Plural meist -a."),
      task("Bilde den Dativ Singular von servus.", "servo", ["servus", "servi", "servo", "servum"], "servus, servi m. = Sklave/Diener"),
      task("Bestimme dona.", "Nominativ oder Akkusativ Plural", ["Genitiv Singular", "Dativ Plural", "Nominativ oder Akkusativ Plural", "Ablativ Singular"], "Neutrum Plural: dona."),
      task("Tippe den Genitiv Plural von templum.", "templorum", null, "Neutrum oder Maskulinum: Genitiv Plural bleibt -orum."),
      task("Tippe den Ablativ Plural von deus.", "deis", null, "deus, dei m. = Gott")
    ],
    boss: boss("Kerberos' drei Mäuler", "Drei Mäuler schnappen nach falschen Endungen. Klicke nur den richtigen Klang.", 16, [
      note("templum", "Nom./Akk. Pl.", "-a", ["-um", "-a", "-i", "-is"]),
      note("servus", "Dat. Sg.", "-o", ["-us", "-i", "-o", "-um"]),
      note("dominus", "Gen. Pl.", "-orum", ["-os", "-is", "-orum", "-i"]),
      note("donum", "Dat./Abl. Pl.", "-is", ["-a", "-o", "-is", "-orum"])
    ])
  },
  {
    id: "asphodel",
    title: "Asphodeloswiesen",
    declension: "3. Deklination",
    kicker: "Level 3",
    enemy: "Stimmen der Schatten",
    lore: "Die Schatten sprechen in Stämmen. Wer den Genitiv kennt, findet die Form.",
    icon: "shade",
    help: { hints: 0, table: false, grace: false, note: "Ab hier gibt es keine aktiven Tipps mehr. Die Unterwelt prüft Erinnerung statt Nachschlagen." },
    story: {
      title: "Die Ebene der Namenlosen",
      text: "Die Schatten nennen Orpheus keine vollständigen Wörter mehr. Sie geben ihm nur Nominativ und Genitiv. Aus diesen Bruchstücken muss er den Stamm hören.",
      culture: "Die Asphodeloswiesen stehen für die gewöhnlichen Toten. Nicht jede Seele ist Held oder Frevler; viele verblassen in einer stillen Zwischenwelt."
    },
    codex: {
      title: "Schatten und Jenseits",
      text: "Viele Tote führen in der Unterwelt nur eine schattenhafte Existenz. Helden, Frevler und gewöhnliche Tote werden unterschiedlich vorgestellt."
    },
    table: [
      ["Kasus", "Singular", "Plural"],
      ["Nom.", "wechselnd", "-es"],
      ["Gen.", "-is", "-um"],
      ["Dat.", "-i", "-ibus"],
      ["Akk.", "-em", "-es"],
      ["Abl.", "-e", "-ibus"]
    ],
    tasks: [
      task("Tippe den Akkusativ Singular von vox, vocis.", "vocem", null, ""),
      task("Tippe den Dativ Plural von corpus, corporis.", "corporibus", null, ""),
      task("Tippe den Genitiv Plural von nomen, nominis.", "nominum", null, ""),
      task("Bestimme regibus.", "Dativ oder Ablativ Plural", ["Genitiv Singular", "Dativ oder Ablativ Plural", "Akkusativ Singular", "Nominativ Plural"], ""),
      task("Tippe den Ablativ Singular von lux, lucis.", "luce", null, ""),
      task("Tippe den Akkusativ Plural von rex, regis.", "reges", null, "")
    ],
    boss: boss("Chor der Schatten", "Die Schatten singen Stämme durcheinander. Triff die Endung, bevor ihre Stimme verklingt.", 14, [
      note("rex, regis", "Akk. Sg.", "-em", ["-is", "-em", "-e", "-ibus"]),
      note("corpus, corporis", "Gen. Pl.", "-um", ["-a", "-is", "-um", "-ibus"]),
      note("nomen, nominis", "Dat. Pl.", "-ibus", ["-em", "-e", "-ibus", "-es"]),
      note("vox, vocis", "Abl. Sg.", "-e", ["-is", "-em", "-e", "-um"])
    ])
  },
  {
    id: "persephone",
    title: "Palast der Persephone",
    declension: "i-Deklination",
    kicker: "Level 4",
    enemy: "Persephones Prüfung",
    lore: "Feinere Endungen und Neutra fordern nun genaues Hören.",
    icon: "crown",
    help: { hints: 0, table: false, grace: false, note: "Keine Zauberhilfe. Persephone prüft, ob die Formen wirklich sitzen." },
    story: {
      title: "Die Königin der geteilten Welt",
      text: "Persephone hört Orpheus an, aber sie schenkt nichts. Ihre Fragen sind fein: ähnlich klingende Endungen, mehrdeutige Formen und immer weniger Zeit.",
      culture: "Persephone verbindet Unterwelt und Oberwelt. Ihr Mythos erklärt Werden und Vergehen, Nähe und Verlust, Frühling und Winter."
    },
    codex: {
      title: "Persephone und die Jahreszeiten",
      text: "Persephones Aufenthalt in der Unterwelt wird mit Werden und Vergehen verbunden. Der Mythos erklärt kulturell die Ordnung der Jahreszeiten."
    },
    table: [
      ["Kasus", "turris", "mare"],
      ["Nom. Sg.", "turris", "mare"],
      ["Gen. Sg.", "turris", "maris"],
      ["Abl. Sg.", "turri", "mari"],
      ["Nom./Akk. Pl.", "turres", "maria"],
      ["Gen. Pl.", "turrium", "marium"]
    ],
    tasks: [
      task("Tippe den Ablativ Singular von turris.", "turri", null, ""),
      task("Tippe den Nominativ Plural von mare.", "maria", null, ""),
      task("Tippe den Genitiv Plural von animal.", "animalium", null, ""),
      task("Tippe den Akkusativ Plural von turris.", "turres", null, ""),
      task("Tippe den Ablativ Singular von mare.", "mari", null, ""),
      task("Bestimme animalia.", "Nominativ oder Akkusativ Plural", ["Genitiv Plural", "Nominativ oder Akkusativ Plural", "Ablativ Singular", "Dativ Plural"], "")
    ],
    boss: boss("Persephones Waage", "Die Waage bewegt sich schnell. Nur die genaue Endung hält Eurydikes Hoffnung im Gleichgewicht.", 12, [
      note("turris", "Abl. Sg.", "-i", ["-e", "-i", "-is", "-ibus"]),
      note("mare", "Nom./Akk. Pl.", "-ia", ["-e", "-i", "-ia", "-ium"]),
      note("animal", "Gen. Pl.", "-ium", ["-is", "-ia", "-ibus", "-ium"]),
      note("mare", "Abl. Sg.", "-i", ["-e", "-i", "-is", "-a"])
    ])
  },
  {
    id: "return",
    title: "Der Weg zurück",
    declension: "Gemischte Deklinationen",
    kicker: "Finale",
    enemy: "Das Blickverbot",
    lore: "Eurydike folgt. Alle Formen kehren wieder, aber Zweifel kostet Kraft.",
    icon: "lyre",
    help: { hints: 0, table: false, grace: false, note: "Finale: keine Hinweise, keine Tabelle, keine Korrektur vor dem Klang." },
    story: {
      title: "Kein Blick zurück",
      text: "Eurydike geht hinter Orpheus. Er hört nur ihre Schritte. Jede falsche Form lässt ihn zweifeln; jedes Zögern macht das Licht ferner.",
      culture: "Der Mythos fragt nach Vertrauen und Grenze: Selbst größte Kunst kann den Tod berühren, aber nicht einfach beherrschen."
    },
    codex: {
      title: "Orpheus' Tragik",
      text: "Orpheus bewegt die Unterwelt durch Musik. Doch am Ende steht die Grenze menschlichen Handelns: Vertrauen wird zur eigentlichen Prüfung."
    },
    table: [
      ["Merke", "Signal"],
      ["a-Dekl.", "Akk. Sg. -am, Gen. Pl. -arum"],
      ["o-Dekl.", "Nom./Akk. Pl. n. -a"],
      ["3. Dekl.", "Stamm aus Genitiv"],
      ["i-Dekl.", "Neutrum Pl. -ia, Gen. Pl. -ium"],
      ["u-Dekl.", "Gen. Sg. -us, Dat. Pl. -ibus"],
      ["e-Dekl.", "Gen./Dat. Sg. -ei, Gen. Pl. -erum"]
    ],
    tasks: [
      task("Tippe den Akkusativ Plural von umbra.", "umbras", null, ""),
      task("Tippe den Genitiv Plural von templum.", "templorum", null, ""),
      task("Tippe den Ablativ Singular von rex, regis.", "rege", null, ""),
      task("Tippe den Nominativ/Akkusativ Plural von mare.", "maria", null, ""),
      task("Tippe den Dativ Plural von corpus, corporis.", "corporibus", null, ""),
      task("Tippe den Genitiv Plural von turris.", "turrium", null, "")
    ],
    boss: boss("Der letzte Klang", "Das Notenblatt rast. Die falsche Endung ist der Blick zurück.", 10, [
      note("umbra", "Akk. Pl.", "-as", ["-ae", "-as", "-arum", "-is"]),
      note("templum", "Gen. Pl.", "-orum", ["-a", "-is", "-orum", "-um"]),
      note("rex, regis", "Abl. Sg.", "-e", ["-is", "-em", "-e", "-ibus"]),
      note("mare", "Nom./Akk. Pl.", "-ia", ["-e", "-i", "-ia", "-ium"]),
      note("turris", "Gen. Pl.", "-ium", ["-es", "-ibus", "-is", "-ium"])
    ])
  }
];

const CUTSCENES = [
  {
    id: "charon",
    scene: "styx",
    title: "Die erste Schwelle",
    actors: { left: "orpheus", right: "charon" },
    lines: [
      {
        speaker: "Erzähler",
        character: null,
        text: "Schwarzes Wasser schlägt gegen den Stein. Orpheus tritt an den Styx, die Lyra fest an die Brust gedrückt. Aus dem Nebel schiebt sich ein schmales Boot."
      },
      {
        speaker: "Charon",
        character: "charon",
        text: "Lebende zahlen kein Fährgeld. Doch deine Musik hat selbst die Toten geweckt. Zeige mir, dass du die Namen der Dinge auch in ihren Formen erkennst.",
        culture: "Charon ist der Fährmann der Unterwelt. Den Toten wurde nach verbreiteter Vorstellung ein Obolus als Fährgeld mitgegeben."
      },
      {
        speaker: "Orpheus",
        character: "orpheus",
        text: "Dann soll jede richtige Endung eine Münze sein. Setze über, Charon. Eurydike wartet jenseits des Flusses."
      }
    ],
    decision: {
      prompt: "Charon senkt das Ruder. Mit welcher Haltung verlangt Orpheus die Überfahrt?",
      choices: [
        {
          id: "pietas",
          trait: "Pietas",
          label: "„Ich bitte als Trauernder, nicht als Eroberer.“",
          response: "Charons Blick bleibt hart, doch er neigt das Haupt. „Wer die Grenze anerkennt, hört ihren Takt genauer.“",
          consequence: "Charons Respekt schützt im ersten Level einmal vor Lebenspunktverlust.",
          effect: { type: "level_grace", level: 0, source: "Charons Respekt" }
        },
        {
          id: "audacia",
          trait: "Audacia",
          label: "„Kein Tor der Toten wird mein Lied aufhalten.“",
          response: "Charon stößt das Ruder in den Styx. „Dann beweise, dass dein Trotz schneller ist als meine Strömung.“",
          consequence: "Orphischer Trotz schenkt im ersten Bosskampf drei zusätzliche Sekunden.",
          effect: { type: "boss_time", level: 0, amount: 3 }
        }
      ]
    }
  },
  {
    id: "gate",
    scene: "gate",
    title: "Der dreifache Wächter",
    actors: { left: "orpheus", right: null },
    lines: [
      {
        speaker: "Erzähler",
        character: null,
        text: () => state.dialogueChoices.charon === "pietas"
          ? "Charons stilles Nicken begleitet Orpheus bis zum Tor des Hades. Drei Köpfe fahren aus der Finsternis; sechs Augen folgen jeder Bewegung."
          : state.dialogueChoices.charon === "audacia"
            ? "Noch klingt Charons Warnung in Orpheus' Trotz nach. Am Tor des Hades fahren drei Köpfe aus der Finsternis; sechs Augen prüfen, ob seinen Worten Taten folgen."
            : "Hinter Charon erhebt sich das Tor des Hades. Drei Köpfe fahren aus der Finsternis; sechs Augen folgen jeder Bewegung von Orpheus."
      },
      {
        speaker: "Orpheus",
        character: "orpheus",
        text: "Kerberos, ich komme nicht als Eroberer. Höre den Takt meiner Lyra. Maskulinum und Neutrum sollen sich darin niemals verwechseln."
      },
      {
        speaker: "Stimme des Tores",
        character: null,
        text: "Hades duldet keine Unordnung. Spiele, Sterblicher. Nur wer die Regel achtet, darf die Schwelle passieren.",
        culture: "Hades ist im griechischen Mythos kein Teufel, sondern Herrscher einer göttlichen Ordnung. Auch Helden können diese Ordnung nicht einfach mit Gewalt brechen."
      }
    ]
  },
  {
    id: "asphodel",
    scene: "asphodel",
    title: "Die Ebene der Namenlosen",
    actors: { left: "orpheus", right: null },
    lines: [
      {
        speaker: "Erzähler",
        character: null,
        text: "Auf den fahlen Asphodeloswiesen lösen sich Stimmen aus dem Nebel. Ihre Wörter sind brüchig, als hätten sie im Tod die Endungen vergessen."
      },
      {
        speaker: "Stimmen der Schatten",
        character: null,
        text: "Wir waren keine Könige, keine Frevler, keine Helden. Finde unsere Stämme im Genitiv und gib unseren Namen noch einmal Gestalt.",
        culture: "Die Asphodeloswiesen galten als Aufenthaltsort vieler gewöhnlicher Toter. Nicht jede Seele gelangte ins Elysion oder wurde im Tartaros bestraft."
      },
      {
        speaker: "Orpheus",
        character: "orpheus",
        text: "Ich höre euch. Nominativ und Genitiv weisen mir den Stamm. Kein Name soll in meinem Lied verloren gehen."
      }
    ],
    decision: {
      prompt: "Die Schatten bitten Orpheus, ihre Namen mitzunehmen. Was setzt er an erste Stelle?",
      choices: [
        {
          id: "compassion",
          trait: "Misericordia",
          label: "„Eure Namen sollen in meinem Lied weiterleben.“",
          response: "Die Namenlosen stimmen einen leisen Grundton an. Er folgt Orpheus tiefer in die Unterwelt.",
          consequence: "Der Chor der Schatten heilt beim Eintritt in Persephones Palast einen Lebenspunkt.",
          effect: { type: "level_heal", level: 3, amount: 1 }
        },
        {
          id: "resolve",
          trait: "Constantia",
          label: "„Ich höre euch, doch mein Weg führt ohne Zögern zu Eurydike.“",
          response: "Die Schatten weichen zurück. „Dann trage deinen einen Namen mit ungebrochener Stimme.“",
          consequence: "Ungebrochene Entschlossenheit schenkt im Bosskampf gegen Persephone drei zusätzliche Sekunden.",
          effect: { type: "boss_time", level: 3, amount: 3 }
        }
      ]
    }
  },
  {
    id: "persephone",
    scene: "palace",
    title: "Die Königin der geteilten Welt",
    actors: { left: "orpheus", right: "persephone" },
    lines: [
      {
        speaker: "Persephone",
        character: "persephone",
        text: () => {
          const sisyphusEcho = state.sideQuestStatus.sisyphus === "completed"
            ? " Selbst Sisyphus sitzt noch immer auf seinem Stein und lauscht deinem Nachklang."
            : state.sideQuestStatus.sisyphus === "failed"
              ? " Sisyphus sprach von deinem Versuch, seinen Fels zu bändigen."
              : "";
          if (state.dialogueChoices.asphodel === "compassion") {
            return `Der Chor der Namenlosen klingt in deiner Musik, Orpheus.${sisyphusEcho} Mitleid ehrt dich, doch ohne Maß würde es die Grenze zwischen Lebenden und Toten zerstören.`;
          }
          if (state.dialogueChoices.asphodel === "resolve") {
            return `Du hast die Stimmen der Namenlosen hinter deinem einen Ziel zurückgelassen, Orpheus.${sisyphusEcho} Entschlossenheit führt weit, doch auch sie muss die Ordnung der Toten achten.`;
          }
          return `Deine Musik drang bis an meinen Thron, Orpheus.${sisyphusEcho} Aber Mitleid ohne Maß würde die Grenze zwischen Lebenden und Toten zerstören.`;
        }
      },
      {
        speaker: "Orpheus",
        character: "orpheus",
        text: "Du kennst beide Reiche, Königin. Im Frühling kehrst du zu Demeter zurück. Gewähre auch Eurydike einen Weg ans Licht."
      },
      {
        speaker: "Persephone",
        character: "persephone",
        text: "Dann beweise Genauigkeit. Die feinsten Endungen entscheiden. Bestehst du, darf Eurydike folgen, doch du wirst dich nicht nach ihr umsehen.",
        culture: "Persephone verbindet Oberwelt und Unterwelt. Ihre zeitweise Rückkehr zu ihrer Mutter Demeter wurde mit Wachstum, Vergehen und dem Wechsel der Jahreszeiten verbunden."
      }
    ],
    decision: {
      prompt: "Persephone nennt das Verbot des Rückblicks. Worauf will Orpheus seinen Rückweg gründen?",
      choices: [
        {
          id: "trust",
          trait: "Fides",
          label: "„Ich werde Eurydikes Schritte hören und ihrem Folgen vertrauen.“",
          response: "Persephone legt zwei Finger an den Granatapfel. „Vertrauen lässt sich nicht erzwingen. Bewahre es im Dunkel.“",
          consequence: "Fides schenkt im letzten Bosskampf drei zusätzliche Sekunden.",
          effect: { type: "boss_time", level: 4, amount: 3 }
        },
        {
          id: "control",
          trait: "Disciplina",
          label: "„Ich zähle jeden Schritt und halte meinen Willen unter Kontrolle.“",
          response: "Persephones Blick wird kühl. „Dann wird deine Disziplin gegen den Zweifel geprüft.“",
          consequence: "Disciplina fängt im letzten Bosskampf einen falschen Klang ohne Lebenspunktverlust ab.",
          effect: { type: "boss_shield", level: 4, amount: 1 }
        }
      ]
    }
  },
  {
    id: "return",
    scene: "return",
    title: "Kein Blick zurück",
    actors: { left: "orpheus", right: "eurydice" },
    lines: [
      {
        speaker: "Charon",
        character: "charon",
        actors: { left: "orpheus", right: "charon" },
        text: () => {
          const helped = ["charonReturn", "sisyphus", "danaids", "ixion"].filter((id) => state.sideQuestStatus[id] === "completed").length;
          if (helped === 4) return "Noch einmal kreuzt sich unser Weg, Sänger. Du hast mein Boot geführt, Sisyphus einen Atemzug geschenkt, die Krüge gefüllt und Ixions Rad angehalten. Doch keine Tat löst Persephones Gebot. Hüte nun deinen letzten Schritt.";
          if (state.sideQuestStatus.charonReturn === "completed") {
            const others = helped - 1;
            const echo = others === 0 ? "kein weiterer Verdammter trägt" : others === 1 ? "ein weiterer Verdammter trägt" : `${others} weitere Verdammte tragen`;
            return `Noch einmal kreuzt sich unser Weg, Sänger. Mein Ruder erinnert sich an deinen Takt, und ${echo} deinen Nachklang. Doch auch Hilfe löst Persephones Gebot nicht. Hüte nun deinen letzten Schritt.`;
          }
          if (helped > 0) return "Noch einmal kreuzt sich unser Weg, Sänger. Die Verdammten tragen die Erinnerung an deine Hilfe. Doch auch Mitleid löst Persephones Gebot nicht. Hüte nun deinen letzten Schritt.";
          return "Noch einmal kreuzt sich unser Weg, Sänger. Du bist deinem einen Ziel gefolgt und hast die Verdammten zurückgelassen. Nun bleibt dir nur Persephones Gebot. Hüte deinen letzten Schritt.";
        },
        culture: "Ovid schildert keine zweite Begegnung mit Charon. Diese spielerische Rahmung greift jedoch Ovids Motiv auf, dass Orpheus' Lied die Strafen der Unterwelt für einen Augenblick unterbricht."
      },
      {
        speaker: "Eurydike",
        character: "eurydice",
        actors: { left: "orpheus", right: "eurydice" },
        text: () => state.dialogueChoices.persephone === "trust"
          ? "Orpheus? Du hast versprochen, meinen Schritten zu vertrauen. Geh weiter. Auch wenn sie leiser werden, bin ich noch hier."
          : state.dialogueChoices.persephone === "control"
            ? "Orpheus? Zähle nicht nur die Stufen. Höre mich zwischen deinen Schritten. Ich bin noch hier."
            : "Orpheus? Ich sehe deinen Rücken im Dunkel. Geh weiter. Auch wenn meine Schritte leiser werden, bin ich noch hier."
      },
      {
        speaker: "Orpheus",
        character: "orpheus",
        actors: { left: "orpheus", right: "eurydice" },
        text: "Jede Stufe zieht mich zu dir zurück. Doch Persephones Gebot ist eindeutig: Erst im Licht darf ich dich ansehen."
      },
      {
        speaker: "Erzähler",
        character: null,
        actors: { left: "orpheus", right: "eurydice" },
        text: () => state.sideQuestStatus.danaids === "completed"
          ? "Vor ihnen erscheint der Ausgang. Hinter Eurydikes Schritten klingt das Wasser der Danaiden wie ein ferner Takt. Nun kehren alle Formen wieder: Wissen und Vertrauen werden gemeinsam geprüft."
          : "Vor ihnen erscheint der Ausgang. Nun kehren alle Formen wieder. Nicht Wissen allein wird geprüft, sondern Vertrauen unter Zeitdruck.",
        culture: "Der Orpheus-Mythos erzählt von der Grenze menschlicher Kunst. Seine Musik kann den Tod bewegen, aber das Verbot des Rückblicks macht Vertrauen zur letzten Prüfung."
      }
    ]
  }
];

const OVID_MEMORIES = [
  {
    scene: "memory-wedding",
    title: "Ein Licht ohne Flamme",
    source: "Ovid, Metamorphosen 10,1-10",
    actors: { left: "orpheus", right: "eurydice" },
    lines: [
      {
        speaker: "Erinnerung",
        character: null,
        text: "Noch vor dem Styx sieht Orpheus den Hochzeitstag. Hymenaeus ist gerufen worden, doch sein Gesicht bleibt ohne Freude und seine Worte bringen keinen festlichen Segen."
      },
      {
        speaker: "Erinnerung",
        character: null,
        text: "Die Hochzeitsfackel will nicht brennen. Statt einer klaren Flamme steigt nur tränenähnlicher Rauch auf. Ovid setzt das Unheil an den Anfang, bevor Eurydike stirbt."
      }
    ],
    question: {
      prompt: "Welches Vorzeichen nennt Ovid bei der Hochzeit?",
      answer: "Die Fackel erzeugt keine Flamme, sondern tränenähnlichen Rauch.",
      choices: [
        "Die Fackel erzeugt keine Flamme, sondern tränenähnlichen Rauch.",
        "Ein Blitz zerschlägt Orpheus' Lyra.",
        "Charon erscheint bereits unter den Hochzeitsgästen."
      ],
      explanation: "Bei Ovid brennt die Hochzeitsfackel nicht; sie qualmt nur unheilvoll. Ein Blitz oder Charons Erscheinen gehören nicht zu dieser Schilderung."
    }
  },
  {
    scene: "memory-bite",
    title: "Der Schritt im Gras",
    source: "Ovid, Metamorphosen 10,8-10",
    actors: { left: "orpheus", right: "eurydice" },
    lines: [
      {
        speaker: "Erinnerung",
        character: null,
        text: "Die Szene springt weiter. Eurydike, eben erst Braut, geht mit den Najaden durch das Gras. Ovid erzählt den Tod knapp und ohne einen menschlichen Verfolger."
      },
      {
        speaker: "Erinnerung",
        character: null,
        text: "Eine Schlange beißt sie in die Ferse. Das Gift beendet ihr Leben; aus dem Hochzeitslied wird Orpheus' Klage."
      }
    ],
    question: {
      prompt: "Wie stirbt Eurydike in Ovids Darstellung?",
      answer: "Eine Schlange beißt sie beim Gang durch das Gras in die Ferse.",
      choices: [
        "Eine Schlange beißt sie beim Gang durch das Gras in die Ferse.",
        "Aristaios verfolgt sie bis an eine Klippe.",
        "Hades zieht sie während der Hochzeit in die Unterwelt."
      ],
      explanation: "Ovid nennt den Schlangenbiss und die begleitenden Najaden. Die ausführliche Verfolgung durch Aristaios stammt aus Vergils Georgica, nicht aus dieser Ovid-Passage."
    }
  },
  {
    scene: "memory-descent",
    title: "Der Entschluss zum Abstieg",
    source: "Ovid, Metamorphosen 10,11-16",
    actors: { left: "orpheus", right: null },
    lines: [
      {
        speaker: "Erinnerung",
        character: null,
        text: "Orpheus trauert in der Oberwelt. Als seine Klage die Leere nicht füllen kann, fasst er einen Entschluss, den kaum ein Lebender wagt."
      },
      {
        speaker: "Erinnerung",
        character: null,
        text: "Durch das taenarische Tor steigt er hinab. Zwischen Schatten und Grabgestalten erreicht er Persephone und den Herrscher über die Toten, um Eurydike mit seinem Lied zurückzufordern."
      }
    ],
    question: {
      prompt: "Was führt Orpheus nach Ovid in die Unterwelt?",
      answer: "Seine Trauer und der Entschluss, Eurydike von den Herrschern der Toten zurückzuerbitten.",
      choices: [
        "Seine Trauer und der Entschluss, Eurydike von den Herrschern der Toten zurückzuerbitten.",
        "Der Auftrag, den Kerberos im Kampf zu bezwingen.",
        "Die Suche nach einem goldenen Vlies im Tartaros."
      ],
      explanation: "Orpheus steigt aus Trauer und Liebe hinab. Er kommt ausdrücklich nicht als Eroberer; Kampfaufträge und das Goldene Vlies gehören nicht zu Ovids Erzählung."
    }
  }
];

const SIDE_QUESTS = {
  charonReturn: {
    id: "charonReturn",
    triggerAfterLevel: 0,
    character: "charon",
    title: "Charons Rückfahrt",
    kicker: "Optionale Nebenquest",
    portrait: "assets/charon-portrait.png",
    portraitAlt: "Charon mit seinem Ruder am Styx",
    intro: "Nachdem Orpheus das jenseitige Ufer erreicht hat, drängen zahllose Schatten gegen Charons Boot. Spiele die verlangten Formen und weise dem Fährmann den sicheren Weg durch die Strömung.",
    culture: "Ovid nennt Charon in seiner Orpheus-Erzählung nicht ausdrücklich und schildert keine Rückfahrt. Diese Nebenquest ist eine spielerische Ergänzung zur verbreiteten Vorstellung des Fährmanns am Unterweltsfluss.",
    reward: "Charon heilt einen Lebenspunkt und schenkt im nächsten Bosskampf drei zusätzliche Sekunden.",
    successTitle: "Das Ruder findet den Takt",
    successText: "Die richtigen Formen öffnen eine ruhige Fahrrinne. Charon wendet das Boot, und sein Ruder schlägt im Takt von Orpheus' Lyra.",
    failureTitle: "Die Schatten drängen",
    failureText: "Das Boot gerät zwischen die lautlosen Hände der Toten. Charon befreit es mit einem harten Ruderschlag und merkt sich dennoch Orpheus' Hilfe."
  },
  sisyphus: {
    id: "sisyphus",
    triggerAfterLevel: 1,
    character: "sisyphus",
    title: "Sisyphus' letzter Schritt",
    kicker: "Optionale Nebenquest",
    portrait: "assets/sisyphus-portrait.png",
    portraitAlt: "Sisyphus neben seinem Felsblock",
    intro: "Am Rand des Weges hält Sisyphus inne. Orpheus' Musik hat den Fels für einen Augenblick gebändigt. Wenn du die herabstürzenden Endungen triffst, gewinnt der Verdammte Zeit für einen einzigen freien Atemzug.",
    culture: "Ovid berichtet, dass Sisyphus auf seinem Felsen sitzt, als Orpheus vor den Herrschern der Unterwelt singt (Metamorphosen 10,44). Die Hilfe ist eine spielerische Ausgestaltung dieses kurzen Stillstands.",
    reward: "Sisyphus' Atem schützt im nächsten Hauptlevel einmal vor Lebenspunktverlust.",
    successTitle: "Der Fels schweigt",
    successText: "Sisyphus setzt sich auf den reglosen Stein. Für einen Atemzug ist er kein Gefangener seiner Arbeit, sondern nur ein Mensch, der deinem Lied zuhört.",
    failureTitle: "Der Stein gewinnt",
    failureText: "Die Endungen stürzen zu schnell. Sisyphus stemmt sich wieder gegen den Fels, doch er erkennt Orpheus' Versuch an."
  },
  danaids: {
    id: "danaids",
    triggerAfterLevel: 2,
    character: "danaid",
    title: "Die Gefäße der Danaiden",
    kicker: "Optionale Nebenquest",
    portrait: "assets/danaid-portrait.png",
    portraitAlt: "Eine Danaide mit einem gesprungenen Wassergefäß",
    intro: "An schwarzen Becken schöpfen die Danaiden ohne Ende. Fange die vorbeiströmenden Formen mit dem Gefäß auf, dessen Kasus und Numerus zu ihnen passen.",
    culture: "Ovid nennt die Beliden, die ihre Gefäße ruhen lassen, während Orpheus singt (Metamorphosen 10,43). Sie werden traditionell mit den Danaiden und ihrer vergeblichen Wasserarbeit verbunden.",
    reward: "Die Danaiden füllen die Lyra vollständig und schenken drei zusätzliche Sekunden im nächsten Bosskampf.",
    successTitle: "Das Wasser hält inne",
    successText: "Die letzte Form fällt in das richtige Gefäß. Zum ersten Mal bleibt ein Krug gefüllt, solange Orpheus' Akkord nachhallt.",
    failureTitle: "Das Wasser verrinnt",
    failureText: "Die Risse trinken das Wasser schneller, als die Formen geordnet werden können. Eine Danaide nickt Orpheus dennoch dankbar zu."
  },
  ixion: {
    id: "ixion",
    triggerAfterLevel: 3,
    character: "ixion",
    title: "Ixions Rad",
    kicker: "Optionale Nebenquest",
    portrait: "assets/ixion-portrait.png",
    portraitAlt: "Ixion gebunden an sein Rad",
    intro: "Ein glühendes Rad schneidet durch die Finsternis. Schlage die Saite genau dann an, wenn die richtige Endung die goldene Trefferzone erreicht, und bringe Ixions Strafe für einen Augenblick zum Stillstand.",
    culture: "Ovid schreibt, dass Ixions Rad erstaunt stillstand, als Orpheus sang (Metamorphosen 10,42). Das Timing-Spiel gestaltet diesen kurzen Stillstand spielerisch aus.",
    reward: "Ixions Stillstand fängt im letzten Bosskampf einen falschen Klang ohne Lebenspunktverlust ab.",
    successTitle: "Das Rad verstummt",
    successText: "Der letzte Akkord trifft die Speiche. Das Rad hält an, und Ixion hebt für einen einzigen stillen Augenblick den Kopf.",
    failureTitle: "Das Rad dreht weiter",
    failureText: "Die Endungen ziehen an der Trefferzone vorbei. Das Rad nimmt seinen Lauf wieder auf, doch Ixion hat den Versuch gehört."
  }
};

const ENDINGS = {
  ovid: {
    id: "ovid",
    title: "Der zweite Tod",
    archiveTitle: "Das Gesetz der Unterwelt",
    canonLabel: "Ovidischer Ausgang",
    sceneClass: "ending-ovid",
    text: "Kurz vor dem Licht wird der Schritt hinter Orpheus unhörbar. Er wendet sich um. Eurydike streckt die Arme nach ihm aus, doch schon gleitet sie ein zweites Mal in die Tiefe.",
    witness: "Eurydike",
    witnessText: "Vale.",
    source: "Dieser Ausgang folgt Ovids Metamorphosen 10,50-77: Orpheus blickt vor dem Erreichen der Oberwelt zurück, Eurydike stirbt ein zweites Mal und Charon verweigert Orpheus die erneute Überfahrt.",
    hint: "Die Grenze des Todes behauptet sich."
  },
  echoes: {
    id: "echoes",
    title: "Das Lied der Verdammten",
    archiveTitle: "Das Lied der Verdammten",
    canonLabel: "Ovidischer Ausgang · Spielerische Erweiterung",
    sceneClass: "ending-echoes",
    text: "Orpheus verliert Eurydike am letzten Anstieg. Doch als er am Styx zusammensinkt, antwortet die Unterwelt: Ein Rad schweigt, ein Fels ruht, leere Gefäße halten einen Herzschlag lang das Wasser. Sein Lied hat Spuren hinterlassen.",
    witness: "Chor der Schatten",
    witnessText: "Du konntest den Tod nicht brechen. Aber du hast uns erinnert, dass selbst hier ein Augenblick anders klingen kann.",
    source: "Eurydikes zweiter Tod bleibt Ovids Erzählung verpflichtet. Die dankbaren Stimmen der Verdammten erweitern spielerisch Ovids Motiv, dass Orpheus' Gesang die Strafen von Ixion, Sisyphus und den Beliden kurz zum Stillstand bringt (Metamorphosen 10,40-44).",
    hint: "Hilf mehreren Verdammten, auch wenn der Aufstieg misslingt."
  },
  light: {
    id: "light",
    title: "Der Weg ins Licht",
    archiveTitle: "Der Weg ins Licht",
    canonLabel: "Kontrafaktische Spielvariante",
    sceneClass: "ending-light",
    text: "Orpheus hält den letzten Akkord. Er hört Eurydikes Schritt, doch er verlangt keinen Beweis. Gemeinsam überschreiten beide die Schwelle, und zum ersten Mal fällt warmes Morgenlicht auf ihre Gesichter.",
    witness: "Persephone",
    witnessText: "Nicht Stärke allein hat den Weg geöffnet. Du hast dem gegebenen Wort vertraut.",
    source: "Dieses Ende weicht bewusst von Ovid ab. In den Metamorphosen scheitert Orpheus am Blick zurück. Die Rettung ist eine kontrafaktische Spielbelohnung für hohe sprachliche Meisterschaft und eine Haltung des Vertrauens.",
    hint: "Verbinde hohe Meisterschaft mit Vertrauen oder gelebter Verbundenheit."
  },
  solitary: {
    id: "solitary",
    title: "Der einsame Sieger",
    archiveTitle: "Der einsame Sieger",
    canonLabel: "Kontrafaktische Spielvariante",
    sceneClass: "ending-solitary",
    text: "Jede Form sitzt, jeder Schritt gehorcht. Orpheus führt Eurydike ans Licht, ohne sich umzuwenden. Doch hinter ihnen bleibt die Unterwelt stumm: Er hat den Weg bezwungen, nicht die Herzen auf ihm.",
    witness: "Charon",
    witnessText: "Du hast die Regel gemeistert, Sänger. Ob du auch verstanden hast, wen du auf dem Weg zurückließest, wird kein Lied für dich entscheiden.",
    source: "Auch dieses Ende ist nicht ovidisch: Eurydike wird gerettet. Es deutet den Spielerfolg jedoch als Sieg der Kontrolle, wenn Orpheus kaum Bindungen zu den Gestalten der Unterwelt aufgebaut hat.",
    hint: "Meistere den Aufstieg durch Kontrolle und gehe an den Nebenwegen vorüber."
  }
};

const ENDING_ORDER = ["ovid", "echoes", "light", "solitary"];
const ENDING_ARCHIVE_KEY = "orpheus-schicksalsarchiv-v1";

const CUTSCENE_CHARACTERS = {
  orpheus: {
    name: "Orpheus",
    image: "assets/orpheus-styx.png",
    alt: "Orpheus mit seiner Lyra",
    mouthX: "31%",
    mouthY: "33%"
  },
  charon: {
    name: "Charon",
    image: "assets/charon-portrait.png",
    alt: "Charon, der Fährmann der Unterwelt",
    mouthX: "53%",
    mouthY: "31%"
  },
  persephone: {
    name: "Persephone",
    image: "assets/persephone-portrait.png",
    alt: "Persephone auf ihrem Thron in der Unterwelt",
    mouthX: "47%",
    mouthY: "33%"
  },
  eurydice: {
    name: "Eurydike",
    image: "assets/eurydice-portrait.png",
    alt: "Eurydike als schattenhafte Gestalt",
    mouthX: "51%",
    mouthY: "33%"
  },
  sisyphus: {
    name: "Sisyphus",
    image: "assets/sisyphus-portrait.png",
    alt: "Sisyphus mit seinem Felsblock",
    mouthX: "50%",
    mouthY: "32%"
  },
  danaid: {
    name: "Danaide",
    image: "assets/danaid-portrait.png",
    alt: "Eine Danaide mit einem gesprungenen Gefäß",
    mouthX: "51%",
    mouthY: "31%"
  },
  ixion: {
    name: "Ixion",
    image: "assets/ixion-portrait.png",
    alt: "Ixion an seinem Rad",
    mouthX: "50%",
    mouthY: "33%"
  }
};

const DIFFICULTIES = {
  novice: {
    name: "Novize",
    stages: [
      stage("a-Deklination", ["a"]),
      stage("o-Deklination", ["o", "o-plural"]),
      stage("e-Deklination", ["fifth"]),
      stage("a-/o-/e-Deklination", ["a", "o", "o-plural", "fifth"]),
      stage("a-/o-/e-Deklination", ["a", "o", "o-plural", "fifth"])
    ]
  },
  legionary: {
    name: "Legionär",
    stages: [
      stage("a-/o-/e-Deklination", ["a", "o", "o-plural", "fifth"]),
      stage("3. Deklination", ["third"]),
      stage("3. Deklination: Stämme", ["third", "third-mixed"]),
      stage("3. Deklination: i-Stämme", ["third-i", "third-mixed"]),
      stage("a-/o-/e-/3. Deklination", ["a", "o", "o-plural", "fifth", "third", "third-mixed", "third-i", "vis", "opes"])
    ]
  },
  centurion: {
    name: "Centurio",
    stages: [
      stage("a-/o-/e-Deklination", ["a", "o", "o-plural", "fifth"]),
      stage("3. Deklination", ["third"]),
      stage("3. Deklination: i-Stämme", ["third", "third-mixed", "third-i"]),
      stage("u-Deklination", ["fourth", "domus"]),
      stage("Alle Deklinationsklassen", ["a", "o", "o-plural", "fifth", "third", "third-mixed", "third-i", "vis", "opes", "fourth", "domus"])
    ]
  }
};

const BOSS_TIME_LIMITS = {
  novice: [32, 30, 27, 24, 22],
  legionary: [27, 25, 22, 19, 17],
  centurion: [23, 21, 18, 16, 14]
};

const state = {
  difficulty: null,
  levelIndex: 0,
  taskIndex: 0,
  phase: "story",
  hp: 5,
  mana: 3,
  streak: 0,
  rescueTarget: null,
  rescueStreak: 0,
  grace: false,
  graceSource: "",
  locked: true,
  defeated: false,
  hintsUsed: 0,
  bossIndex: 0,
  bossScore: 0,
  bossTimeLeft: 0,
  bossTimer: null,
  cutsceneLevel: -1,
  cutsceneIndex: 0,
  memoryIndex: 0,
  memoryAnswered: false,
  dialogueChoices: {},
  decisionHistory: [],
  sideQuestStatus: {},
  questHistory: [],
  activeQuest: null,
  questMode: "offer",
  questRounds: [],
  questRound: 0,
  questScore: 0,
  questMistakes: 0,
  questPressure: 0,
  questTimeLeft: 0,
  questTimer: null,
  questSpinIndex: 0,
  questTick: 0,
  questProtection: 0,
  questLocked: false,
  pendingTransitionLevel: null,
  levelGraceBonuses: {},
  levelGraceSources: {},
  levelHealBonuses: {},
  bossTimeBonuses: {},
  bossShields: {},
  activeBossShield: 0,
  consequenceMessage: "",
  unlockedCodex: new Set(),
  bossHistory: {},
  ascentRounds: [],
  ascentIndex: 0,
  ascentScore: 0,
  ascentMistakes: 0,
  ascentTimeLeft: 0,
  ascentTimer: null,
  ascentLocked: false,
  currentEnding: null,
  unlockedEndings: loadEndingArchive()
};

const cutsceneRuntime = {
  animationFrame: null,
  frame: 0,
  textIndex: 0,
  typing: false,
  line: null
};

const el = {
  hpTrack: document.querySelector("#hpTrack"),
  manaBar: document.querySelector("#manaBar"),
  streakMeter: document.querySelector("#streakMeter"),
  streakLabel: document.querySelector("#streakLabel"),
  streakValue: document.querySelector("#streakValue"),
  realmKicker: document.querySelector("#realmKicker"),
  realmTitle: document.querySelector("#realmTitle"),
  realmLore: document.querySelector("#realmLore"),
  levelMap: document.querySelector("#levelMap"),
  encounter: document.querySelector("#encounter"),
  storyPanel: document.querySelector("#storyPanel"),
  storyTitle: document.querySelector("#storyTitle"),
  storySpeaker: document.querySelector("#storySpeaker"),
  storyText: document.querySelector("#storyText"),
  storyCulture: document.querySelector("#storyCulture"),
  cultureNote: document.querySelector("#cultureNote"),
  storyModeLabel: document.querySelector("#storyModeLabel"),
  cutsceneStage: document.querySelector("#cutsceneStage"),
  cutsceneProgress: document.querySelector("#cutsceneProgress"),
  actorLeft: document.querySelector("#actorLeft"),
  actorLeftImage: document.querySelector("#actorLeftImage"),
  actorLeftName: document.querySelector("#actorLeftName"),
  actorRight: document.querySelector("#actorRight"),
  actorRightImage: document.querySelector("#actorRightImage"),
  actorRightName: document.querySelector("#actorRightName"),
  storyButton: document.querySelector("#storyButton"),
  storySkipButton: document.querySelector("#storySkipButton"),
  memoryQuestion: document.querySelector("#memoryQuestion"),
  memoryPrompt: document.querySelector("#memoryPrompt"),
  memoryChoices: document.querySelector("#memoryChoices"),
  memoryResult: document.querySelector("#memoryResult"),
  dialogueDecision: document.querySelector("#dialogueDecision"),
  dialoguePrompt: document.querySelector("#dialoguePrompt"),
  dialogueChoices: document.querySelector("#dialogueChoices"),
  dialogueResult: document.querySelector("#dialogueResult"),
  bossPanel: document.querySelector("#bossPanel"),
  bossTitle: document.querySelector("#bossTitle"),
  bossInstruction: document.querySelector("#bossInstruction"),
  bossTimer: document.querySelector("#bossTimer"),
  bossScore: document.querySelector("#bossScore"),
  bossPrompt: document.querySelector("#bossPrompt"),
  bossMeaning: document.querySelector("#bossMeaning"),
  bossHint: document.querySelector("#bossHint"),
  noteSheet: document.querySelector("#noteSheet"),
  questPanel: document.querySelector("#questPanel"),
  questKicker: document.querySelector("#questKicker"),
  questTitle: document.querySelector("#questTitle"),
  questTimer: document.querySelector("#questTimer"),
  questScore: document.querySelector("#questScore"),
  questOffer: document.querySelector("#questOffer"),
  questPortrait: document.querySelector("#questPortrait"),
  questIntro: document.querySelector("#questIntro"),
  questCulture: document.querySelector("#questCulture"),
  questAccept: document.querySelector("#questAccept"),
  questDecline: document.querySelector("#questDecline"),
  questGame: document.querySelector("#questGame"),
  questRound: document.querySelector("#questRound"),
  questPrompt: document.querySelector("#questPrompt"),
  questMeaning: document.querySelector("#questMeaning"),
  sisyphusGame: document.querySelector("#sisyphusGame"),
  questPressure: document.querySelector("#questPressure"),
  cascadeOptions: document.querySelector("#cascadeOptions"),
  danaidGame: document.querySelector("#danaidGame"),
  streamForm: document.querySelector("#streamForm"),
  vesselOptions: document.querySelector("#vesselOptions"),
  ixionGame: document.querySelector("#ixionGame"),
  ixionWheel: document.querySelector("#ixionWheel"),
  ixionStrike: document.querySelector("#ixionStrike"),
  charonGame: document.querySelector("#charonGame"),
  ferryGates: document.querySelector("#ferryGates"),
  questFeedback: document.querySelector("#questFeedback"),
  questResult: document.querySelector("#questResult"),
  questResultLabel: document.querySelector("#questResultLabel"),
  questResultTitle: document.querySelector("#questResultTitle"),
  questResultText: document.querySelector("#questResultText"),
  questReward: document.querySelector("#questReward"),
  questContinue: document.querySelector("#questContinue"),
  endingPanel: document.querySelector("#endingPanel"),
  endingKicker: document.querySelector("#endingKicker"),
  endingTitle: document.querySelector("#endingTitle"),
  ascentTimer: document.querySelector("#ascentTimer"),
  ascentScore: document.querySelector("#ascentScore"),
  ascentGame: document.querySelector("#ascentGame"),
  ascentRound: document.querySelector("#ascentRound"),
  ascentPrompt: document.querySelector("#ascentPrompt"),
  ascentMeaning: document.querySelector("#ascentMeaning"),
  ascentChoices: document.querySelector("#ascentChoices"),
  ascentFeedback: document.querySelector("#ascentFeedback"),
  doubtFill: document.querySelector("#doubtFill"),
  endingResult: document.querySelector("#endingResult"),
  endingLeftPortrait: document.querySelector("#endingLeftPortrait"),
  endingRightPortrait: document.querySelector("#endingRightPortrait"),
  endingCanonLabel: document.querySelector("#endingCanonLabel"),
  endingResultTitle: document.querySelector("#endingResultTitle"),
  endingResultText: document.querySelector("#endingResultText"),
  endingWitness: document.querySelector("#endingWitness"),
  endingWitnessText: document.querySelector("#endingWitnessText"),
  endingSource: document.querySelector("#endingSource"),
  endingFactors: document.querySelector("#endingFactors"),
  endingRestart: document.querySelector("#endingRestart"),
  enemyIcon: document.querySelector("#enemyIcon"),
  enemyLabel: document.querySelector("#enemyLabel"),
  enemyHealth: document.querySelector("#enemyHealth"),
  declensionTag: document.querySelector("#declensionTag"),
  taskProgress: document.querySelector("#taskProgress"),
  taskTitle: document.querySelector("#taskTitle"),
  taskPrompt: document.querySelector("#taskPrompt"),
  taskMeaning: document.querySelector("#taskMeaning"),
  choiceGrid: document.querySelector("#choiceGrid"),
  inputForm: document.querySelector("#inputForm"),
  typedAnswer: document.querySelector("#typedAnswer"),
  feedback: document.querySelector("#feedback"),
  hintSkill: document.querySelector("#hintSkill"),
  tableSkill: document.querySelector("#tableSkill"),
  graceSkill: document.querySelector("#graceSkill"),
  skillRow: document.querySelector(".skill-row"),
  codexCount: document.querySelector("#codexCount"),
  codexList: document.querySelector("#codexList"),
  decisionChronicle: document.querySelector("#decisionChronicle"),
  decisionCount: document.querySelector("#decisionCount"),
  decisionList: document.querySelector("#decisionList"),
  questChronicle: document.querySelector("#questChronicle"),
  questCount: document.querySelector("#questCount"),
  questList: document.querySelector("#questList"),
  fateArchive: document.querySelector("#fateArchive"),
  fateCount: document.querySelector("#fateCount"),
  fateList: document.querySelector("#fateList"),
  difficultyOverlay: document.querySelector("#difficultyOverlay"),
  difficultyOptions: document.querySelectorAll(".difficulty-option"),
  gameOverOverlay: document.querySelector("#gameOverOverlay"),
  gameOverReason: document.querySelector("#gameOverReason"),
  gameOverProgress: document.querySelector("#gameOverProgress"),
  gameOverRestart: document.querySelector("#gameOverRestart"),
  restartButton: document.querySelector("#restartButton"),
  nextButton: document.querySelector("#nextButton"),
  tableDialog: document.querySelector("#tableDialog"),
  closeDialog: document.querySelector("#closeDialog"),
  modalTitle: document.querySelector("#modalTitle"),
  modalContent: document.querySelector("#modalContent")
};

function task(prompt, answer, choices, note, metadata = {}) {
  return { prompt, answer, choices, note, ...metadata };
}

function boss(title, instruction, seconds, notes) {
  return { title, instruction, seconds, notes };
}

function note(word, target, answer, options, metadata = {}) {
  return { word, target, answer, options, ...metadata };
}

function stage(label, types) {
  return { label, types };
}

function refreshVocabularyTasks() {
  if (!window.LATIN_VOCABULARY || window.LATIN_VOCABULARY.nouns.length !== 100) {
    throw new Error("Der 100-Nomen-Wortschatz konnte nicht vollständig geladen werden.");
  }
  if (!state.difficulty || !DIFFICULTIES[state.difficulty]) return;

  const taskCounts = [12, 14, 16, 12, 18];
  levels.forEach((level, levelIndex) => {
    const trainingStage = DIFFICULTIES[state.difficulty].stages[levelIndex];
    level.trainingLabel = trainingStage.label;
    level.tasks = buildVocabularyTasks(levelIndex, taskCounts[levelIndex], trainingStage.types);
    level.boss.notes = buildBossNotes(levelIndex, trainingStage.types);
  });
}

function buildVocabularyTasks(levelIndex, count, allowedTypes) {
  const vocabulary = window.LATIN_VOCABULARY;
  const pool = vocabulary.nouns.filter((entry) => allowedTypes.includes(entry.type));
  const generated = [];
  const used = new Set();
  let attempts = 0;

  while (generated.length < count && attempts < count * 30) {
    attempts += 1;
    const entry = pool[Math.floor(Math.random() * pool.length)];
    const forms = vocabulary.formsFor(entry);
    const keys = Object.keys(forms).filter((key) => !["nom_sg", "gen_sg"].includes(key));
    const key = keys[Math.floor(Math.random() * keys.length)];
    const signature = `${entry.nom}:${key}`;
    if (used.has(signature)) continue;
    used.add(signature);

    const answer = forms[key];
    const label = vocabulary.labels[key];
    const choiceLimit = [6, 4, 2, 0, 0][levelIndex];
    const choices = generated.length < choiceLimit ? buildFormChoices(entry, key, answer, pool) : null;
    generated.push(task(
      `${choices ? "Bilde" : "Tippe"} den ${label} von ${entry.nom}, ${entry.gen}.`,
      answer,
      choices,
      "",
      { noun: entry.nom, nounType: entry.type, formKey: key, translation: entry.deutsch }
    ));
  }

  return generated;
}

function buildBossNotes(levelIndex, allowedTypes) {
  const vocabulary = window.LATIN_VOCABULARY;
  const pool = vocabulary.nouns.filter((entry) => {
    return allowedTypes.includes(entry.type) && !["vis", "opes", "domus"].includes(entry.type);
  });
  const generated = [];
  const used = new Set();
  const noteCount = levelIndex === levels.length - 1 ? 5 : 4;
  let attempts = 0;

  while (generated.length < noteCount && attempts < 200) {
    attempts += 1;
    const entry = pool[Math.floor(Math.random() * pool.length)];
    const forms = vocabulary.formsFor(entry);
    const keys = Object.keys(forms).filter((key) => endingFor(entry, key));
    const key = keys[Math.floor(Math.random() * keys.length)];
    const signature = `${entry.nom}:${key}`;
    if (used.has(signature)) continue;
    used.add(signature);

    const answer = endingFor(entry, key);
    generated.push(note(
      `${entry.nom}, ${entry.gen}`,
      shortCaseLabel(key),
      answer,
      buildEndingChoices(answer, key, pool),
      { translation: entry.deutsch }
    ));
  }

  return generated;
}

function endingFor(entry, key) {
  const endings = {
    a: {
      gen_sg: "-ae", dat_sg: "-ae", acc_sg: "-am", abl_sg: "-ā",
      nom_pl: "-ae", gen_pl: "-ārum", dat_pl: "-īs", acc_pl: "-ās", abl_pl: "-īs"
    },
    o: {
      gen_sg: "-ī", dat_sg: "-ō", acc_sg: "-um", abl_sg: "-ō",
      nom_pl: entry.gender === "n" ? "-a" : "-ī", gen_pl: "-ōrum", dat_pl: "-īs",
      acc_pl: entry.gender === "n" ? "-a" : "-ōs", abl_pl: "-īs"
    },
    "o-plural": {
      nom_pl: entry.gender === "n" ? "-a" : "-ī", gen_pl: "-ōrum",
      dat_pl: "-īs", acc_pl: entry.gender === "n" ? "-a" : "-ōs", abl_pl: "-īs"
    },
    fifth: {
      gen_sg: entry.gen.endsWith("ēī") ? "-ēī" : "-eī",
      dat_sg: entry.gen.endsWith("ēī") ? "-ēī" : "-eī",
      acc_sg: "-em", abl_sg: "-ē", nom_pl: "-ēs", gen_pl: "-ērum", dat_pl: "-ēbus", acc_pl: "-ēs", abl_pl: "-ēbus"
    },
    third: thirdEndings(entry, false, false),
    "third-mixed": thirdEndings(entry, true, false),
    "third-i": thirdEndings(entry, true, true),
    fourth: {
      gen_sg: "-ūs", dat_sg: "-uī", acc_sg: "-um", abl_sg: "-ū",
      nom_pl: entry.gender === "n" ? "-ua" : "-ūs", gen_pl: "-uum", dat_pl: "-ibus",
      acc_pl: entry.gender === "n" ? "-ua" : "-ūs", abl_pl: "-ibus"
    }
  };
  return endings[entry.type]?.[key] || null;
}

function thirdEndings(entry, iGenitive, pureIStem) {
  const neuter = entry.gender === "n";
  return {
    gen_sg: "-is", dat_sg: "-ī", acc_sg: neuter ? null : "-em", abl_sg: pureIStem ? "-ī" : "-e",
    nom_pl: neuter ? (pureIStem ? "-ia" : "-a") : "-ēs",
    gen_pl: iGenitive ? "-ium" : "-um", dat_pl: "-ibus",
    acc_pl: neuter ? (pureIStem ? "-ia" : "-a") : "-ēs", abl_pl: "-ibus"
  };
}

function buildEndingChoices(answer, key, pool) {
  const common = ["-a", "-ae", "-am", "-ās", "-ārum", "-ī", "-ō", "-um", "-ōs", "-ōrum", "-e", "-em", "-ēs", "-is", "-ibus", "-ium", "-ūs", "-ū", "-uum", "-eī", "-ērum"];
  const candidates = pool.map((entry) => endingFor(entry, key)).filter(Boolean).concat(common);
  const choices = [answer];
  for (const candidate of shuffleOptions(candidates)) {
    if (choices.some((choice) => normalize(choice) === normalize(candidate))) continue;
    choices.push(candidate);
    if (choices.length === 4) break;
  }
  return shuffleOptions(choices);
}

function shortCaseLabel(key) {
  const [caseName, number] = key.split("_");
  const cases = { nom: "Nom.", gen: "Gen.", dat: "Dat.", acc: "Akk.", abl: "Abl." };
  return `${cases[caseName]} ${number === "sg" ? "Sg." : "Pl."}`;
}

function buildFormChoices(entry, targetKey, answer, pool) {
  const vocabulary = window.LATIN_VOCABULARY;
  const choices = [answer];
  const ownForms = Object.values(vocabulary.formsFor(entry));
  const candidates = shuffleOptions(ownForms).concat(shuffleOptions(pool).map((candidate) => {
    return vocabulary.formsFor(candidate)[targetKey];
  }));

  for (const candidate of candidates) {
    if (!candidate) continue;
    if (choices.some((choice) => normalize(choice) === normalize(candidate))) continue;
    choices.push(candidate);
    if (choices.length === 4) break;
  }

  return shuffleOptions(choices);
}

function currentLevel() {
  return levels[state.levelIndex];
}

function currentTask() {
  return currentLevel().tasks[state.taskIndex];
}

function bossTimeLimit(levelIndex = state.levelIndex) {
  return BOSS_TIME_LIMITS[state.difficulty]?.[levelIndex] || currentLevel().boss.seconds;
}

function normalize(value) {
  return value.trim().toLowerCase().replaceAll("ī", "i").replaceAll("ā", "a").replaceAll("ō", "o").replaceAll("ū", "u").replaceAll("ē", "e");
}

function shuffleOptions(options) {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function render() {
  const level = currentLevel();

  el.realmKicker.textContent = level.kicker;
  el.realmTitle.textContent = level.title;
  el.realmLore.textContent = level.lore;
  renderStreak();
  el.manaBar.style.width = `${(state.mana / 3) * 100}%`;

  renderHp();
  renderLevelMap();
  renderCodex();
  renderPhase();
}

function renderPhase() {
  el.storyPanel.hidden = !["story", "memory"].includes(state.phase);
  el.encounter.hidden = state.phase !== "task";
  el.bossPanel.hidden = state.phase !== "boss";
  el.questPanel.hidden = state.phase !== "quest";
  el.endingPanel.hidden = !["ascent", "ending"].includes(state.phase);
  el.skillRow.hidden = ["quest", "ascent", "ending"].includes(state.phase);

  if (state.phase === "story") renderStory();
  if (state.phase === "memory") renderMemory();
  if (state.phase === "task") renderTask();
  if (state.phase === "boss") renderBoss();
  if (state.phase === "quest") renderSideQuest();
  if (state.phase === "ascent") renderAscent();
  if (state.phase === "ending") renderEnding();
  updateFooter();
  updateSkills();
}

function renderStory() {
  if (state.cutsceneLevel !== state.levelIndex) {
    stopCutscene();
    state.cutsceneLevel = state.levelIndex;
    state.cutsceneIndex = 0;
  }

  showCutsceneLine();
  el.feedback.className = "feedback neutral";
}

function renderMemory() {
  stopCutscene();
  state.cutsceneIndex = Math.min(state.cutsceneIndex, activeScene().lines.length - 1);
  showCutsceneLine();
}

function activeScene() {
  return state.phase === "memory"
    ? OVID_MEMORIES[state.memoryIndex]
    : CUTSCENES[state.levelIndex];
}

function resolvedLine(line) {
  return {
    ...line,
    text: typeof line.text === "function" ? line.text() : line.text
  };
}

function sceneDecisionComplete(scene) {
  return !scene.decision || Boolean(state.dialogueChoices[scene.id]);
}

function showCutsceneLine() {
  const scene = activeScene();
  const line = resolvedLine(scene.lines[state.cutsceneIndex]);
  const isMemory = state.phase === "memory";

  stopCutscene();
  cutsceneRuntime.line = line;
  cutsceneRuntime.textIndex = 0;
  cutsceneRuntime.frame = 0;
  cutsceneRuntime.typing = true;

  el.cutsceneStage.dataset.scene = scene.scene;
  el.storyTitle.textContent = scene.title;
  el.storySpeaker.textContent = line.speaker;
  el.storyText.textContent = "";
  el.storyCulture.textContent = line.culture || "";
  el.cultureNote.hidden = true;
  el.storyModeLabel.textContent = isMemory ? "Ovidische Erinnerung" : "Zwischensequenz";
  el.cutsceneProgress.textContent = `${state.cutsceneIndex + 1}/${scene.lines.length}`;
  el.storyButton.textContent = "Satz anzeigen";
  el.storyButton.hidden = false;
  el.storyButton.disabled = false;
  el.storySkipButton.hidden = isMemory || !sceneDecisionComplete(scene);
  el.memoryQuestion.hidden = true;
  el.memoryResult.hidden = true;
  el.memoryChoices.innerHTML = "";
  el.dialogueDecision.hidden = true;
  el.dialogueResult.hidden = true;
  el.dialogueChoices.innerHTML = "";
  el.cutsceneStage.classList.toggle("memory-mode", isMemory);
  el.cutsceneStage.classList.remove("decision-mode");

  const actors = line.actors || scene.actors;
  setCutsceneActor("left", actors.left, line.character);
  setCutsceneActor("right", actors.right, line.character);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    completeCutsceneLine();
    return;
  }

  cutsceneRuntime.animationFrame = window.requestAnimationFrame(animateCutscene);
}

function setCutsceneActor(side, characterKey, activeCharacter) {
  const figure = side === "left" ? el.actorLeft : el.actorRight;
  const image = side === "left" ? el.actorLeftImage : el.actorRightImage;
  const caption = side === "left" ? el.actorLeftName : el.actorRightName;
  const character = CUTSCENE_CHARACTERS[characterKey];

  figure.classList.remove("active", "speaking", "mouth-open");
  if (!character) {
    figure.hidden = true;
    return;
  }

  figure.hidden = false;
  figure.dataset.character = characterKey;
  figure.style.setProperty("--mouth-x", character.mouthX);
  figure.style.setProperty("--mouth-y", character.mouthY);
  image.src = character.image;
  image.alt = character.alt;
  caption.textContent = character.name;
  figure.classList.toggle("active", activeCharacter === characterKey);
}

function animateCutscene() {
  if (!["story", "memory"].includes(state.phase) || !cutsceneRuntime.line) {
    stopCutscene();
    return;
  }

  cutsceneRuntime.frame += 1;

  if (cutsceneRuntime.frame % 5 === 0) {
    const scale = 0.88 + Math.random() * 0.26;
    const alpha = 0.45 + Math.random() * 0.35;
    el.cutsceneStage.style.setProperty("--torch-scale", scale.toFixed(3));
    el.cutsceneStage.style.setProperty("--torch-alpha", alpha.toFixed(3));
  }

  if (cutsceneRuntime.typing && cutsceneRuntime.frame % 3 === 0) {
    cutsceneRuntime.textIndex += 1;
    el.storyText.textContent = cutsceneRuntime.line.text.slice(0, cutsceneRuntime.textIndex);

    const mouthOpen = Math.floor(cutsceneRuntime.frame / 7) % 2 === 0;
    setSpeakingActor(cutsceneRuntime.line.character, mouthOpen);

    if (cutsceneRuntime.textIndex >= cutsceneRuntime.line.text.length) {
      completeCutsceneLine();
    }
  }

  cutsceneRuntime.animationFrame = window.requestAnimationFrame(animateCutscene);
}

function setSpeakingActor(characterKey, mouthOpen) {
  [el.actorLeft, el.actorRight].forEach((figure) => {
    const speaking = Boolean(characterKey) && figure.dataset.character === characterKey;
    figure.classList.toggle("speaking", speaking);
    figure.classList.toggle("mouth-open", speaking && mouthOpen);
  });
}

function completeCutsceneLine() {
  const scene = activeScene();
  const line = cutsceneRuntime.line;
  const isLastLine = state.cutsceneIndex >= scene.lines.length - 1;
  cutsceneRuntime.typing = false;
  cutsceneRuntime.textIndex = line.text.length;
  el.storyText.textContent = line.text;
  el.cultureNote.hidden = !line.culture;

  if (state.phase === "memory" && isLastLine) {
    showMemoryQuestion(scene);
  } else if (state.phase === "story" && isLastLine && !sceneDecisionComplete(scene)) {
    showDialogueDecision(scene);
  } else {
    el.storyButton.textContent = isLastLine
      ? (state.levelIndex === 0 ? "Hinabsteigen" : "Prüfung beginnen")
      : "Weiter";
  }
  setSpeakingActor(null, false);
}

function advanceCutscene() {
  const scene = activeScene();

  if (cutsceneRuntime.typing) {
    completeCutsceneLine();
    return;
  }

  if (state.cutsceneIndex >= scene.lines.length - 1) {
    if (state.phase === "memory") {
      if (state.memoryAnswered) finishMemory();
    } else if (sceneDecisionComplete(scene)) {
      startLevel();
    }
    return;
  }

  state.cutsceneIndex += 1;
  showCutsceneLine();
}

function showDialogueDecision(scene) {
  el.storyButton.hidden = true;
  el.storySkipButton.hidden = true;
  el.dialogueDecision.hidden = false;
  el.dialoguePrompt.textContent = scene.decision.prompt;
  el.dialogueResult.hidden = true;
  el.dialogueChoices.innerHTML = scene.decision.choices.map((choice) => `
    <button class="dialogue-choice" type="button" data-decision="${choice.id}">
      <span>${choice.trait}</span>
      <strong>${choice.label}</strong>
    </button>
  `).join("");
  el.dialogueChoices.querySelectorAll(".dialogue-choice").forEach((button) => {
    button.addEventListener("click", () => answerDialogueChoice(scene, button.dataset.decision, button));
  });
  el.cutsceneStage.classList.add("decision-mode");
}

function answerDialogueChoice(scene, choiceId, selectedButton) {
  if (state.phase !== "story" || sceneDecisionComplete(scene)) return;
  const choice = scene.decision.choices.find((entry) => entry.id === choiceId);
  if (!choice) return;

  state.dialogueChoices[scene.id] = choice.id;
  applyDialogueEffect(choice.effect);
  state.decisionHistory.push({
    sceneId: scene.id,
    sceneTitle: scene.title,
    trait: choice.trait,
    label: choice.label,
    consequence: choice.consequence,
    effect: { ...choice.effect },
    resolved: false
  });

  el.dialogueChoices.querySelectorAll(".dialogue-choice").forEach((button) => {
    button.disabled = true;
    button.classList.toggle("selected", button === selectedButton);
  });
  el.dialogueResult.innerHTML = `
    <strong>${choice.response}</strong>
    <p>${choice.consequence}</p>
    <small>Spielerische Dramatisierung: Der Verlauf des Ovid-Mythos bleibt unverändert.</small>
  `;
  el.dialogueResult.hidden = false;
  el.storyButton.textContent = state.levelIndex === 0 ? "Hinabsteigen" : "Prüfung beginnen";
  el.storyButton.hidden = false;
  renderDecisionChronicle();
}

function applyDialogueEffect(effect) {
  if (!effect) return;
  if (effect.type === "level_grace") {
    state.levelGraceBonuses[effect.level] = (state.levelGraceBonuses[effect.level] || 0) + 1;
    state.levelGraceSources[effect.level] = effect.source || "Eine fremde Macht";
  }
  if (effect.type === "level_heal") {
    state.levelHealBonuses[effect.level] = (state.levelHealBonuses[effect.level] || 0) + effect.amount;
  }
  if (effect.type === "boss_time") {
    state.bossTimeBonuses[effect.level] = (state.bossTimeBonuses[effect.level] || 0) + effect.amount;
  }
  if (effect.type === "boss_shield") {
    state.bossShields[effect.level] = (state.bossShields[effect.level] || 0) + effect.amount;
  }
}

function markConsequenceResolved(type, level) {
  state.decisionHistory.forEach((entry) => {
    if (entry.effect.type === type && entry.effect.level === level) entry.resolved = true;
  });
  renderDecisionChronicle();
}

function showMemoryQuestion(scene) {
  el.storyButton.hidden = true;
  el.memoryQuestion.hidden = false;
  el.memoryPrompt.textContent = scene.question.prompt;
  el.memoryResult.hidden = true;
  el.memoryChoices.innerHTML = shuffleOptions(scene.question.choices).map((choice) => `
    <button class="memory-choice" type="button" data-choice="${escapeAttribute(choice)}">${choice}</button>
  `).join("");
  el.memoryChoices.querySelectorAll(".memory-choice").forEach((button) => {
    button.addEventListener("click", () => answerMemory(button.dataset.choice, button));
  });
}

function answerMemory(choice, selectedButton) {
  if (state.phase !== "memory" || state.memoryAnswered) return;
  const scene = activeScene();
  const correct = choice === scene.question.answer;
  state.memoryAnswered = true;

  el.memoryChoices.querySelectorAll(".memory-choice").forEach((button) => {
    button.disabled = true;
    if (button.dataset.choice === scene.question.answer) button.classList.add("correct");
  });
  if (!correct) selectedButton.classList.add("wrong");

  el.memoryResult.className = `memory-result ${correct ? "good" : "corrected"}`;
  el.memoryResult.innerHTML = `
    <strong>${correct ? "Erinnerung gefestigt" : "Die Erinnerung klärt sich"}</strong>
    <p>${scene.question.explanation}</p>
    <small>Quelle: ${scene.source}</small>
  `;
  el.memoryResult.hidden = false;
  el.storyButton.textContent = "Erinnerung bewahren";
  el.storyButton.hidden = false;
}

function finishMemory() {
  stopCutscene();
  state.phase = "story";
  state.cutsceneLevel = -1;
  state.cutsceneIndex = 0;
  state.memoryAnswered = false;
  el.cutsceneStage.classList.remove("memory-mode");
  render();
}

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function stopCutscene() {
  if (cutsceneRuntime.animationFrame !== null) {
    window.cancelAnimationFrame(cutsceneRuntime.animationFrame);
  }
  cutsceneRuntime.animationFrame = null;
  cutsceneRuntime.typing = false;
  setSpeakingActor(null, false);
}

function renderTask() {
  const level = currentLevel();
  const current = currentTask();
  const progress = ((level.tasks.length - state.taskIndex) / level.tasks.length) * 100;

  el.enemyLabel.textContent = level.enemy;
  el.enemyIcon.innerHTML = icon(level.icon);
  el.enemyHealth.style.width = `${progress}%`;
  el.declensionTag.textContent = level.trainingLabel || level.declension;
  el.taskProgress.textContent = `Aufgabe ${state.taskIndex + 1}/${level.tasks.length}`;
  el.taskTitle.textContent = actionTitle(state.levelIndex);
  el.taskPrompt.textContent = current.prompt;
  el.taskMeaning.textContent = current.translation || "";
  el.taskMeaning.hidden = !current.translation;
  renderAnswers(current);
}

function renderBoss() {
  const level = currentLevel();
  const bossData = level.boss;
  const current = bossData.notes[state.bossIndex];

  el.bossTitle.textContent = bossData.title;
  el.bossInstruction.textContent = bossData.instruction;
  el.bossTimer.textContent = `${state.bossTimeLeft}s`;
  el.bossScore.textContent = `${state.bossScore}/${bossData.notes.length}`;
  el.bossPrompt.textContent = `${current.word}: ${current.target}`;
  el.bossMeaning.textContent = current.translation || "";
  el.bossMeaning.hidden = !current.translation;
  el.feedback.className = "feedback neutral";
  if (!state.locked) {
    el.feedback.textContent = "Bosskampf: Triff die richtige Endung auf dem bewegten Notenblatt.";
  }
  const activeEffects = [];
  const timeBonus = state.bossTimeBonuses[state.levelIndex] || 0;
  if (timeBonus > 0) activeEffects.push(`Unterweltsecho: +${timeBonus} Sekunden`);
  if (state.activeBossShield > 0) {
    const shieldSource = state.sideQuestStatus.ixion === "completed" && state.levelIndex === 4
      ? "Ixions Stillstand"
      : "Disciplina";
    activeEffects.push(`${shieldSource}: Ein falscher Klang wird abgefangen`);
  }
  el.bossHint.textContent = activeEffects.length
    ? `${activeEffects.join(" · ")}. Die Hilfszauber bleiben im Bosskampf gesperrt.`
    : "Klicke die richtige Endung, bevor die Zeit endet. Die Hilfszauber sind im Bosskampf gesperrt.";

  el.noteSheet.innerHTML = shuffleOptions(current.options).map((option, index) => `
    <button class="note-hit note-speed-${state.levelIndex}" style="--lane:${index}; --delay:${index * 0.42}s" type="button" data-ending="${option}">
      <span>${option}</span>
    </button>
  `).join("");

  el.noteSheet.querySelectorAll(".note-hit").forEach((button) => {
    button.addEventListener("click", () => answerBoss(button.dataset.ending, button));
  });
}

function sideQuestForCompletedLevel(levelIndex) {
  return Object.values(SIDE_QUESTS).find((quest) => {
    return quest.triggerAfterLevel === levelIndex && !state.sideQuestStatus[quest.id];
  });
}

function questRoundCount(questId) {
  return {
    charonReturn: 6,
    sisyphus: 5,
    danaids: 6,
    ixion: 6
  }[questId] || 5;
}

function beginSideQuest(quest, completedLevel) {
  stopBossTimer();
  stopQuestTimer();
  state.phase = "quest";
  state.activeQuest = quest.id;
  state.questMode = "offer";
  state.questRounds = [];
  state.questRound = 0;
  state.questScore = 0;
  state.questMistakes = 0;
  state.questPressure = 0;
  state.questTimeLeft = 0;
  state.questSpinIndex = 0;
  state.questTick = 0;
  state.questProtection = 0;
  state.questLocked = false;
  state.pendingTransitionLevel = completedLevel;
  state.locked = true;
  render();
}

function renderSideQuest() {
  const quest = SIDE_QUESTS[state.activeQuest];
  if (!quest) return;

  el.questKicker.textContent = quest.kicker;
  el.questTitle.textContent = quest.title;
  el.questPortrait.src = quest.portrait;
  el.questPortrait.alt = quest.portraitAlt;
  el.questIntro.textContent = quest.intro;
  el.questCulture.textContent = quest.culture;
  el.questOffer.hidden = state.questMode !== "offer";
  el.questGame.hidden = state.questMode !== "play";
  el.questResult.hidden = state.questMode !== "result";
  el.questTimer.textContent = state.questMode === "offer"
    ? "Optional"
    : state.questMode === "result"
      ? state.sideQuestStatus[quest.id] === "completed" ? "Erfolg" : "Beendet"
      : quest.id === "sisyphus"
        ? `${Math.round(state.questPressure)}%`
        : `${state.questTimeLeft}s`;
  el.questScore.textContent = state.questMode === "offer"
    ? "Neue Spur"
    : `${state.questScore}/${state.questRounds.length || questRoundCount(quest.id)}`;

  if (state.questMode === "play") renderQuestRound();
  if (state.questMode === "result") renderQuestResult();
}

function acceptSideQuest() {
  const quest = SIDE_QUESTS[state.activeQuest];
  if (!quest || state.questMode !== "offer") return;

  state.questMode = "play";
  state.questRound = 0;
  state.questScore = 0;
  state.questMistakes = 0;
  state.questPressure = 0;
  state.questSpinIndex = 0;
  state.questTick = 0;
  state.questProtection = quest.id === "charonReturn" && state.dialogueChoices.charon === "pietas" ? 1 : 0;
  state.questLocked = false;
  if (quest.id === "sisyphus") state.questRounds = buildEndingQuestRounds(5, quest.triggerAfterLevel);
  if (quest.id === "danaids") state.questRounds = buildDanaidRounds(6, quest.triggerAfterLevel);
  if (quest.id === "ixion") state.questRounds = buildEndingQuestRounds(6, quest.triggerAfterLevel);
  if (quest.id === "charonReturn") state.questRounds = buildFerryRounds(6, quest.triggerAfterLevel);
  state.questTimeLeft = quest.id === "danaids"
    ? 30
    : quest.id === "ixion"
      ? 32
      : quest.id === "charonReturn"
        ? 30 + (state.dialogueChoices.charon === "audacia" ? 4 : 0)
        : 0;
  render();
  startQuestTimer();
}

function declineSideQuest() {
  const quest = SIDE_QUESTS[state.activeQuest];
  if (!quest || state.questMode !== "offer") return;

  state.sideQuestStatus[quest.id] = "declined";
  state.questHistory.push({
    id: quest.id,
    title: quest.title,
    character: quest.character,
    status: "declined",
    score: 0,
    total: questRoundCount(quest.id),
    reward: "Keine Belohnung: Orpheus folgte dem Hauptweg."
  });
  state.questMode = "result";
  render();
}

function buildEndingQuestRounds(count, levelIndex) {
  const allowedTypes = DIFFICULTIES[state.difficulty].stages[levelIndex].types;
  const pool = window.LATIN_VOCABULARY.nouns.filter((entry) => {
    return allowedTypes.includes(entry.type) && !["vis", "opes", "domus"].includes(entry.type);
  });
  const rounds = [];
  let attempts = 0;

  while (rounds.length < count && attempts < 200) {
    attempts += 1;
    const entry = pool[Math.floor(Math.random() * pool.length)];
    const keys = Object.keys(window.LATIN_VOCABULARY.formsFor(entry))
      .filter((key) => key !== "nom_sg" && endingFor(entry, key));
    const key = keys[Math.floor(Math.random() * keys.length)];
    const signature = `${entry.nom}:${key}`;
    if (rounds.some((round) => round.signature === signature)) continue;
    const answer = endingFor(entry, key);
    rounds.push({
      signature,
      noun: `${entry.nom}, ${entry.gen}`,
      translation: entry.deutsch,
      prompt: `${shortCaseLabel(key)}: Triff die richtige Endung.`,
      answer,
      options: buildEndingChoices(answer, key, pool)
    });
  }
  return rounds;
}

function buildFerryRounds(count, levelIndex) {
  const allowedTypes = DIFFICULTIES[state.difficulty].stages[levelIndex].types;
  const pool = window.LATIN_VOCABULARY.nouns.filter((entry) => allowedTypes.includes(entry.type));
  const rounds = [];
  let attempts = 0;

  while (rounds.length < count && attempts < 240) {
    attempts += 1;
    const entry = pool[Math.floor(Math.random() * pool.length)];
    const forms = window.LATIN_VOCABULARY.formsFor(entry);
    const keys = Object.keys(forms).filter((key) => !["nom_sg", "gen_sg"].includes(key));
    const key = keys[Math.floor(Math.random() * keys.length)];
    const signature = `${entry.nom}:${key}`;
    if (rounds.some((round) => round.signature === signature)) continue;
    const answer = forms[key];
    const allChoices = buildFormChoices(entry, key, answer, pool)
      .filter((choice) => normalize(choice) !== normalize(answer));
    rounds.push({
      signature,
      noun: `${entry.nom}, ${entry.gen}`,
      translation: entry.deutsch,
      prompt: `${shortCaseLabel(key)}: Steuere durch die richtige Form.`,
      answer,
      options: shuffleOptions([answer, ...allChoices.slice(0, 2)])
    });
  }
  return rounds;
}

function buildDanaidRounds(count, levelIndex) {
  const allowedTypes = DIFFICULTIES[state.difficulty].stages[levelIndex].types;
  const pool = window.LATIN_VOCABULARY.nouns.filter((entry) => allowedTypes.includes(entry.type));
  const rounds = [];
  let attempts = 0;

  while (rounds.length < count && attempts < 240) {
    attempts += 1;
    const entry = pool[Math.floor(Math.random() * pool.length)];
    const groups = formGroupsFor(entry).filter((group) => {
      return !group.keys.every((key) => ["nom_sg", "gen_sg"].includes(key));
    });
    if (groups.length < 3) continue;
    const target = groups[Math.floor(Math.random() * groups.length)];
    const signature = `${entry.nom}:${target.form}:${target.label}`;
    if (rounds.some((round) => round.signature === signature)) continue;
    const distractors = shuffleOptions(groups.filter((group) => group.label !== target.label)).slice(0, 2);
    rounds.push({
      signature,
      noun: `${entry.nom}, ${entry.gen}`,
      translation: entry.deutsch,
      prompt: `In welches Gefäß gehört ${target.form}?`,
      form: target.form,
      answer: target.label,
      options: shuffleOptions([target, ...distractors]).map((group) => group.label)
    });
  }
  return rounds;
}

function formGroupsFor(entry) {
  const groups = new Map();
  Object.entries(window.LATIN_VOCABULARY.formsFor(entry)).forEach(([key, form]) => {
    if (!form) return;
    const normalized = normalize(form);
    if (!groups.has(normalized)) groups.set(normalized, { form, keys: [] });
    groups.get(normalized).keys.push(key);
  });
  return [...groups.values()].map((group) => ({
    ...group,
    label: group.keys.map(shortCaseLabel).join(" / ")
  }));
}

function renderQuestRound() {
  const quest = SIDE_QUESTS[state.activeQuest];
  const round = state.questRounds[state.questRound];
  if (!quest || !round) return;

  el.questRound.textContent = `Runde ${state.questRound + 1}/${state.questRounds.length}`;
  el.questPrompt.textContent = `${round.noun} · ${round.prompt}`;
  el.questMeaning.textContent = round.translation;
  el.questMeaning.hidden = !round.translation;
  el.questFeedback.className = "feedback neutral";
  const instructions = {
    sisyphus: "Der Felsdruck steigt. Triff die Endung, bevor der Stein zurückrollt.",
    danaids: "Die Form strömt vorbei. Wähle das Gefäß mit dem passenden Kasus und Numerus.",
    ixion: "Beobachte das Rad. Schlage an, wenn die richtige Endung oben in der Trefferzone steht.",
    charonReturn: state.questProtection > 0
      ? "Charons Respekt schützt einmal vor einer falschen Fahrrinne. Wähle das richtige Formtor."
      : "Wähle das richtige Formtor, bevor die Strömung das Boot erfasst."
  };
  el.questFeedback.textContent = instructions[quest.id];
  el.sisyphusGame.hidden = quest.id !== "sisyphus";
  el.danaidGame.hidden = quest.id !== "danaids";
  el.ixionGame.hidden = quest.id !== "ixion";
  el.charonGame.hidden = quest.id !== "charonReturn";

  if (quest.id === "sisyphus") {
    el.questPressure.style.width = `${Math.min(100, state.questPressure)}%`;
    el.cascadeOptions.innerHTML = round.options.map((option, index) => `
      <button class="cascade-ending" style="--fall-lane:${index}; --fall-delay:${index * -0.47}s" type="button" data-quest-answer="${escapeAttribute(option)}">
        <span>${option}</span>
      </button>
    `).join("");
    el.cascadeOptions.querySelectorAll(".cascade-ending").forEach((button) => {
      button.addEventListener("click", () => answerSideQuest(button.dataset.questAnswer, button));
    });
  }

  if (quest.id === "danaids") {
    el.streamForm.textContent = round.form;
    el.vesselOptions.innerHTML = round.options.map((option) => `
      <button class="case-vessel" type="button" data-quest-answer="${escapeAttribute(option)}">
        <span aria-hidden="true"></span>
        <strong>${option}</strong>
      </button>
    `).join("");
    el.vesselOptions.querySelectorAll(".case-vessel").forEach((button) => {
      button.addEventListener("click", () => answerSideQuest(button.dataset.questAnswer, button));
    });
  }

  if (quest.id === "ixion") {
    renderIxionWheel(round);
    el.ixionStrike.disabled = false;
  }

  if (quest.id === "charonReturn") {
    el.ferryGates.innerHTML = round.options.map((option, index) => `
      <button class="ferry-gate lane-${index}" type="button" data-quest-answer="${escapeAttribute(option)}">
        <span>${index === 0 ? "Links" : index === 1 ? "Mitte" : "Rechts"}</span>
        <strong>${option}</strong>
      </button>
    `).join("");
    el.ferryGates.querySelectorAll(".ferry-gate").forEach((button) => {
      button.addEventListener("click", () => answerSideQuest(button.dataset.questAnswer, button));
    });
  }
}

function renderIxionWheel(round) {
  const positions = ["top", "right", "bottom", "left"];
  el.ixionWheel.querySelectorAll(".wheel-ending").forEach((node) => node.remove());
  round.options.forEach((option, optionIndex) => {
    const positionIndex = (optionIndex - state.questSpinIndex + positions.length * 4) % positions.length;
    const button = document.createElement("div");
    button.className = `wheel-ending wheel-${positions[positionIndex]}${positionIndex === 0 ? " in-target" : ""}`;
    button.dataset.questAnswer = option;
    button.textContent = option;
    el.ixionWheel.appendChild(button);
  });
}

function strikeIxion() {
  if (state.phase !== "quest" || state.activeQuest !== "ixion" || state.questMode !== "play" || state.questLocked) return;
  const round = state.questRounds[state.questRound];
  const activeOption = round.options[state.questSpinIndex % round.options.length];
  answerSideQuest(activeOption, el.ixionStrike);
}

function answerSideQuest(value, selectedButton) {
  if (state.phase !== "quest" || state.questMode !== "play" || state.questLocked) return;
  const quest = SIDE_QUESTS[state.activeQuest];
  const round = state.questRounds[state.questRound];
  const correct = normalize(value) === normalize(round.answer);
  state.questLocked = true;

  const selectors = {
    sisyphus: ".cascade-ending",
    danaids: ".case-vessel",
    ixion: ".wheel-ending",
    charonReturn: ".ferry-gate"
  };
  const selector = selectors[quest.id];
  el.questGame.querySelectorAll(selector).forEach((button) => {
    if ("disabled" in button) button.disabled = true;
    if (normalize(button.dataset.questAnswer) === normalize(round.answer)) button.classList.add("correct");
  });
  if (quest.id === "ixion") el.ixionStrike.disabled = true;

  if (correct) {
    selectedButton.classList.add("correct");
    state.questScore += 1;
    state.questPressure = Math.max(0, state.questPressure - 8);
    registerCorrectAnswer();
    el.questFeedback.className = "feedback good";
    const successMessages = {
      sisyphus: `Die Endung ${round.answer} hält den Stein einen Augenblick auf.`,
      danaids: `${round.form} ist richtig zugeordnet. Das Gefäß hält den Klang.`,
      ixion: `${round.answer} trifft die goldene Zone. Das Rad stockt.`,
      charonReturn: `${round.answer} öffnet die sichere Fahrrinne. Charons Boot gleitet hindurch.`
    };
    el.questFeedback.textContent = successMessages[quest.id];
  } else {
    let protectedMistake = false;
    selectedButton.classList.add("wrong");
    if (quest.id === "ixion") {
      el.ixionWheel.querySelector(".wheel-ending.in-target")?.classList.add("wrong");
    }
    if (quest.id === "charonReturn" && state.questProtection > 0) {
      state.questProtection -= 1;
      protectedMistake = true;
      el.questFeedback.className = "feedback neutral";
      el.questFeedback.textContent = `Charons Respekt fängt die falsche Fahrrinne ab. Richtig wäre ${round.answer}.`;
    } else {
      state.questMistakes += 1;
      el.questFeedback.className = "feedback bad";
      el.questFeedback.textContent = `Falsch zugeordnet. Gesucht war ${round.answer}.`;
    }
    breakAnswerStreak();
    if (quest.id === "sisyphus") state.questPressure = Math.min(100, state.questPressure + 18);
    if (["danaids", "ixion", "charonReturn"].includes(quest.id) && !protectedMistake) {
      state.questTimeLeft = Math.max(0, state.questTimeLeft - 2);
      el.questTimer.textContent = `${state.questTimeLeft}s`;
    }
  }

  el.questScore.textContent = `${state.questScore}/${state.questRounds.length}`;
  renderStatusOnly();
  if (state.questRound >= state.questRounds.length - 1) stopQuestTimer();
  window.setTimeout(advanceQuestRound, 560);
}

function advanceQuestRound() {
  if (state.phase !== "quest" || state.questMode !== "play") return;
  state.questRound += 1;
  state.questLocked = false;
  state.questSpinIndex = 0;
  if (state.questRound >= state.questRounds.length) {
    const threshold = state.activeQuest === "sisyphus" ? 4 : 5;
    finishSideQuest(state.questScore >= threshold);
    return;
  }
  renderSideQuest();
}

function startQuestTimer() {
  stopQuestTimer();
  const interval = state.activeQuest === "sisyphus"
    ? 300
    : state.activeQuest === "ixion"
      ? 750
      : 1000;
  state.questTimer = window.setInterval(() => {
    if (state.phase !== "quest" || state.questMode !== "play") return;
    if (state.activeQuest === "sisyphus") {
      state.questPressure = Math.min(100, state.questPressure + 0.7);
      el.questPressure.style.width = `${state.questPressure}%`;
      el.questTimer.textContent = `${Math.round(state.questPressure)}%`;
      if (state.questPressure >= 100) finishSideQuest(false);
      return;
    }

    if (state.activeQuest === "ixion") {
      state.questTick += interval;
      if (!state.questLocked) {
        state.questSpinIndex = (state.questSpinIndex + 1) % 4;
        renderIxionWheel(state.questRounds[state.questRound]);
      }
      if (state.questTick < 1000) return;
      state.questTick -= 1000;
    }

    state.questTimeLeft -= 1;
    el.questTimer.textContent = `${state.questTimeLeft}s`;
    if (state.questTimeLeft <= 0) finishSideQuest(false);
  }, interval);
}

function stopQuestTimer() {
  if (state.questTimer) {
    window.clearInterval(state.questTimer);
    state.questTimer = null;
  }
}

function finishSideQuest(success) {
  const quest = SIDE_QUESTS[state.activeQuest];
  if (!quest || state.questMode === "result") return;
  stopQuestTimer();
  state.questMode = "result";
  state.questLocked = true;
  state.sideQuestStatus[quest.id] = success ? "completed" : "failed";

  if (success && quest.id === "sisyphus") {
    state.levelGraceBonuses[2] = (state.levelGraceBonuses[2] || 0) + 1;
    state.levelGraceSources[2] = "Sisyphus' Atem";
  }
  if (success && quest.id === "danaids") {
    state.mana = 3;
    state.bossTimeBonuses[3] = (state.bossTimeBonuses[3] || 0) + 3;
  }
  if (success && quest.id === "charonReturn") {
    state.hp = Math.min(5, state.hp + 1);
    state.bossTimeBonuses[1] = (state.bossTimeBonuses[1] || 0) + 3;
  }
  if (success && quest.id === "ixion") {
    state.bossShields[4] = (state.bossShields[4] || 0) + 1;
  }

  state.questHistory.push({
    id: quest.id,
    title: quest.title,
    character: quest.character,
    status: success ? "completed" : "failed",
    score: state.questScore,
    total: state.questRounds.length,
    reward: success ? quest.reward : "Keine Belohnung, aber die Begegnung bleibt in der Geschichte erhalten."
  });
  render();
}

function renderQuestResult() {
  const quest = SIDE_QUESTS[state.activeQuest];
  const status = state.sideQuestStatus[quest.id];
  const success = status === "completed";
  const declined = status === "declined";

  el.questResultLabel.textContent = declined
    ? "Nebenquest abgelehnt"
    : success ? "Nebenquest gemeistert" : "Nebenquest gescheitert";
  el.questResultTitle.textContent = declined
    ? "Orpheus folgt seinem Weg"
    : success ? quest.successTitle : quest.failureTitle;
  el.questResultText.textContent = declined
    ? "Die Strafe setzt sich hinter Orpheus fort. Der Hauptweg bleibt offen, doch die Unterwelt erinnert sich auch an unterlassene Hilfe."
    : success ? quest.successText : quest.failureText;
  el.questReward.textContent = declined
    ? "Keine Belohnung"
    : success ? quest.reward : "Die Geschichte reagiert später auf deinen Versuch.";
}

function continueAfterSideQuest() {
  if (state.phase !== "quest" || state.questMode !== "result") return;
  const completedLevel = state.pendingTransitionLevel;
  stopQuestTimer();
  state.activeQuest = null;
  state.pendingTransitionLevel = null;
  continueAfterBoss(completedLevel);
}

function renderHp() {
  el.hpTrack.innerHTML = "";
  for (let i = 0; i < 5; i += 1) {
    const pip = document.createElement("span");
    pip.className = `pip${i >= state.hp ? " empty" : ""}`;
    el.hpTrack.appendChild(pip);
  }
}

function renderLevelMap() {
  el.levelMap.innerHTML = levels.map((level, index) => `
    <div class="level-node ${index === state.levelIndex ? "active" : ""} ${index < state.levelIndex ? "done" : ""}">
      <strong>${index + 1}. ${level.title}</strong>
      <span>${level.trainingLabel || level.declension}</span>
    </div>
  `).join("");
}

function renderAnswers(current) {
  el.choiceGrid.innerHTML = "";
  el.feedback.className = "feedback neutral";
  if (!state.locked) {
    el.feedback.textContent = state.consequenceMessage || (state.grace
      ? `${state.graceSource || "Persephones Gnade"} ist aktiv: Der nächste Fehler kostet keine Lebenspunkte.`
      : state.levelIndex <= 1
        ? "Forme den Klang der Lyra. Am Anfang helfen dir noch göttliche Kräfte."
        : "Keine Hilfen mehr: Bilde die Form aus Erinnerung und Stamm.");
  }

  if (current.choices) {
    el.inputForm.classList.remove("active");
    current.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = choice;
      button.addEventListener("click", () => answerTask(choice, button));
      el.choiceGrid.appendChild(button);
    });
  } else {
    el.inputForm.classList.add("active");
    el.typedAnswer.value = "";
    el.typedAnswer.disabled = state.locked;
    setTimeout(() => el.typedAnswer.focus(), 20);
  }
}

function answerTask(value, button = null) {
  if (state.locked || state.defeated || state.phase !== "task") return;
  const current = currentTask();
  const correct = normalize(value) === normalize(current.answer);
  state.locked = true;
  state.consequenceMessage = "";

  document.querySelectorAll(".choice-button").forEach((choiceButton) => {
    choiceButton.disabled = true;
    if (normalize(choiceButton.textContent) === normalize(current.answer)) {
      choiceButton.classList.add("correct");
    }
  });

  if (correct) {
    if (button) button.classList.add("correct");
    const rescued = registerCorrectAnswer();
    state.mana = Math.min(3, state.mana + (state.streak >= 3 ? 1 : 0));
    el.feedback.className = "feedback good";
    el.feedback.textContent = rescued
      ? `Richtig: ${current.answer}. Der Schicksalsakkord gelingt: Orpheus gewinnt einen Lebenspunkt zurück.`
      : state.streak >= 3
      ? `Richtig: ${current.answer}. Der orphische Akkord lädt die Lyra wieder auf.`
      : `Richtig: ${current.answer}. Der Weg durch ${currentLevel().title} öffnet sich.`;
    appendRescueProgress();
  } else {
    if (button) button.classList.add("wrong");
    miss(current.answer);
  }
  renderStatusOnly();
}

function answerBoss(value, button) {
  if (state.locked || state.defeated || state.phase !== "boss") return;
  const bossData = currentLevel().boss;
  const current = bossData.notes[state.bossIndex];
  const correct = normalize(value) === normalize(current.answer);

  button.classList.add(correct ? "correct" : "wrong");
  if (correct) {
    state.bossScore += 1;
    const rescued = registerCorrectAnswer();
    el.feedback.className = "feedback good";
    el.feedback.textContent = rescued
      ? `Getroffen: ${current.answer}. Der Schicksalsakkord schenkt Orpheus einen Lebenspunkt.`
      : `Getroffen: ${current.answer}. Die Melodie zwingt ${currentLevel().enemy} zurück.`;
    appendRescueProgress();
  } else {
    if (state.activeBossShield > 0) {
      state.activeBossShield -= 1;
      breakAnswerStreak();
      el.feedback.className = "feedback neutral";
      const shieldSource = state.sideQuestStatus.ixion === "completed" && state.levelIndex === 4
        ? "Ixions Rad hält für einen Herzschlag an"
        : "Disciplina hält";
      el.feedback.textContent = `${shieldSource}: ${current.answer} wäre richtig gewesen, doch der falsche Klang kostet keinen Lebenspunkt.`;
    } else {
      breakAnswerStreak();
      loseLife();
      el.feedback.className = "feedback bad";
      el.feedback.textContent = `Falscher Klang. Gesucht war ${current.answer}.`;
      appendRescueChallenge();
      shake();
    }
  }

  state.bossIndex += 1;
  if (state.hp <= 0) {
    lose(`Der Bosskampf zerreißt die Melodie. Gesucht war ${current.answer}.`);
    return;
  }

  if (state.bossIndex >= bossData.notes.length) {
    finishBoss();
    return;
  }

  renderStatusOnly();
  setTimeout(() => {
    if (state.phase === "boss" && !state.defeated) renderBoss();
  }, 360);
}

function finishBoss(timedOut = false) {
  stopBossTimer();
  state.locked = true;
  const required = Math.max(3, currentLevel().boss.notes.length - (state.levelIndex >= 3 ? 0 : 1));
  if (!timedOut && state.bossScore >= required) {
    state.bossHistory[state.levelIndex] = {
      score: state.bossScore,
      total: currentLevel().boss.notes.length,
      timeLeft: state.bossTimeLeft
    };
    state.unlockedCodex.add(currentLevel().id);
    el.feedback.className = "feedback good";
    el.feedback.textContent = `Boss bezwungen: ${state.bossScore}/${currentLevel().boss.notes.length} Klänge getroffen. Ein neuer Mythos-Eintrag ist frei.`;
  } else {
    breakAnswerStreak();
    loseLife();
    el.feedback.className = "feedback bad";
    el.feedback.textContent = timedOut
      ? `Die Zeit ist abgelaufen: ${state.bossScore}/${currentLevel().boss.notes.length}. Du verlierst einen Lebenspunkt. Wiederhole den Bosskampf.`
      : `Zu unsicher: ${state.bossScore}/${currentLevel().boss.notes.length}. Du verlierst einen Lebenspunkt. Wiederhole den Bosskampf.`;
    appendRescueChallenge();
    state.bossIndex = 0;
    state.bossScore = 0;
    shake();
    if (state.hp <= 0) {
      lose("Orpheus verliert seinen letzten Lebenspunkt im Bosskampf.");
      return;
    }
  }
  renderStatusOnly();
}

function miss(correctAnswer) {
  breakAnswerStreak();
  if (state.grace) {
    state.grace = false;
    const graceSource = state.graceSource || "Persephones Gnade";
    state.graceSource = "";
    el.feedback.className = "feedback bad";
    el.feedback.textContent = `Fast: Die richtige Form ist ${correctAnswer}. ${graceSource} bewahrt dich vor Schaden.`;
    return;
  }

  loseLife();
  shake();
  el.feedback.className = "feedback bad";
  el.feedback.textContent = `Die Melodie bricht. Richtig wäre: ${correctAnswer}.`;
  appendRescueChallenge();

  if (state.hp <= 0) lose(`Orpheus verliert den Klang. Richtig wäre: ${correctAnswer}.`);
}

function lose(message) {
  state.defeated = true;
  state.locked = true;
  stopBossTimer();
  stopQuestTimer();
  el.feedback.className = "feedback bad";
  el.feedback.textContent = `${message} Starte neu und versuche, die Formen früher sicherer zu spielen.`;
  el.gameOverReason.textContent = message;
  el.gameOverProgress.textContent = `${currentLevel().title} · Aufgabe ${Math.min(state.taskIndex + 1, currentLevel().tasks.length)} von ${currentLevel().tasks.length}`;
  el.gameOverOverlay.hidden = false;
  document.body.classList.add("game-over-active");
  window.setTimeout(() => el.gameOverRestart.focus(), 50);
  updateFooter();
  updateSkills();
}

function shake() {
  document.body.classList.remove("shake");
  void document.body.offsetWidth;
  document.body.classList.add("shake");
}

function renderStatusOnly() {
  renderStreak();
  el.manaBar.style.width = `${(state.mana / 3) * 100}%`;
  renderHp();
  updateFooter();
  updateSkills();
}

function registerCorrectAnswer() {
  state.streak += 1;
  if (state.hp !== 1) return false;

  armRescueChallenge();
  state.rescueStreak += 1;
  if (state.rescueStreak < state.rescueTarget) return false;

  state.hp = 2;
  state.rescueTarget = null;
  state.rescueStreak = 0;
  return true;
}

function breakAnswerStreak() {
  state.streak = 0;
  if (state.rescueTarget !== null) state.rescueStreak = 0;
}

function loseLife() {
  state.hp = Math.max(0, state.hp - 1);
  if (state.hp === 1) armRescueChallenge();
  if (state.hp === 0) {
    state.rescueTarget = null;
    state.rescueStreak = 0;
  }
}

function armRescueChallenge() {
  if (state.hp !== 1 || state.rescueTarget !== null) return;
  state.rescueTarget = Math.random() < 0.5 ? 3 : 5;
  state.rescueStreak = 0;
}

function appendRescueChallenge() {
  if (state.hp !== 1 || state.rescueTarget === null) return;
  el.feedback.textContent += ` Die Moiren gewähren eine letzte Chance: ${state.rescueTarget} richtige Antworten in Folge bringen einen Lebenspunkt zurück.`;
}

function appendRescueProgress() {
  if (state.hp !== 1 || state.rescueTarget === null) return;
  el.feedback.textContent += ` Rettungsserie: ${state.rescueStreak}/${state.rescueTarget}.`;
}

function renderStreak() {
  const rescueActive = state.hp === 1 && state.rescueTarget !== null;
  el.streakMeter.classList.toggle("critical", rescueActive);
  el.streakLabel.textContent = rescueActive ? "Letzte Hoffnung" : "Serie";
  el.streakValue.textContent = rescueActive
    ? `${state.rescueStreak}/${state.rescueTarget}`
    : state.streak;
}

function updateFooter() {
  if (state.defeated) {
    el.nextButton.textContent = "Der Klang ist verloren";
    el.nextButton.disabled = true;
    return;
  }

  if (["story", "memory"].includes(state.phase)) {
    el.nextButton.textContent = state.phase === "memory" ? "Ovidische Erinnerung" : "Zwischensequenz";
    el.nextButton.disabled = true;
    return;
  }

  if (state.phase === "quest") {
    el.nextButton.textContent = state.questMode === "result" ? "Nebenquest abgeschlossen" : "Optionale Nebenquest";
    el.nextButton.disabled = true;
    return;
  }

  if (["ascent", "ending"].includes(state.phase)) {
    el.nextButton.textContent = state.phase === "ascent" ? "Letzter Aufstieg" : "Schicksal erfüllt";
    el.nextButton.disabled = true;
    return;
  }

  if (state.phase === "boss") {
    const bossDone = state.locked && state.bossScore >= Math.max(3, currentLevel().boss.notes.length - (state.levelIndex >= 3 ? 0 : 1));
    el.nextButton.textContent = bossDone ? nextLevelLabel() : state.locked ? "Boss wiederholen" : "Bosskampf";
    el.nextButton.disabled = !state.locked;
    return;
  }

  el.nextButton.textContent = state.taskIndex >= currentLevel().tasks.length - 1 ? "Zum Bosskampf" : "Nächster Klang";
  el.nextButton.disabled = !state.locked;
}

function updateSkills() {
  const level = currentLevel();
  const activeTask = state.phase === "task" && !state.locked && !state.defeated;
  const remainingHints = Math.max(0, level.help.hints - state.hintsUsed);

  el.hintSkill.disabled = !activeTask || remainingHints <= 0 || state.mana < 1;
  el.hintSkill.querySelector("span").textContent = `Hermes ${remainingHints}`;

  el.tableSkill.disabled = !(state.phase === "task") || !level.help.table || state.mana < 1 || state.defeated;
  el.tableSkill.querySelector("span").textContent = level.help.table ? "Mnemosyne" : "Versiegelt";

  el.graceSkill.disabled = !activeTask || !level.help.grace || state.mana < 2 || state.grace;
  el.graceSkill.querySelector("span").textContent = level.help.grace ? "Persephone" : "Schweigt";
}

function startLevel() {
  stopCutscene();
  el.cutsceneStage.classList.remove("memory-mode");
  el.cutsceneStage.classList.remove("decision-mode");
  state.phase = "task";
  state.taskIndex = 0;
  state.locked = false;
  state.hintsUsed = 0;
  state.grace = false;
  state.graceSource = "";
  state.consequenceMessage = "";

  if (state.levelGraceBonuses[state.levelIndex]) {
    state.grace = true;
    state.graceSource = state.levelGraceSources[state.levelIndex] || "Eine fremde Macht";
    state.consequenceMessage = `${state.graceSource} wirkt: Der erste Fehler dieses Levels kostet keinen Lebenspunkt.`;
    delete state.levelGraceBonuses[state.levelIndex];
    delete state.levelGraceSources[state.levelIndex];
    markConsequenceResolved("level_grace", state.levelIndex);
  }

  if (state.levelHealBonuses[state.levelIndex]) {
    const healAmount = state.levelHealBonuses[state.levelIndex];
    const previousHp = state.hp;
    state.hp = Math.min(5, state.hp + healAmount);
    state.consequenceMessage = state.hp > previousHp
      ? `Der Chor der Schatten klingt nach: Orpheus gewinnt ${state.hp - previousHp} Lebenspunkt zurück.`
      : "Der Chor der Schatten stärkt Orpheus; seine Lebenspunkte sind bereits vollständig.";
    delete state.levelHealBonuses[state.levelIndex];
    markConsequenceResolved("level_heal", state.levelIndex);
  }
  render();
}

function nextTask() {
  if (state.defeated) return;

  if (state.phase === "boss" && state.locked) {
    const bossDone = state.bossScore >= Math.max(3, currentLevel().boss.notes.length - (state.levelIndex >= 3 ? 0 : 1));
    if (bossDone) advanceAfterBoss();
    else startBoss();
    return;
  }

  if (state.phase !== "task" || !state.locked) return;
  state.taskIndex += 1;
  state.locked = false;

  if (state.taskIndex >= currentLevel().tasks.length) {
    startBoss();
    return;
  }
  render();
}

function startBoss() {
  state.phase = "boss";
  state.locked = false;
  state.bossIndex = 0;
  state.bossScore = 0;
  const timeBonus = state.bossTimeBonuses[state.levelIndex] || 0;
  state.bossTimeLeft = bossTimeLimit() + timeBonus;
  state.activeBossShield = state.bossShields[state.levelIndex] || 0;
  if (timeBonus > 0) markConsequenceResolved("boss_time", state.levelIndex);
  if (state.activeBossShield > 0) markConsequenceResolved("boss_shield", state.levelIndex);
  render();
  startBossTimer();
}

function startBossTimer() {
  stopBossTimer();
  state.bossTimer = window.setInterval(() => {
    if (state.phase !== "boss" || state.locked || state.defeated) return;
    state.bossTimeLeft -= 1;
    el.bossTimer.textContent = `${state.bossTimeLeft}s`;
    if (state.bossTimeLeft <= 0) {
      finishBoss(true);
    }
  }, 1000);
}

function stopBossTimer() {
  if (state.bossTimer) {
    window.clearInterval(state.bossTimer);
    state.bossTimer = null;
  }
}

function advanceAfterBoss() {
  const completedLevel = state.levelIndex;
  const sideQuest = sideQuestForCompletedLevel(completedLevel);
  if (sideQuest) {
    beginSideQuest(sideQuest, completedLevel);
    return;
  }
  continueAfterBoss(completedLevel);
}

function continueAfterBoss(completedLevel) {
  state.levelIndex = completedLevel + 1;
  state.taskIndex = 0;
  state.streak = 0;
  state.mana = Math.min(3, state.mana + 1);
  stopBossTimer();

  if (state.levelIndex >= levels.length) {
    startAscent();
    return;
  }

  const nextMemoryIndex = completedLevel + 1;
  const hasMemory = nextMemoryIndex < OVID_MEMORIES.length;
  state.phase = hasMemory ? "memory" : "story";
  if (hasMemory) {
    state.memoryIndex = nextMemoryIndex;
    state.cutsceneIndex = 0;
    state.memoryAnswered = false;
  }
  state.locked = true;
  render();
}

function startAscent() {
  state.levelIndex = levels.length - 1;
  state.phase = "ascent";
  state.locked = false;
  state.ascentRounds = buildAscentRounds(6);
  state.ascentIndex = 0;
  state.ascentScore = 0;
  state.ascentMistakes = 0;
  state.ascentTimeLeft = 40;
  state.ascentLocked = false;
  state.currentEnding = null;
  state.unlockedCodex = new Set(levels.map((level) => level.id));
  render();
  startAscentTimer();
}

function buildAscentRounds(count) {
  const allowedTypes = DIFFICULTIES[state.difficulty].stages[levels.length - 1].types;
  const pool = window.LATIN_VOCABULARY.nouns.filter((entry) => allowedTypes.includes(entry.type));
  const rounds = [];
  let attempts = 0;

  while (rounds.length < count && attempts < 300) {
    attempts += 1;
    const entry = pool[Math.floor(Math.random() * pool.length)];
    const forms = window.LATIN_VOCABULARY.formsFor(entry);
    const keys = Object.keys(forms).filter((key) => key !== "nom_sg");
    const key = keys[Math.floor(Math.random() * keys.length)];
    const signature = `${entry.nom}:${key}`;
    if (rounds.some((round) => round.signature === signature)) continue;
    const answer = forms[key];
    rounds.push({
      signature,
      noun: `${entry.nom}, ${entry.gen}`,
      translation: entry.deutsch,
      target: shortCaseLabel(key),
      answer,
      options: buildFormChoices(entry, key, answer, pool)
    });
  }
  return rounds;
}

function renderAscent() {
  const round = state.ascentRounds[state.ascentIndex];
  if (!round) return;
  el.endingPanel.className = "ending-panel ascent-active";
  el.endingKicker.textContent = "Letzte Prüfung";
  el.endingTitle.textContent = "Der Aufstieg";
  el.ascentGame.hidden = false;
  el.endingResult.hidden = true;
  el.ascentTimer.textContent = `${state.ascentTimeLeft}s`;
  el.ascentScore.textContent = `${state.ascentScore}/${state.ascentRounds.length}`;
  el.ascentRound.textContent = `Schritt ${state.ascentIndex + 1}/${state.ascentRounds.length}`;
  el.ascentPrompt.textContent = `${round.noun} · Bilde den ${round.target}.`;
  el.ascentMeaning.textContent = round.translation || "";
  el.ascentMeaning.hidden = !round.translation;
  el.doubtFill.style.width = `${Math.min(100, state.ascentMistakes * 23 + Math.max(0, 16 - state.ascentTimeLeft))}%`;
  el.ascentChoices.innerHTML = shuffleOptions(round.options).map((option) => `
    <button type="button" data-ascent-answer="${escapeAttribute(option)}">${option}</button>
  `).join("");
  el.ascentChoices.querySelectorAll("button").forEach((button) => {
    button.disabled = state.ascentLocked;
    button.addEventListener("click", () => answerAscent(button.dataset.ascentAnswer, button));
  });
  if (!state.ascentLocked) {
    el.ascentFeedback.className = "feedback neutral";
    el.ascentFeedback.textContent = "Höre auf die Schritte hinter dir. Ein Fehler nährt den Zweifel, doch der Weg geht weiter.";
  }
}

function answerAscent(value, button) {
  if (state.phase !== "ascent" || state.ascentLocked) return;
  const round = state.ascentRounds[state.ascentIndex];
  const correct = normalize(value) === normalize(round.answer);
  state.ascentLocked = true;
  el.ascentChoices.querySelectorAll("button").forEach((choice) => {
    choice.disabled = true;
    if (normalize(choice.dataset.ascentAnswer) === normalize(round.answer)) choice.classList.add("correct");
  });

  if (correct) {
    state.ascentScore += 1;
    button.classList.add("correct");
    el.ascentFeedback.className = "feedback good";
    el.ascentFeedback.textContent = `Der Schritt hält. ${round.answer} trägt die Melodie weiter.`;
  } else {
    state.ascentMistakes += 1;
    state.ascentTimeLeft = Math.max(0, state.ascentTimeLeft - 2);
    button.classList.add("wrong");
    el.ascentFeedback.className = "feedback bad";
    el.ascentFeedback.textContent = `Der Zweifel flüstert. Richtig wäre ${round.answer}; zwei Sekunden verrinnen.`;
  }
  el.ascentScore.textContent = `${state.ascentScore}/${state.ascentRounds.length}`;
  el.doubtFill.style.width = `${Math.min(100, state.ascentMistakes * 23 + Math.max(0, 16 - state.ascentTimeLeft))}%`;

  window.setTimeout(() => {
    if (state.phase !== "ascent") return;
    state.ascentIndex += 1;
    state.ascentLocked = false;
    if (state.ascentIndex >= state.ascentRounds.length || state.ascentTimeLeft <= 0) resolveEnding();
    else render();
  }, 720);
}

function startAscentTimer() {
  stopAscentTimer();
  state.ascentTimer = window.setInterval(() => {
    if (state.phase !== "ascent") return;
    state.ascentTimeLeft -= 1;
    el.ascentTimer.textContent = `${Math.max(0, state.ascentTimeLeft)}s`;
    el.doubtFill.style.width = `${Math.min(100, state.ascentMistakes * 23 + Math.max(0, 16 - state.ascentTimeLeft))}%`;
    if (state.ascentTimeLeft <= 0) resolveEnding();
  }, 1000);
}

function stopAscentTimer() {
  if (!state.ascentTimer) return;
  window.clearInterval(state.ascentTimer);
  state.ascentTimer = null;
}

function chooseEnding() {
  const completedQuests = Object.values(state.sideQuestStatus).filter((status) => status === "completed").length;
  const highMastery = state.ascentScore >= 5;
  const trustsPersephone = state.dialogueChoices.persephone === "trust";
  const choseControl = state.dialogueChoices.persephone === "control";
  const showedCompassion = state.dialogueChoices.asphodel === "compassion";

  if (highMastery && choseControl && completedQuests <= 1) return "solitary";
  if (highMastery && (trustsPersephone || completedQuests >= 2)) return "light";
  if (completedQuests >= 2 || showedCompassion) return "echoes";
  return "ovid";
}

function resolveEnding() {
  if (state.phase !== "ascent") return;
  stopAscentTimer();
  state.currentEnding = chooseEnding();
  state.unlockedEndings.add(state.currentEnding);
  saveEndingArchive();
  state.phase = "ending";
  state.locked = true;
  render();
}

function renderEnding() {
  const ending = ENDINGS[state.currentEnding];
  if (!ending) return;
  const completedQuests = Object.values(state.sideQuestStatus).filter((status) => status === "completed").length;
  const finalBoss = state.bossHistory[levels.length - 1];
  el.endingPanel.className = `ending-panel ${ending.sceneClass}`;
  el.endingKicker.textContent = "Epilog";
  el.endingTitle.textContent = ending.title;
  el.ascentGame.hidden = true;
  el.endingResult.hidden = false;
  el.ascentTimer.textContent = state.currentEnding === "ovid" || state.currentEnding === "echoes" ? "Nox" : "Lux";
  el.ascentScore.textContent = `${state.ascentScore}/${state.ascentRounds.length}`;
  el.endingCanonLabel.textContent = ending.canonLabel;
  el.endingResultTitle.textContent = ending.title;
  el.endingResultText.textContent = ending.text;
  el.endingWitness.textContent = ending.witness;
  el.endingWitnessText.textContent = ending.witnessText;
  el.endingSource.textContent = ending.source;
  el.endingFactors.innerHTML = [
    `<span>Aufstieg <strong>${state.ascentScore}/${state.ascentRounds.length}</strong></span>`,
    `<span>Nebenquests <strong>${completedQuests}/4</strong></span>`,
    `<span>Letzter Boss <strong>${finalBoss ? `${finalBoss.score}/${finalBoss.total}` : "?"}</strong></span>`
  ].join("");
}

function loadEndingArchive() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(ENDING_ARCHIVE_KEY) || "[]");
    return new Set(stored.filter((id) => ENDINGS[id]));
  } catch {
    return new Set();
  }
}

function saveEndingArchive() {
  try {
    window.localStorage.setItem(ENDING_ARCHIVE_KEY, JSON.stringify([...state.unlockedEndings]));
  } catch {
    // Das Spiel bleibt auch ohne lokalen Speicher vollständig spielbar.
  }
}

function useHint() {
  const level = currentLevel();
  const remainingHints = level.help.hints - state.hintsUsed;
  if (state.phase !== "task" || state.locked || state.mana < 1 || remainingHints <= 0) return;
  state.mana -= 1;
  state.hintsUsed += 1;
  const current = currentTask();

  if (current.choices) {
    const wrongButtons = [...document.querySelectorAll(".choice-button")]
      .filter((button) => normalize(button.textContent) !== normalize(current.answer))
      .slice(0, state.levelIndex === 0 ? 2 : 1);
    wrongButtons.forEach((button) => {
      button.disabled = true;
      button.style.opacity = "0.25";
    });
    el.feedback.textContent = state.levelIndex === 0
      ? "Hermes flüstert: Zwei falsche Klänge verstummen."
      : "Hermes flüstert nur noch leise: Ein falscher Klang verstummt.";
  } else {
    el.feedback.textContent = state.levelIndex === 0
      ? `Hermes flüstert: Die Form beginnt mit "${current.answer.slice(0, 2)}".`
      : `Hermes flüstert: Achte auf ${current.answer.length} Buchstaben.`;
  }
  renderStatusOnly();
}

function useTable() {
  const level = currentLevel();
  if (state.phase !== "task" || !level.help.table || state.mana < 1) return;
  state.mana -= 1;
  const trainingStage = DIFFICULTIES[state.difficulty].stages[state.levelIndex];
  el.modalTitle.textContent = `${trainingStage.label}: Merktafel`;
  el.modalContent.innerHTML = tableHtml(referenceTableForTypes(trainingStage.types));
  el.tableDialog.showModal();
  render();
}

function referenceTableForTypes(types) {
  const families = [
    { types: ["a"], row: ["a-Dekl.", "Gen. Sg. -ae · Akk. Sg. -am · Gen. Pl. -ārum"] },
    { types: ["o", "o-plural"], row: ["o-Dekl.", "Gen. Sg. -ī · Dat./Abl. Sg. -ō · Gen. Pl. -ōrum"] },
    { types: ["fifth"], row: ["e-Dekl.", "Gen./Dat. Sg. -eī · Abl. Sg. -ē · Gen. Pl. -ērum"] },
    { types: ["third"], row: ["3. Dekl.", "Stamm aus dem Genitiv · Dat. Pl. -ibus · Gen. Pl. -um"] },
    { types: ["third-mixed", "third-i", "vis", "opes"], row: ["3. Dekl. / i-Stämme", "Gen. Pl. -ium · Neutrum Pl. -ia"] },
    { types: ["fourth", "domus"], row: ["u-Dekl.", "Gen. Sg. -ūs · Abl. Sg. -ū · Gen. Pl. -uum"] }
  ];
  return [
    ["Klasse", "Kennzeichen"],
    ...families.filter((family) => family.types.some((type) => types.includes(type))).map((family) => family.row)
  ];
}

function useGrace() {
  const level = currentLevel();
  if (state.phase !== "task" || state.locked || !level.help.grace || state.mana < 2 || state.grace) return;
  state.mana -= 2;
  state.grace = true;
  state.graceSource = "Persephones Gnade";
  el.feedback.className = "feedback neutral";
  el.feedback.textContent = "Persephones Gnade ist aktiv. Der nächste Fehler kostet keine Lebenspunkte.";
  render();
}

function submitTyped(event) {
  event.preventDefault();
  const value = el.typedAnswer.value;
  if (!value.trim()) return;
  answerTask(value);
  el.typedAnswer.disabled = true;
}

function resetGame() {
  stopBossTimer();
  stopQuestTimer();
  stopAscentTimer();
  stopCutscene();
  refreshVocabularyTasks();
  state.levelIndex = 0;
  state.taskIndex = 0;
  state.phase = "memory";
  state.hp = 5;
  state.mana = 3;
  state.streak = 0;
  state.rescueTarget = null;
  state.rescueStreak = 0;
  state.grace = false;
  state.graceSource = "";
  state.locked = true;
  state.defeated = false;
  state.hintsUsed = 0;
  state.bossIndex = 0;
  state.bossScore = 0;
  state.bossTimeLeft = 0;
  state.cutsceneLevel = -1;
  state.cutsceneIndex = 0;
  state.memoryIndex = 0;
  state.memoryAnswered = false;
  state.dialogueChoices = {};
  state.decisionHistory = [];
  state.sideQuestStatus = {};
  state.questHistory = [];
  state.activeQuest = null;
  state.questMode = "offer";
  state.questRounds = [];
  state.questRound = 0;
  state.questScore = 0;
  state.questMistakes = 0;
  state.questPressure = 0;
  state.questTimeLeft = 0;
  state.questSpinIndex = 0;
  state.questTick = 0;
  state.questProtection = 0;
  state.questLocked = false;
  state.pendingTransitionLevel = null;
  state.levelGraceBonuses = {};
  state.levelGraceSources = {};
  state.levelHealBonuses = {};
  state.bossTimeBonuses = {};
  state.bossShields = {};
  state.activeBossShield = 0;
  state.consequenceMessage = "";
  state.unlockedCodex = new Set();
  state.bossHistory = {};
  state.ascentRounds = [];
  state.ascentIndex = 0;
  state.ascentScore = 0;
  state.ascentMistakes = 0;
  state.ascentTimeLeft = 0;
  state.ascentLocked = false;
  state.currentEnding = null;
  el.gameOverOverlay.hidden = true;
  document.body.classList.remove("game-over-active");
  el.storyButton.disabled = false;
  el.storyButton.hidden = false;
  el.storySkipButton.hidden = false;
  el.memoryQuestion.hidden = true;
  el.dialogueDecision.hidden = true;
  el.cutsceneStage.classList.remove("memory-mode");
  el.cutsceneStage.classList.remove("decision-mode");
  render();
}

function selectDifficulty(difficulty) {
  if (!DIFFICULTIES[difficulty]) return;
  state.difficulty = difficulty;
  el.difficultyOverlay.hidden = true;
  document.body.classList.remove("difficulty-active");
  resetGame();
}

function showDifficultySelection() {
  stopBossTimer();
  stopQuestTimer();
  stopAscentTimer();
  stopCutscene();
  el.gameOverOverlay.hidden = true;
  document.body.classList.remove("game-over-active");
  el.difficultyOverlay.hidden = false;
  document.body.classList.add("difficulty-active");
  window.setTimeout(() => el.difficultyOptions[0]?.focus(), 50);
}

function renderCodex() {
  el.codexCount.textContent = `${state.unlockedCodex.size}/${levels.length}`;
  renderDecisionChronicle();
  renderQuestChronicle();
  renderFateArchive();
  el.codexList.innerHTML = levels.map((level) => {
    const unlocked = state.unlockedCodex.has(level.id) || level.id === currentLevel().id;
    return `
      <article class="codex-item ${unlocked ? "" : "locked"}">
        <h3>${unlocked ? level.codex.title : "Versiegelter Eintrag"}</h3>
        <p>${unlocked ? level.codex.text : "Besiege den Boss dieses Abschnitts, um den Mythos-Hintergrund freizuschalten."}</p>
      </article>
    `;
  }).join("");
}

function renderFateArchive() {
  el.fateCount.textContent = `${state.unlockedEndings.size}/${ENDING_ORDER.length}`;
  el.fateList.innerHTML = ENDING_ORDER.map((id) => {
    const ending = ENDINGS[id];
    const unlocked = state.unlockedEndings.has(id);
    return `
      <article class="fate-entry ${unlocked ? "unlocked" : "locked"} ${state.currentEnding === id ? "current" : ""}">
        <span>${unlocked ? ending.canonLabel : "Unbekanntes Schicksal"}</span>
        <strong>${unlocked ? ending.archiveTitle : "Versiegelter Ausgang"}</strong>
        <p>${unlocked ? ending.source : ending.hint}</p>
      </article>
    `;
  }).join("");
}

function renderQuestChronicle() {
  const history = state.questHistory;
  el.questChronicle.hidden = history.length === 0;
  el.questCount.textContent = `${history.filter((entry) => entry.status === "completed").length}/4`;
  el.questList.innerHTML = history.map((entry) => {
    const labels = {
      completed: "Gemeistert",
      failed: "Versucht",
      declined: "Vorübergegangen"
    };
    return `
      <article class="quest-entry ${entry.status}">
        <div>
          <strong>${entry.title}</strong>
          <span>${labels[entry.status]}</span>
        </div>
        <p>${entry.status === "declined" ? entry.reward : `${entry.score}/${entry.total} Prüfungen gelungen. ${entry.reward}`}</p>
      </article>
    `;
  }).join("");
}

function renderDecisionChronicle() {
  const history = state.decisionHistory;
  el.decisionChronicle.hidden = history.length === 0;
  el.decisionCount.textContent = `${history.length}/3`;
  el.decisionList.innerHTML = history.map((entry) => `
    <article class="decision-entry ${entry.resolved ? "resolved" : ""}">
      <div>
        <strong>${entry.trait}</strong>
        <span>${entry.sceneTitle}</span>
      </div>
      <p>${entry.consequence}</p>
      <small>${entry.resolved ? "Folge eingetreten" : "Die Unterwelt erinnert sich"}</small>
    </article>
  `).join("");
}

function tableHtml(rows) {
  const [head, ...body] = rows;
  return `
    <table class="grammar-table">
      <thead><tr>${head.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
      <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function actionTitle(levelIndex) {
  return [
    "Charons Fährgeld",
    "Das Torlied",
    "Stimmen im Asphodelos",
    "Persephones Urteil",
    "Kein Blick zurück"
  ][levelIndex];
}

function nextLevelLabel() {
  return state.levelIndex >= levels.length - 1 ? "Zum Licht" : "Nächste Schwelle";
}

function icon(type) {
  const icons = {
    boat: '<svg viewBox="0 0 32 32"><path d="M5 18h22l-3 7H9l-4-7Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 18V8l8 3v7" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    gate: '<svg viewBox="0 0 32 32"><path d="M6 27V11c0-4 4-7 10-7s10 3 10 7v16" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 27V14h8v13M6 14h20" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    shade: '<svg viewBox="0 0 32 32"><path d="M16 4c5 0 8 4 8 10v12l-4-3-4 3-4-3-4 3V14c0-6 3-10 8-10Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 14h.1M20 14h.1" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
    crown: '<svg viewBox="0 0 32 32"><path d="m5 11 6 5 5-9 5 9 6-5-3 14H8L5 11Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 25h16" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    lyre: '<svg viewBox="0 0 32 32"><path d="M9 5c-2 6-1 17 7 21 8-4 9-15 7-21M11 7h10M10 24h12M13 8v14M16 8v16M19 8v14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };
  return icons[type] || icons.lyre;
}

el.nextButton.addEventListener("click", nextTask);
el.restartButton.addEventListener("click", showDifficultySelection);
el.storyButton.addEventListener("click", advanceCutscene);
el.storySkipButton.addEventListener("click", startLevel);
el.hintSkill.addEventListener("click", useHint);
el.tableSkill.addEventListener("click", useTable);
el.graceSkill.addEventListener("click", useGrace);
el.inputForm.addEventListener("submit", submitTyped);
el.closeDialog.addEventListener("click", () => el.tableDialog.close());
el.gameOverRestart.addEventListener("click", resetGame);
el.questAccept.addEventListener("click", acceptSideQuest);
el.questDecline.addEventListener("click", declineSideQuest);
el.questContinue.addEventListener("click", continueAfterSideQuest);
el.ixionStrike.addEventListener("click", strikeIxion);
el.endingRestart.addEventListener("click", showDifficultySelection);
el.difficultyOptions.forEach((button) => {
  button.addEventListener("click", () => selectDifficulty(button.dataset.difficulty));
});

render();
showDifficultySelection();
