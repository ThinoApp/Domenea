import React, { useState, useEffect, useRef } from "react";
import { useAppLanguage } from "../../context/AppContext";

const Footer: React.FC = () => {
  const { language } = useAppLanguage();
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  // Intersection Observer pour l'animation d'entrée
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "-50px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === footerRef.current) {
          setTimeout(() => setIsVisible(true), 200);
        }
      });
    }, observerOptions);

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const footerContent = {
    fr: {
      title: "TAO RESIDENCE",
      subtitle: "Investissement Immobilier de Luxe",
      contact: "Contact",
      followUs: "Suivez-nous",
      newsletter: "Newsletter",
      newsletterText: "Restez informé de nos dernières actualités",
      emailPlaceholder: "Votre adresse email",
      subscribe: "S'abonner",
      phone: "+33 7 71 14 02 91",
      email: "info@domenea.com",
      address: "Mont Passot, Nosy Be, Madagascar",
      rights: "Tous droits réservés",
      company: "DOMENEA - TAO Passot",
      quickLinks: "Liens Rapides",
      links: {
        residence: "Résidence",
        villas: "Villas",
        spa: "SPA",
        investment: "Investissement",
        contact: "Contact"
      }
    },
    en: {
      title: "TAO RESIDENCE",
      subtitle: "Luxury Real Estate Investment",
      contact: "Contact",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      newsletterText: "Stay informed about our latest news",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      phone: "+33 7 71 14 02 91",
      email: "info@domenea.com",
      address: "Mont Passot, Nosy Be, Madagascar",
      rights: "All rights reserved",
      company: "DOMENEA - TAO Passot",
      quickLinks: "Quick Links",
      links: {
        residence: "Residence",
        villas: "Villas",
        spa: "SPA",
        investment: "Investment",
        contact: "Contact"
      }
    },
  };

  const content = footerContent[language];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Implement email submission logic
  };

  return (
    <footer 
    id="contact"
      ref={footerRef}
      className="relative bg-slate-900 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Minimal Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-wide">
            {content.title}
          </h2>
          <p className="text-lg text-white/60 font-light">
            {content.subtitle}
          </p>
          <div className="mt-6 w-16 h-px bg-white/30 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          
          {/* Company Information */}
          <div className={`lg:col-span-2 transition-all duration-1200 delay-200 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">{content.company}</h3>
                <p className="text-white/70 leading-relaxed text-base">
                  {language === 'fr' 
                    ? "Investissement immobilier de luxe à Madagascar. Une expérience unique alliant modernité, confort et excellence architecturale."
                    : "Luxury real estate investment in Madagascar. A unique experience combining modernity, comfort and architectural excellence."
                  }
                </p>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white mb-4">{content.contact}</h4>
                
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">{content.email}</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">{content.phone}</span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">{content.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-1200 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}>
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-white">{content.quickLinks}</h4>
              <ul className="space-y-3">
                {Object.entries(content.links).map(([key, value]) => (
                  <li key={key}>
                    <a
                      href={`#${key}`}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className={`transition-all duration-1200 delay-600 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}>
            <div className="space-y-8">
              {/* Newsletter */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">{content.newsletter}</h4>
                <p className="text-white/60 text-sm mb-6">{content.newsletterText}</p>
                
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={content.emailPlaceholder}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-white/90 transition-all duration-300"
                  >
                    {content.subscribe}
                  </button>
                </form>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">{content.followUs}</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/taopassot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://www.facebook.com/taopassot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://wa.me/33771140291"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-16 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 {content.company}. {content.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
