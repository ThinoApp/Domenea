import React from 'react';
import { useAppLanguage } from '../../context/AppContext';
import { contactInfo } from '../../data/mockData';

const Footer: React.FC = () => {
  const { language } = useAppLanguage();

  const footerContent = {
    fr: {
      about: 'À propos',
      contact: 'Contact',
      follow: 'Suivez-nous',
      rights: 'Tous droits réservés',
      company: 'DOMENEA - Investissement immobilier de luxe à Madagascar'
    },
    en: {
      about: 'About',
      contact: 'Contact',
      follow: 'Follow us',
      rights: 'All rights reserved',
      company: 'DOMENEA - Luxury real estate investment in Madagascar'
    }
  };

  const content = footerContent[language];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TAO PASSOT</h3>
            <p className="text-gray-300 mb-4">
              {content.company}
            </p>
            <p className="text-gray-400 text-sm">
              Mont Passot, Nosy Be, Madagascar
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.contact}</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 {contactInfo.email}</p>
              <p>📞 {contactInfo.phone}</p>
              <p>💬 WhatsApp</p>
              <p className="text-sm text-gray-400 mt-4">
                {contactInfo.hours.weekdays}
              </p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.follow}</h4>
            <div className="flex space-x-4">
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                📷
              </a>
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                📘
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2025 DOMENEA - TAO Passot. {content.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
