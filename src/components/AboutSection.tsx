import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold">
                            {t("about.title")}
                        </h2>
                        <p className="mb-4 text-gray-600">
                            {t("about.description1")}
                        </p>
                        <p className="text-gray-600">
                            {t("about.description2")}
                        </p>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <img
                            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="Team working on renewable energy project"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
