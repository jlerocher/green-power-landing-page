import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative flex h-screen items-center justify-center bg-hero-image bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="mb-4 text-5xl font-bold">{t("hero.title")}</h1>
                <p className="mb-8 text-xl">{t("hero.subtitle")}</p>
                <Button
                    type="button"
                    variant="default"
                    size="lg"
                    className="rounded-md bg-green-600 font-bold text-white transition duration-300 hover:bg-green-700"
                >
                    {t("hero.cta")}
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
