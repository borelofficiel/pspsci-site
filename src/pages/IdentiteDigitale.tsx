import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Menu,
  Home,
  MapPin,
  BarChart3,
  BookOpen,
  Info,
  Mail,
  UserCircle2,
  Search,
  Phone,
  Globe,
  Clock,
  Award,
  X,
  Building2,
  Filter,
  Shield,
  CheckCircle2,
  Smartphone,
  TrendingUp,
  Users,
  Activity,
  IdCard,
  CreditCard,
  QrCode,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const avantages = [
  {
    icon: Shield,
    title: "Identité vérifiée",
    desc: "Votre profil est authentifié et certifié par la PSPSCI, garantissant la légitimité de votre exercice professionnel.",
    color: "#1B4F8A",
  },
  {
    icon: Globe,
    title: "Visibilité nationale",
    desc: "Soyez référencé dans l'annuaire officiel de la PSPSCI et visible de l'ensemble des acteurs du secteur santé ivoirien.",
    color: "#2E7D5A",
  },
  {
    icon: UserCircle2,
    title: "Profil complet",
    desc: "Présentez vos spécialités, vos horaires, vos tarifs et vos services en un seul endroit accessible à tous vos patients potentiels.",
    color: "#C9973A",
  },
  {
    icon: Activity,
    title: "Interopérabilité",
    desc: "Votre identité digitale PSPSCI est reconnue et compatible avec les plateformes partenaires du système de santé ivoirien.",
    color: "#1B4F8A",
  },
  {
    icon: TrendingUp,
    title: "Statistiques & Analytics",
    desc: "Accédez à des données sur les consultations de votre profil pour comprendre votre audience et optimiser votre présence.",
    color: "#2E7D5A",
  },
  {
    icon: Smartphone,
    title: "Accès MobiSanté",
    desc: "Votre identité digitale vous donne accès à l'application MobiSanté et à l'ensemble des services numériques de la PSPSCI.",
    color: "#C9973A",
  },
];

// Profils fictifs pour l'aperçu (style annuaire)
type Profil = {
  id: number;
  nom: string;
  specialite: string;
  ville: string;
  quartier: string;
  adresse: string;
  telephone: string;
  email: string;
  numeroOrdre: string;
  identifiant: string;
  horaires: string;
  langues: string;
  services: string[];
  type: "professionnel" | "etablissement";
  couleur: string;
};

const profils: Profil[] = [
  {
    id: 1,
    nom: "Dr. Adjoua Marie Konan",
    specialite: "Cardiologue — Pédiatre",
    ville: "Abidjan",
    quartier: "Cocody",
    adresse: "Cocody Danga, Rue des Jardins, Abidjan",
    telephone: "+225 07 08 09 10 11",
    email: "dr.konan@clinique.ci",
    numeroOrdre: "CI-MED-2024-04821",
    identifiant: "PSPSCI-PRO-2024-04821",
    horaires: "Lun–Ven : 8h–17h · Sam : 9h–13h",
    langues: "Français, Dioula, Anglais",
    services: ["Cardiologie", "Pédiatrie", "Échographie", "Électrocardiogramme"],
    type: "professionnel",
    couleur: "#1B4F8A",
  },
  {
    id: 2,
    nom: "Dr. Yao Kouamé Bertrand",
    specialite: "Médecin Généraliste",
    ville: "Bouaké",
    quartier: "Air France",
    adresse: "Bouaké, Quartier Air France, Avenue 4",
    telephone: "+225 05 06 07 08 09",
    email: "dr.yao@cabinet.ci",
    numeroOrdre: "CI-MED-2023-02345",
    identifiant: "PSPSCI-PRO-2023-02345",
    horaires: "Lun–Sam : 7h30–18h",
    langues: "Français, Baoulé",
    services: ["Médecine générale", "Vaccination", "Suivi chronique"],
    type: "professionnel",
    couleur: "#2E7D5A",
  },
  {
    id: 3,
    nom: "Clinique Sainte-Marie",
    specialite: "Clinique privée — Niveau 2",
    ville: "Abidjan",
    quartier: "Marcory",
    adresse: "Zone 4C, Marcory, Abidjan",
    telephone: "+225 27 20 00 00 00",
    email: "contact@clinique-saintemarie.ci",
    numeroOrdre: "MSHP-CI-2019-01143",
    identifiant: "PSPSCI-STR-2019-01143",
    horaires: "24h/24 — 7j/7",
    langues: "Français, Anglais",
    services: ["Chirurgie", "Maternité", "Urgences 24h", "Imagerie médicale", "Dialyse"],
    type: "etablissement",
    couleur: "#C9973A",
  },
  {
    id: 4,
    nom: "Dr. Fatou Bamba",
    specialite: "Gynécologue-Obstétricienne",
    ville: "Abidjan",
    quartier: "Plateau",
    adresse: "Plateau, Avenue Chardy, Immeuble Alpha 2000",
    telephone: "+225 01 02 03 04 05",
    email: "dr.bamba@gyn.ci",
    numeroOrdre: "CI-MED-2022-05678",
    identifiant: "PSPSCI-PRO-2022-05678",
    horaires: "Lun–Ven : 8h–16h",
    langues: "Français, Anglais",
    services: ["Gynécologie", "Obstétrique", "Échographie 3D"],
    type: "professionnel",
    couleur: "#8b5cf6",
  },
  {
    id: 5,
    nom: "Laboratoire BioSanté CI",
    specialite: "Laboratoire d'analyses",
    ville: "Daloa",
    quartier: "Centre-ville",
    adresse: "Daloa, Avenue de la Paix",
    telephone: "+225 32 78 00 00 00",
    email: "contact@biosante-ci.com",
    numeroOrdre: "MSHP-CI-2020-00789",
    identifiant: "PSPSCI-STR-2020-00789",
    horaires: "Lun–Sam : 6h30–18h",
    langues: "Français",
    services: ["Biologie médicale", "Hématologie", "Biochimie"],
    type: "etablissement",
    couleur: "#0891b2",
  },
  {
    id: 6,
    nom: "Dr. Ibrahim Coulibaly",
    specialite: "Chirurgien-Dentiste",
    ville: "Korhogo",
    quartier: "Centre",
    adresse: "Korhogo, Quartier Commerce, Rue du Marché",
    telephone: "+225 03 04 05 06 07",
    email: "dr.coulibaly@dental.ci",
    numeroOrdre: "CI-MED-2024-09987",
    identifiant: "PSPSCI-PRO-2024-09987",
    horaires: "Lun–Ven : 8h–17h · Sam : 9h–12h",
    langues: "Français, Sénoufo, Dioula",
    services: ["Chirurgie dentaire", "Orthodontie", "Prothèses"],
    type: "professionnel",
    couleur: "#ec4899",
  },
];

const villes = ["Toutes les villes", "Abidjan", "Bouaké", "Daloa", "Korhogo", "Man", "San-Pédro"];
const specialitesList = [
  "Toutes les spécialités",
  "Médecin",
  "Cardiologue",
  "Pédiatre",
  "Gynécologue",
  "Chirurgien-Dentiste",
  "Clinique",
  "Laboratoire",
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function IdentiteDigitale() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"professionnel" | "etablissement">("professionnel");
  const [search, setSearch] = useState("");
  const [selectedVille, setSelectedVille] = useState("Toutes les villes");
  const [selectedSpecialite, setSelectedSpecialite] = useState("Toutes les spécialités");
  const [selectedProfil, setSelectedProfil] = useState<Profil | null>(null);

  const goBack = () => navigate("/accueil");

  const goTo = (path: string) => {
    window.dispatchEvent(new CustomEvent("navigate-to-page", { detail: { page: path } }));
    setIsOpen(false);
  };

  // Filtrage
  const filtered = profils.filter((p) => {
    const matchType = p.type === activeTab;
    const matchSearch =
      search === "" ||
      p.nom.toLowerCase().includes(search.toLowerCase()) ||
      p.specialite.toLowerCase().includes(search.toLowerCase()) ||
      p.adresse.toLowerCase().includes(search.toLowerCase());
    const matchVille = selectedVille === "Toutes les villes" || p.ville === selectedVille;
    const matchSpec =
      selectedSpecialite === "Toutes les spécialités" ||
      p.specialite.toLowerCase().includes(selectedSpecialite.toLowerCase());
    return matchType && matchSearch && matchVille && matchSpec;
  });

  return (
    <div className="min-h-screen bg-[#F5F8FD]">
      {/* ══════════ HEADER ══════════ */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={goBack}
                className="p-2 rounded-lg text-gray-700 hover:text-[#1B4F8A] hover:bg-gray-100 transition-colors"
                aria-label="Retour"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#1B4F8A] to-[#133868] rounded-lg flex items-center justify-center">
                  <IdCard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-base sm:text-lg font-bold text-gray-900">
                    Identité Digitale
                  </h1>
                  <p className="text-xs text-gray-500 hidden sm:block">
                    Profils certifiés du secteur privé de la santé
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => goTo("accueil")}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1B4F8A] border border-gray-200 rounded-lg hover:border-[#1B4F8A] transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Accueil
              </button>
              <button
                onClick={() => goTo("evenements")}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1B4F8A] border border-gray-200 rounded-lg hover:border-[#1B4F8A] transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Événements
              </button>
              <button
                onClick={() => goTo("statistiques")}
                className="px-4 py-2 text-sm font-medium text-white bg-[#1B4F8A] hover:bg-[#133868] rounded-lg transition-colors flex items-center gap-2"
              >
                <BarChart3 className="w-4 h-4" />
                Statistiques
              </button>
            </div>

            {/* Burger mobile */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* ══════════ MENU MOBILE ══════════ */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-[280px] sm:w-[340px] bg-white z-50 shadow-2xl md:hidden flex flex-col">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-base font-bold text-[#1B4F8A] flex items-center gap-2">
                <IdCard className="w-5 h-5" />
                Navigation
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  alert("Fonctionnalité de connexion à venir");
                }}
                className="flex items-center gap-3 px-4 py-3 bg-[#1B4F8A] text-white hover:bg-[#133868] rounded-lg transition-colors mb-2"
              >
                <UserCircle2 className="w-5 h-5" />
                <span className="font-medium">Se connecter</span>
              </button>

              <button
                onClick={() => goTo("accueil")}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <Home className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">Accueil</span>
              </button>
              <button
                onClick={() => goTo("evenements")}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <BookOpen className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">Événements</span>
              </button>
              <button
                onClick={() => goTo("actualites")}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <BookOpen className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">Actualités</span>
              </button>
              <button
                onClick={() => goTo("formations")}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <Award className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">Formations</span>
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 bg-[#1B4F8A]/10 text-[#1B4F8A] rounded-lg transition-colors text-left"
              >
                <IdCard className="w-5 h-5" />
                <span className="font-medium">Identité digitale</span>
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  alert("Page à propos à venir");
                }}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <Info className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">À propos</span>
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  alert("Page contact à venir");
                }}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <Mail className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">Contact</span>
              </button>
            </nav>
          </div>
        </>
      )}

      {/* ══════════ HERO / RECHERCHE ══════════ */}
      <div className="bg-gradient-to-r from-[#1B4F8A] to-[#2E7D5A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 bg-[#7DD3AC] rounded-full animate-pulse" />
            <span className="text-[#7DD3AC] text-[0.7rem] font-semibold uppercase tracking-widest">
              Service PSPSCI
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Annuaire des Identités Digitales
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mb-6">
            Retrouvez tous les professionnels et établissements de santé certifiés par la PSPSCI.
            Chaque profil est vérifié, authentifié et intégré au système national de santé.
          </p>

          {/* Recherche */}
          <div className="mt-6 flex gap-3 max-w-xl">
            <div className="flex-1 flex items-center gap-2 bg-white/15 backdrop-blur border border-white/30 rounded-xl px-4 py-2.5">
              <Search className="w-4 h-4 text-white/70 flex-shrink-0" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher un nom, une spécialité, une adresse..."
                className="bg-transparent text-white placeholder-white/60 text-sm outline-none flex-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ MAIN ══════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className="bg-white border border-gray-200 rounded-xl inline-flex p-1 gap-1">
            <button
              onClick={() => setActiveTab("professionnel")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === "professionnel"
                  ? "bg-[#1B4F8A] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#1B4F8A]"
              }`}
            >
              <UserCircle2 className="w-4 h-4" />
              <span>
                Professionnels ({profils.filter((p) => p.type === "professionnel").length})
              </span>
            </button>
            <button
              onClick={() => setActiveTab("etablissement")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === "etablissement"
                  ? "bg-[#2E7D5A] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#2E7D5A]"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>
                Établissements ({profils.filter((p) => p.type === "etablissement").length})
              </span>
            </button>
          </div>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-[#1B4F8A]" />
            Filtres de recherche
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Rechercher
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nom, spécialité, adresse..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A] focus:ring-2 focus:ring-[#1B4F8A]/10 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Ville</label>
              <select
                value={selectedVille}
                onChange={(e) => setSelectedVille(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A] focus:ring-2 focus:ring-[#1B4F8A]/10 transition-all bg-white"
              >
                {villes.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Spécialité / Type
              </label>
              <select
                value={selectedSpecialite}
                onChange={(e) => setSelectedSpecialite(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A] focus:ring-2 focus:ring-[#1B4F8A]/10 transition-all bg-white"
              >
                {specialitesList.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Compteur */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="font-semibold text-gray-900">
                {activeTab === "professionnel"
                  ? "Liste des professionnels de santé"
                  : "Liste des établissements de santé"}
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">
                {filtered.length} résultat{filtered.length > 1 ? "s" : ""} trouvé
                {filtered.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Grid des résultats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {filtered.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProfil(p)}
                className="text-left bg-white rounded-xl border border-gray-100 hover:border-[#1B4F8A]/30 hover:shadow-lg transition-all p-5 group"
                style={{ borderLeftWidth: 4, borderLeftColor: p.couleur }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${p.couleur}15`, color: p.couleur }}
                  >
                    {p.type === "professionnel" ? (
                      <UserCircle2 className="w-6 h-6" />
                    ) : (
                      <Building2 className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm truncate group-hover:text-[#1B4F8A] transition-colors">
                      {p.nom}
                    </h4>
                    <p className="text-xs text-gray-500 truncate mt-0.5">{p.specialite}</p>
                    <span
                      className="inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1.5"
                      style={{ background: `${p.couleur}15`, color: p.couleur }}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      Vérifié
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    <span className="truncate">
                      {p.quartier}, {p.ville}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    <span className="truncate">{p.telephone}</span>
                  </div>
                </div>
                <p
                  className="text-xs font-medium mt-3 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  style={{ color: p.couleur }}
                >
                  Voir l'identité digitale →
                </p>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <UserCircle2 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Aucun résultat trouvé avec ces critères</p>
            </div>
          )}
        </div>

        {/* Avantages */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Les avantages de votre identité digitale
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Une identité digitale PSPSCI vous apporte bien plus qu'un simple profil en ligne.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {avantages.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="border border-gray-100 rounded-xl p-5 hover:border-[#2E7D5A]/30 hover:shadow-md transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-white"
                  style={{ background: color }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1.5">{title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA création */}
        <div className="bg-gradient-to-br from-[#1B4F8A] to-[#0D2744] rounded-2xl p-8 text-center shadow-xl">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2E7D5A] mb-4 shadow-lg">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Créez votre identité digitale
          </h3>
          <p className="text-blue-100 text-sm max-w-xl mx-auto mb-6">
            Rejoignez les 4 200+ professionnels déjà référencés. Votre profil certifié vous donne
            accès à tous les services numériques de la PSPSCI.
          </p>
          <button
            onClick={() => alert("Formulaire de création à venir")}
            className="bg-[#2E7D5A] hover:bg-[#245f45] text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-sm shadow-lg"
          >
            Créer mon identité digitale
          </button>
        </div>
      </div>

      {/* ══════════ MODAL PROFIL ══════════ */}
      {selectedProfil && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProfil(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="relative p-8 text-white rounded-t-2xl"
              style={{
                background: `linear-gradient(135deg, ${selectedProfil.couleur} 0%, #0D2744 100%)`,
              }}
            >
              <button
                onClick={() => setSelectedProfil(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-4 border-white shadow-xl bg-white/20 flex items-center justify-center">
                  {selectedProfil.type === "professionnel" ? (
                    <UserCircle2 className="w-14 h-14 text-white" strokeWidth={1.5} />
                  ) : (
                    <Building2 className="w-14 h-14 text-white" strokeWidth={1.5} />
                  )}
                </div>
                <div className="text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider">
                      Vérifié PSPSCI
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1">{selectedProfil.nom}</h3>
                  <p className="text-blue-100 text-sm">{selectedProfil.specialite}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Informations */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#1B4F8A]" />
                  Informations
                </h4>
                <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Adresse</p>
                      <p className="text-gray-900 font-medium text-sm">
                        {selectedProfil.adresse}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Téléphone</p>
                      <a
                        href={`tel:${selectedProfil.telephone.replace(/\s/g, "")}`}
                        className="text-[#1B4F8A] font-medium hover:underline text-sm"
                      >
                        {selectedProfil.telephone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email</p>
                      <a
                        href={`mailto:${selectedProfil.email}`}
                        className="text-[#1B4F8A] font-medium hover:underline break-all text-sm"
                      >
                        {selectedProfil.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Horaires</p>
                      <p className="text-gray-900 font-medium text-sm">
                        {selectedProfil.horaires}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Langues parlées</p>
                      <p className="text-gray-900 font-medium text-sm">
                        {selectedProfil.langues}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  {selectedProfil.type === "professionnel" ? (
                    <Award className="w-5 h-5 text-[#1B4F8A]" />
                  ) : (
                    <Building2 className="w-5 h-5 text-[#1B4F8A]" />
                  )}
                  {selectedProfil.type === "professionnel" ? "Spécialités" : "Services"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProfil.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                      style={{
                        background: `${selectedProfil.couleur}10`,
                        color: selectedProfil.couleur,
                        borderColor: `${selectedProfil.couleur}30`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Identifiant PSPSCI */}
              <div className="bg-[#F5F8FD] rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Identifiant PSPSCI
                  </p>
                  <p className="font-mono text-xs font-bold text-[#1B4F8A]">
                    {selectedProfil.identifiant}
                  </p>
                  <p className="font-mono text-[0.65rem] text-gray-500 mt-0.5">
                    N° Ordre : {selectedProfil.numeroOrdre}
                  </p>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                  <QrCode className="w-7 h-7 text-[#1B4F8A]" />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a
                  href={`tel:${selectedProfil.telephone.replace(/\s/g, "")}`}
                  className="flex-1 bg-gradient-to-r from-[#1B4F8A] to-[#133868] text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-5 h-5" />
                  Appeler
                </a>
                <a
                  href={`mailto:${selectedProfil.email}`}
                  className="flex-1 bg-white border-2 border-[#1B4F8A] text-[#1B4F8A] py-3 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}