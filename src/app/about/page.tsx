"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Heart, Code, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <Info className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Info App</h1>
        <p className="text-xl text-muted-foreground">
          Informazioni su questa Progressive Web App
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span>Realizzata con</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-2">
              <Code className="h-8 w-8 mx-auto text-blue-500" />
              <p className="font-medium">Next.js</p>
              <p className="text-sm text-muted-foreground">React Framework</p>
            </div>
            <div className="text-center space-y-2">
              <Zap className="h-8 w-8 mx-auto text-yellow-500" />
              <p className="font-medium">TailwindCSS</p>
              <p className="text-sm text-muted-foreground">Utility-first CSS</p>
            </div>
            <div className="text-center space-y-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code className="h-8 w-8 mx-auto text-green-500" />
              </motion.div>
              <p className="font-medium">Framer Motion</p>
              <p className="text-sm text-muted-foreground">Animazioni</p>
            </div>
            <div className="text-center space-y-2">
              <Info className="h-8 w-8 mx-auto text-purple-500" />
              <p className="font-medium">shadcn/ui</p>
              <p className="text-sm text-muted-foreground">Componenti UI</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Caratteristiche</CardTitle>
            <CardDescription>
              Cosa rende speciale questa app
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-sm">Progressive Web App</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-sm">Installabile offline</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-sm">Responsive design</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-sm">Animazioni fluide</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Versione</CardTitle>
            <CardDescription>
              Informazioni sulla versione corrente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Versione:</span>
                <span className="text-sm font-medium">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Build:</span>
                <span className="text-sm font-medium">2024.01</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Aggiornamento:</span>
                <span className="text-sm font-medium">Oggi</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}