# MathStudy PWA - Guida Completa

## 🚀 Cos'è una PWA?

Una Progressive Web App (PWA) è un'applicazione web che si comporta come un'app nativa, offrendo:
- **Installazione**: Può essere installata sul dispositivo
- **Offline**: Funziona anche senza connessione internet
- **Notifiche**: Può inviare notifiche push
- **Accesso rapido**: Icona sulla home screen

## 🔧 Configurazione Attuale

La tua PWA è configurata con:

### Manifest (`public/manifest.json`)
- ✅ Nome e descrizione
- ✅ Icone (192x192 e 512x512)
- ✅ Colori tema
- ✅ Display standalone
- ✅ Shortcuts per navigazione rapida

### Service Worker (`public/sw.js`)
- ✅ Caching intelligente
- ✅ Gestione offline
- ✅ Aggiornamenti automatici

### Componenti React
- ✅ `InstallPWAButton`: Pulsante di installazione fisso
- ✅ `PWAInstallBanner`: Banner informativo in alto
- ✅ `usePWAInstall`: Hook per gestire l'installazione
- ✅ `PWADebug`: Componente di debug (solo development)

## 🎯 Come Funziona l'Installazione

### 1. Criteri di Installabilità
Il browser mostra il pulsante di installazione solo quando:
- L'utente ha visitato il sito più volte
- Ha interagito con l'app per un tempo sufficiente
- L'app soddisfa i requisiti PWA

### 2. Eventi PWA
- `beforeinstallprompt`: Fired quando l'app può essere installata
- `appinstalled`: Fired quando l'installazione è completata

### 3. Controlli Automatici
- Verifica se l'app è già installata
- Nasconde i pulsanti quando non necessari
- Gestisce gli stati di installazione

## 🐛 Troubleshooting

### Il pulsante non appare?

**Possibili cause:**
1. **App già installata**: Verifica se l'app è già presente
2. **Browser non supportato**: Chrome, Edge, Firefox supportano PWA
3. **Criteri non soddisfatti**: Naviga tra le pagine e aspetta
4. **HTTPS richiesto**: Le PWA funzionano solo su HTTPS

**Soluzioni:**
1. Apri gli strumenti di sviluppo (F12)
2. Vai su Application > Manifest
3. Verifica che il manifest sia caricato correttamente
4. Controlla la console per errori

### Test in Development

1. **PWA Debug**: Clicca l'icona 🔧 in alto a sinistra
2. **Verifica stati**: Controlla tutti i flag PWA
3. **Test installazione**: Usa il pulsante "Test Install"

### Verifica Browser

**Chrome/Edge:**
- Icona di installazione nella barra degli indirizzi
- Menu hamburger > "Installa MathStudy"

**Firefox:**
- Icona di installazione nella barra degli indirizzi
- Menu > "Installa app"

**Safari (iOS):**
- Condividi > "Aggiungi alla schermata Home"

## 📱 Test su Dispositivi

### Desktop
- Chrome/Edge: Icona nella barra degli indirizzi
- Firefox: Icona nella barra degli indirizzi

### Mobile
- **Android**: Chrome, Firefox, Samsung Internet
- **iOS**: Safari (aggiungi alla home screen)

### Requisiti Minimi
- HTTPS attivo
- Service worker registrato
- Manifest valido
- Icone appropriate

## 🎨 Personalizzazione

### Colori
Modifica in `src/lib/pwa-config.ts`:
```typescript
export const PWA_CONFIG = {
  themeColor: '#2563eb', // Colore tema
  backgroundColor: '#ffffff', // Colore sfondo
  // ...
};
```

### Criteri di Installazione
Modifica in `src/lib/pwa-config.ts`:
```typescript
export const PWA_INSTALL_CRITERIA = {
  minEngagementTime: 5000, // 5 secondi
  minPageViews: 2, // 2 pagine
  minScrollDepth: 0.3, // 30% scroll
};
```

## 🚀 Deployment

### Build Production
```bash
npm run build
npm start
```

### Verifica Post-Deploy
1. Apri l'app in modalità incognito
2. Verifica che il manifest sia caricato
3. Controlla che il service worker sia attivo
4. Testa l'installazione

## 📚 Risorse Utili

- [MDN PWA Guide](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web.dev PWA](https://web.dev/progressive-web-apps/)
- [Chrome DevTools PWA](https://developer.chrome.com/docs/devtools/progressive-web-apps/)

## 🔍 Debug Avanzato

### Lighthouse Audit
1. Apri Chrome DevTools
2. Vai su Lighthouse
3. Seleziona "Progressive Web App"
4. Genera report

### Service Worker
1. DevTools > Application > Service Workers
2. Verifica stato e registrazione
3. Controlla cache e storage

### Manifest
1. DevTools > Application > Manifest
2. Verifica tutti i campi
3. Controlla errori di validazione

---

**Nota**: Le PWA richiedono tempo per essere riconosciute dal browser. Se il pulsante non appare immediatamente, aspetta e naviga tra le pagine dell'app.
