export const PWA_CONFIG = {
  name: 'MathStudy - Probabilità & Statistica',
  shortName: 'MathStudy',
  description: 'La tua app di studio definitiva per Probabilità e Statistica universitaria',
  themeColor: '#2563eb',
  backgroundColor: '#ffffff',
  display: 'standalone' as const,
  orientation: 'portrait-primary' as const,
  scope: '/',
  startUrl: '/',
  icons: [
    {
      src: '/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable any'
    },
    {
      src: '/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable any'
    }
  ],
  categories: ['education', 'productivity'],
  lang: 'it',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Calcolo Combinatorio',
      shortName: 'Combinatoria',
      description: 'Accesso diretto al calcolo combinatorio',
      url: '/combinatoria',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192'
        }
      ]
    },
    {
      name: 'Variabili Aleatorie Discrete',
      shortName: 'V.A. Discrete',
      description: 'Studio delle variabili aleatorie discrete',
      url: '/argomento1',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192'
        }
      ]
    }
  ]
};

export const PWA_INSTALL_CRITERIA = {
  // Criteri per mostrare il pulsante di installazione
  minEngagementTime: 5000, // 5 secondi di permanenza sulla pagina
  minPageViews: 2, // Almeno 2 pagine visitate
  minScrollDepth: 0.3, // Almeno 30% della pagina scrollata
};
