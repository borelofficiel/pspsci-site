import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Menu,
  Home,
  BarChart3,
  BookOpen,
  Info,
  Mail,
  UserCircle2,
  X,
  Filter,
  MapPin,
  Clock,
  Phone,
  Search,
  Plus,
  Settings,
  Ruler,
} from "lucide-react";

// ─── Données — Établissements privés de santé en Côte d'Ivoire ───────────────

type Etablissement = {
  id: number;
  nom: string;
  type: string;
  ville: string;
  commune: string;
  adresse: string;
  telephone: string;
  horaires: string;
  services: string[];
  latitude: number;
  longitude: number;
  conformite: "conforme" | "proche" | "surcharge";
};

const etablissements: Etablissement[] = [
  {
    id: 1,
    nom: "Clinique Sainte-Marie",
    type: "Clinique privée",
    ville: "Abidjan",
    commune: "Marcory",
    adresse: "Zone 4C, Boulevard VGE",
    telephone: "+225 27 20 00 00 00",
    horaires: "24h/24 — 7j/7",
    services: ["Urgences 24h", "Maternité", "Chirurgie", "Imagerie"],
    latitude: 5.3097,
    longitude: -3.9876,
    conformite: "conforme",
  },
  {
    id: 2,
    nom: "Polyclinique Internationale Avicenne",
    type: "Polyclinique",
    ville: "Abidjan",
    commune: "Cocody",
    adresse: "Rue des Jardins, Angré 8ème Tranche",
    telephone: "+225 27 22 40 00 00",
    horaires: "Lun–Dim : 8h–20h",
    services: ["Cardiologie", "Pédiatrie", "Gynécologie", "Laboratoire"],
    latitude: 5.3927,
    longitude: -3.9811,
    conformite: "conforme",
  },
  {
    id: 3,
    nom: "Laboratoire BioSanté CI",
    type: "Laboratoire",
    ville: "Abidjan",
    commune: "Plateau",
    adresse: "Avenue Chardy, Immeuble Alpha 2000",
    telephone: "+225 27 20 30 00 00",
    horaires: "Lun–Sam : 6h30–18h",
    services: ["Biologie médicale", "Hématologie", "Biochimie", "Sérologie"],
    latitude: 5.3234,
    longitude: -4.0178,
    conformite: "proche",
  },
  {
    id: 4,
    nom: "Clinique Médicale de Bouaké",
    type: "Clinique privée",
    ville: "Bouaké",
    commune: "Centre-ville",
    adresse: "Avenue Jean-Baptiste Mockey",
    telephone: "+225 31 63 00 00 00",
    horaires: "Lun–Sam : 8h–18h",
    services: ["Médecine générale", "Chirurgie", "Pédiatrie", "Urgences"],
    latitude: 7.6906,
    longitude: -5.0303,
    conformite: "conforme",
  },
  {
    id: 5,
    nom: "Pharmacie Saint-Michel",
    type: "Pharmacie",
    ville: "Abidjan",
    commune: "Yopougon",
    adresse: "Boulevard Principal, Yopougon Selmer",
    telephone: "+225 27 23 45 00 00",
    horaires: "Lun–Sam : 8h–22h",
    services: ["Médicaments", "Parapharmacie", "Garde de nuit"],
    latitude: 5.3354,
    longitude: -4.0809,
    conformite: "surcharge",
  },
  {
    id: 6,
    nom: "Centre Médical de Daloa",
    type: "Centre médical",
    ville: "Daloa",
    commune: "Centre-ville",
    adresse: "Avenue de la Paix",
    telephone: "+225 32 78 00 00 00",
    horaires: "Lun–Sam : 7h30–18h",
    services: ["Médecine générale", "Maternité", "Échographie"],
    latitude: 6.8773,
    longitude: -6.4501,
    conformite: "conforme",
  },
  {
    id: 7,
    nom: "Clinique Dentaire Korhogo",
    type: "Cabinet dentaire",
    ville: "Korhogo",
    commune: "Centre",
    adresse: "Quartier Commerce, Rue du Marché",
    telephone: "+225 36 86 00 00 00",
    horaires: "Lun–Ven : 8h–17h",
    services: ["Chirurgie dentaire", "Orthodontie", "Prothèses"],
    latitude: 9.4578,
    longitude: -5.6294,
    conformite: "proche",
  },
  {
    id: 8,
    nom: "Polyclinique San-Pédro",
    type: "Polyclinique",
    ville: "San-Pédro",
    commune: "Centre",
    adresse: "Boulevard du Port",
    telephone: "+225 34 71 00 00 00",
    horaires: "24h/24 — 7j/7",
    services: ["Urgences 24h", "Chirurgie", "Imagerie", "Cardiologie"],
    latitude: 4.7485,
    longitude: -6.6363,
    conformite: "conforme",
  },
];

const villes = [
  "Toutes les villes",
  "Abidjan",
  "Bouaké",
  "Daloa",
  "Korhogo",
  "San-Pédro",
  "Man",
  "Yamoussoukro",
];

const typesStructure = [
  "Tous les types",
  "Clinique privée",
  "Polyclinique",
  "Laboratoire",
  "Pharmacie",
  "Centre médical",
  "Cabinet dentaire",
];

const servicesList = [
  "Tous les services",
  "Urgences 24h",
  "Maternité",
  "Chirurgie",
  "Pédiatrie",
  "Cardiologie",
  "Imagerie",
  "Laboratoire",
  "Orthodontie",
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Cartographie() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVille, setSelectedVille] = useState("Toutes les villes");
  const [selectedType, setSelectedType] = useState("Tous les types");
  const [selectedService, setSelectedService] = useState("Tous les services");
  const [showLegend, setShowLegend] = useState(true);
  const [simulationMode, setSimulationMode] = useState(false);
  const [simulationPoints, setSimulationPoints] = useState<
    Array<{ lat: number; lng: number }>
  >([]);
  const [selectedEtablissement, setSelectedEtablissement] =
    useState<Etablissement | null>(null);
  const [showDistanceCalculator, setShowDistanceCalculator] = useState(false);
  const [activeFilter, setActiveFilter] = useState<
    "conforme" | "proche" | "surcharge" | null
  >(null);

  const googleMapsUrl = useMemo(() => {
    const parts: string[] = [];
    parts.push("clinique+privée");
    parts.push("cabinet+médical");

    if (selectedService && selectedService !== "Tous les services") {
      parts.push(selectedService.replace(/\s+/g, "+"));
    }

    if (searchQuery.trim()) {
      parts.push(searchQuery.trim().replace(/\s+/g, "+"));
    } else if (selectedVille && selectedVille !== "Toutes les villes") {
      parts.push(selectedVille.replace(/\s+/g, "+"));
    } else {
      parts.push("Côte+d'Ivoire");
    }

    const query = parts.join("+");
    return `https://www.google.com/maps?q=${query}&output=embed`;
  }, [searchQuery, selectedVille, selectedService]);

  const filteredEtablissements = useMemo(() => {
    return etablissements.filter((e) => {
      const matchSearch =
        searchQuery === "" ||
        e.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.commune.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.ville.toLowerCase().includes(searchQuery.toLowerCase());

      const matchVille =
        selectedVille === "Toutes les villes" || e.ville === selectedVille;

      const matchType =
        selectedType === "Tous les types" || e.type === selectedType;

      const matchService =
        selectedService === "Tous les services" ||
        e.services.includes(selectedService);

      return matchSearch && matchVille && matchType && matchService;
    });
  }, [searchQuery, selectedVille, selectedType, selectedService]);

  const getMarkerColor = (conformite: string) => {
    switch (conformite) {
      case "conforme":
        return "#2E7D5A";
      case "proche":
        return "#C9973A";
      case "surcharge":
        return "#EF4444";
      default:
        return "#2E7D5A";
    }
  };

  const handleFilterClick = (filter: "conforme" | "proche" | "surcharge") => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const clearSimulation = () => {
    setSimulationPoints([]);
    setSimulationMode(false);
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* ══════════ HEADER ══════════ */}
      <header className="bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/accueil")}
                className="p-2 rounded-lg text-gray-700 hover:text-[#1B4F8A] hover:bg-gray-100 transition-colors"
                aria-label="Retour"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1B4F8A] to-[#133868] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">
                    Cartographie PSPSCI
                  </h1>
                  <p className="text-xs text-gray-500">
                    {filteredEtablissements.length} établissement
                    {filteredEtablissements.length > 1 ? "s" : ""} affiché
                    {filteredEtablissements.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSimulationMode(!simulationMode)}
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  simulationMode
                    ? "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
                    : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Plus className="w-4 h-4" />
                {simulationMode ? "Mode simulation actif" : "Simuler implantation"}
              </button>
              {simulationPoints.length > 0 && (
                <button
                  onClick={clearSimulation}
                  className="hidden md:flex items-center gap-1.5 px-3 py-2 text-red-600 hover:text-red-700 text-sm font-semibold"
                >
                  <X className="w-4 h-4" />
                  Effacer ({simulationPoints.length})
                </button>
              )}

              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
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
                <MapPin className="w-5 h-5" />
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
                onClick={() => {
                  navigate("/accueil");
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <Home className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">Accueil</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 bg-[#1B4F8A]/10 text-[#1B4F8A] rounded-lg transition-colors text-left"
              >
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Cartographie</span>
              </button>
              <button
                onClick={() => {
                  navigate("/statistiques");
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <BarChart3 className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">Statistiques</span>
              </button>
              <button
                onClick={() => {
                  navigate("/identite-digitale");
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <BookOpen className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">Annuaire</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <Info className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">À propos</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-left"
              >
                <Mail className="w-5 h-5 text-[#1B4F8A]" />
                <span className="font-medium">Contact</span>
              </button>

              <div className="border-t border-gray-200 my-2"></div>

              <button
                onClick={() => {
                  setSimulationMode(!simulationMode);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  simulationMode
                    ? "bg-purple-100 text-purple-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Plus className="w-5 h-5" />
                <span className="font-medium">
                  {simulationMode ? "Désactiver simulation" : "Mode simulation"}
                </span>
              </button>

              {simulationPoints.length > 0 && (
                <button
                  onClick={() => {
                    clearSimulation();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left"
                >
                  <X className="w-5 h-5" />
                  <span className="font-medium">
                    Effacer simulations ({simulationPoints.length})
                  </span>
                </button>
              )}
            </nav>
          </div>
        </>
      )}

      {/* ══════════ FILTRES ══════════ */}
      <div className="bg-[#F5F8FD] border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un établissement, une ville, une commune..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1B4F8A] focus:ring-2 focus:ring-[#1B4F8A]/10 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              value={selectedVille}
              onChange={(e) => setSelectedVille(e.target.value)}
              className="w-[180px] bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A]"
            >
              {villes.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-[180px] bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A]"
            >
              {typesStructure.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-[180px] bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A]"
            >
              {servicesList.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <button
              onClick={() => setShowLegend(!showLegend)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Info className="w-4 h-4" />
              Légende
            </button>
          </div>
        </div>

        {(searchQuery ||
          selectedVille !== "Toutes les villes" ||
          selectedType !== "Tous les types" ||
          selectedService !== "Tous les services") && (
          <div className="flex flex-wrap gap-2 mt-3">
            {searchQuery && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                Recherche: {searchQuery}
                <button onClick={() => setSearchQuery("")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedVille !== "Toutes les villes" && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                Ville: {selectedVille}
                <button onClick={() => setSelectedVille("Toutes les villes")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedType !== "Tous les types" && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                Type: {selectedType}
                <button onClick={() => setSelectedType("Tous les types")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedService !== "Tous les services" && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                Service: {selectedService}
                <button onClick={() => setSelectedService("Tous les services")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* ══════════ CARTE ══════════ */}
      <div className="flex-1 relative overflow-hidden bg-gray-100">
        <iframe
          src={googleMapsUrl}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte des établissements privés de santé en Côte d'Ivoire"
        />

        {/* Overlay filtre zones */}
        {activeFilter && (
          <div className="absolute inset-0 pointer-events-none z-[500]">
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 800"
              preserveAspectRatio="none"
            >
              <defs>
                <radialGradient id={`glow-${activeFilter}`}>
                  <stop
                    offset="0%"
                    stopColor={
                      activeFilter === "conforme"
                        ? "#2E7D5A"
                        : activeFilter === "proche"
                        ? "#C9973A"
                        : "#EF4444"
                    }
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="50%"
                    stopColor={
                      activeFilter === "conforme"
                        ? "#2E7D5A"
                        : activeFilter === "proche"
                        ? "#C9973A"
                        : "#EF4444"
                    }
                    stopOpacity="0.4"
                  />
                  <stop
                    offset="100%"
                    stopColor={
                      activeFilter === "conforme"
                        ? "#2E7D5A"
                        : activeFilter === "proche"
                        ? "#C9973A"
                        : "#EF4444"
                    }
                    stopOpacity="0"
                  />
                </radialGradient>

                <filter id="glow-filter">
                  <feGaussianBlur stdDeviation="15" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {filteredEtablissements
                .filter((e) => e.conformite === activeFilter)
                .map((e) => {
                  const minLat = 4.3,
                    maxLat = 10.7;
                  const minLng = -8.6,
                    maxLng = -2.5;

                  const x =
                    ((e.longitude - minLng) / (maxLng - minLng)) * 1000;
                  const y =
                    800 - ((e.latitude - minLat) / (maxLat - minLat)) * 800;

                  const color =
                    activeFilter === "conforme"
                      ? "#2E7D5A"
                      : activeFilter === "proche"
                      ? "#C9973A"
                      : "#EF4444";

                  return (
                    <g key={e.id} filter="url(#glow-filter)">
                      <circle
                        cx={x}
                        cy={y}
                        r="150"
                        fill={`url(#glow-${activeFilter})`}
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          values="150;180;150"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle
                        cx={x}
                        cy={y}
                        r="80"
                        fill={color}
                        opacity="0.5"
                        stroke={color}
                        strokeWidth="3"
                      >
                        <animate
                          attributeName="r"
                          values="80;100;80"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={x} cy={y} r="15" fill="white" opacity="0.9" />
                      <circle cx={x} cy={y} r="10" fill={color} opacity="1" />
                    </g>
                  );
                })}
            </svg>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto z-[600]">
              <div
                className={`px-8 py-5 rounded-2xl shadow-2xl backdrop-blur-lg border-2 ${
                  activeFilter === "conforme"
                    ? "bg-green-600/95 border-green-300"
                    : activeFilter === "proche"
                    ? "bg-orange-500/95 border-orange-300"
                    : "bg-red-500/95 border-red-300"
                }`}
              >
                <div className="text-center text-white">
                  <p className="text-3xl font-bold drop-shadow-lg mb-2">
                    {
                      filteredEtablissements.filter(
                        (e) => e.conformite === activeFilter
                      ).length
                    }{" "}
                    établissement(s)
                  </p>
                  <p className="text-xl font-bold mb-2 drop-shadow">
                    {activeFilter === "conforme" && "🟢 Zones Conformes"}
                    {activeFilter === "proche" && "🟡 Zones à Surveiller"}
                    {activeFilter === "surcharge" && "🔴 Zones Surchargées"}
                  </p>
                  <p className="text-xs opacity-80 italic">
                    💡 Cliquez à nouveau sur la couleur pour désactiver
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bouton calculer distance */}
        <button
          onClick={() => setShowDistanceCalculator(true)}
          className="absolute bottom-6 right-6 bg-[#1B4F8A] hover:bg-[#133868] text-white shadow-2xl h-14 px-6 rounded-xl flex items-center gap-2 z-[1000] font-semibold"
        >
          <Ruler className="w-5 h-5" />
          Calculer distance
        </button>

        {/* Légende */}
        {showLegend && (
          <div className="absolute top-4 right-4 w-64 bg-white rounded-2xl shadow-lg z-[1000] overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900">Légende</h3>
              <button
                onClick={() => setShowLegend(false)}
                className="p-1 rounded-lg hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-600 uppercase flex items-center gap-1">
                  <Filter className="w-3 h-3" />
                  Zones de conformité
                </p>
                <div className="space-y-2">
                  {[
                    {
                      id: "conforme",
                      label: "Zone conforme (< 30k hab/étab)",
                      color: "#2E7D5A",
                    },
                    {
                      id: "proche",
                      label: "Zone proche (30-50k hab/étab)",
                      color: "#C9973A",
                    },
                    {
                      id: "surcharge",
                      label: "Zone surchargée (> 50k hab/étab)",
                      color: "#EF4444",
                    },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() =>
                        handleFilterClick(
                          f.id as "conforme" | "proche" | "surcharge"
                        )
                      }
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                        activeFilter === f.id
                          ? "bg-gray-100 border-2 shadow-md"
                          : "border-2 border-transparent hover:bg-gray-50"
                      }`}
                      style={{
                        borderColor:
                          activeFilter === f.id ? f.color : "transparent",
                      }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: f.color }}
                      >
                        {activeFilter === f.id && (
                          <span className="text-white text-xs font-bold">✓</span>
                        )}
                      </div>
                      <span className="text-sm text-left font-medium text-gray-700">
                        {f.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {activeFilter && (
                <div className="pt-3 border-t">
                  <div
                    className="p-2 rounded-lg text-xs font-medium text-white text-center"
                    style={{ background: getMarkerColor(activeFilter) }}
                  >
                    ✓ Filtre actif
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Carte détail établissement */}
        {selectedEtablissement && (
          <div className="absolute top-4 left-4 w-96 bg-white rounded-2xl shadow-lg z-[1000] overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-base font-bold text-gray-900">
                {selectedEtablissement.nom}
              </h3>
              <button
                onClick={() => setSelectedEtablissement(null)}
                className="p-1 rounded-lg hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p>{selectedEtablissement.adresse}</p>
                  <p className="text-gray-500">
                    {selectedEtablissement.commune},{" "}
                    {selectedEtablissement.ville}
                  </p>
                </div>
              </div>

              <span className="inline-block text-xs font-semibold bg-[#1B4F8A]/10 text-[#1B4F8A] px-3 py-1 rounded-full">
                {selectedEtablissement.type}
              </span>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>{selectedEtablissement.telephone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{selectedEtablissement.horaires}</span>
              </div>

              <div>
                <p className="font-semibold mb-1 text-xs uppercase text-gray-500">
                  Services :
                </p>
                <div className="flex flex-wrap gap-1">
                  {selectedEtablissement.services.map((s, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#F5F8FD] text-[#1B4F8A] border border-[#1B4F8A]/10 px-2 py-0.5 rounded-full font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: getMarkerColor(
                      selectedEtablissement.conformite
                    ),
                  }}
                />
                <span className="text-xs font-medium">
                  {selectedEtablissement.conformite === "conforme" &&
                    "Zone conforme"}
                  {selectedEtablissement.conformite === "proche" &&
                    "Zone proche saturation"}
                  {selectedEtablissement.conformite === "surcharge" &&
                    "Zone surchargée"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Info simulation */}
        {simulationMode && (
          <div className="absolute bottom-4 left-4 w-80 bg-purple-50 border border-purple-200 rounded-2xl shadow-lg z-[1000] overflow-hidden">
            <div className="px-4 py-3 border-b border-purple-100 flex items-center gap-2">
              <Settings className="w-4 h-4 text-purple-900" />
              <h3 className="text-sm font-bold text-purple-900">
                Mode Simulation Actif
              </h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-purple-800">
                Cliquez sur la carte pour placer des points d'implantation
                potentiels. Analysez la proximité avec les établissements
                existants.
              </p>
              {simulationPoints.length > 0 && (
                <div className="mt-3 pt-3 border-t border-purple-200">
                  <p className="text-xs font-semibold text-purple-900 mb-2">
                    {simulationPoints.length} point
                    {simulationPoints.length > 1 ? "s" : ""} de simulation
                  </p>
                  <div className="space-y-1">
                    {simulationPoints.map((_, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-xs bg-white rounded px-2 py-1"
                      >
                        <span>Point #{index + 1}</span>
                        <button
                          onClick={() =>
                            setSimulationPoints(
                              simulationPoints.filter((_, i) => i !== index)
                            )
                          }
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ══════════ MODAL CALCUL DISTANCE ══════════ */}
      {showDistanceCalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[2000] p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-[#1B4F8A]" />
                Calculer une distance
              </h3>
              <button
                onClick={() => setShowDistanceCalculator(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-600">
                Sélectionnez deux établissements pour calculer la distance
                routière estimée entre eux.
              </p>
              <div className="grid gap-3">
                <label className="text-sm font-medium text-gray-700">
                  Établissement de départ
                </label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A]">
                  <option>Sélectionner...</option>
                  {etablissements.map((e) => (
                    <option key={e.id}>{e.nom}</option>
                  ))}
                </select>
                <label className="text-sm font-medium text-gray-700">
                  Établissement d'arrivée
                </label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A]">
                  <option>Sélectionner...</option>
                  {etablissements.map((e) => (
                    <option key={e.id}>{e.nom}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => alert("Calcul de distance à venir")}
                className="w-full bg-[#1B4F8A] hover:bg-[#133868] text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Calculer la distance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}