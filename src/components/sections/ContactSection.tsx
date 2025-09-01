import React from 'react';
import { useAppLanguage } from '../../context/AppContext';
import { contactInfo } from '../../data/mockData';
import ContactForm from '../contact/ContactForm';

const ContactSection: React.FC = () => {
  const { language } = useAppLanguage();

  const sectionContent = {
    fr: {
      title: 'Contactez-nous',
      subtitle: 'Prêt à découvrir TAO Passot ?',
      description: 'Notre équipe est à votre disposition pour répondre à toutes vos questions et organiser votre visite privée.',
      whatsapp: 'WhatsApp',
      email: 'Email',
      phone: 'Téléphone',
      hours: 'Horaires',
      emergency: 'Urgences'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Ready to discover TAO Passot?',
      description: 'Our team is at your disposal to answer all your questions and organize your private visit.',
      whatsapp: 'WhatsApp',
      email: 'Email',
      phone: 'Phone',
      hours: 'Hours',
      emergency: 'Emergency'
    }
  };

  const content = sectionContent[language];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {content.subtitle}
              </h3>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl">
                    💬
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {content.whatsapp}
                    </div>
                    <div className="text-gray-600">{contactInfo.whatsapp}</div>
                    <div className="text-sm text-green-600">
                      {language === 'fr' ? 'Réponse sous 2h' : 'Reply within 2h'}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl">
                    📧
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {content.email}
                    </div>
                    <div className="text-gray-600">{contactInfo.email}</div>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {content.phone}
                    </div>
                    <div className="text-gray-600">{contactInfo.phone}</div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">
                    {content.hours}
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>📅 {contactInfo.hours.weekdays}</div>
                    <div>🎯 {contactInfo.hours.weekends}</div>
                    <div>🚨 {contactInfo.hours.emergency}</div>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={contactInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:scale-105 transition-transform"
                  >
                    📷
                  </a>
                  <a
                    href={contactInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-105 transition-transform"
                  >
                    📘
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
