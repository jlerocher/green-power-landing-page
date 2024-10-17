import React from 'react';
import { Wind } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Wind className="h-8 w-8 text-green-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">GreenPower</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li><a href="#" className="text-gray-600 hover:text-green-600">{t('header.home')}</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-green-600">{t('header.services')}</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-green-600">{t('header.about')}</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-green-600">{t('header.contact')}</a></li>
          </ul>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;