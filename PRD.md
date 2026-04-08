# PRD – NaturalPlus24.de Shopify Shop

## 1. Projektbeschreibung

**Projektname:** NaturalPlus24 – Shopify Custom Theme (Dawn-Basis)
**URL:** naturalplus24.de
**Hersteller:** NaturalPlus (Rumänien) – Premiumsupplemente zu fairen Preisen
**Ziel:** Einen professionellen Shopify-Shop aufbauen, der wie eine €10.000-Custom-Lösung wirkt. Die Marke soll als **Preis-Leistungssieger** positioniert werden – qualitativ klar über „Billig-Anbietern" wie Myprotein, aber zugänglich und ehrlich im Preis.

---

## 2. Positionierung & Tonalität

- **Markenbotschaft:** Premium-Supplemente. Fairer Preis. Echter Unterschied.
- **Tonalität:** Selbstbewusst, direkt, motivierend – nie arrogant. Energie ohne Aggression.
- **Differenzierung:** Europäische Qualität (rumänischer Hersteller), transparente Inhaltsstoffe, nachvollziehbares Preis-Leistungs-Verhältnis
- **Vorbilder:** ESN (sauberes Design, starke Headlines), Neosupps (professionell, deutsch, minimalistisch), Nutreko (zielorientierte Sektionen, energetische Hero-Bereiche)
- **Abgrenzung:** Niemals billig wirken. Keine übertriebenen Neon-Effekte. Kein generisches Template-Look.

---

## 3. Zielgruppe

| Segment | Beschreibung |
|---|---|
| Primär | 18–45 Jahre, aktiv sportlich, Fitnessstudio-Besucher (3–5x/Woche) |
| Sekundär | 30–55 Jahre, Gesundheitsbewusste, Einsteiger im Fitnessbereich |
| Motivation A | Muskelaufbau & Masseaufbau |
| Motivation B | Abnehmen & Gewichtsverlust |
| Motivation C | Allgemeine Gesundheit, Vitalität, Energie |
| Sprache | Deutsch (DE-Markt), gelegentlich internationale Kunden |

---

## 4. Farbpalette

| Farbe | HEX | Verwendung |
|---|---|---|
| Brand Red | `#D2090E` | CTAs, Buttons, Highlights, Aktionen |
| Deep Red | `#A5070B` | Hover-Zustände, Badges, Sale-Tags |
| Black | `#0D0D0D` | Header-Hintergrund, Hero-Bereich, Footer |
| Dark Gray | `#1A1A1A` | Sekundäre dunkle Abschnitte |
| Mid Gray | `#333333` | Body-Text auf weißem Hintergrund |
| Light Gray | `#F5F5F5` | Hintergrund für Produktsektionen |
| White | `#FFFFFF` | Haupthintergrund, Texte auf Dunkel |
| Accent White | `#F0F0F0` | Karten, Borders |

**Grundregel:** Dark sections (Header, Hero, Footer) in `#0D0D0D`/Schwarz. Content-Bereiche in Weiß/Hellgrau. Rot ausschließlich für Aktionselemente und CTAs – nie als Flächenfarbe.

---

## 5. Typografie

| Element | Font | Gewicht | Größe |
|---|---|---|---|
| Headlines (Hero) | Inter | 800 ExtraBold | 48–72px, UPPERCASE |
| Section Headings | Inter | 700 Bold | 28–36px |
| Subheadings | Inter | 600 SemiBold | 18–22px |
| Body Text | Inter | 400 Regular | 14–16px |
| Buttons / Labels | Inter | 600 SemiBold | 13–15px, UPPERCASE |
| Preise | Inter | 700 Bold | 18–24px |

**Google Font:** `Inter` (400, 600, 700, 800)
**Fallback:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

---

## 6. Website-Sektionen (Homepage)

### 6.1 Announcement Bar (oberste Leiste)
- Schmale Leiste, schwarzer Hintergrund, weißer Text
- Rotierender Text (Karussell): z.B. „Kostenloser Versand ab 40€" · „Hergestellt in Europa" · „30 Tage Rückgaberecht"
- Kein Close-Button – immer sichtbar

### 6.2 Header / Navigation
- Sticky Header (bleibt beim Scrollen oben)
- Schwarzer Hintergrund
- Logo (weiß/rot) linksbündig
- Navigation mittig: Produkte | Bestseller | Ziele (Muskelaufbau, Abnehmen, Gesundheit) | Sale
- Rechts: Suche-Icon, Account-Icon, Warenkorb-Icon mit Zähler (rot)
- Kein Mega-Menü auf mobil – Hamburger-Menü mit Drawer

### 6.3 Hero-Sektion (Vollbild Banner)
- Vollbild-Bild oder -Video mit dunkler Overlay-Schicht
- Hintergrund: Athlete-Imagery oder Produktinszenierung auf schwarzem Grund
- Headline (weiß, UPPERCASE, 60–72px): z.B. „DEIN BESTES TRAINING BEGINNT HIER"
- Subtext (weißgrau, 18px): kurze Value Proposition
- 2 Buttons: Primär (rot, „JETZT ENTDECKEN") + Sekundär (weiß outline, „BESTSELLER")
- Kein statisches Bild-Karussell – ein starkes, einziges Hero-Bild

### 6.4 Trust Bar / USP-Leiste
- 4 Icons mit kurzen Texten auf hellgrauem Hintergrund
  1. Versandkostenfrei ab 40€
  2. Hergestellt in Europa
  3. Schnelle Lieferung (2–4 Tage)
  4. 30 Tage Rückgabe
- Icons: minimalistisch, schwarz/grau

### 6.5 Ziel-Kategorien (Goal-Based Navigation)
- 3 Kacheln nebeneinander (Desktop), übereinander (Mobil)
- Jede Kachel: dunkles Hintergrundbild mit Athleten, Overlay, weißer Headline, kleiner roter CTA-Button
  - MUSKELAUFBAU
  - ABNEHMEN & DEFINITION
  - GESUNDHEIT & VITALITÄT

### 6.6 Bestseller / Top Picks
- Section-Headline: „UNSERE BESTSELLER" (schwarz, UPPERCASE, linksbündig)
- Produktgrid: 4 Spalten Desktop / 2 Spalten Mobil
- Produktkarte enthält:
  - Produktbild (weiß/transparenter Hintergrund)
  - Produktname
  - Kurzbeschreibung (Geschmack/Menge/Variante)
  - Sternebewertung + Anzahl Reviews
  - Preis (groß, schwarz) + Streichpreis falls Sale (rot)
  - „In den Warenkorb"-Button (rot, voll) + Hover-Effekt
  - Badge: „Bestseller" (schwarz) oder „Sale" (rot) oder „Neu" (grau)
- Filter-Leiste oberhalb: Alle | Protein | Creatin | Booster | Vitamine

### 6.7 Promotional Banner (50% Breite Split)
- Linke Hälfte: dunkler Hintergrund, großes „BIS ZU 30% SPAREN" + CTA rot
- Rechte Hälfte: Produktbild/-inszenierung
- Oder alternativ: Vollbreite dunkles Banner mit Produktbild rechts, Text links

### 6.8 Trending / Neue Produkte
- Section: „NEU BEI NATURALPLUS"
- Horizontales Scroll-Karussell (4 Produkte sichtbar auf Desktop)
- Gleiche Produktkarten wie in 6.6

### 6.9 Warum NaturalPlus? (Brand Story)
- 3–4 Spalten mit Icon + Headline + kurzem Text
  - Europäische Qualität
  - Transparent & Ehrlich
  - Geprüfte Inhaltsstoffe
  - Über X zufriedene Kunden
- Hintergrund: Dunkel (#1A1A1A), weiße Texte, rote Icon-Akzente

### 6.10 Kundenbewertungen (Social Proof)
- Headline: „WAS UNSERE KUNDEN SAGEN"
- 3–4 Review-Karten nebeneinander
- Sterne, Zitat, Name + Produkt
- Hintergrund: Hellgrau `#F5F5F5`

### 6.11 Newsletter-Banner
- Schmales, dunkles Banner
- Text: „10% RABATT AUF DEINE ERSTE BESTELLUNG"
- E-Mail Input + roter Subscribe-Button
- Kleiner Hinweis: kein Spam, jederzeit abmeldbar

### 6.12 Footer
- Schwarzer Hintergrund, weißer Text
- 4 Spalten:
  1. Logo + kurze Markenbeschreibung + Social Icons
  2. Navigation (Produkte, Über uns, Blog...)
  3. Kundenservice (Kontakt, Versand, Rückgabe, FAQ)
  4. Kontakt + Zahlungsarten-Icons
- Untere Zeile: Copyright + Datenschutz + Impressum

---

## 7. Produktseite

- Großes Produktbild links (mit Zoom), Thumbnail-Galerie unten
- Rechts: Produktname, Sternebewertung, Preis, Variantenauswahl (Geschmack, Menge)
- Primär-Button: „IN DEN WARENKORB" (rot, volle Breite)
- Sekundär: „JETZT KAUFEN" (schwarz)
- Accordion-Abschnitte: Beschreibung | Nährwerte | Einnahmeempfehlung | Bewertungen
- Cross-Sell-Sektion: „WIRD OFT ZUSAMMEN GEKAUFT"

---

## 8. Technische Anforderungen

- **Basis-Theme:** Shopify Dawn (aktuellste Version)
- **Sprache:** Deutsch (DE)
- **Performance:** Lazy Loading für Bilder, minimales JS
- **Mobile First:** Alle Sektionen vollständig responsiv
- **Checkout:** Shopify Native Checkout – NIEMALS customizen
- **Fonts:** Google Fonts (Inter) über Shopify-Assets laden
- **CSS-Variablen:** Alle Farben als CSS Custom Properties definiert
- **GitHub:** Alle Änderungen über Git versioniert, main-Branch = Live-Theme

---

## 9. Was NICHT gebaut wird (Scope-Out)

- Kein eigener Checkout
- Kein Custom Backend / Liquid-Logik für Abonnements (kein Recharge)
- Kein mehrsprachiges Setup (nur DE)
- Keine Custom-App-Entwicklung

---

## 10. Referenzen

| Quelle | Aspekt |
|---|---|
| naturalplus.ro | Markenfarben, Logo, Produktpalette |
| esn.com | Headline-Typografie, Clean Dark Aesthetic |
| neosupps.com | Navigation, Produktgrid, Deutsche Texte |
| Nutreko (PDF-Referenz) | Ziel-Kategorien, Hero-Layout, Promo-Sektionen, Footer |
