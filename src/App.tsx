import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import IdentiteDigitale from "./pages/IdentiteDigitale";
import Actualites from "./pages/Actualites";
import Formations from "./pages/Formations";
import Evenements from "./pages/Evenements";
import Marketplace from "./pages/Marketplace";
import Cartographie from "./pages/Cartographie";
import PaiementPage from "./pages/PaiementPage";
import FloatingSidebar from "./pages/FloatingSidebar";
import PublicitePopup from "./pages/PublicitePopup"; // ou "./components/PublicitePopup"

const HERO_IMG = "https://images.unsplash.com/photo-1755189118414-14c8dacdb082?w=1600&h=900&fit=crop&auto=format";
const SURGERY_IMG = "https://images.unsplash.com/photo-1762237798212-bcc000c00891?w=800&h=600&fit=crop&auto=format";
const HALLWAY_IMG = "https://images.unsplash.com/photo-1719934398679-d764c1410770?w=800&h=600&fit=crop&auto=format";
const PRESIDENT_IMG = "https://images.unsplash.com/photo-1758574437870-f83c160efd82?w=600&h=700&fit=crop&auto=format";

const navLinks = [
  { label: "Accueil", href: "#accueil", page: "home" as const },
  { label: "À propos", href: "#presentation", page: "home" as const },
  { label: "Marketplace", href: "#marketplace", page: "marketplace" as const },
  { label: "Cartographie", href: "#cartographie", page: "cartographie" as const },
  { label: "Annuaire", href: "#identite-digitale", page: "identite-digitale" as const },
  { label: "Actualités", href: "#actualites", page: "actualites" as const },
  { label: "Événements", href: "#evenements", page: "evenements" as const },
  { label: "Formations", href: "#formations", page: "formations" as const },
];

const missions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Représentation et Plaidoyer",
    desc: "Porter la voix du secteur privé de la santé auprès des instances nationales et internationales pour défendre les intérêts de ses membres.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Fédération des Acteurs",
    desc: "Rassembler et fédérer l'ensemble des acteurs du secteur privé de la santé en Côte d'Ivoire dans une dynamique de cohésion et de solidarité professionnelle.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Promotion de la Qualité",
    desc: "Promouvoir l'excellence des soins et l'amélioration continue de la qualité des prestations de santé dans le secteur privé ivoirien.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: "Développement du Secteur",
    desc: "Contribuer au développement économique et à la structuration du secteur privé de la santé en Côte d'Ivoire par des actions concrètes et durables.",
  },
];

const whyItems = [
  {
    num: "01",
    title: "Un secteur stratégique",
    desc: "Le secteur privé de la santé représente plus de 60% de l'offre de soins en Côte d'Ivoire et constitue un pilier incontournable du système de santé national.",
  },
  {
    num: "02",
    title: "Une plateforme unifiée",
    desc: "Pour la première fois, l'ensemble des acteurs privés de la santé — cliniques, pharmacies, laboratoires, cabinets médicaux — dispose d'une instance fédératrice commune.",
  },
  {
    num: "03",
    title: "Un interlocuteur institutionnel",
    desc: "La PSPSCI est reconnue par les pouvoirs publics comme l'interlocuteur officiel du secteur privé de la santé en Côte d'Ivoire.",
  },
  {
    num: "04",
    title: "Des actions concrètes",
    desc: "Négociation des tarifs, défense des intérêts professionnels, formation continue, partenariats stratégiques : la PSPSCI agit pour le quotidien de ses membres.",
  },
];

const objectifs = [
  "Renforcer la collaboration entre les acteurs privés et les structures publiques de santé",
  "Améliorer l'accès aux soins de qualité pour l'ensemble de la population ivoirienne",
  "Promouvoir l'investissement privé dans le secteur de la santé en Côte d'Ivoire",
  "Développer des partenariats avec les organismes internationaux de santé",
  "Soutenir la formation et le perfectionnement des professionnels de santé",
  "Contribuer à la mise en œuvre de la couverture maladie universelle (CMU)",
  "Lutter contre les pratiques illégales d'exercice de la médecine",
  "Participer à l'élaboration des politiques nationales de santé",
];

const innovations = [
  {
    tag: "Numérique",
    title: "Télémédecine et Santé Connectée",
    desc: "Le secteur privé de la santé s'engage dans la révolution numérique avec le déploiement de solutions de télémédecine permettant d'atteindre les zones éloignées.",
    img: "https://images.unsplash.com/photo-1759813641406-980519f58b1c?w=600&h=400&fit=crop&auto=format",
  },
  {
    tag: "Qualité",
    title: "Certification et Accréditation",
    desc: "Un programme ambitieux d'accréditation des établissements privés de santé selon les standards internationaux pour garantir l'excellence des soins.",
    img: HALLWAY_IMG,
  },
  {
    tag: "Formation",
    title: "Développement des Compétences",
    desc: "Des programmes de formation continue innovants pour maintenir le niveau d'excellence des professionnels de santé du secteur privé ivoirien.",
    img: "https://images.unsplash.com/photo-1785688302256-5bb8efecf4a0?w=600&h=400&fit=crop&auto=format",
  },
];

const stats = [
  { value: "2 500+", label: "Membres actifs" },
  { value: "18", label: "Régions couvertes" },
  { value: "60%", label: "De l'offre de soins" },
  { value: "15 ans", label: "D'existence" },
];

type PageType =
  | "home"
  | "identite-digitale"
  | "actualites"
  | "formations"
  | "evenements"
  | "marketplace"
  | "cartographie"
  | "paiement";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Écoute l'événement du FloatingSidebar
  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<{ page: string }>;
      const page = customEvent.detail.page;

      const validPages: PageType[] = [
        "home",
        "identite-digitale",
        "actualites",
        "formations",
        "evenements",
        "marketplace",
        "cartographie",
        "paiement",
      ];

      if (validPages.includes(page as PageType)) {
        setCurrentPage(page as PageType);
        window.scrollTo(0, 0);
      } else {
        console.warn(`Page "${page}" non encore implémentée`);
      }
    };

    window.addEventListener("navigate-to-page", handleNavigate);
    return () => window.removeEventListener("navigate-to-page", handleNavigate);
  }, []);

  const goToPage = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-white text-[#1A2332]">

        {/* Top bar */}
        <div className="bg-[#133868] text-white text-sm hidden md:block">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
            <div className="flex items-center gap-6 text-[0.78rem] text-blue-200">
              <a href="tel:+22520000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +225 20 00 00 00
              </a>
              <a href="mailto:contact@pspsci.ci" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                contact@pspsci.ci
              </a>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Abidjan, Côte d'Ivoire
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-200 text-[0.78rem]">Suivez-nous :</span>
              {["facebook", "twitter", "linkedin"].map((s) => (
                <a key={s} href="#" className="w-6 h-6 bg-white/10 hover:bg-[#2E7D5A] rounded flex items-center justify-center transition-colors">
                  <span className="text-[0.6rem] uppercase font-bold">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navbar */}
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md shadow-blue-900/8" : "bg-white border-b border-gray-100"}`}>
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <button onClick={goHome} className="flex items-center flex-shrink-0">
              <img
                src="https://pspsci.org/img/2@4x.png"
                alt="PSPSCI"
                className="h-12 w-auto object-contain"
              />
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="nav-item relative group">
                  <button
                    onClick={() => {
                      if (link.page === "home") {
                        goHome();
                      } else {
                        goToPage(link.page as PageType);
                      }
                    }}
                    className={`nav-link px-4 py-2 text-sm font-semibold transition-colors block ${currentPage === link.page && link.page !== "home" ? "text-[#1B4F8A]" : "text-[#1A2332] hover:text-[#1B4F8A]"}`}
                  >
                    {link.label}
                  </button>
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://www.figma.com/make/AqtlMXURSYZY2oPw7ClzZc/MobiSant%C3%A9?code-node-id=0-9&p=f&t=lBSXIF7JNQOgYYYX-0&fullscreen=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold bg-[#1B4F8A] text-white px-5 py-2 rounded-lg hover:bg-[#133868] transition-colors uppercase tracking-wide whitespace-nowrap flex items-center gap-2"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
                </svg>
                Application MobiSanté
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-[#1B4F8A]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                }
              </svg>
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => {
                    setMobileOpen(false);
                    if (l.page === "home") {
                      goHome();
                    } else {
                      goToPage(l.page as PageType);
                    }
                  }}
                  className="text-sm font-semibold text-[#1A2332] hover:text-[#1B4F8A] py-1 text-left"
                >
                  {l.label}
                </button>
              ))}
              <div className="pt-2">
                <a
                  href="https://www.figma.com/make/AqtlMXURSYZY2oPw7ClzZc/MobiSant%C3%A9?code-node-id=0-9&p=f&t=lBSXIF7JNQOgYYYX-0&fullscreen=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-sm font-bold bg-[#1B4F8A] text-white px-4 py-2.5 rounded-lg uppercase tracking-wide"
                >
                  Application MobiSanté
                </a>
              </div>
            </div>
          )}
        </header>

        {currentPage === "identite-digitale" && <IdentiteDigitale />}
        {currentPage === "actualites" && <Actualites />}
        {currentPage === "formations" && <Formations />}
        {currentPage === "evenements" && <Evenements />}
        {currentPage === "marketplace" && <Marketplace />}
        {currentPage === "cartographie" && <Cartographie />}
        {currentPage === "paiement" && <PaiementPage />}

        {currentPage === "home" && <>

        {/* HERO */}
        <section id="accueil" className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0D2744] z-0">
            <img
              src={HERO_IMG}
              alt="Professionnels de santé en Côte d'Ivoire"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D2744] via-[#0D2744]/80 to-transparent" />
          </div>

          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden xl:block" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2E7D5A]/20 border border-[#2E7D5A]/40 rounded-full px-4 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 bg-[#3D9E72] rounded-full animate-pulse" />
                <span className="text-[#7DD3AC] text-xs font-semibold uppercase tracking-widest">Plateforme Officielle</span>
              </div>

              <h1 className="text-white leading-[1.12] mb-6" style={{fontFamily:"var(--font-display)", fontSize:"clamp(2.2rem, 5vw, 3.8rem)"}}>
                Fédérer le Secteur<br />
                Privé de la Santé<br />
                <em className="text-[#7DD3AC] not-italic">en Côte d'Ivoire</em>
              </h1>

              <p className="text-blue-200 text-lg leading-relaxed mb-10 max-w-lg">
                La PSPSCI est la plateforme unificatrice qui représente, défend et valorise
                l'ensemble des acteurs privés du secteur de la santé ivoirien au niveau national et international.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#presentation" className="bg-[#2E7D5A] hover:bg-[#245f45] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm">
                  Découvrir la PSPSCI
                </a>
                <a href="#missions" className="border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm backdrop-blur-sm">
                  Nos Missions
                </a>
                <button
                  onClick={() => goToPage("evenements")}
                  className="border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm backdrop-blur-sm"
                >
                  Voir les événements
                </button>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl p-6 hover:bg-white/12 transition-colors">
                  <div className="text-3xl font-bold text-white mb-1" style={{fontFamily:"var(--font-display)"}}>{s.value}</div>
                  <div className="text-blue-200 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
            <span className="text-white text-xs uppercase tracking-widest">Découvrir</span>
            <div className="w-px h-10 bg-white/40 animate-pulse" />
          </div>
        </section>

        {/* STATS BAR MOBILE */}
        <div className="lg:hidden bg-[#1B4F8A] text-white">
          <div className="grid grid-cols-2 divide-x divide-blue-700/50 divide-y divide-blue-700/50">
            {stats.map((s) => (
              <div key={s.label} className="p-5 text-center">
                <div className="text-2xl font-bold" style={{fontFamily:"var(--font-display)"}}>{s.value}</div>
                <div className="text-blue-200 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PRÉSENTATION */}
        <section id="presentation" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="section-number text-[#2E7D5A]">01</div>
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-xs text-[#5A6B80] uppercase tracking-widest font-semibold">Présentation</span>
                </div>
                <h2 className="text-4xl font-bold text-[#1B4F8A] mb-6 leading-tight">
                  La Plateforme du Secteur<br />Privé de la Santé de<br />Côte d'Ivoire
                </h2>
                <p className="text-[#5A6B80] text-lg leading-relaxed mb-6">
                  Créée pour répondre au besoin urgent de structuration et de représentation du secteur
                  privé de la santé en Côte d'Ivoire, la <strong className="text-[#1A2332]">PSPSCI</strong> est une organisation
                  faîtière qui regroupe l'ensemble des associations, syndicats et groupements professionnels
                  du secteur privé sanitaire ivoirien.
                </p>
                <p className="text-[#5A6B80] leading-relaxed mb-8">
                  En tant qu'interlocuteur institutionnel reconnu, elle œuvre pour l'harmonisation
                  des pratiques, la défense des intérêts professionnels et le renforcement de la
                  contribution du secteur privé à la politique nationale de santé.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-[#2E7D5A] rounded" />
                  <span className="text-sm font-semibold text-[#2E7D5A] uppercase tracking-wide">Fondée en 2009</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={SURGERY_IMG}
                    alt="Bloc opératoire dans un établissement de santé privé ivoirien"
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D2744]/80 to-transparent p-6">
                    <p className="text-white text-sm font-medium">Excellence médicale dans le secteur privé ivoirien</p>
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 bg-[#2E7D5A] text-white rounded-2xl p-5 shadow-xl">
                  <div className="text-3xl font-bold" style={{fontFamily:"var(--font-display)"}}>60%</div>
                  <div className="text-xs text-green-100 leading-tight mt-1">De l'offre<br/>nationale de soins</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTEXTE */}
        <section id="contexte" className="py-24 bg-[#F5F8FD]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-number text-[#2E7D5A]">02</div>
              <div className="h-px w-16 bg-gray-300" />
              <span className="text-xs text-[#5A6B80] uppercase tracking-widest font-semibold">Contexte</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              <h2 className="text-4xl font-bold text-[#1B4F8A] leading-tight">
                Un secteur en pleine<br />transformation face à<br />des enjeux majeurs
              </h2>
              <div className="space-y-5 text-[#5A6B80] leading-relaxed">
                <p>
                  Le système de santé ivoirien fait face à des défis considérables : croissance
                  démographique rapide, transition épidémiologique, insuffisance des infrastructures
                  publiques et besoins croissants de la population en soins de qualité.
                </p>
                <p>
                  Dans ce contexte, le secteur privé de la santé joue un rôle déterminant.
                  Il assure aujourd'hui plus de 60% de l'offre de soins au niveau national et contribue
                  significativement à l'emploi dans le domaine médical et paramédical.
                </p>
                <p>
                  Pourtant, malgré son importance stratégique, ce secteur souffrait d'un manque de
                  coordination et d'une représentation insuffisante face aux instances de décision.
                  La création de la PSPSCI répond précisément à ce défi historique.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {[
                { color: "#1B4F8A", icon: "🏥", title: "Infrastructure", desc: "Plus de 3 000 établissements privés de santé répartis sur l'ensemble du territoire national." },
                { color: "#2E7D5A", icon: "👨‍⚕️", title: "Ressources humaines", desc: "Environ 40% des médecins spécialistes exercent exclusivement dans le secteur privé." },
                { color: "#C9973A", icon: "📊", title: "Impact économique", desc: "Le secteur privé de santé représente un chiffre d'affaires annuel de plus de 500 milliards FCFA." },
              ].map((c) => (
                <div key={c.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{c.icon}</div>
                  <h3 className="font-bold text-[#1A2332] mb-2 text-lg" style={{fontFamily:"var(--font-display)"}}>{c.title}</h3>
                  <p className="text-[#5A6B80] text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOT DU PRÉSIDENT */}
        <section id="president" className="py-24 bg-[#1B4F8A] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-12">
              <div className="section-number text-[#7DD3AC]">03</div>
              <div className="h-px w-16 bg-white/20" />
              <span className="text-xs text-blue-300 uppercase tracking-widest font-semibold">Mot du Président</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden bg-blue-800">
                    <img
                      src={PRESIDENT_IMG}
                      alt="Le Président de la PSPSCI"
                      className="w-full h-[420px] object-cover opacity-90"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-xl p-4 shadow-lg">
                    <div className="font-bold text-[#1B4F8A]" style={{fontFamily:"var(--font-display)"}}>Dr. Alphonse N'Guessan Kouassi</div>
                    <div className="text-[#5A6B80] text-sm">Président de la PSPSCI</div>
                    <div className="text-xs text-[#2E7D5A] font-semibold mt-1 uppercase tracking-wide">Médecin Cardiologue</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col justify-center">
                <blockquote className="relative">
                  <svg className="w-16 h-16 text-[#2E7D5A] opacity-40 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm12 0c-4.4 0-8 3.6-8 16v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"/>
                  </svg>
                  <p className="text-blue-100 text-xl leading-relaxed mb-6 italic" style={{fontFamily:"var(--font-display)"}}>
                    "Le secteur privé de la santé en Côte d'Ivoire n'est pas un concurrent du secteur public :
                    il en est un partenaire indispensable. Notre mission est de construire un système de santé
                    performant, équitable et accessible à tous les Ivoiriens."
                  </p>
                  <p className="text-blue-200 leading-relaxed mb-6">
                    Depuis la création de la PSPSCI, nous avons œuvré sans relâche pour fédérer nos énergies,
                    harmoniser nos pratiques et porter d'une seule voix les aspirations du secteur privé de la santé
                    auprès des pouvoirs publics, des partenaires techniques et financiers et de la société civile.
                  </p>
                  <p className="text-blue-200 leading-relaxed mb-8">
                    Je vous invite à rejoindre cette dynamique collective pour bâtir ensemble une Côte d'Ivoire
                    en meilleure santé, dans laquelle chaque citoyen bénéficiera de soins de qualité, quelles
                    que soient sa situation géographique ou économique.
                  </p>

                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-white font-bold" style={{fontFamily:"var(--font-display)"}}>Dr. Alphonse N'Guessan Kouassi</div>
                      <div className="text-blue-300 text-sm">Président de la PSPSCI</div>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <div className="w-8 h-1 bg-[#2E7D5A] rounded" />
                      <div className="w-4 h-1 bg-white/30 rounded" />
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* MISSIONS */}
        <section id="missions" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-number text-[#2E7D5A]">04</div>
              <div className="h-px w-16 bg-gray-200" />
              <span className="text-xs text-[#5A6B80] uppercase tracking-widest font-semibold">Nos Missions</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
              <h2 className="text-4xl font-bold text-[#1B4F8A] leading-tight">
                Des missions au service<br />de l'excellence sanitaire
              </h2>
              <p className="text-[#5A6B80] leading-relaxed lg:max-w-sm">
                La PSPSCI s'est fixé des missions claires pour structurer, représenter et développer
                le secteur privé de la santé en Côte d'Ivoire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {missions.map((m, i) => (
                <div key={m.title} className="group flex gap-6 p-7 rounded-2xl border border-gray-100 hover:border-[#2E7D5A]/30 hover:bg-[#F5F8FD] transition-all cursor-default">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#F5F8FD] group-hover:bg-[#2E7D5A] text-[#2E7D5A] group-hover:text-white rounded-xl flex items-center justify-center transition-all">
                    {m.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#5A6B80] mb-2 font-semibold uppercase tracking-wider">Mission {String(i+1).padStart(2,"0")}</div>
                    <h3 className="font-bold text-[#1A2332] text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>{m.title}</h3>
                    <p className="text-[#5A6B80] text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POURQUOI LA PSPSCI */}
        <section id="pourquoi" className="py-24 bg-[#F5F8FD]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-16 bg-gray-300" />
                <div className="section-number text-[#2E7D5A]">05</div>
                <div className="h-px w-16 bg-gray-300" />
              </div>
              <h2 className="text-4xl font-bold text-[#1B4F8A] leading-tight mb-4">
                Pourquoi la PSPSCI ?
              </h2>
              <p className="text-[#5A6B80] max-w-xl mx-auto">
                Quatre raisons essentielles pour lesquelles la PSPSCI est indispensable
                au développement du secteur de la santé en Côte d'Ivoire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyItems.map((item) => (
                <div key={item.num} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold text-gray-100" style={{fontFamily:"var(--font-display)"}}>{item.num}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2332] text-xl mb-3" style={{fontFamily:"var(--font-display)"}}>{item.title}</h3>
                    <p className="text-[#5A6B80] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OBJECTIFS */}
        <section id="objectifs" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="section-number text-[#2E7D5A]">06</div>
                  <div className="h-px w-16 bg-gray-200" />
                  <span className="text-xs text-[#5A6B80] uppercase tracking-widest font-semibold">Objectifs</span>
                </div>
                <h2 className="text-4xl font-bold text-[#1B4F8A] leading-tight mb-6">
                  Objectifs spécifiques<br />de la plateforme
                </h2>
                <p className="text-[#5A6B80] leading-relaxed mb-8">
                  La PSPSCI s'est dotée d'objectifs précis et ambitieux pour guider son action
                  au service du secteur privé de la santé en Côte d'Ivoire.
                </p>

                <ul className="space-y-3">
                  {objectifs.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#1A2332]">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-[#2E7D5A]/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#2E7D5A] rounded-full" />
                      </div>
                      <span className="text-sm leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={HALLWAY_IMG}
                  alt="Couloir d'un établissement de santé moderne"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4F8A]/60 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-8">
                  <div className="bg-white/95 rounded-xl p-5 backdrop-blur">
                    <div className="text-sm font-bold text-[#1B4F8A] mb-1">Engagement 2025–2030</div>
                    <p className="text-sm text-[#5A6B80] leading-relaxed">
                      Un plan stratégique ambitieux pour doubler la capacité d'accueil
                      du secteur privé et améliorer l'accès aux soins pour 10 millions d'Ivoiriens supplémentaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INNOVATIONS */}
        <section id="innovations" className="py-24 bg-[#F5F8FD]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-number text-[#2E7D5A]">07</div>
              <div className="h-px w-16 bg-gray-300" />
              <span className="text-xs text-[#5A6B80] uppercase tracking-widest font-semibold">Innovations</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
              <h2 className="text-4xl font-bold text-[#1B4F8A] leading-tight">
                Innovations au service<br />de la santé privée
              </h2>
              <p className="text-[#5A6B80] leading-relaxed">
                Le secteur privé de la santé ivoirien est en pleine mutation. La PSPSCI accompagne
                ses membres dans l'adoption des technologies et pratiques les plus innovantes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {innovations.map((inn) => (
                <div key={inn.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group">
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={inn.img}
                      alt={inn.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#2E7D5A] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                        {inn.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#1A2332] text-lg mb-3" style={{fontFamily:"var(--font-display)"}}>{inn.title}</h3>
                    <p className="text-[#5A6B80] text-sm leading-relaxed">{inn.desc}</p>
                    <button
                      onClick={() => goToPage("evenements")}
                      className="mt-4 inline-flex items-center gap-2 text-[#1B4F8A] text-sm font-semibold hover:gap-3 transition-all"
                    >
                      Voir les événements liés
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA ADHÉSION */}
        <section className="py-20 bg-[#2E7D5A]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:"var(--font-display)"}}>
              Rejoignez la PSPSCI
            </h2>
            <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Ensemble, bâtissons un secteur privé de la santé fort, structuré et reconnu.
              Adhérez à la PSPSCI et bénéficiez de tous les services et avantages de la plateforme.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => goToPage("paiement")}
                className="bg-white text-[#2E7D5A] font-bold px-8 py-3.5 rounded-lg hover:bg-green-50 transition-colors text-sm"
              >
                Adhérer maintenant
              </button>
              <a href="#contact" className="border-2 border-white/60 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-white transition-colors text-sm">
                En savoir plus
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="bg-[#0D2744] text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
              <div className="lg:col-span-1">
                <div className="mb-4">
                  <img
                    src="https://pspsci.org/img/2@4x.png"
                    alt="PSPSCI"
                    className="h-12 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <p className="text-blue-200 text-sm leading-relaxed mb-6">
                  Plateforme du Secteur Privé de la Santé de Côte d'Ivoire. Fédérer, représenter, développer.
                </p>
                <div className="flex gap-2">
                  {["F", "T", "in", "YT"].map((s) => (
                    <a key={s} href="#" className="w-8 h-8 bg-white/10 hover:bg-[#1B4F8A] rounded flex items-center justify-center text-xs font-bold transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-2.5">
                  {["Accueil", "Présentation", "Contexte", "Mot du Président", "Missions", "Objectifs", "Innovations"].map((l) => (
                    <li key={l}>
                      <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Espace Membres</h4>
                <ul className="space-y-2.5">
                  <li>
                    <button
                      onClick={() => goToPage("actualites")}
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      Actualités
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => goToPage("evenements")}
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      Événements
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => goToPage("marketplace")}
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      Marketplace
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => goToPage("cartographie")}
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      Cartographie
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => goToPage("identite-digitale")}
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      Identité digitale
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => goToPage("formations")}
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      Formations
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => goToPage("paiement")}
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      Paiement
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-blue-200 text-sm">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#3D9E72]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Cocody Danga, Rue des Jardins,<br />Abidjan, Côte d'Ivoire</span>
                  </li>
                  <li className="flex gap-3 text-blue-200 text-sm">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#3D9E72]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    +225 20 00 00 00
                  </li>
                  <li className="flex gap-3 text-blue-200 text-sm">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#3D9E72]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    contact@pspsci.ci
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-[#1B4F8A]/40 rounded-xl border border-white/10">
                  <p className="text-xs text-blue-200 mb-2 font-semibold uppercase tracking-wide">Heures d'ouverture</p>
                  <p className="text-sm text-blue-100">Lun – Ven : 8h00 – 17h00</p>
                  <p className="text-sm text-blue-100">Sam : 9h00 – 13h00</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-300 text-xs">
              <p>© 2026 PSPSCI — Plateforme du Secteur Privé de la Santé de Côte d'Ivoire. Tous droits réservés.</p>
              <div className="flex gap-5">
                <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
                <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
                <a href="#" className="hover:text-white transition-colors">Plan du site</a>
              </div>
            </div>
          </div>
        </footer>

        </>}

         {/* ══════════ FENÊTRE PUBLICITAIRE ══════════ */}
         <PublicitePopup
  delay={1500}                          // Première apparition après 1,5s
  duration={15000}                      // Reste visible 15s
  interval={10 * 60 * 1000}             // 🔁 Réapparaît toutes les 10 minutes
  title="Rejoignez la PSPSCI"
  description="Adhérez dès aujourd'hui et bénéficiez de tous les avantages de la plateforme du secteur privé de la santé en Côte d'Ivoire."
  ctaLabel="Adhérer maintenant"
  ctaUrl="#/paiement"
/>

        {/* FloatingSidebar — visible sur TOUTES les pages */}
        <FloatingSidebar />
      </div>
    </HashRouter>
  );
}
