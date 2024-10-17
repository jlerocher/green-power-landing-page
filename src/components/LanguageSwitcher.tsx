import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`px-2 py-1 rounded ${i18n.language === 'fr' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={() => changeLanguage('fr')}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;