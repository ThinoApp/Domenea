import React from 'react';
import { useAppLanguage, useAppROICalculator } from '../../context/AppContext';

const ROICalculatorWidget: React.FC = () => {
  const { language } = useAppLanguage();
  const { 
    investmentAmount,
    monthlyRental,
    annualCharges,
    calculation,
    setInvestmentAmount,
    setMonthlyRental,
    setAnnualCharges,
    getROIRecommendation,
    isValidCalculation
  } = useAppROICalculator();

  const labels = {
    fr: {
      title: 'Calculateur ROI',
      investment: 'Montant d\'investissement (€)',
      rental: 'Loyer mensuel estimé (€)',
      charges: 'Charges annuelles (€)',
      results: 'Résultats',
      annualReturn: 'Retour annuel',
      netROI: 'ROI net',
      breakEven: 'Seuil de rentabilité',
      years: 'ans',
      calculate: 'Calculer'
    },
    en: {
      title: 'ROI Calculator',
      investment: 'Investment amount (€)',
      rental: 'Estimated monthly rental (€)',
      charges: 'Annual charges (€)',
      results: 'Results',
      annualReturn: 'Annual return',
      netROI: 'Net ROI',
      breakEven: 'Break-even',
      years: 'years',
      calculate: 'Calculate'
    }
  };

  const content = labels[language];
  const recommendation = getROIRecommendation(calculation.netROI);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {content.title}
      </h3>

      <div className="space-y-6">
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.investment}
            </label>
            <input
              type="number"
              value={investmentAmount || ''}
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="250000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.rental}
            </label>
            <input
              type="number"
              value={monthlyRental || ''}
              onChange={(e) => setMonthlyRental(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="2000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.charges}
            </label>
            <input
              type="number"
              value={annualCharges || ''}
              onChange={(e) => setAnnualCharges(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="2500"
            />
          </div>
        </div>

        {/* Results */}
        {isValidCalculation && (
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              {content.results}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {calculation.annualReturn.toLocaleString()}€
                </div>
                <div className="text-sm text-gray-600">
                  {content.annualReturn}
                </div>
              </div>

              <div className="text-center">
                <div className={`text-2xl font-bold ${
                  recommendation.color === 'green' ? 'text-green-600' :
                  recommendation.color === 'blue' ? 'text-blue-600' :
                  recommendation.color === 'yellow' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {calculation.netROI}%
                </div>
                <div className="text-sm text-gray-600">
                  {content.netROI}
                </div>
                <div className={`text-xs font-medium mt-1 ${
                  recommendation.color === 'green' ? 'text-green-600' :
                  recommendation.color === 'blue' ? 'text-blue-600' :
                  recommendation.color === 'yellow' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {recommendation.level}
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">
                  {calculation.breakEvenYears}
                </div>
                <div className="text-sm text-gray-600">
                  {content.breakEven} ({content.years})
                </div>
              </div>
            </div>

            {/* ROI Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>0%</span>
                <span>ROI</span>
                <span>20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    recommendation.color === 'green' ? 'bg-green-500' :
                    recommendation.color === 'blue' ? 'bg-blue-500' :
                    recommendation.color === 'yellow' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ 
                    width: `${Math.min(Math.max(calculation.netROI * 5, 5), 100)}%` 
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ROICalculatorWidget;
