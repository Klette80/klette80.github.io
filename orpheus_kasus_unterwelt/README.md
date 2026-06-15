# Orpheus: Die Kasus der Unterwelt

Ein browserbasiertes Lernspiel für Latein im 1.-2. Lernjahr.

## Start

Öffne `index.html` direkt im Browser oder lege den Ordner auf einen Webserver.

Vor dem Spielstart wird ein Rang gewählt:

- Novize: nur a-, o- und e-Deklination
- Legionär: Novize plus 3. Deklination und i-Stämme
- Centurio: alle Klassen einschließlich u-Deklination und Sonderformen

Die Auswahl steuert sowohl die Trainingsaufgaben als auch die Endungen in den Bosskämpfen. Über „Neues Spiel“ kann der Rang neu gewählt werden.

## Spielidee

Orpheus steigt in die Unterwelt hinab, um Eurydike zu retten. Jede richtige Deklinationsform wirkt einen Klang der Lyra. Die Level steigen progressiv an:

- Ufer des Styx: a-Deklination
- Tor des Hades: o-Deklination
- Asphodeloswiesen: 3. Deklination
- Palast der Persephone: i-Deklination
- Der Weg zurück: gemischte Deklinationen mit Texteingabe

Das Spiel kombiniert Lebenspunkte, Lyra-Energie, Serienboni, Hilfszauber und einen Mythos-Codex.

## Version 2: Story und Bosskämpfe

Jedes Level besteht jetzt aus drei Phasen:

- Animierte Zwischensequenz mit Figurenporträts, Dialogen und Mythoswissen
- Trainingskampf mit progressiv schwereren Deklinationsaufgaben
- Bosskampf unter Zeitdruck auf einem bewegten Notenblatt

Die Zwischensequenzen orientieren sich an klassischen Computer-Rollenspielen:

- Schreibmaschinen-Effekt für jede Dialogzeile
- Mundbewegung und Hervorhebung der sprechenden Figur
- zufälliges Fackelflackern und langsam ziehender Nebel
- Gespräche mit Charon, Persephone und Eurydike
- überspringbare Dialoge und reduzierte Animationen nach Systemeinstellung

Die Hilfen werden im Spielverlauf zurückgefahren:

- Level 1: Hermes-Hinweise, Tabelle und Gnade verfügbar
- Level 2: reduzierte Hinweise, keine Gnade
- Ab Level 3: keine aktiven Tipps mehr, stärkerer Fokus auf freie Eingabe und Formenbestimmung

## Erweiterter Wortschatz

Die Datei `nouns.js` enthält alle 100 Nomen aus `latein_100_nomen_markdown.md` als strukturierte Datenbasis. Bei jedem Neustart werden neue Aufgaben erzeugt:

- Level 1: a-Deklination
- Level 2: o-Deklination und Pluralia tantum
- Level 3: 3. Deklination und gemischte Stämme
- Level 4: i-Stämme
- Finale: alle 100 Nomen einschließlich u-/e-Deklination und Sonderformen

Die deutschen Bedeutungen stammen aus `latein_100_nomen_markdown_mit_deutsch.md`. Sie werden bei jeder regulären Aufgabe und auch im Bosskampf direkt unter dem lateinischen Nomen angezeigt.

Bei Verlust aller Lebenspunkte erscheint das Game-over-Overlay „Ludus finitus est“.

## Ovidische Erinnerungen

Die erste Story-Erweiterung ergänzt drei interaktive Erinnerungssequenzen:

- das unheilvolle Hochzeitsomen mit der flammenlosen Fackel
- Eurydikes Tod durch den Schlangenbiss
- Orpheus' Trauer und sein Entschluss zum Abstieg

Die Szenen werden vor dem ersten Level sowie nach den ersten beiden Bosskämpfen eingeblendet. Jede Erinnerung endet mit einer kurzen Quellenrekonstruktion. Falsche Antworten kosten keine Lebenspunkte, sondern werden historisch eingeordnet. Die Angaben orientieren sich an Ovid, `Metamorphosen 10,1-16`; die Aristaios-Verfolgung wird ausdrücklich als Vergils Version kenntlich gemacht.

## Dialogentscheidungen

In drei Zwischensequenzen legt der Spieler Orpheus' Haltung fest:

- vor Charon: demütige `Pietas` oder trotzige `Audacia`
- bei den Schatten: mitfühlende `Misericordia` oder zielstrebige `Constantia`
- vor Persephone: vertrauende `Fides` oder kontrollierte `Disciplina`

Die Entscheidungen verändern spätere Dialogzeilen und lösen verzögerte Spielwirkungen aus, etwa einmaligen Schutz, Heilung, zusätzliche Bosszeit oder einen abgefangenen falschen Klang. Der Mythos-Codex führt die gewählten Haltungen und zeigt, ob ihre Folge bereits eingetreten ist. Die Auswahl ist eine spielerische Dramatisierung; der mythologische Verlauf nach Ovid wird dadurch nicht umgeschrieben.

## Wiederkehrende Figuren und Nebenquests

Nach den ersten vier Bosskämpfen kann jeweils eine optionale Abzweigung erscheinen:

- **Charons Rückfahrt:** Das Boot wird durch eines von drei Formtoren gesteuert. Bei Erfolg heilt Charon einen Lebenspunkt und verlängert den folgenden Bosskampf. Die frühere Dialoghaltung verändert dabei Schutz oder Zeitbudget.
- **Sisyphus' letzter Schritt:** In einer fallenden Kasus-Kaskade müssen Endungen getroffen werden, bevor der Felsdruck sein Maximum erreicht. Bei Erfolg schützt Sisyphus' Atem im folgenden Hauptlevel einmal vor Schaden.
- **Die Gefäße der Danaiden:** Vorbeiströmende Nomenformen werden unter Zeitdruck Gefäßen mit dem passenden Kasus und Numerus zugeordnet. Bei Erfolg wird die Lyra gefüllt und der nächste Bosskampf verlängert.
- **Ixions Rad:** Vier Endungen kreisen um das Rad. Der Saitenschlag muss genau dann erfolgen, wenn die verlangte Endung die Trefferzone erreicht. Bei Erfolg wird im finalen Bosskampf ein falscher Klang abgefangen.

Sisyphus, die Danaiden und Ixion greifen Figuren auf, deren Strafen nach Ovids `Metamorphosen 10` durch Orpheus' Gesang kurz zum Stillstand kommen. Charons Rückfahrt wird ausdrücklich als spielerische Ergänzung kenntlich gemacht, da Ovid diese Fahrt nicht schildert. Charon kehrt auf dem Rückweg als kommentierende Figur zurück und reagiert darauf, welche Nebenquests Orpheus angenommen oder ausgelassen hat.

Die Questchronik im Mythos-Codex hält gemeisterte, versuchte und abgelehnte Nebenquests samt ihrer Folgen fest.

## Dateien

- `index.html`: Oberfläche
- `styles.css`: Game-Design und Responsive Layout
- `game.js`: Spiellogik, Aufgaben, Level und Codex
- `nouns.js`: Formenbildung und Wortschatz der 100 Nomen
- `assets/orpheus-styx.png`: Spielszene
- `assets/charon-portrait.png`: generiertes Charon-Porträt
- `assets/persephone-portrait.png`: generiertes Persephone-Porträt
- `assets/eurydice-portrait.png`: generiertes Eurydike-Porträt
- `assets/sisyphus-portrait.png`: generiertes Sisyphus-Porträt
- `assets/danaid-portrait.png`: generiertes Danaiden-Porträt
- `assets/ixion-portrait.png`: generiertes Ixion-Porträt
- `assets/concept-ui.png`: generiertes Designkonzept
