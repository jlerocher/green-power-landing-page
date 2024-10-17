import React from 'react';
import { Wind, Sun, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Wind, title: t('services.wind.title'), description: t('services.wind.description') },
    { icon: Sun, title: t('services.solar.title'), description: t('services.solar.description') },
    { icon: Zap, title: t('services.custom.title'), description: t('services.custom.description') },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <service.icon className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;