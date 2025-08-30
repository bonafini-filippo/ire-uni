# 🧪 Test PWA MathStudy

## 🚀 Come Testare la PWA

### 1. Avvio dell'App
```bash
# Build di produzione
npm run build

# Avvio in produzione
npm start
```

### 2. Test nel Browser

#### Chrome/Edge:
1. Apri `http://localhost:3000`
2. **Attendi 5-10 secondi** sulla pagina principale
3. **Naviga tra le pagine** (about, argomento1, combinatoria)
4. **Scrolla** nelle pagine per attivare i criteri di engagement
5. **Verifica** che appaia:
   - Banner blu in alto: "Installa MathStudy"
   - Pulsante fisso: "Installa App" (in basso a destra)

#### Firefox:
1. Apri `http://localhost:3000`
2. **Attendi** e naviga tra le pagine
3. **Verifica** che appaia l'icona di installazione nella barra degli indirizzi

### 3. Verifica Componenti PWA

#### Banner di Installazione:
- ✅ Dovrebbe apparire in alto con sfondo blu
- ✅ Testo: "Installa MathStudy - Accedi più velocemente e lavora offline"
- ✅ Pulsante "Installa" bianco
- ✅ Pulsante "X" per chiudere

#### Pulsante Fisso:
- ✅ Dovrebbe apparire in basso a destra
- ✅ Testo: "Installa App" con icona download
- ✅ Animazione pulse (lampeggiante)
- ✅ Solo quando l'app può essere installata

### 4. Test di Installazione

#### Desktop:
1. **Clicca "Installa"** nel banner o nel pulsante fisso
2. **Conferma** l'installazione nel prompt del browser
3. **Verifica** che l'app si apra in una finestra standalone
4. **Controlla** che l'icona sia presente nella barra delle applicazioni

#### Mobile:
1. **Apri** l'app su dispositivo mobile
2. **Attendi** che appaia il prompt di installazione
3. **Tocca "Installa"** o "Aggiungi alla schermata Home"
4. **Verifica** che l'icona sia presente nella home screen

### 5. Debug e Troubleshooting

#### Componente Debug (Solo Development):
1. **Clicca l'icona 🔧** in alto a sinistra
2. **Verifica** tutti i flag PWA:
   - ✅ Standalone: false (finché non è installata)
   - ✅ Installabile: true (quando può essere installata)
   - ✅ Installata: false (finché non è installata)
   - ✅ Service Worker: true
   - ✅ Manifest: /manifest.json
   - ✅ Apple Touch Icon: /icon-192x192.png

#### Console Browser:
1. **Apri DevTools** (F12)
2. **Vai su Console**
3. **Verifica** che non ci siano errori
4. **Cerca** messaggi di log PWA:
   - "PWA installata con successo"
   - "Installazione completata con successo!"

### 6. Criteri di Installabilità

La PWA si installa solo quando:
- ✅ **HTTPS** attivo (localhost funziona per test)
- ✅ **Service Worker** registrato
- ✅ **Manifest** valido e caricato
- ✅ **Icone** appropriate (192x192 e 512x512)
- ✅ **Engagement** dell'utente (tempo + navigazione)

### 7. Test di Funzionalità

#### Offline:
1. **Installa** la PWA
2. **Disconnetti** internet
3. **Verifica** che l'app funzioni offline
4. **Controlla** che le pagine siano cacheate

#### Aggiornamenti:
1. **Modifica** il codice
2. **Ribuild** l'app (`npm run build`)
3. **Riavvia** (`npm start`)
4. **Verifica** che la PWA si aggiorni automaticamente

### 8. Problemi Comuni

#### Il pulsante non appare:
- ❌ **App già installata**: Verifica se è già presente
- ❌ **Criteri non soddisfatti**: Aspetta e naviga di più
- ❌ **Browser non supportato**: Usa Chrome/Edge/Firefox
- ❌ **HTTPS mancante**: Le PWA richiedono HTTPS

#### Errori di build:
- ❌ **Service Worker**: Rimuovi `.next` e `public/sw.js`
- ❌ **PWA config**: Verifica `next.config.ts`
- ❌ **Dependencies**: Reinstalla `npm install`

### 9. Metriche di Successo

#### PWA Score (Lighthouse):
- ✅ **Installable**: 100%
- ✅ **PWA Optimized**: 90%+
- ✅ **Performance**: 80%+
- ✅ **Accessibility**: 90%+

#### Test Manuali:
- ✅ Banner appare entro 10 secondi
- ✅ Pulsante fisso appare dopo navigazione
- ✅ Installazione funziona su desktop e mobile
- ✅ App funziona offline dopo installazione

---

## 🎯 Risultato Atteso

Dopo aver seguito questa guida, dovresti vedere:
1. **Banner blu** in alto con opzione di installazione
2. **Pulsante fisso** "Installa App" in basso a destra
3. **Prompt di installazione** quando clicchi installa
4. **App standalone** che si apre in una finestra separata
5. **Icona** nella barra delle applicazioni/home screen

**Se tutto funziona**: 🎉 La tua PWA è configurata correttamente!

**Se ci sono problemi**: 🔧 Usa il componente di debug e controlla la console.
