# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Projektkontext

Du arbeitest am Shopify-Shop **NaturalPlus24.de** – einem deutschen Online-Shop für Nahrungsergänzungsmittel des rumänischen Herstellers NaturalPlus. Das Theme basiert auf **Shopify Dawn v15.4.1** und wird über **GitHub** mit dem Shopify-Store synchronisiert.

Das vollständige Design-Briefing findest du in `PRD.md` im Projektverzeichnis.

**Aktueller Stand:** Das Theme ist ein sauberer Dawn-Fork ohne NaturalPlus-Customizations. CLAUDE.md und PRD.md sind als ungetrackte Dateien vorhanden; alle anderen Dateien entsprechen Stock-Dawn.

---

## Entwicklungs-Commands

```bash
# Lokale Theme-Vorschau starten (erfordert Shopify CLI + Store-Verbindung)
shopify theme dev

# Theme in spezifischen Store deployen
shopify theme push

# Theme aus Store pullen
shopify theme pull

# Shopify CLI Login
shopify auth login
```

---

## Tech Stack

- **Shopify Theme:** Dawn v15.4.1 (geforkt)
- **Templating:** Liquid (`.liquid` Dateien)
- **Styles:** CSS mit Custom Properties (keine SASS/SCSS)
- **JavaScript:** Vanilla JS mit Web Components (`customElements.define()`)
- **Versionierung:** Git + GitHub → `main`-Branch = Live-Theme

---

## Architektur & Code-Muster

### CSS-Custom-Properties-System

Farben und Layout werden auf zwei Ebenen definiert:

1. **`/assets/base.css`** – Statische Utility-Properties (Animationen, Focus-Zustände, Alpha-Werte)
2. **`/layout/theme.liquid`** – Laufzeit-Properties aus `settings_schema.json` (Farben, Schriften, Abstände)

NaturalPlus-Brandfarben müssen als neues Color Scheme in `settings_schema.json` ergänzt und via `theme.liquid` injiziert werden.

### JavaScript-Muster

Das Theme nutzt **native Web Components** – kein Framework. Wichtige Patterns:

- **Event-Bus:** `assets/pubsub.js` – `subscribe(eventName, callback)` / `publish(eventName, data)` für komponentenübergreifende Kommunikation (z.B. Warenkorb-Updates)
- **HTML-Swaps:** `HTMLUpdateUtility` in `global.js` für DOM-Updates ohne Full-Reload (View Transitions)
- **Accessibility:** `trapFocus()` für Modals; ARIA-Management in Details/Summary-Elementen

### Sections-Struktur

Jede Section in `/sections/` folgt dem Muster:
- **Liquid-Template:** Markup mit `{% schema %}` am Ende
- **Schema:** `settings` (section-weit) + `blocks` (wiederholbare Sub-Komponenten) + `presets` (Customizer-Defaults)
- **Eigene CSS-Datei** in `/assets/section-*.css` für Sektions-spezifische Styles
- **Web Component** (falls interaktiv) in `/assets/*.js`

Neue Custom Sections demselben Muster folgen.

### Settings Schema

`/config/settings_schema.json` (1.455 Zeilen) steuert alle Theme-Customizer-Optionen: Color Schemes, Typografie, Layout, Card-Styling, Animationen. NaturalPlus-Branding hier als eigenes Color Scheme mit `#D2090E` / `#0D0D0D` eintragen.

---

## Design-Regeln (strikt einhalten)

### Farben (CSS Custom Properties)

```css
--color-brand-red: #D2090E;
--color-brand-red-dark: #A5070B;
--color-black: #0D0D0D;
--color-dark: #1A1A1A;
--color-text: #333333;
--color-bg-light: #F5F5F5;
--color-white: #FFFFFF;
```

Keine hardgecodeten Hex-Werte in Stylesheets – immer CSS Custom Properties verwenden.

### Typografie

- **Font:** Inter (Google Fonts, Gewichte: 400, 600, 700, 800)
- **Headlines:** UPPERCASE, ExtraBold (800)
- **Buttons:** SemiBold (600), UPPERCASE
- **Body:** Regular (400), 14–16px

### Stil-Prinzipien

- Dark sections (Header, Hero, Footer): Hintergrund `#0D0D0D`
- Content-Bereiche: Weiß oder `#F5F5F5`
- Rot NUR für CTAs, Buttons, Sale-Badges – niemals als Hintergrundfläche
- Keine Schatten-Exzesse, keine Gradienten außer subtile dunkle Overlay-Gradienten auf Bildern

---

## Verhaltensregeln

1. **VERÄNDERE NIEMALS die Checkout-Seite** (`/checkout`). Sie ist Shopify-native und out-of-scope.
2. **Lies PRD.md** bei Unklarheiten, bevor du Entscheidungen triffst.
3. **Keine Breaking Changes an Dawn-Core-Funktionen** ohne explizite Aufforderung.
4. **Mobile First** – jede neue Sektion muss auf Mobilgeräten (375px Breite) vollständig funktionieren.
5. **Performance** – Bilder immer mit `loading="lazy"` und `width`/`height`-Attributen. Kein unnötiges JS.
6. **Kommentare auf Deutsch** – Code-Kommentare und Commit-Messages auf Deutsch.
7. **Git-Disziplin** – nach jeder abgeschlossenen Sektion committen mit beschreibender Message.

---

## Homepage-Sektionen (Bauplan)

In dieser Reihenfolge bauen:

1. Announcement Bar
2. Header / Navigation (sticky, dark)
3. Hero-Sektion (vollbild, dark)
4. Trust Bar (4 USPs)
5. Ziel-Kategorien (3 Kacheln: Muskelaufbau · Abnehmen · Gesundheit)
6. Bestseller-Grid (mit Filter-Leiste)
7. Promotional Banner
8. Neue Produkte (Karussell)
9. Brand Story / Warum NaturalPlus
10. Kundenbewertungen
11. Newsletter-Banner
12. Footer

---

## Referenz-Websites

- **naturalplus.ro** – Markenfarben und Logo-Stil
- **esn.com** – Headlines, Dark Aesthetic
- **neosupps.com** – Produktgrid, Navigation, DE-Markt-Standard
- **Nutreko** (PDF-Referenz im Projektordner) – Gesamt-Layout-Vorlage

---

## Shopify Customizer – Wichtige Hinweise

- **Header Color Scheme:** Im Theme-Customizer unter Header → Color Scheme ein dunkles Schema wählen (`scheme-4`), damit Dawns eigene Icon-SVGs korrekt weiß gerendert werden. Das CSS übernimmt dann den Rest.

---

## Out of Scope

- Checkout-Seite
- Mehrsprachigkeit
- Custom-App-Entwicklung
- Abonnement-Logik (kein Recharge)
