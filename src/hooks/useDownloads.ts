import { useState, useCallback, useMemo } from 'react';
import type { DownloadableResource } from '../types';

// Ressources téléchargeables mock
const downloadableResources: DownloadableResource[] = [
  {
    id: 'brochure-generale',
    name: {
      fr: 'Brochure générale TAO Passot',
      en: 'TAO Passot General Brochure'
    },
    description: {
      fr: 'Présentation complète du projet avec photos et informations détaillées',
      en: 'Complete project presentation with photos and detailed information'
    },
    type: 'brochure',
    filename: 'tao-passot-brochure.pdf',
    size: '2.3 MB'
  },
  {
    id: 'plans-villa-intimite',
    name: {
      fr: 'Plans Villa Intimité (2 chambres)',
      en: 'Villa Intimité Floor Plans (2 bedrooms)'
    },
    description: {
      fr: 'Plans détaillés haute résolution de la Villa Intimité',
      en: 'High resolution detailed plans of Villa Intimité'
    },
    type: 'floorplan',
    filename: 'villa-intimite-plans.pdf',
    size: '1.8 MB'
  },
  {
    id: 'plans-villa-harmonie',
    name: {
      fr: 'Plans Villa Harmonie (3 chambres)',
      en: 'Villa Harmonie Floor Plans (3 bedrooms)'
    },
    description: {
      fr: 'Plans détaillés haute résolution de la Villa Harmonie',
      en: 'High resolution detailed plans of Villa Harmonie'
    },
    type: 'floorplan',
    filename: 'villa-harmonie-plans.pdf',
    size: '2.1 MB'
  },
  {
    id: 'plans-villa-prestige',
    name: {
      fr: 'Plans Villa Prestige (4 chambres)',
      en: 'Villa Prestige Floor Plans (4 bedrooms)'
    },
    description: {
      fr: 'Plans détaillés haute résolution de la Villa Prestige',
      en: 'High resolution detailed plans of Villa Prestige'
    },
    type: 'floorplan',
    filename: 'villa-prestige-plans.pdf',
    size: '2.5 MB'
  },
  {
    id: 'roi-projections',
    name: {
      fr: 'Projections ROI personnalisées',
      en: 'Personalized ROI Projections'
    },
    description: {
      fr: 'Analyses de rentabilité et projections financières sur 10 ans',
      en: 'Profitability analysis and 10-year financial projections'
    },
    type: 'roi',
    filename: 'tao-passot-roi-analysis.pdf',
    size: '1.2 MB'
  },
  {
    id: 'presentation-domenea',
    name: {
      fr: 'Présentation DOMENEA',
      en: 'DOMENEA Presentation'
    },
    description: {
      fr: 'Présentation corporate de DOMENEA et expertise immobilière',
      en: 'DOMENEA corporate presentation and real estate expertise'
    },
    type: 'presentation',
    filename: 'domenea-presentation.pdf',
    size: '3.1 MB'
  }
];

export const useDownloads = () => {
  const [downloadHistory, setDownloadHistory] = useState<string[]>([]);
  const [isDownloading, setIsDownloading] = useState<string | null>(null);

  // Obtenir toutes les ressources
  const allResources = useMemo(() => downloadableResources, []);

  // Filtrer par type
  const getResourcesByType = useCallback((type: DownloadableResource['type']) => {
    return allResources.filter(resource => resource.type === type);
  }, [allResources]);

  // Simuler un téléchargement
  const downloadResource = useCallback(async (resourceId: string): Promise<boolean> => {
    const resource = allResources.find(r => r.id === resourceId);
    if (!resource) return false;

    setIsDownloading(resourceId);

    try {
      // Simulation du téléchargement avec délai
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // En réalité, ici on déclencherait le téléchargement du fichier
      // window.open(`/downloads/${resource.filename}`, '_blank');
      console.log(`Téléchargement simulé: ${resource.filename}`);
      
      // Ajouter à l'historique
      setDownloadHistory(prev => [...prev, resourceId]);
      
      return true;
    } catch (error) {
      console.error('Erreur de téléchargement:', error);
      return false;
    } finally {
      setIsDownloading(null);
    }
  }, [allResources]);

  // Télécharger toutes les ressources d'un type
  const downloadAllOfType = useCallback(async (type: DownloadableResource['type']) => {
    const resources = getResourcesByType(type);
    const downloads = resources.map(resource => downloadResource(resource.id));
    
    try {
      await Promise.all(downloads);
      return true;
    } catch {
      return false;
    }
  }, [getResourcesByType, downloadResource]);

  // Télécharger le pack complet
  const downloadCompletePackage = useCallback(async () => {
    const allDownloads = allResources.map(resource => downloadResource(resource.id));
    
    try {
      await Promise.all(allDownloads);
      return true;
    } catch {
      return false;
    }
  }, [allResources, downloadResource]);

  // Vérifier si une ressource a été téléchargée
  const isDownloaded = useCallback((resourceId: string) => {
    return downloadHistory.includes(resourceId);
  }, [downloadHistory]);

  // Obtenir une ressource par ID
  const getResourceById = useCallback((id: string) => {
    return allResources.find(resource => resource.id === id);
  }, [allResources]);

  return {
    // État
    allResources,
    downloadHistory,
    isDownloading,
    
    // Actions
    downloadResource,
    downloadAllOfType,
    downloadCompletePackage,
    
    // Utilitaires
    getResourcesByType,
    getResourceById,
    isDownloaded,
    
    // État dérivé
    totalResources: allResources.length,
    downloadedCount: downloadHistory.length,
    hasDownloads: downloadHistory.length > 0,
    isCurrentlyDownloading: isDownloading !== null
  };
};
