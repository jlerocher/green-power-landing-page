import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-800 py-8 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; 2024 GreenPower. {t("footer.rights")}</p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="transition duration-300 hover:text-green-400"
                        >
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            className="transition duration-300 hover:text-green-400"
                        >
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            className="transition duration-300 hover:text-green-400"
                        >
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            className="transition duration-300 hover:text-green-400"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    <a
                        href="#"
                        className="mr-4 transition duration-300 hover:text-green-400"
                    >
                        {t("footer.privacy")}
                    </a>
                    <a
                        href="#"
                        className="transition duration-300 hover:text-green-400"
                    >
                        {t("footer.terms")}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
