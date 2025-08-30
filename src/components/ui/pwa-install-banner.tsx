'use client';

import { useState } from 'react';
import { Button } from './button';
import { Download, X, Smartphone } from 'lucide-react';
import { usePWAInstall } from '@/lib/use-pwa-install';

export function PWAInstallBanner() {
  const { canInstall, isInstalled, install } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(false);

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      setIsDismissed(true);
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  // Non mostrare se l'app è già installata, non può essere installata, o è stata chiusa
  if (isInstalled || !canInstall || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center space-x-3">
          <Smartphone className="w-6 h-6" />
          <div>
            <p className="font-semibold">Installa MathStudy</p>
            <p className="text-sm text-blue-100">
              Accedi più velocemente e lavora offline
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            onClick={handleInstallClick}
            size="sm"
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            <Download className="w-4 h-4 mr-2" />
            Installa
          </Button>
          
          <Button
            onClick={handleDismiss}
            size="sm"
            variant="ghost"
            className="text-white hover:bg-blue-600"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
