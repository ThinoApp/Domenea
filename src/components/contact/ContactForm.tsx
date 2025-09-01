import React from 'react';
import { useAppLanguage, useAppContact } from '../../context/AppContext';

const ContactForm: React.FC = () => {
  const { language } = useAppLanguage();
  const { 
    formData, 
    errors, 
    isSubmitting, 
    isSubmitted,
    updateField, 
    submitForm,
    resetForm 
  } = useAppContact();

  const labels = {
    fr: {
      title: 'Contactez-nous',
      subtitle: 'Réservez votre visite privée de TAO Passot',
      name: 'Nom complet',
      email: 'Email',
      phone: 'Téléphone',
      country: 'Pays',
      projectType: 'Type de projet',
      budget: 'Budget indicatif',
      villaType: 'Villa d\'intérêt',
      message: 'Message',
      submit: 'Envoyer la demande',
      submitting: 'Envoi en cours...',
      success: 'Votre message a été envoyé avec succès !',
      newMessage: 'Nouveau message'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Book your private visit to TAO Passot',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      country: 'Country',
      projectType: 'Project type',
      budget: 'Indicative budget',
      villaType: 'Villa of interest',
      message: 'Message',
      submit: 'Send request',
      submitting: 'Sending...',
      success: 'Your message has been sent successfully!',
      newMessage: 'New message'
    }
  };

  const content = labels[language];

  const projectTypes = {
    fr: ['Achat villa', 'Investissement locatif', 'Résidence secondaire', 'Autre'],
    en: ['Villa purchase', 'Rental investment', 'Second residence', 'Other']
  };

  const villaTypes = {
    fr: ['Villa Intimité (2 ch.)', 'Villa Harmonie (3 ch.)', 'Villa Prestige (4 ch.)'],
    en: ['Villa Intimité (2 bed.)', 'Villa Harmonie (3 bed.)', 'Villa Prestige (4 bed.)']
  };

  const budgetRanges = {
    fr: ['150 000€ - 200 000€', '200 000€ - 300 000€', '300 000€ +', 'À définir'],
    en: ['€150,000 - €200,000', '€200,000 - €300,000', '€300,000 +', 'To be defined']
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-600 mb-4">
          {content.success}
        </h3>
        <p className="text-gray-600 mb-6">
          {language === 'fr' 
            ? 'Nous vous répondrons dans les plus brefs délais.'
            : 'We will get back to you as soon as possible.'
          }
        </p>
        <button
          onClick={resetForm}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {content.newMessage}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          {content.title}
        </h3>
        <p className="text-gray-600">
          {content.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.name} *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.email} *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Téléphone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.phone} *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Pays */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.country} *
            </label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => updateField('country', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.country ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Type de projet */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.projectType} *
            </label>
            <select
              value={formData.projectType}
              onChange={(e) => updateField('projectType', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.projectType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Sélectionnez...</option>
              {projectTypes[language].map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
          </div>

          {/* Type de villa */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.villaType}
            </label>
            <select
              value={formData.villaType}
              onChange={(e) => updateField('villaType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionnez...</option>
              {villaTypes[language].map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.budget}
            </label>
            <select
              value={formData.budget}
              onChange={(e) => updateField('budget', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionnez...</option>
              {budgetRanges[language].map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {content.message} *
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={language === 'fr' 
              ? 'Décrivez votre projet ou vos questions...'
              : 'Describe your project or questions...'
            }
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? content.submitting : content.submit}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
