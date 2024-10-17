import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const ContactSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    {t("contact.title")}
                </h2>
                <div className="flex flex-col md:flex-row">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <form className="mx-auto max-w-md">
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="mb-2 block font-bold text-gray-700"
                                >
                                    {t("contact.form.name")}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="mb-2 block font-bold text-gray-700"
                                >
                                    {t("contact.form.email")}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="mb-2 block font-bold text-gray-700"
                                >
                                    {t("contact.form.message")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="rounded-md bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
                            >
                                {t("contact.form.send")}
                            </button>
                        </form>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <div className="mb-6">
                            <h3 className="mb-2 text-xl font-semibold">
                                {t("contact.info.title")}
                            </h3>
                            <div className="mb-2 flex items-center">
                                <MapPin className="mr-2 h-5 w-5 text-green-600" />
                                <span>{t("contact.info.address")}</span>
                            </div>
                            <div className="mb-2 flex items-center">
                                <Phone className="mr-2 h-5 w-5 text-green-600" />
                                <span>{t("contact.info.phone")}</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="mr-2 h-5 w-5 text-green-600" />
                                <span>{t("contact.info.email")}</span>
                            </div>
                        </div>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2167934778305!2d-73.98731668459375!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1645645404089!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
