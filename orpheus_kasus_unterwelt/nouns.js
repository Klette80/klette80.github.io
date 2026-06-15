(function () {
  const nouns = [
    noun("rēs", "reī", "f", "fifth"),
    noun("rēx", "rēgis", "m", "third"),
    noun("locus", "locī", "m", "o"),
    noun("deus", "deī", "m", "o"),
    noun("pars", "partis", "f", "third-mixed"),
    noun("diēs", "diēī", "m", "fifth"),
    noun("manus", "manūs", "f", "fourth"),
    noun("homō", "hominis", "m", "third"),
    noun("hostis", "hostis", "m/f", "third-mixed"),
    noun("corpus", "corporis", "n", "third"),
    noun("vīta", "vītae", "f", "a"),
    noun("bellum", "bellī", "n", "o"),
    noun("urbs", "urbis", "f", "third-mixed"),
    noun("tempus", "temporis", "n", "third"),
    noun("virtūs", "virtūtis", "f", "third"),
    noun("pater", "patris", "m", "third"),
    noun("causa", "causae", "f", "a"),
    noun("domus", "domūs", "f", "domus"),
    noun("vīs", "vīs", "f", "vis"),
    noun("mors", "mortis", "f", "third"),
    noun("terra", "terrae", "f", "a"),
    noun("superī", "superōrum", "m", "o-plural"),
    noun("fortūna", "fortūnae", "f", "a"),
    noun("arma", "armōrum", "n", "o-plural"),
    noun("beneficium", "beneficiī", "n", "o"),
    noun("annus", "annī", "m", "o"),
    noun("castra", "castrōrum", "n", "o-plural"),
    noun("mōs", "mōris", "m", "third"),
    noun("modus", "modī", "m", "o"),
    noun("genus", "generis", "n", "third"),
    noun("caput", "capitis", "n", "third"),
    noun("rēgnum", "rēgnī", "n", "o"),
    noun("ratiō", "ratiōnis", "f", "third"),
    noun("īra", "īrae", "f", "a"),
    noun("fidēs", "fideī", "f", "fifth"),
    noun("gēns", "gentis", "f", "third-mixed"),
    noun("iter", "itineris", "n", "third"),
    noun("scelus", "sceleris", "n", "third"),
    noun("fīnis", "fīnis", "m", "third-mixed"),
    noun("eques", "equitis", "m", "third"),
    noun("agmen", "agminis", "n", "third"),
    noun("mare", "maris", "n", "third-i"),
    noun("cōnsilium", "cōnsiliī", "n", "o"),
    noun("imperium", "imperiī", "n", "o"),
    noun("exercitus", "exercitūs", "m", "fourth"),
    noun("opus", "operis", "n", "third"),
    noun("mōns", "montis", "m", "third-mixed"),
    noun("numerus", "numerī", "m", "o"),
    noun("iūs", "iūris", "n", "third"),
    noun("pectus", "pectoris", "n", "third"),
    noun("tēlum", "tēlī", "n", "o"),
    noun("puer", "puerī", "m", "o"),
    noun("aqua", "aquae", "f", "a"),
    noun("flūmen", "flūminis", "n", "third"),
    noun("lēgātus", "lēgātī", "m", "o"),
    noun("ingenium", "ingeniī", "n", "o"),
    noun("opēs", "opum", "f", "opes"),
    noun("glōria", "glōriae", "f", "a"),
    noun("vulnus", "vulneris", "n", "third"),
    noun("fuga", "fugae", "f", "a"),
    noun("mūnus", "mūneris", "n", "third"),
    noun("pecūnia", "pecūniae", "f", "a"),
    noun("lībertās", "lībertātis", "f", "third"),
    noun("pāx", "pācis", "f", "third"),
    noun("cāsus", "cāsūs", "m", "fourth"),
    noun("cīvis", "cīvis", "m/f", "third-mixed"),
    noun("lūx", "lūcis", "f", "third"),
    noun("ōrdō", "ōrdinis", "m", "third"),
    noun("sōl", "sōlis", "m", "third"),
    noun("iuvenis", "iuvenis", "m", "third"),
    noun("spatium", "spatiī", "n", "o"),
    noun("unda", "undae", "f", "a"),
    noun("animal", "animālis", "n", "third-i"),
    noun("lītus", "lītoris", "n", "third"),
    noun("patria", "patriae", "f", "a"),
    noun("aurum", "aurī", "n", "o"),
    noun("servus", "servī", "m", "o"),
    noun("carmen", "carminis", "n", "third"),
    noun("turba", "turbae", "f", "a"),
    noun("victor", "victōris", "m", "third"),
    noun("cursus", "cursūs", "m", "fourth"),
    noun("exemplum", "exemplī", "n", "o"),
    noun("nātus", "nātī", "m", "o"),
    noun("prōvincia", "prōvinciae", "f", "a"),
    noun("sententia", "sententiae", "f", "a"),
    noun("praesidium", "praesidiī", "n", "o"),
    noun("saxum", "saxī", "n", "o"),
    noun("memoria", "memoriae", "f", "a"),
    noun("mundus", "mundī", "m", "o"),
    noun("salūs", "salūtis", "f", "third"),
    noun("auxilium", "auxiliī", "n", "o"),
    noun("ventus", "ventī", "m", "o"),
    noun("speciēs", "speciēī", "f", "fifth"),
    noun("auris", "auris", "f", "third-mixed"),
    noun("caedēs", "caedis", "f", "third-mixed"),
    noun("māgnitūdō", "māgnitūdinis", "f", "third"),
    noun("dominus", "dominī", "m", "o"),
    noun("regiō", "regiōnis", "f", "third"),
    noun("nātūra", "nātūrae", "f", "a"),
    noun("nōmen", "nōminis", "n", "third")
  ];

  const translations = [
    "Sache, Ding",
    "König",
    "Ort",
    "Gott",
    "Teil",
    "Tag",
    "Hand",
    "Mensch",
    "Feind",
    "Körper",
    "Leben",
    "Krieg",
    "Stadt",
    "Zeit",
    "Tapferkeit, Tugend",
    "Vater",
    "Ursache, Grund",
    "Haus",
    "Kraft, Gewalt",
    "Tod",
    "Erde, Land",
    "die Götter da oben",
    "Glück, Schicksal",
    "Waffen",
    "Wohltat, Gefallen",
    "Jahr",
    "Lager",
    "Sitte, Brauch",
    "Maß, Art",
    "Art, Geschlecht",
    "Kopf",
    "Herrschaft, Reich",
    "Vernunft, Berechnung",
    "Zorn",
    "Treue, Vertrauen",
    "Stamm, Volk",
    "Weg, Marsch",
    "Verbrechen",
    "Grenze, Ende",
    "Reiter",
    "Zug, Heerzug",
    "Meer",
    "Rat, Plan",
    "Herrschaft, Befehl",
    "Heer",
    "Werk, Arbeit",
    "Berg",
    "Zahl",
    "Recht",
    "Brust, Herz",
    "Geschoss, Waffe",
    "Knabe",
    "Wasser",
    "Fluss",
    "Gesandter, Legat",
    "Begabung, Geist",
    "Macht, Mittel, Reichtum",
    "Ruhm",
    "Wunde",
    "Flucht",
    "Dienst, Geschenk, Aufgabe",
    "Geld",
    "Freiheit",
    "Frieden",
    "Fall, Zufall",
    "Bürger",
    "Licht",
    "Reihe, Ordnung",
    "Sonne",
    "junger Mensch",
    "Raum, Zeitraum",
    "Welle",
    "Lebewesen, Tier",
    "Küste, Strand",
    "Vaterland",
    "Gold",
    "Sklave, Diener",
    "Lied, Gedicht",
    "Menge, Lärm",
    "Sieger",
    "Lauf, Verlauf",
    "Beispiel",
    "Sohn",
    "Provinz",
    "Meinung, Satz",
    "Schutz, Besatzung",
    "Fels, Stein",
    "Erinnerung",
    "Welt",
    "Heil, Rettung",
    "Hilfe",
    "Wind",
    "Anblick, Gestalt",
    "Ohr",
    "Mord, Blutbad",
    "Größe",
    "Herr",
    "Gegend, Region",
    "Natur",
    "Name"
  ];

  if (translations.length !== nouns.length) {
    throw new Error("Die deutschen Übersetzungen passen nicht zum 100-Nomen-Wortschatz.");
  }
  nouns.forEach((entry, index) => {
    entry.deutsch = translations[index];
  });

  const labels = {
    nom_sg: "Nominativ Singular",
    gen_sg: "Genitiv Singular",
    dat_sg: "Dativ Singular",
    acc_sg: "Akkusativ Singular",
    abl_sg: "Ablativ Singular",
    nom_pl: "Nominativ Plural",
    gen_pl: "Genitiv Plural",
    dat_pl: "Dativ Plural",
    acc_pl: "Akkusativ Plural",
    abl_pl: "Ablativ Plural"
  };

  function noun(nom, gen, gender, type) {
    return { nom, gen, gender, type };
  }

  function stripEnding(value, endings) {
    const ending = endings.find((candidate) => value.endsWith(candidate));
    return ending ? value.slice(0, -ending.length) : value;
  }

  function formsFor(entry) {
    if (entry.type === "vis") {
      return {
        nom_sg: "vīs", gen_sg: "vīs", dat_sg: "vī", acc_sg: "vim", abl_sg: "vī",
        nom_pl: "vīrēs", gen_pl: "vīrium", dat_pl: "vīribus", acc_pl: "vīrēs", abl_pl: "vīribus"
      };
    }

    if (entry.type === "domus") {
      return {
        nom_sg: "domus", gen_sg: "domūs", dat_sg: "domuī", acc_sg: "domum", abl_sg: "domō",
        nom_pl: "domūs", gen_pl: "domuum", dat_pl: "domibus", acc_pl: "domōs", abl_pl: "domibus"
      };
    }

    if (entry.type === "opes") {
      return {
        nom_pl: "opēs", gen_pl: "opum", dat_pl: "opibus", acc_pl: "opēs", abl_pl: "opibus"
      };
    }

    if (entry.type === "a") {
      const stem = stripEnding(entry.gen, ["ae"]);
      return {
        nom_sg: entry.nom, gen_sg: `${stem}ae`, dat_sg: `${stem}ae`, acc_sg: `${stem}am`, abl_sg: `${stem}ā`,
        nom_pl: `${stem}ae`, gen_pl: `${stem}ārum`, dat_pl: `${stem}īs`, acc_pl: `${stem}ās`, abl_pl: `${stem}īs`
      };
    }

    if (entry.type === "o" || entry.type === "o-plural") {
      const stem = stripEnding(entry.gen, ["ōrum", "ī"]);
      const neuter = entry.gender === "n";
      const plural = {
        nom_pl: neuter ? `${stem}a` : `${stem}ī`,
        gen_pl: `${stem}ōrum`,
        dat_pl: `${stem}īs`,
        acc_pl: neuter ? `${stem}a` : `${stem}ōs`,
        abl_pl: `${stem}īs`
      };
      if (entry.type === "o-plural") return plural;
      return {
        nom_sg: entry.nom, gen_sg: `${stem}ī`, dat_sg: `${stem}ō`,
        acc_sg: neuter ? entry.nom : `${stem}um`, abl_sg: `${stem}ō`,
        ...plural
      };
    }

    if (entry.type === "fourth") {
      const stem = stripEnding(entry.gen, ["ūs"]);
      const neuter = entry.gender === "n";
      return {
        nom_sg: entry.nom, gen_sg: `${stem}ūs`, dat_sg: `${stem}uī`,
        acc_sg: neuter ? entry.nom : `${stem}um`, abl_sg: `${stem}ū`,
        nom_pl: neuter ? `${stem}ua` : `${stem}ūs`, gen_pl: `${stem}uum`,
        dat_pl: `${stem}ibus`, acc_pl: neuter ? `${stem}ua` : `${stem}ūs`, abl_pl: `${stem}ibus`
      };
    }

    if (entry.type === "fifth") {
      const stem = stripEnding(entry.gen, ["eī", "ēī"]);
      return {
        nom_sg: entry.nom, gen_sg: entry.gen, dat_sg: entry.gen, acc_sg: `${stem}em`, abl_sg: `${stem}ē`,
        nom_pl: `${stem}ēs`, gen_pl: `${stem}ērum`, dat_pl: `${stem}ēbus`, acc_pl: `${stem}ēs`, abl_pl: `${stem}ēbus`
      };
    }

    const stem = stripEnding(entry.gen, ["is"]);
    const neuter = entry.gender === "n";
    const iStem = entry.type === "third-i";
    const mixedStem = entry.type === "third-mixed";
    return {
      nom_sg: entry.nom,
      gen_sg: entry.gen,
      dat_sg: `${stem}ī`,
      acc_sg: neuter ? entry.nom : `${stem}em`,
      abl_sg: iStem ? `${stem}ī` : `${stem}e`,
      nom_pl: neuter ? `${stem}${iStem ? "ia" : "a"}` : `${stem}ēs`,
      gen_pl: `${stem}${iStem || mixedStem ? "ium" : "um"}`,
      dat_pl: `${stem}ibus`,
      acc_pl: neuter ? `${stem}${iStem ? "ia" : "a"}` : `${stem}ēs`,
      abl_pl: `${stem}ibus`
    };
  }

  window.LATIN_VOCABULARY = Object.freeze({
    nouns: Object.freeze(nouns),
    labels: Object.freeze(labels),
    formsFor
  });
}());
