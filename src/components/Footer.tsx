import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 GreenPower. {t('footer.rights')}</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400 transition duration-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-green-400 transition duration-300">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-green-400 transition duration-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-green-400 transition duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <a href="#" className="hover:text-green-400 transition duration-300 mr-4">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-green-400 transition duration-300">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;