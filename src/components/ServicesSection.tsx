import { Sun, Wind, Zap } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const ServicesSection: React.FC = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: Wind,
            title: t("services.wind.title"),
            description: t("services.wind.description"),
        },
        {
            icon: Sun,
            title: t("services.solar.title"),
            description: t("services.solar.description"),
        },
        {
            icon: Zap,
            title: t("services.custom.title"),
            description: t("services.custom.description"),
        },
    ];

    return (
        <section id="services" className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    {t("services.title")}
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="rounded-lg bg-white p-6 text-center shadow-md"
                        >
                            <service.icon className="mx-auto mb-4 h-16 w-16 text-green-600" />
                            <h3 className="mb-2 text-xl font-semibold">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
