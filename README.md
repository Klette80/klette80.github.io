# Ludus Digitalis

Eine statische Plattform für fachlich fundierte, erzählerische Browsergames im Bildungsbereich.

## Enthaltene Spiele

- **Orpheus: Die Kasus der Unterwelt**: Latein-Lernspiel zu Deklinationen und antiker Mythologie.
- **Das Labyrinth von Kreta**: Latein-Abenteuer zu Deklinationen und Mythologie (Theseus, Minotaurus).
- **NaTu-Quest**: Quiz-Abenteuer für Natur & Technik / Biologie (Klasse 5 & 6).

## Lokal starten

Da die Seite vollständig statisch ist, genügt ein lokaler Webserver:

```powershell
python -m http.server 3135 --bind 127.0.0.1
```

Danach ist die Seite unter `http://127.0.0.1:3135` erreichbar.

## Neues Spiel ergänzen

1. Das Spiel als eigenen Unterordner im Repository ablegen.
2. Alle Ressourcen mit relativen Pfaden referenzieren.
3. In der Spielbibliothek der Root-`index.html` einen Eintrag ergänzen.
4. Lokal auf Desktop und Mobil testen.

## Veröffentlichung

Die Seite ist für GitHub Pages ausgelegt und benötigt keinen Build-Schritt. Sie kann direkt aus dem Root-Verzeichnis des `main`-Branches veröffentlicht werden.
