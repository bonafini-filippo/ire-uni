# My PWA App

Una Progressive Web App moderna costruita con Next.js, TailwindCSS, Framer Motion e shadcn/ui.

## 🚀 Caratteristiche

- ✅ **Progressive Web App (PWA)** - Installabile su dispositivi mobili e desktop
- ✅ **Responsive Design** - Ottimizzata per tutti i dispositivi
- ✅ **Menu Laterale** - Sidebar scorrevole con animazioni fluide
- ✅ **Animazioni** - Transizioni eleganti con Framer Motion
- ✅ **Componenti Moderni** - UI components di shadcn/ui
- ✅ **Typography** - Tipografia coerente e leggibile
- ✅ **Tema Scuro/Chiaro** - Supporto automatico per entrambi i temi

## 🛠 Stack Tecnologico

- **Next.js 15** - React framework con App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Styling utility-first
- **Framer Motion** - Animazioni fluide
- **shadcn/ui** - Componenti UI moderni
- **next-pwa** - Configurazione Progressive Web App
- **Lucide React** - Icone moderne

## 🏗 Struttura del Progetto

```
my-pwa-app/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── argomento1/        # Sezione Argomento 1
│   │   ├── argomento2/        # Sezione Argomento 2
│   │   ├── argomento3/        # Sezione Argomento 3
│   │   ├── settings/          # Pagina Impostazioni
│   │   └── about/             # Pagina Info
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── main-layout.tsx
│   │   │   ├── topbar.tsx
│   │   │   └── sidebar.tsx
│   │   └── ui/                # shadcn/ui components
│   └── lib/
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── icon-192x192.png       # App icon 192x192
│   └── icon-512x512.png       # App icon 512x512
├── next.config.ts             # Next.js + PWA config
└── tailwind.config.ts         # Tailwind configuration
```

## 🚀 Comandi

### Sviluppo
```bash
npm run dev
```
Avvia il server di sviluppo su `http://localhost:3000`

### Build
```bash
npm run build
```
Crea una build di produzione ottimizzata

### Preview Build
```bash
npm run build && npm start
```
Crea la build e avvia il server di produzione

### Linting
```bash
npm run lint
```
Esegue ESLint per controllare il codice

## 🎨 Personalizzazione

### Modificare il Menu
Edita `/src/components/layout/sidebar.tsx` per aggiungere o modificare le voci del menu:

```typescript
const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/nuovo-argomento", label: "Nuovo Argomento", icon: BookOpen },
  // Aggiungi nuove voci qui...
];
```

### Aggiungere Nuove Pagine
1. Crea una nuova directory in `src/app/nome-pagina/`
2. Aggiungi il file `page.tsx` con il contenuto
3. Aggiungi la voce nel menu sidebar

### Modificare i Colori
I colori sono configurati in `src/app/globals.css` usando il sistema di design di shadcn/ui.

### Personalizzare le Animazioni
Le animazioni Framer Motion possono essere modificate nei singoli componenti. Esempi:
- Home page: `/src/app/page.tsx`
- Layout principale: `/src/components/layout/main-layout.tsx`

## 📱 Installazione PWA

### Su Mobile (iOS/Android)
1. Apri l&apos;app nel browser
2. Tocca il menu del browser
3. Seleziona "Aggiungi alla schermata home" o "Installa app"

### Su Desktop
1. Apri l&apos;app nel browser Chrome/Edge
2. Clicca l&apos;icona di installazione nella barra degli indirizzi
3. Conferma l&apos;installazione

## 🔧 Configurazione PWA

Il file `public/manifest.json` contiene le configurazioni PWA:
- Nome e descrizione dell&apos;app
- Icone per diverse risoluzioni
- Tema e colori
- Modalità di visualizzazione

## 📦 Deploy

### Vercel (Raccomandato)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Connetti il repository su Netlify
2. Imposta il comando build: `npm run build`
3. Imposta la directory output: `.next`

### Altri Provider
L&apos;app è compatibile con tutti i provider che supportano Next.js.
