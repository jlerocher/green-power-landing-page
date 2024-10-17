import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState("");

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLang(lng);
    };

    useEffect(() => {
        setLang(i18n.language);
    }, [i18n.language, lang]);

    return (
        <div className="flex space-x-2 text-base">
            <button
                type="button"
                className={`rounded px-2 py-1 ${lang === "en" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => changeLanguage("en")}
            >
                EN
            </button>
            <button
                type="button"
                className={`rounded px-2 py-1 ${lang === "fr" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => changeLanguage("fr")}
            >
                FR
            </button>
        </div>
    );
};

export default LanguageSwitcher;
