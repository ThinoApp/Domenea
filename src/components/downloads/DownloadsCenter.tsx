import React from 'react';
import { useAppLanguage, useAppDownloads } from '../../context/AppContext';

const DownloadsCenter: React.FC = () => {
  const { language } = useAppLanguage();
  const { 
    allResources, 
    downloadResource, 
    isDownloading, 
    isDownloaded,
    downloadCompletePackage 
  } = useAppDownloads();

  const labels = {
    fr: {
      title: 'Centre de téléchargement',
      subtitle: 'Obtenez tous les documents nécessaires pour votre projet',
      downloadAll: 'Télécharger le pack complet',
      downloading: 'Téléchargement...',
      downloaded: 'Téléchargé',
      download: 'Télécharger',
      brochure: 'Brochures',
      floorplan: 'Plans',
      roi: 'Analyses ROI',
      presentation: 'Présentations'
    },
    en: {
      title: 'Download Center',
      subtitle: 'Get all the necessary documents for your project',
      downloadAll: 'Download complete package',
      downloading: 'Downloading...',
      downloaded: 'Downloaded',
      download: 'Download',
      brochure: 'Brochures',
      floorplan: 'Floor Plans',
      roi: 'ROI Analysis',
      presentation: 'Presentations'
    }
  };

  const content = labels[language];

  const getTypeLabel = (type: string) => {
    const typeMap = {
      brochure: content.brochure,
      floorplan: content.floorplan,
      roi: content.roi,
      presentation: content.presentation
    };
    return typeMap[type as keyof typeof typeMap] || type;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          {content.title}
        </h3>
        <p className="text-gray-600 mb-6">
          {content.subtitle}
        </p>
        
        <button
          onClick={downloadCompletePackage}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          {content.downloadAll}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allResources.map((resource) => (
          <div
            key={resource.id}
            className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">
                    {resource.type === 'brochure' ? '📋' :
                     resource.type === 'floorplan' ? '📐' :
                     resource.type === 'roi' ? '📊' : '🎯'}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {getTypeLabel(resource.type)}
                  </span>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-1">
                  {resource.name[language]}
                </h4>
                
                <p className="text-sm text-gray-600 mb-2">
                  {resource.description[language]}
                </p>
                
                <div className="flex items-center text-xs text-gray-500">
                  <span>📄 {resource.filename}</span>
                  <span className="mx-2">•</span>
                  <span>{resource.size}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => downloadResource(resource.id)}
              disabled={isDownloading === resource.id}
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                isDownloaded(resource.id)
                  ? 'bg-green-100 text-green-800 cursor-default'
                  : isDownloading === resource.id
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isDownloaded(resource.id) 
                ? `✓ ${content.downloaded}`
                : isDownloading === resource.id 
                ? content.downloading
                : content.download
              }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadsCenter;
