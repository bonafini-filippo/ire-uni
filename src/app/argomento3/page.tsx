"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Formula, Definition, Example, Summary } from "@/components/math/formula";
import { Target } from "lucide-react";

export default function TeoremiLimite() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <Target className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Teoremi Limite</h1>
        <p className="text-xl text-muted-foreground">
          Convergenza e comportamento asintotico delle variabili aleatorie
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Introduzione ai Teoremi Limite</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            I teoremi limite descrivono il comportamento delle somme e medie di variabili aleatorie 
            quando il numero di termini tende all&apos;infinito. Sono fondamentali per la statistica inferenziale.
          </p>

          <div>
            <h3 className="text-lg font-semibold mb-3">Tipi di Convergenza</h3>
            <div className="space-y-4">
              <Definition title="Convergenza in Probabilità">
                <p>
                  Una successione <Formula math="\{X_n\}" /> converge in probabilità a <Formula>X</Formula> se:
                </p>
                <Formula block math="\lim_{n \to \infty} P(|X_n - X| > \varepsilon) = 0 \quad \forall \varepsilon > 0" />
                <p className="text-xs mt-2">Si scrive: <Formula math="X_n \xrightarrow{P} X" /></p>
              </Definition>

              <Definition title="Convergenza in Distribuzione">
                <p>
                  Una successione <Formula math="\{X_n\}" /> converge in distribuzione a <Formula>X</Formula> se:
                </p>
                <Formula block math="\lim_{n \to \infty} F_n(x) = F(x)" />
                <p className="text-xs mt-2">
                  per ogni punto di continuità x di F. Si scrive: <Formula math="X_n \xrightarrow{d} X" />
                </p>
              </Definition>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Legge dei Grandi Numeri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Legge Debole dei Grandi Numeri</h3>
            <Definition title="Teorema (Khinchin)">
              <p className="mb-3">
                Sia <Formula math="\{X_1, X_2, \ldots\}" /> una successione di variabili aleatorie indipendenti 
                e identicamente distribuite con <Formula>E[X_i] = \mu</Formula> finito.
              </p>
              <p className="mb-2">Allora la media campionaria:</p>
              <Formula block math="\overline{X}_n = \frac{1}{n} \sum_{i=1}^n X_i \xrightarrow{P} \mu" />
              <p className="text-sm mt-2">
                Ovvero: <Formula math="\lim_{n \to \infty} P(|\overline{X}_n - \mu| > \varepsilon) = 0" /> per ogni <Formula math="\varepsilon > 0" />
              </p>
            </Definition>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Legge Forte dei Grandi Numeri</h3>
            <Definition title="Teorema (Kolmogorov)">
              <p className="mb-3">
                Sotto le stesse ipotesi della legge debole, si ha anche:
              </p>
              <Formula block math="P\left(\lim_{n \to \infty} \overline{X}_n = \mu\right) = 1" />
              <p className="text-sm mt-2">
                La convergenza è quasi sicura (convergenza forte).
              </p>
            </Definition>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Interpretazione</h3>
            <p className="text-sm text-muted-foreground">
              Le leggi dei grandi numeri giustificano l&apos;interpretazione frequentista della probabilità: 
              la frequenza relativa di un evento converge alla sua probabilità teorica.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Teorema Centrale del Limite</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Definition title="Teorema Centrale del Limite (TCL)">
            <p className="mb-3">
              Sia <Formula math="\{X_1, X_2, \ldots\}" /> una successione di variabili aleatorie i.i.d. con 
              <Formula math="E[X_i] = \mu" /> e <Formula math="\text{Var}(X_i) = \sigma^2 < \infty" />.
            </p>
            <p className="mb-2">Allora:</p>
            <Formula block math="\frac{\sqrt{n}(\overline{X}_n - \mu)}{\sigma} = \frac{\sum_{i=1}^n X_i - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} N(0, 1)" />
            <p className="text-sm mt-3">
              Equivalentemente: <Formula math="\sqrt{n}(\overline{X}_n - \mu) \xrightarrow{d} N(0, \sigma^2)" />
            </p>
          </Definition>

          <div>
            <h3 className="text-lg font-semibold mb-3">Forma Pratica del TCL</h3>
            <p className="mb-2">Per n sufficientemente grande:</p>
            <Formula block math="\overline{X}_n \sim N\left(\mu, \frac{\sigma^2}{n}\right)" />
            <p className="text-sm text-muted-foreground">
              Questo è fondamentale per costruire intervalli di confidenza e test d&apos;ipotesi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Condizioni di Applicabilità</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Variabili aleatorie indipendenti</li>
              <li>Identicamente distribuite (stessa distribuzione)</li>
              <li>Media e varianza finite</li>
              <li>n sufficientemente grande (di solito n ≥ 30)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Approssimazione Normale</CardTitle>
            <CardDescription>Alla Binomiale</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Definition title="Approssimazione Binomiale">
              <p className="mb-2">
                Se <Formula>X \sim B(n, p)</Formula> con n grande e np, n(1-p) ≥ 5, allora:
              </p>
              <Formula block math="X \approx N(np, np(1-p))" />
              <p className="text-xs mt-2">
                Con correzione di continuità: <Formula math="P(X = k) \approx P(k-0.5 < Y < k+0.5)" />
              </p>
            </Definition>
            
            <div className="text-sm space-y-1">
              <p><strong>Quando usarla:</strong></p>
              <ul className="list-disc list-inside text-xs space-y-1">
                <li>n ≥ 30</li>
                <li>np ≥ 5 e n(1-p) ≥ 5</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Approssimazione Normale</CardTitle>
            <CardDescription>Alla Poisson</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Definition title="Approssimazione Poisson">
              <p className="mb-2">
                Se <Formula math="X \sim \text{Pois}(\lambda)" /> con λ grande, allora:
              </p>
              <Formula block math="X \approx N(\lambda, \lambda)" />
              <p className="text-xs mt-2">
                Poiché per Poisson: <Formula math="E[X] = \text{Var}(X) = \lambda" />
              </p>
            </Definition>
            
            <div className="text-sm space-y-1">
              <p><strong>Quando usarla:</strong></p>
              <ul className="list-disc list-inside text-xs space-y-1">
                <li>λ ≥ 20 (approssimazione buona)</li>
                <li>λ ≥ 5 (approssimazione accettabile)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Legge dei Grandi Numeri</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              Lanciamo una moneta equilibrata n volte. Sia <Formula>X_i = 1</Formula> se esce testa 
              al lancio i-esimo, 0 altrimenti. Studiare il comportamento della frequenza relativa 
              di teste per n → ∞.
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                <p className="mb-2">
                  <Formula math="X_i \sim \text{Bernoulli}(0.5)" />, quindi <Formula math="E[X_i] = 0.5" />
                </p>
                
                <p className="mb-2">La frequenza relativa di teste è:</p>
                <Formula block math="\overline{X}_n = \frac{1}{n} \sum_{i=1}^n X_i = \frac{\text{numero di teste}}{n}" />
                
                <p className="mb-2"><strong>Per la Legge dei Grandi Numeri:</strong></p>
                <Formula block math="\overline{X}_n \xrightarrow{P} 0.5" />
                
                <p className="text-sm mt-2">
                  Questo significa che all&apos;aumentare del numero di lanci, la frequenza relativa 
                  di teste si avvicina sempre più a 0.5 (la probabilità teorica).
                </p>
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Teorema Centrale del Limite</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              Un&apos;azienda produce componenti elettronici con durata media μ = 1000 ore e 
              deviazione standard σ = 200 ore. Calcolare la probabilità che la durata media 
              di 100 componenti sia compresa tra 980 e 1020 ore.
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                <p className="mb-2">
                  Dati: n = 100, μ = 1000, σ = 200
                </p>
                
                <p className="mb-2"><strong>Per il TCL:</strong></p>
                <Formula block math="\overline{X}_{100} \sim N\left(1000, \frac{200^2}{100}\right) = N(1000, 400)" />
                <p className="text-xs mb-2">Deviazione standard di <Formula math="\overline{X}_{100}" />: <Formula math="\frac{200}{\sqrt{100}} = 20" /></p>
                
                <p className="mb-2"><strong>Standardizzazione:</strong></p>
                <Formula block math="P(980 < \overline{X}_{100} < 1020) = P\left(\frac{980-1000}{20} < Z < \frac{1020-1000}{20}\right)" />
                <Formula block math="= P(-1 < Z < 1) = \Phi(1) - \Phi(-1)" />
                <Formula block math="= 0.8413 - 0.1587 = 0.6826" />
                
                <p className="text-sm mt-2">
                  La probabilità è circa 68.26%.
                </p>
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Approssimazione Normale alla Binomiale</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              In un sondaggio, il 30% degli intervistati è favorevole a una proposta. 
              Se interroghiamo 200 persone, qual è la probabilità che tra 50 e 70 
              persone siano favorevoli?
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                <p className="mb-2">
                  Sia <Formula math="X \sim B(200, 0.3)" /> il numero di favorevoli.
                </p>
                
                <p className="mb-2"><strong>Verifica condizioni:</strong></p>
                <ul className="list-disc list-inside text-sm mb-2">
                  <li>n = 200 ≥ 30 ✓</li>
                  <li>np = 200 × 0.3 = 60 ≥ 5 ✓</li>
                  <li>n(1-p) = 200 × 0.7 = 140 ≥ 5 ✓</li>
                </ul>
                
                <p className="mb-2"><strong>Approssimazione normale:</strong></p>
                <Formula block math="X \approx N(60, 60 \times 0.7) = N(60, 42)" />
                <p className="text-xs mb-2">Deviazione standard: <Formula math="\sqrt{42} \approx 6.48" /></p>
                
                <p className="mb-2"><strong>Con correzione di continuità:</strong></p>
                <Formula block math="P(50 \leq X \leq 70) \approx P(49.5 < Y < 70.5)" />
                <Formula block math="= P\left(\frac{49.5-60}{6.48} < Z < \frac{70.5-60}{6.48}\right)" />
                <Formula block math="= P(-1.62 < Z < 1.62) = 0.9474 - 0.0526 = 0.8948" />
                
                <p className="text-sm mt-2">
                  La probabilità è circa 89.48%.
                </p>
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Summary title="Punti Chiave da Ricordare">
        <ul className="space-y-2">
          <li>
            <strong>Legge dei Grandi Numeri:</strong> <Formula math="\overline{X}_n \xrightarrow{P} \mu" /> - la media campionaria converge alla media teorica
          </li>
          <li>
            <strong>Teorema Centrale del Limite:</strong> <Formula math="\frac{\sqrt{n}(\overline{X}_n - \mu)}{\sigma} \xrightarrow{d} N(0,1)" />
          </li>
          <li>
            <strong>TCL in pratica:</strong> Per n grande, <Formula math="\overline{X}_n \sim N(\mu, \sigma^2/n)" />
          </li>
          <li>
            <strong>Approssimazione Binomiale:</strong> <Formula math="B(n,p) \approx N(np, np(1-p))" /> se n ≥ 30 e np, n(1-p) ≥ 5
          </li>
          <li>
            <strong>Approssimazione Poisson:</strong> <Formula math="\text{Pois}(\lambda) \approx N(\lambda, \lambda)" /> se λ ≥ 20
          </li>
          <li>
            <strong>Correzione di continuità:</strong> Aggiungere ±0.5 quando si approssima una distribuzione discreta con una continua
          </li>
          <li>
            <strong>Convergenza:</strong> In probabilità (debole) vs quasi sicura (forte) vs in distribuzione
          </li>
        </ul>
      </Summary>
    </motion.div>
  );
}