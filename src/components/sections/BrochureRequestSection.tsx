import React, { useEffect, useRef, useState } from "react";
import { useAppLanguage } from "../../context/AppContext";

const BrochureRequestSection: React.FC = () => {
  const { language } = useAppLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    number: "",
    project: "",
    budget: "",
    offer: "",
  });

  // Intersection Observer pour l'animation d'entrée
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "-50px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === sectionRef.current) {
          setTimeout(() => setIsVisible(true), 200);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const content = {
    fr: {
      title: "ENTOURÉ DE COMMODITÉS",
      subtitle:
        "Vivez à proximité de plages, restaurants, commerçants et de sites naturels prisés",
      brochureTitle: "Obtenez la brochure complète, les plans d'étage",
      oneClick: "(en un clic)",
      fields: {
        firstName: "Prénom",
        lastName: "Nom",
        email: "Email",
        company: "Société",
        number: "Numéro",
        project: "Quel Projet?",
        budget: "Budget",
        offer: "Une Offre?",
      },
      projectOptions: [
        { value: "", label: "Sélectionner un projet" },
        { value: "residence", label: "TAO Residence" },
        { value: "villas", label: "TAO Villas" },
        { value: "spa", label: "TAO SPA" },
      ],
      budgetOptions: [
        { value: "", label: "Sélectionner un budget" },
        { value: "500k-1m", label: "500K - 1M €" },
        { value: "1m-2m", label: "1M - 2M €" },
        { value: "2m+", label: "2M+ €" },
      ],
      offerOptions: [
        { value: "", label: "Sélectionner une offre" },
        { value: "early-bird", label: "Offre Early Bird" },
        { value: "investment", label: "Pack Investisseur" },
        { value: "custom", label: "Offre sur mesure" },
      ],
      button: "Demander la Brochure",
    },
    en: {
      title: "SURROUNDED BY AMENITIES",
      subtitle:
        "Live near beaches, restaurants, shops and sought-after natural sites",
      brochureTitle: "Get the complete brochure, floor planss",
      oneClick: "(in one click)",
      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        company: "Company",
        number: "Number",
        project: "Which Project?",
        budget: "Budget",
        offer: "Any Offer?",
      },
      projectOptions: [
        { value: "", label: "Select a project" },
        { value: "residence", label: "TAO Residence" },
        { value: "villas", label: "TAO Villas" },
        { value: "spa", label: "TAO SPA" },
      ],
      budgetOptions: [
        { value: "", label: "Select a budget" },
        { value: "500k-1m", label: "500K - 1M €" },
        { value: "1m-2m", label: "1M - 2M €" },
        { value: "2m+", label: "2M+ €" },
      ],
      offerOptions: [
        { value: "", label: "Select an offer" },
        { value: "early-bird", label: "Early Bird Offer" },
        { value: "investment", label: "Investor Package" },
        { value: "custom", label: "Custom Offer" },
      ],
      button: "Request Sales Brochure",
    },
  };

  const currentContent = content[language];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement form submission logic
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 overflow-hidden"
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-wide">
            {currentContent.title}
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-lg shadow-2xl inline-block">
              <p className="text-slate-800 text-lg font-medium tracking-wide">
                {currentContent.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Image */}
          <div
            className={`transition-all duration-1200 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-400/20 to-slate-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-2xl overflow-hidden">
                <img
                  src="/assets/Photo 16.jpg"
                  alt="Luxury dining room with ocean view"
                  className="w-full h-[500px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge indication */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-sm font-medium text-slate-800 tracking-wider">
                    TAO RESIDENCE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div
            className={`transition-all duration-1200 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-light text-white mb-4 leading-tight">
                  {currentContent.brochureTitle}
                </h2>
                <p className="text-white/70 text-lg italic">
                  {currentContent.oneClick}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder={currentContent.fields.firstName}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder={currentContent.fields.lastName}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={currentContent.fields.email}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Company and Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder={currentContent.fields.company}
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="number"
                      placeholder={currentContent.fields.number}
                      value={formData.number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Project dropdown */}
                <div>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                    required
                  >
                    {currentContent.projectOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-slate-700 text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Budget dropdown */}
                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                  >
                    {currentContent.budgetOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-slate-700 text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Offer dropdown */}
                <div className="relative">
                  <select
                    name="offer"
                    value={formData.offer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                  >
                    {currentContent.offerOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-slate-700 text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                  >
                    {currentContent.button}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default BrochureRequestSection;
