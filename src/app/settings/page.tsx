"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Palette, Bell, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <Settings className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Impostazioni</h1>
        <p className="text-xl text-muted-foreground">
          Personalizza la tua esperienza
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Palette className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Aspetto</CardTitle>
            <CardDescription>
              Personalizza tema e colori dell&apos;applicazione
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Cambia Tema
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Bell className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Notifiche</CardTitle>
            <CardDescription>
              Gestisci le preferenze delle notifiche
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Configura
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Privacy</CardTitle>
            <CardDescription>
              Controlla i tuoi dati e la privacy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Gestisci Privacy
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Settings className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Generale</CardTitle>
            <CardDescription>
              Impostazioni generali dell&apos;applicazione
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Modifica
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}