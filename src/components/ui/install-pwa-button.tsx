'use client';

import { Button } from './button';
import { Download } from 'lucide-react';
import { usePWAInstall } from '@/lib/use-pwa-install';

export function InstallPWAButton() {
  const { canInstall, isInstalled, install } = usePWAInstall();

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      // L'installazione è riuscita, il hook gestirà lo stato
      console.log('Installazione completata con successo!');
    }
  };

  // Non mostrare nulla se l'app è già installata
  if (isInstalled) return null;

  // Non mostrare nulla se non può essere installata
  if (!canInstall) return null;

  return (
    <Button
      onClick={handleInstallClick}
      className="fixed bottom-4 right-4 z-50 shadow-lg bg-blue-600 hover:bg-blue-700 text-white animate-pulse"
      size="sm"
    >
      <Download className="w-4 h-4 mr-2" />
      Installa App
    </Button>
  );
}
