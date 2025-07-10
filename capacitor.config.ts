import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.638bad83d4864053b8b62288ca3d7f53',
  appName: 'veritus-landing-page-pulse',
  webDir: 'dist',
  server: {
    url: 'https://638bad83-d486-4053-b8b6-2288ca3d7f53.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Camera: {
      permissions: ['camera', 'photos']
    }
  }
};

export default config;