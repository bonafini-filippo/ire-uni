"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Formula, Definition, Example, Summary } from "@/components/math/formula";
import { Calculator } from "lucide-react";

export default function CalcoloCombinatorio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <Calculator className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Calcolo Combinatorio</h1>
        <p className="text-xl text-muted-foreground">
          Principi fondamentali per il conteggio e l&apos;analisi delle configurazioni
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Principi Fondamentali di Conteggio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Principio di Moltiplicazione</h3>
            <Definition title="Principio Moltiplicativo">
              <p className="mb-3">
                Se un esperimento può essere suddiviso in <Formula math="k" /> fasi successive, 
                dove la prima fase ha <Formula math="n_1" /> possibili risultati, la seconda ha 
                <Formula math="n_2" /> possibili risultati, e così via, allora il numero totale 
                di possibili risultati dell'esperimento è:
              </p>
              <Formula block math="n_1 \times n_2 \times \ldots \times n_k" />
            </Definition>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Principio di Addizione</h3>
            <Definition title="Principio Additivo">
              <p className="mb-3">
                Se un evento può verificarsi in <Formula math="n_1" /> modi oppure in 
                <Formula math="n_2" /> modi (mutuamente esclusivi), allora può verificarsi 
                complessivamente in:
              </p>
              <Formula block math="n_1 + n_2" />
              <p className="text-xs mt-2">
                Generalizzazione: per eventi mutuamente esclusivi <Formula math="A_1, A_2, \ldots, A_k" />
              </p>
              <Formula block math="|A_1 \cup A_2 \cup \ldots \cup A_k| = |A_1| + |A_2| + \ldots + |A_k|" />
            </Definition>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Permutazioni</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Permutazioni Semplici</h3>
            <Definition title="Permutazioni di n Oggetti">
              <p className="mb-2">
                Il numero di modi per disporre <Formula math="n" /> oggetti distinti in fila è:
              </p>
              <Formula block math="P_n = n!" />
              <p className="text-xs mt-2">
                dove <Formula math="n! = n \times (n-1) \times (n-2) \times \ldots \times 2 \times 1" />
              </p>
              <p className="text-xs">
                Convenzione: <Formula math="0! = 1" />
              </p>
            </Definition>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Disposizioni (Permutazioni con Ripetizione)</h3>
            <Definition title="Disposizioni di k Oggetti da n">
              <p className="mb-2">
                Il numero di modi per scegliere e disporre <Formula math="k" /> oggetti 
                da un insieme di <Formula math="n" /> oggetti distinti è:
              </p>
              <Formula block math="D_{n,k} = P_{n,k} = \frac{n!}{(n-k)!}" />
              <p className="text-xs mt-2">
                Formula alternativa: <Formula math="D_{n,k} = n \times (n-1) \times \ldots \times (n-k+1)" />
              </p>
            </Definition>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Permutazioni con Oggetti Ripetuti</h3>
            <Definition title="Permutazioni con Ripetizioni">
              <p className="mb-2">
                Se abbiamo <Formula math="n" /> oggetti di cui <Formula math="n_1" /> sono 
                di tipo 1, <Formula math="n_2" /> di tipo 2, ..., <Formula math="n_k" /> di tipo k, 
                il numero di permutazioni distinte è:
              </p>
              <Formula block math="\frac{n!}{n_1! \times n_2! \times \ldots \times n_k!}" />
              <p className="text-xs mt-2">
                dove <Formula math="n_1 + n_2 + \ldots + n_k = n" />
              </p>
            </Definition>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Combinazioni</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Combinazioni Semplici</h3>
            <Definition title="Combinazioni di k Oggetti da n">
              <p className="mb-2">
                Il numero di modi per scegliere <Formula math="k" /> oggetti da un insieme 
                di <Formula math="n" /> oggetti distinti (senza considerare l'ordine) è:
              </p>
              <Formula block math="C_{n,k} = \binom{n}{k} = \frac{n!}{k!(n-k)!}" />
              <p className="text-xs mt-2">
                Si legge: "n su k" o "coefficiente binomiale"
              </p>
            </Definition>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Proprietà dei Coefficienti Binomiali</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Proprietà fondamentali:</h4>
                <ul className="space-y-2 text-sm">
                  <li><Formula math="\binom{n}{k} = \binom{n}{n-k}" /> (simmetria)</li>
                  <li><Formula math="\binom{n}{0} = \binom{n}{n} = 1" /></li>
                  <li><Formula math="\binom{n}{1} = \binom{n}{n-1} = n" /></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Formula ricorsiva (Triangolo di Pascal):</h4>
                <Formula block math="\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Combinazioni con Ripetizione</h3>
            <Definition title="Combinazioni con Ripetizioni Ammesse">
              <p className="mb-2">
                Il numero di modi per scegliere <Formula math="k" /> oggetti da <Formula math="n" /> 
                tipi diversi, ammettendo ripetizioni, è:
              </p>
              <Formula block math="CR_{n,k} = \binom{n+k-1}{k} = \binom{n+k-1}{n-1}" />
              <p className="text-xs mt-2">
                Equivale al numero di soluzioni non negative dell'equazione 
                <Formula math="x_1 + x_2 + \ldots + x_n = k" />
              </p>
            </Definition>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Teorema Binomiale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Definition title="Sviluppo del Binomio">
              <Formula block math="(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k" />
              <p className="text-xs mt-2">
                Forma esplicita:
              </p>
              <Formula block math="(x + y)^n = \binom{n}{0}x^n + \binom{n}{1}x^{n-1}y + \ldots + \binom{n}{n}y^n" />
            </Definition>

            <div className="text-sm space-y-2">
              <p><strong>Casi particolari:</strong></p>
              <ul className="list-disc list-inside text-xs space-y-1">
                <li><Formula math="(1 + x)^n = \sum_{k=0}^{n} \binom{n}{k} x^k" /></li>
                <li><Formula math="2^n = \sum_{k=0}^{n} \binom{n}{k}" /> (ponendo x=y=1)</li>
                <li><Formula math="0 = \sum_{k=0}^{n} (-1)^k \binom{n}{k}" /> (ponendo x=1, y=-1)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Principio Inclusione-Esclusione</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Definition title="Formula Inclusione-Esclusione">
              <p className="mb-2">Per due insiemi A e B:</p>
              <Formula block math="|A \cup B| = |A| + |B| - |A \cap B|" />
              
              <p className="mb-2 mt-3">Per tre insiemi A, B e C:</p>
              <Formula block math="|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|" />
            </Definition>

            <div className="text-sm space-y-1">
              <p><strong>Forma generale per n insiemi:</strong></p>
              <Formula block math="\left|\bigcup_{i=1}^{n} A_i\right| = \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_1 < \ldots < i_k \leq n} |A_{i_1} \cap \ldots \cap A_{i_k}|" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Permutazioni e Combinazioni</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              Un'aula ha 30 studenti. In quanti modi si possono:
              <br />a) Scegliere 5 studenti per un gruppo di lavoro?
              <br />b) Eleggere presidente, vice-presidente e segretario?
              <br />c) Formare una fila di tutti gli studenti?
            </p>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                
                <div className="mt-3">
                  <p className="mb-2"><strong>a) Gruppo di lavoro (ordine non importante):</strong></p>
                  <p className="mb-2">Si tratta di combinazioni semplici:</p>
                  <Formula block math="C_{30,5} = \binom{30}{5} = \frac{30!}{5! \cdot 25!} = \frac{30 \times 29 \times 28 \times 27 \times 26}{5!}" />
                  <Formula block math="= \frac{570024}{120} = 142506" />
                </div>
                
                <div className="mt-3">
                  <p className="mb-2"><strong>b) Cariche (ordine importante):</strong></p>
                  <p className="mb-2">Si tratta di disposizioni (permutazioni parziali):</p>
                  <Formula block math="D_{30,3} = \frac{30!}{(30-3)!} = \frac{30!}{27!} = 30 \times 29 \times 28 = 24360" />
                </div>
                
                <div className="mt-3">
                  <p className="mb-2"><strong>c) Fila di tutti gli studenti:</strong></p>
                  <p className="mb-2">Si tratta di permutazioni semplici:</p>
                  <Formula block math="P_{30} = 30! = 265252859812191058636308480000000" />
                  <p className="text-xs">
                    (Un numero astronomicamente grande!)
                  </p>
                </div>
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Principio Inclusione-Esclusione</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              In una classe di 25 studenti, 15 studiano inglese, 12 studiano francese e 
              8 studiano spagnolo. 7 studiano sia inglese che francese, 5 sia inglese che 
              spagnolo, 3 sia francese che spagnolo, e 2 studiano tutte e tre le lingue.
              <br />Quanti studenti non studiano nessuna di queste lingue?
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                <p className="mb-2">
                  Siano: I = inglese, F = francese, S = spagnolo
                </p>
                
                <p className="mb-2"><strong>Dati:</strong></p>
                <ul className="list-disc list-inside text-sm mb-3">
                  <li><Formula math="|I| = 15" /></li>
                  <li><Formula math="|F| = 12" /></li>
                  <li><Formula math="|S| = 8" /></li>
                  <li><Formula math="|I \cap F| = 7" /></li>
                  <li><Formula math="|I \cap S| = 5" /></li>
                  <li><Formula math="|F \cap S| = 3" /></li>
                  <li><Formula math="|I \cap F \cap S| = 2" /></li>
                </ul>
                
                <p className="mb-2"><strong>Applicando il principio inclusione-esclusione:</strong></p>
                <Formula block math="|I \cup F \cup S| = 15 + 12 + 8 - 7 - 5 - 3 + 2 = 22" />
                
                <p className="mb-2"><strong>Studenti che non studiano nessuna lingua:</strong></p>
                <Formula block math="25 - 22 = 3 \text{ studenti}" />
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Esempio Svolto: Combinazioni con Ripetizione</CardTitle>
        </CardHeader>
        <CardContent>
          <Example title="Problema">
            <p className="mb-3">
              Un pasticciere deve preparare una scatola di 10 dolci scegliendo tra 4 tipi: 
              cannoli, bignè, sfogliatelle e babà. In quanti modi diversi può comporre la scatola?
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Soluzione:</h5>
                <p className="mb-2">
                  Si tratta di combinazioni con ripetizione: scegliere 10 dolci da 4 tipi, 
                  dove l'ordine non conta e le ripetizioni sono ammesse.
                </p>
                
                <p className="mb-2">
                  <Formula math="n = 4" /> (tipi di dolci), <Formula math="k = 10" /> (dolci da scegliere)
                </p>
                
                <Formula block math="CR_{4,10} = \binom{4+10-1}{10} = \binom{13}{10} = \binom{13}{3}" />
                
                <Formula block math="= \frac{13!}{3! \cdot 10!} = \frac{13 \times 12 \times 11}{3 \times 2 \times 1} = \frac{1716}{6} = 286" />
                
                <p className="text-sm mt-2">
                  Il pasticciere può comporre la scatola in 286 modi diversi.
                </p>
              </div>
            </div>
          </Example>
        </CardContent>
      </Card>

      <Summary title="Formule Principali da Ricordare">
        <ul className="space-y-2">
          <li>
            <strong>Permutazioni:</strong> <Formula math="P_n = n!" />
          </li>
          <li>
            <strong>Disposizioni:</strong> <Formula math="D_{n,k} = \frac{n!}{(n-k)!}" />
          </li>
          <li>
            <strong>Combinazioni:</strong> <Formula math="C_{n,k} = \binom{n}{k} = \frac{n!}{k!(n-k)!}" />
          </li>
          <li>
            <strong>Combinazioni con ripetizione:</strong> <Formula math="CR_{n,k} = \binom{n+k-1}{k}" />
          </li>
          <li>
            <strong>Permutazioni con oggetti ripetuti:</strong> <Formula math="\frac{n!}{n_1! n_2! \ldots n_k!}" />
          </li>
          <li>
            <strong>Teorema binomiale:</strong> <Formula math="(x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k" />
          </li>
          <li>
            <strong>Inclusione-esclusione (2 insiemi):</strong> <Formula math="|A \cup B| = |A| + |B| - |A \cap B|" />
          </li>
        </ul>
      </Summary>
    </motion.div>
  );
}