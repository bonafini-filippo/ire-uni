'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { usePWAInstall } from '@/lib/use-pwa-install';

export function PWADebug() {
  const { canInstall, isInstalled, install } = usePWAInstall();
  const [pwaStatus, setPwaStatus] = useState<Record<string, string | boolean | undefined>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkPWAStatus = () => {
      const status: Record<string, string | boolean | undefined> = {
        isStandalone: window.matchMedia('(display-mode: standalone)').matches,
        isInstalled: isInstalled,
        canInstall: canInstall,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        serviceWorker: 'serviceWorker' in navigator,
        localStorage: 'localStorage' in window,
        manifest: document.querySelector('link[rel="manifest"]')?.getAttribute('href') || undefined,
        appleTouchIcon: document.querySelector('link[rel="apple-touch-icon"]')?.getAttribute('href') || undefined,
        viewport: document.querySelector('meta[name="viewport"]')?.getAttribute('content') || undefined,
        themeColor: document.querySelector('meta[name="theme-color"]')?.getAttribute('content') || undefined,
      };
      setPwaStatus(status);
    };

    checkPWAStatus();
    const interval = setInterval(checkPWAStatus, 2000);

    return () => clearInterval(interval);
  }, [canInstall, isInstalled]);

  // Mostra solo in development
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        title="PWA Debug"
      >
        🔧
      </button>

      {isVisible && (
        <Card className="fixed top-16 left-4 z-50 w-80 max-h-96 overflow-y-auto bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-sm">PWA Debug Info</CardTitle>
          </CardHeader>
          <CardContent className="text-xs space-y-2">
            <div>
              <strong>Standalone:</strong> {pwaStatus.isStandalone ? '✅' : '❌'}
            </div>
            <div>
              <strong>Installabile:</strong> {pwaStatus.canInstall ? '✅' : '❌'}
            </div>
            <div>
              <strong>Installata:</strong> {pwaStatus.isInstalled ? '✅' : '❌'}
            </div>
            <div>
              <strong>Service Worker:</strong> {pwaStatus.serviceWorker ? '✅' : '❌'}
            </div>
            <div>
              <strong>Manifest:</strong> {pwaStatus.manifest || '❌'}
            </div>
            <div>
              <strong>Apple Touch Icon:</strong> {pwaStatus.appleTouchIcon || '❌'}
            </div>
            <div>
              <strong>Online:</strong> {pwaStatus.onLine ? '✅' : '❌'}
            </div>
            <div>
              <strong>Platform:</strong> {pwaStatus.platform}
            </div>
            <div className="pt-2">
              <button
                onClick={() => install()}
                disabled={!canInstall}
                className="w-full bg-blue-600 text-white p-2 rounded text-xs disabled:opacity-50"
              >
                Test Install
              </button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
