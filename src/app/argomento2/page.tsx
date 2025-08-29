"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Formula, Definition, Example, Summary } from "@/components/math/formula";
import { TrendingUp } from "lucide-react";

export default function VariabiliAleatorieC() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <TrendingUp className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Variabili Aleatorie Continue</h1>
        <p className="text-xl text-muted-foreground">
          Studio delle variabili aleatorie che assumono valori in intervalli continui
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Definizione di Variabile Aleatoria Continua</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Definition title="Variabile Aleatoria Continua">
            <p className="mb-3">
              Una variabile aleatoria <Formula>X</Formula> si dice <strong>continua</strong> se esiste una funzione 
              non negativa <Formula>f(x)</Formula>, detta densità di probabilità, tale che:
            </p>
            <Formula block math="P(a \leq X \leq b) = \int_a^b f(x) dx" />
            <p className="mt-2">
              per ogni intervallo <Formula>[a, b]</Formula>.
            </p>
          </Definition>

          <div>
            <h3 className="text-lg font-semibold mb-3">Funzione di Densità di Probabilità (PDF)</h3>
            <p className="mb-3">
              La funzione <Formula>f(x)</Formula> deve soddisfare:
            </p>
            <Formula block math="f(x) \geq 0 \quad \forall x \in \mathbb{R}" />
            <Formula block>
              {"\\int_{-\\infty}^{+\\infty} f(x) dx = 1"}
            </Formula>
            <p className="text-sm text-muted-foreground mt-2">
              Nota: <Formula>P(X = x) = 0</Formula> per ogni valore specifico x (probabilità puntuale nulla).
            </p>
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
              La funzione di ripartizione di una variabile aleatoria continua <Formula>X</Formula> è:
            </p>
            <Formula block math="F(x) = P(X \leq x) = \int_{-\infty}^x f(t) dt" />
          </Definition>

          <div>
            <h4 className="font-semibold mb-2">Proprietà della CDF per variabili continue:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><Formula>F(x)</Formula> è monotona non decrescente</li>
              <li><Formula math="\lim_{x \to -\infty} F(x) = 0" /></li>
              <li><Formula math="\lim_{x \to +\infty} F(x) = 1" /></li>
              <li><Formula>F(x)</Formula> è continua</li>
              <li><Formula>f(x) = F&apos;(x)</Formula> dove esiste la derivata</li>
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
            <Formula block math="E[X] = \mu = \int_{-\infty}^{+\infty} x \cdot f(x) dx" />
            <p className="text-sm text-muted-foreground">
              Il valore atteso rappresenta il &quot;centro di massa&quot; della distribuzione.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Varianza</h3>
            <Formula block math="\text{Var}(X) = \sigma^2 = E[(X - \mu)^2] = E[X^2] - (E[X])^2" />
            <Formula block math="\text{Var}(X) = \int_{-\infty}^{+\infty} (x - \mu)^2 \cdot f(x) dx" />
            <Formula block math="E[X^2] = \int_{-\infty}^{+\infty} x^2 \cdot f(x) dx" />
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
            <CardTitle>Distribuzione Uniforme</CardTitle>
            <CardDescription>U(a,b)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Definition title="Uniforme U(a,b)">
              <p className="mb-2">
                La variabile assume valori equiprobabili nell&apos;intervallo <Formula>[a,b]</Formula>.
              </p>
              <Formula block math="f(x) = \begin{cases} \frac{1}{b-a} & \text{se } a \leq x \leq b \\ 0 & \text{altrimenti} \end{cases}" />
              <Formula block math="F(x) = \begin{cases} 0 & \text{se } x < a \\ \frac{x-a}{b-a} & \text{se } a \leq x \leq b \\ 1 & \text{se } x > b \end{cases}" />
            </Definition>
            
            <div className="space-y-2 text-sm">
              <p><strong>Valore atteso:</strong> <Formula math="E[X] = \frac{a+b}{2}" /></p>
              <p><strong>Varianza:</strong> <Formula math="\text{Var}(X) = \frac{(b-a)^2}{12}" /></p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuzione Esponenziale</CardTitle>
            <CardDescription>Exp(λ)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Definition title="Esponenziale Exp(λ)">
              <p className="mb-2">
                Modella il tempo di attesa tra eventi in un processo di Poisson.
              </p>
              <Formula block math="f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{se } x \geq 0 \\ 0 & \text{se } x < 0 \end{cases}" />
              <Formula block math="F(x) = \begin{cases} 1 - e^{-\lambda x} & \text{se } x \geq 0 \\ 0 & \text{se } x < 0 \end{cases}" />
            </Definition>
            
            <div className="space-y-2 text-sm">
              <p><strong>Valore atteso:</strong> <Formula math="E[X] = \frac{1}{\lambda}" /></p>
              <p><strong>Varianza:</strong> <Formula math="\text{Var}(X) = \frac{1}{\lambda^2}" /></p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Distribuzione Normale (Gaussiana)</CardTitle>
          <CardDescription>N(μ,σ²)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Definition title="Normale N(μ,σ²)">
            <p className="mb-2">
              La più importante distribuzione continua, a forma di campana simmetrica.
            </p>
            <Formula block math="f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}" />
            <p className="text-xs mt-2">
              dove <Formula math="\mu \in \mathbb{R}" /> è la media e <Formula math="\sigma > 0" /> è la deviazione standard.
            </p>
          </Definition>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2">Normale Standard Z ~ N(0,1):</h4>
              <Formula block math="\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}" />
              <Formula block math="\Phi(z) = P(Z \leq z) = \int_{-\infty}^z \phi(t) dt" />
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Standardizzazione:</h4>
              <p className="text-sm mb-2">Se <Formula>X \sim N(\mu, \sigma^2)</Formula>, allora:</p>
              <Formula block math="Z = \frac{X - \mu}{\sigma} \sim N(0, 1)" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Distribuzione Uniforme</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              Il tempo di attesa di un autobus è uniformemente distribuito tra 0 e 15 minuti. 
              Calcolare la probabilità che l&apos;attesa sia tra 5 e 10 minuti e il tempo medio di attesa.
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                <p className="mb-2">
                  Sia <Formula>X \sim U(0, 15)</Formula> il tempo di attesa.
                </p>
                
                <p className="mb-2"><strong>Funzione di densità:</strong></p>
                <Formula block math="f(x) = \frac{1}{15-0} = \frac{1}{15} \text{ per } 0 \leq x \leq 15" />
                
                <p className="mb-2"><strong>Probabilità P(5 ≤ X ≤ 10):</strong></p>
                <Formula block math="P(5 \leq X \leq 10) = \int_5^{10} \frac{1}{15} dx = \frac{1}{15} \cdot (10-5) = \frac{5}{15} = \frac{1}{3}" />
                
                <p className="mb-2"><strong>Tempo medio di attesa:</strong></p>
                <Formula block math="E[X] = \frac{a+b}{2} = \frac{0+15}{2} = 7.5 \text{ minuti}" />
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Distribuzione Normale</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              L&apos;altezza degli studenti universitari segue una distribuzione normale con media 170 cm 
              e deviazione standard 8 cm. Qual è la probabilità che uno studente sia più alto di 180 cm?
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                <p className="mb-2">
                  Sia <Formula>X \sim N(170, 8^2)</Formula> l&apos;altezza dello studente.
                </p>
                
                <p className="mb-2"><strong>Standardizzazione:</strong></p>
                <Formula block math="P(X > 180) = P\left(\frac{X-170}{8} > \frac{180-170}{8}\right)" />
                <Formula block math="= P(Z > 1.25) \text{ dove } Z \sim N(0,1)" />
                
                <p className="mb-2"><strong>Usando la tavola normale standard:</strong></p>
                <Formula block math="P(Z > 1.25) = 1 - \Phi(1.25) = 1 - 0.8944 = 0.1056" />
                
                <p className="text-sm mt-2">
                  La probabilità è circa 10.56%.
                </p>
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Distribuzione Esponenziale</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              Il tempo tra due chiamate consecutive in un call center segue una distribuzione esponenziale 
              con media di 2 minuti. Calcolare la probabilità che passino più di 3 minuti tra due chiamate.
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                <p className="mb-2">
                  Se <Formula math="E[X] = 2" />, allora <Formula math="\lambda = \frac{1}{2} = 0.5" />
                </p>
                <p className="mb-2">
                  Quindi <Formula math="X \sim \text{Exp}(0.5)" />
                </p>
                
                <p className="mb-2"><strong>Calcolo di P(X &gt; 3):</strong></p>
                <Formula block math="P(X > 3) = 1 - F(3) = 1 - (1 - e^{-0.5 \cdot 3})" />
                <Formula block math="= e^{-1.5} \approx 0.2231" />
                
                <p className="text-sm mt-2">
                  La probabilità è circa 22.31%.
                </p>
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Summary title="Punti Chiave da Ricordare">
        <ul className="space-y-2">
          <li>
            <strong>Variabile Aleatoria Continua:</strong> Caratterizzata dalla PDF <Formula>f(x)</Formula>, con <Formula>P(X = x) = 0</Formula>
          </li>
          <li>
            <strong>Funzione di Densità:</strong> <Formula math="f(x) \geq 0" /> e <Formula math="\int_{-\infty}^{+\infty} f(x) dx = 1" />
          </li>
          <li>
            <strong>Funzione di Ripartizione:</strong> <Formula math="F(x) = \int_{-\infty}^x f(t) dt" />, continua
          </li>
          <li>
            <strong>Valore Atteso:</strong> <Formula math="E[X] = \int_{-\infty}^{+\infty} x f(x) dx" />
          </li>
          <li>
            <strong>Uniforme U(a,b):</strong> <Formula math="E[X] = \frac{a+b}{2}" />, <Formula math="\text{Var}(X) = \frac{(b-a)^2}{12}" />
          </li>
          <li>
            <strong>Esponenziale Exp(λ):</strong> <Formula math="E[X] = \frac{1}{\lambda}" />, <Formula math="\text{Var}(X) = \frac{1}{\lambda^2}" />
          </li>
          <li>
            <strong>Normale N(μ,σ²):</strong> Standardizzazione <Formula math="Z = \frac{X-\mu}{\sigma} \sim N(0,1)" />
          </li>
        </ul>
      </Summary>
    </motion.div>
  );
}