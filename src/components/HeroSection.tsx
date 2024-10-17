import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section
            className="relative flex h-screen items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage:
                    'url("https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="mb-4 text-5xl font-bold">{t("hero.title")}</h1>
                <p className="mb-8 text-xl">{t("hero.subtitle")}</p>
                <button className="rounded-full bg-green-600 px-6 py-3 font-bold text-white transition duration-300 hover:bg-green-700">
                    {t("hero.cta")}
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
