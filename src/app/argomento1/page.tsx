"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Formula, Definition, Example, Summary } from "@/components/math/formula";
import { BarChart3 } from "lucide-react";

export default function VariabiliAleatorie() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <BarChart3 className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Variabili Aleatorie Discrete</h1>
        <p className="text-xl text-muted-foreground">
          Studio delle variabili aleatorie che assumono valori numerabili
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Definizione di Variabile Aleatoria Discreta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Definition title="Variabile Aleatoria Discreta">
            <p className="mb-3">
              Una variabile aleatoria <Formula>X</Formula> si dice <strong>discreta</strong> se l&apos;insieme 
              dei valori che può assumere è finito o numerabilmente infinito.
            </p>
            <p>
              Formalmente: <Formula math="X: \Omega \rightarrow \mathbb{R}" /> dove <Formula math="\Omega" /> è lo spazio campionario 
              e <Formula>{"X(\\Omega) = \\{x_1, x_2, x_3, \\ldots\\}"}</Formula> è numerabile.
            </p>
          </Definition>

          <div>
            <h3 className="text-lg font-semibold mb-3">Funzione di Massa di Probabilità (PMF)</h3>
            <p className="mb-3">
              La funzione <Formula>p(x) = P(X = x)</Formula> è chiamata funzione di massa di probabilità e deve soddisfare:
            </p>
            <Formula block>
              p(x) \geq 0 \quad \forall x
            </Formula>
            <Formula block>
              {"\\sum_{x \\in X(\\Omega)} p(x) = 1"}
            </Formula>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Funzione di Ripartizione</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Definition title="Funzione di Ripartizione (CDF)">
            <p className="mb-3">
              La funzione di ripartizione di una variabile aleatoria discreta <Formula>X</Formula> è:
            </p>
            <Formula block math="F(x) = P(X \leq x) = \sum_{x_i \leq x} p(x_i)" />
          </Definition>

          <div>
            <h4 className="font-semibold mb-2">Proprietà della CDF:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><Formula>F(x)</Formula> è monotona non decrescente</li>
              <li><Formula math="\lim_{x \to -\infty} F(x) = 0" /></li>
              <li><Formula math="\lim_{x \to +\infty} F(x) = 1" /></li>
              <li><Formula>F(x)</Formula> è continua a destra</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Valore Atteso e Varianza</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Valore Atteso (Speranza Matematica)</h3>
            <Formula block math="E[X] = \mu = \sum_{x \in X(\Omega)} x \cdot p(x)" />
            <p className="text-sm text-muted-foreground">
              Il valore atteso rappresenta la media ponderata dei possibili valori di X.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Varianza</h3>
            <Formula block math="\text{Var}(X) = \sigma^2 = E[(X - \mu)^2] = E[X^2] - (E[X])^2" />
            <Formula block math="\text{Var}(X) = \sum_{x \in X(\Omega)} (x - \mu)^2 \cdot p(x)" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Deviazione Standard</h3>
            <Formula block math="\sigma = \sqrt{\text{Var}(X)}" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Distribuzione Binomiale</CardTitle>
            <CardDescription>B(n,p)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Definition title="Binomiale B(n,p)">
              <p className="mb-2">
                Modella il numero di successi in n prove indipendenti, ciascuna con probabilità p di successo.
              </p>
              <Formula block math="P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}" />
              <p className="text-xs mt-2">
                dove <Formula>{"k = 0, 1, 2, \\ldots, n"}</Formula>
              </p>
            </Definition>
            
            <div className="space-y-2 text-sm">
              <p><strong>Valore atteso:</strong> <Formula math="E[X] = np" /></p>
              <p><strong>Varianza:</strong> <Formula math="\text{Var}(X) = np(1-p)" /></p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuzione di Poisson</CardTitle>
            <CardDescription>Pois(λ)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Definition title="Poisson Pois(λ)">
              <p className="mb-2">
                Modella il numero di eventi rari che si verificano in un intervallo di tempo/spazio fisso.
              </p>
              <Formula block math="P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}" />
              <p className="text-xs mt-2">
                dove <Formula math="k = 0, 1, 2, \ldots" /> e <Formula math="\lambda > 0" />
              </p>
            </Definition>
            
            <div className="space-y-2 text-sm">
              <p><strong>Valore atteso:</strong> <Formula math="E[X] = \lambda" /></p>
              <p><strong>Varianza:</strong> <Formula math="\text{Var}(X) = \lambda" /></p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Lancio di Monete</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              Lanciamo una moneta equilibrata 5 volte. Sia X il numero di teste ottenute. 
              Calcolare P(X = 3) e il valore atteso.
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                <p className="mb-2">
                  X segue una distribuzione binomiale <Formula>B(5, 0.5)</Formula>
                </p>
                
                <p className="mb-2"><strong>Calcolo di P(X = 3):</strong></p>
                <Formula block math="P(X = 3) = \binom{5}{3} (0.5)^3 (1-0.5)^{5-3}" />
                <Formula block math="= \binom{5}{3} (0.5)^3 (0.5)^2 = \frac{5!}{3! \cdot 2!} (0.5)^5" />
                <Formula block math="= 10 \cdot \frac{1}{32} = \frac{10}{32} = 0.3125" />
              </div>
              
              <div>
                <p className="mb-2"><strong>Valore atteso:</strong></p>
                <Formula block math="E[X] = np = 5 \cdot 0.5 = 2.5" />
                <p className="text-sm">
                  In media, ci aspettiamo 2.5 teste in 5 lanci.
                </p>
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Processo di Poisson</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              In un call center arrivano in media 3 chiamate al minuto. Qual è la probabilità 
              che in un minuto arrivino esattamente 2 chiamate?
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                <p className="mb-2">
                  Il numero di chiamate X segue una distribuzione di Poisson con <Formula>\lambda = 3</Formula>
                </p>
                
                <Formula block math="P(X = 2) = \frac{3^2 e^{-3}}{2!} = \frac{9 e^{-3}}{2}" />
                <Formula block math="= \frac{9}{2e^3} \approx \frac{9}{2 \cdot 20.086} \approx 0.224" />
                
                <p className="text-sm mt-2">
                  La probabilità è circa 22.4%.
                </p>
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Summary title="Punti Chiave da Ricordare">
        <ul className="space-y-2">
          <li>
            <strong>Variabile Aleatoria Discreta:</strong> Assume valori numerabili, caratterizzata dalla PMF <Formula>p(x)</Formula>
          </li>
          <li>
            <strong>Funzione di Ripartizione:</strong> <Formula>F(x) = P(X \leq x)</Formula>, monotona e continua a destra
          </li>
          <li>
            <strong>Valore Atteso:</strong> <Formula>E[X] = \sum x \cdot p(x)</Formula>
          </li>
          <li>
            <strong>Varianza:</strong> <Formula math="\text{Var}(X) = E[X^2] - (E[X])^2" />
          </li>
          <li>
            <strong>Binomiale B(n,p):</strong> n prove indipendenti, <Formula math="E[X] = np" />, <Formula math="\text{Var}(X) = np(1-p)" />
          </li>
          <li>
            <strong>Poisson Pois(λ):</strong> Eventi rari, <Formula math="E[X] = \text{Var}(X) = \lambda" />
          </li>
        </ul>
      </Summary>
    </motion.div>
  );
}