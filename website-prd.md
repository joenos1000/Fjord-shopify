# Fjord Shopify Website PRD (Core Design)

## 1. Dokumentformål
Dette dokument definerer den overordnede designretning for Fjord Bryggeri og Destilleri webshoppen på Shopify. Fokus er på brandidentitet, visuel stil, tone, UX-principper og designkrav.

V1 af dette dokument inkluderer designretningen samt konkrete specifikationer for global header og hjemmesidens hero-sektion. Øvrige sider og indholdsmoduler håndteres i næste fase.

## 2. Produkt- og forretningskontekst

### 2.1 Hvad der sælges
Håndlavede spiritus- og specialølsprodukter fra Fjord Bryggeri og Destilleri, herunder:
- Gin: Fjord Blik, Lemon Twist
- Rom
- Snaps: Fjord Snaps, Påske Snaps
- Likører: kaffe, orange
- Specialøl: Søgang Saison, Rødskæg, Mørkrav

### 2.2 Prisposition
- Prisniveau: ca. 45 DKK og opefter
- Positionering: premium håndværk med lokal autenticitet

### 2.3 Målgruppe
Danske kunder, der værdsætter:
- Lokalt producerede drikkevarer
- Håndværksmæssig kvalitet
- Troværdighed, tradition og autenticitet

### 2.4 Oplevelser og aktiviteter
Ud over produktsalg tilbyder Fjord Bryggeri og Destilleri fysiske oplevelser, som også skal fremgå af webshoppen:
- **Rundvisning:** Guidede ture på bryggeriet og destilleriet
- **Fredagsbar / Fredagsfurter:** Tilbagevendende fredagsarrangement på stedet — bar, mad og atmosfære

### 2.5 Stedet og bygningen
Fjord Bryggeri og Destilleri holder til i en historisk bygning, som er en vigtig del af brandets karakter og autenticitet. Bygningens visuelle identitet skal bruges aktivt som en del af storytelling på sitet — særligt i hero- og om-sektioner.

## 3. Brandfundament

### 3.1 Brandpersonlighed
Brandet skal opleves som:
- Autentisk
- Håndværksmæssigt
- Jordnært
- Varmt og imødekommende
- Stolt lokalt forankret (Morsø/fjord)

Tonalt billede: en erfaren brygmester, passioneret om faget, uden at være prætentiøs.

### 3.2 Stedets karakter
Den historiske bygning er en central del af brandets DNA. Den skal formidles visuelt og tekstmæssigt som et levende, autentisk sted — ikke bare en produktion, men et håndværksmiljø med sjæl og fortid. Dette særligt i hero-sektioner og "Om"-siden.

### 3.3 Brandløfte (designmæssigt)
Webshoppen skal formidle, at produkterne er produceret med faglig stolthed og respekt for dansk bryg- og destillationstradition, i en moderne nordisk ramme.

## 4. Designmål
1. Skab et visuelt udtryk, der føles premium, roligt og nordisk.
2. Lad produkter og håndværk være det tydelige fokus.
3. Underbyg lokal troværdighed og kvalitet gennem materialitet, typografi og billedstil.
4. Sikr høj læsbarhed og enkel navigation uden støj.

## 5. Visuel retning

### 5.1 Farvesystem
Primære farver:
- Camel: `#A78952`
- Dark Coffee: `#3C2313`

Neutrale farver:
- Ivory Mist (lyse baggrunde): `#FFF9E4`
- Carbon Black (tekst): `#212121`
- Alternativ mørk tekst: `#3C2313`

Retningslinjer:
- Brug få farver konsekvent (nordisk minimalisme)
- Prioritér høj kontrast for læsbarhed
- Farver skal støtte produktpræsentation, ikke overdøve den

### 5.2 Typografi
- Overskrifter: **ATF Headline Gothic**
- Brødtekst: **MinionPro** og **Helvetica**

Retningslinjer:
- Store, tydelige overskrifter i hero- og nøglesektioner
- Brødtekst skal være rolig, letlæselig og diskret
- Hold typografisk hierarki enkelt og konsekvent

Fontfiler (ligger i `assets/` — Shopify-deployable):
| Fil | Brug |
|-----|------|
| `Headline_Gothic_ATF.otf` | Primær display-font (overskrifter, hero) |
| `Headline_Gothic_ATF_Round.otf` | Alternativ blød variant af display-font |
| `MinionPro-Regular.otf` | Brødtekst, standard vægt |
| `MinionPro-Medium.otf` / `MinionPro-Semibold.otf` | Brødtekst, mellemvægt |
| `MinionPro-Bold.otf` | Brødtekst, fed |
| `MinionPro-It.otf` / `MinionPro-BoldIt.otf` | Kursiv varianter |
| `Axia_Regular.otf` | Alternativ sans-serif (UI, navigation) |

### 5.3 Billedstil og art direction
- Produktbilleder skal føles ærlige, taktile og premium
- Miljø- og brandbilleder må gerne referere til fjord, natur, bryggeri og håndværk
- Undgå stock-præget, generisk e-commerce look
- Fokus på kvalitet, råvarer, flaskedetaljer, etiketter og teksturer

## 6. UX-principper
1. **Produkt først:** Designet skal prioritere produkter, priser og købssignaler.
2. **Rolig oplevelse:** Ingen aggressiv visuel støj.
3. **Troværdighed:** Indhold skal understøtte håndværk, oprindelse og kvalitet.
4. **Klarhed:** Høj læsbarhed, tydelige CTA’er, enkel informationsstruktur.
5. **Mobil-først kvalitet:** Oplevelsen skal være lige så stærk på mobil som desktop.

## 7. Tone of voice (UI og mikrocopy)
- Sprog: varmt, jordnært, fagligt trygt
- Undgå: smart-i-en-fart marketingtone, hype, overdrivelser
- Foretræk: konkrete formuleringer om smag, håndværk, oprindelse og anvendelse
- Bevar dansk sprogtonalitet som primær standard

## 8. Ikke-ønsket retning (hard constraints)
Følgende må ikke introduceres:
- Generisk template-look uden brandkarakter
- Aggressive popups
- For mange accentfarver
- “Billig” eller “party” æstetik
- Overdreven animation eller distraktion fra produkterne

## 9. Interaktions- og animationsprincipper
- Animation skal være subtil, funktionel og understøtte hierarki
- Brug korte, diskrete overgange til hover/fokus/indlæsning
- Ingen tunge effekter, parallax-overload eller visuelt støjende motion

## 10. Tilgængelighed og kvalitet

### 10.1 Accessibility (minimum)
- Tydelig farvekontrast mellem tekst og baggrund
- Læsbar skriftstørrelse og passende linjeafstand
- Synlige fokusmarkeringer på interaktive elementer
- Meningsfulde alt-tekster på produkt- og nøglebilleder

### 10.2 Performance
- Billeder optimeres uden synligt kvalitetstab
- Begræns unødige scripts og tunge visuelle effekter
- Prioritér hurtig first load på mobilnet

## 11. Shopify-implementeringsprincipper
- Designet skal kunne realiseres robust i Shopify theme-arkitektur
- Genbrugelige sektioner/snippets prioriteres frem for one-off løsninger
- Stilguide (farver, typografi, spacing, knapper) holdes centraliseret for konsistens

## 12. Succeskriterier
Core design PRD anses som opfyldt når:
1. Det visuelle udtryk tydeligt afspejler Fjord-brandets autenticitet og håndværk.
2. Produktoplevelsen fremstår premium, enkel og troværdig.
3. Designretningen kan anvendes konsistent på tværs af alle kommende sider.
4. UX er rolig, læsbar og uden de fravalgte elementer.

## 13. V1 Scope: Hjemmesiden — Hero og Global Header

V1 af dette PRD udvider scope til at inkludere konkrete designspecifikationer for hjemmesidens hero-sektion og global header. Dette er de første komponenter der bygges.

---

### 13.1 Global Header

**Layout:**
- Logo: Fjord Bryggeri og Destilleri logo, centreret i toppen af headeren
- Navigation venstre: `Øl` · `Spiritus` · `Om` · `Rundvisning` · `Fredagsbar`
- Navigation højre: `Kurv`

**Visuel tilstand:**
- **På hero:** Transparent med subtilt mørkt overlay. Tekst i Ivory Mist / hvid.
- **Ved scroll:** Solid Dark Coffee (`#3C2313`). Tekst forbliver lys.
- Transition: Kort fade ved scroll-skift (ca. 200ms)

**Typografi og stil:**
- Navigationslinks: Helvetica, caps eller small caps, diskret skalering
- Aktiv/hover tilstand: Subtil underline eller farveaccent i Camel (`#A78952`)
- Ingen mega-menu i V1 — flat links

**Kvalitetskrav:**
- Fuldt responsiv — mobile version bruger hamburger-menu
- Mobilmenu: Slide-in panel, mørk baggrund, tydelig lukning

---

### 13.2 Hero Sektion

**Type:** Fullbleed carousel med 5 slides

**Visuel reference:** Copenhagen Distillery hero-stil — mørkt, filmisk, produkt- og miljønært. Store, fede overskrifter over mørkt billede med overlay.

**Generelt per slide:**
- Baggrund: Fullbleed foto med mørkt halvgennemsigtigt overlay (ca. 40–55% opacity) for tekstlæsbarhed
- Eyebrow text: Lille, versaler, Helvetica — slide-specifik tagline
- Headline: ATF Headline Gothic, meget stor (desktop: 80–120px), hvid, venstrejusteret eller centreret
- CTA: Én primær knap per slide — diskret outline eller solid i Camel/Ivory
- Billeder: Placeholder i V1; alle slides specificeres som mørke, atmosfæriske fotos

**Slides (rækkefølge og indhold):**

Placeholder-billeder ligger i `placeholder-images/placeholder-images-hero/`.

| # | Slide | Placeholder-billede | Eyebrow | Headline (placeholder) | CTA |
|---|-------|---------------------|---------|----------------------|-----|
| 1 | Øl | `øl-hero.jpg` | "Brygget ved fjorden" | [Produktnavn / øl-kategori] | "Se vores øl" |
| 2 | Spiritus | `spiritus-hero.jpg` | "Håndlavet på Mors" | [Produktnavn — f.eks. Fjord Blik] | "Se vores spiritus" |
| 3 | Om & Bygningen | `bygning-hero.jpg` | "Vores historie" | [Bygning / oprindelse] | "Læs mere" |
| 4 | Rundvisning | `rundvisning-hero.jpeg` | "Oplev bryggeriet" | "Book en rundvisning" | "Book nu" |
| 5 | Fredagsbar | `fredagsbar-hero.jpg` | "Hver fredag" | "Fredagsbar & Fredagsfurter" | "Se hvornår" |

**Carousel mekanik:**
- Navigation: Pile venstre/højre, diskret og let synlige (som Cph Distillery reference)
- Slide-indikatorer: Subtile streger eller punkter i bunden, Camel/hvid
- Auto-play: Anbefalet 6 sekunder per slide, pause ved hover eller touch
- Transition: Kort fade eller slide (max 500ms) — ingen tunge animationer
- Minimum hero-højde: 100vh på desktop, 70–80vh på mobil

**Indholdsplacering:**
- Tekst: Vertikal midtplacering eller let under midten (ikke hårdt i toppen)
- Horisontal: Venstrejusteret med padding, eller centreret — konsistent på tværs af slides

---

### 13.3 Afgrænsning (V1)

Denne version af PRD dækker:
- Overordnet designretning og brandmæssige UX-krav (sektionerne 1–12)
- Global header-specifikation
- Hjemmesidens hero-sektion

**Ikke inkluderet i V1:**
- Øvrige sektioner på hjemmesiden (under hero)
- Side-specifik wireframing for øvrige sider
- Detaljerede indholdsmoduler per side

Disse besluttes i næste fase på baggrund af dette Core Design PRD.
