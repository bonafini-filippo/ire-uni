# Fix per le Formule LaTeX

## Problema
Le formule LaTeX con caratteri speciali (backslash, graffe) causano errori di parsing in JSX di Next.js.

## Soluzione
Tutte le formule LaTeX devono essere convertite dal formato:
```jsx
<Formula>\sum_{i=1}^n x_i</Formula>
```

Al formato:
```jsx
<Formula math="\sum_{i=1}^n x_i" />
```

## Formule da Sistemare
Le seguenti formule nelle pagine contengono caratteri che causano errori di build:

### Caratteri Problematici:
- `\` (backslash) - deve essere escaped come `\\` in stringhe JS
- `{}` (graffe) in LaTeX
- `\to`, `\infty`, `\sum`, `\int`, ecc.

### Script di Fix Automatico
Puoi usare un editor di testo con regex per sostituire:

**Pattern da cercare:**
```
<Formula>([^<]+)</Formula>
```

**Sostituire con:**
```
<Formula math="$1" />
```

Poi fare un secondo passaggio per escaped i backslash:
```
math="([^"]*\\[^"]*)"
```
Sostituire `\` con `\\` nelle stringhe math.

## File da Correggere:
- `/src/app/argomento1/page.tsx`
- `/src/app/argomento2/page.tsx` 
- `/src/app/argomento3/page.tsx`

Una volta sistemate tutte le formule, l'app compilerà correttamente e le formule matematiche saranno renderizzate perfettamente con KaTeX.