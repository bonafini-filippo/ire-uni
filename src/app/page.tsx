"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Settings, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="inline-block"
        >
          <Sparkles className="h-16 w-16 mx-auto text-primary" />
        </motion.div>
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Benvenuto nella tua
          <span className="text-primary"> PWA</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Un&apos;app moderna e veloce, installabile direttamente sul tuo dispositivo. 
          Esplora i contenuti attraverso il menu laterale.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <BookOpen className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Contenuti Organizzati</CardTitle>
            <CardDescription>
              Accedi facilmente a tutti gli argomenti attraverso il menu laterale
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <Smartphone className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Mobile First</CardTitle>
            <CardDescription>
              Ottimizzata per tutti i dispositivi, installabile come app nativa
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <Settings className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Personalizzabile</CardTitle>
            <CardDescription>
              Interfaccia pulita e moderna con animazioni fluide
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Inizia ad Esplorare</CardTitle>
            <CardDescription>
              Usa il menu hamburger in alto a sinistra per navigare tra le diverse sezioni
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="w-full sm:w-auto">
              Apri Menu
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
