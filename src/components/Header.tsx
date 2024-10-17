import { Wind } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header className="border-b border-border bg-card text-card-foreground">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <div className="flex items-center">
                    <Wind className="mr-2 h-8 w-8 text-green-600" />
                    <span className="text-xl font-bold">GreenPower</span>
                </div>
                <nav className="hidden items-center md:flex">
                    <ul className="mr-6 flex space-x-6">
                        <li>
                            <a
                                href="#"
                                className="duration-400 transition-all hover:font-bold hover:text-green-600"
                            >
                                {t("header.home")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="duration-400 transition-all hover:font-bold hover:text-green-600"
                            >
                                {t("header.services")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="duration-400 transition-all hover:font-bold hover:text-green-600"
                            >
                                {t("header.about")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="duration-400 transition-all hover:font-bold hover:text-green-600"
                            >
                                {t("header.contact")}
                            </a>
                        </li>
                    </ul>
                    <LanguageSwitcher />
                </nav>

                <MobileMenu />
            </div>
        </header>
    );
};

export default Header;
