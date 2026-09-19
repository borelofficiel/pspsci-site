import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingBag,
  MapPin,
  Star,
  Phone,
  Search,
  SlidersHorizontal,
  ShieldCheck,
  Zap,
  Tag,
  ChevronDown,
  MessageCircle,
  Building2,
  Handshake,
  ScrollText,
  Briefcase,
  CreditCard,
  MapPinned,
  Stethoscope,
  Pill,
  Microscope,
} from "lucide-react";
import { useState } from "react";

// ─── Catégories adaptées au secteur privé de la santé ────────────────────────

const categories = [
  { id: "equipements", label: "Équipements médicaux", icon: Stethoscope, color: "#1B4F8A" },
  { id: "cession", label: "Cession de clinique", icon: Handshake, color: "#2E7D5A" },
  { id: "consommables", label: "Consommables & fournitures", icon: ShoppingBag, color: "#C9973A" },
  { id: "imagerie", label: "Imagerie & technologie", icon: MapPinned, color: "#8b5cf6" },
  { id: "laboratoires", label: "Laboratoires d'analyses", icon: Microscope, color: "#ec4899" },
  { id: "pharmaceutique", label: "Industrie pharmaceutique", icon: Pill, color: "#0891b2" },
  { id: "services", label: "Services professionnels", icon: Briefcase, color: "#6366f1" },
  { id: "assurances", label: "Assurances & financement", icon: CreditCard, color: "#ef4444" },
];

const equipementSubCategories = [
  "Tous",
  "Lits médicalisés",
  "Blocs opératoires",
  "Stérilisation",
  "Diagnostic",
  "Mobilier",
];

const conditions = ["Tous", "Neuf", "Reconditionné", "Occasion"];

// ─── Produits — Secteur privé de la santé en Côte d'Ivoire ───────────────────

const products = [
  {
    id: 1,
    name: "Lit médicalisé électrique 3 fonctions",
    brand: "MediLits",
    category: "equipements",
    subCategory: "Lits médicalisés",
    condition: "Neuf",
    condColor: "#2E7D5A",
    stock: "En stock",
    location: "Plateau, Abidjan",
    seller: "MediEquip CI",
    rating: 4.8,
    reviews: 34,
    verified: true,
    tags: ["Livraison Abidjan", "Installation incluse"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Lit médicalisé dans une clinique",
    desc: "Lit médicalisé électrique 3 fonctions avec barrières latérales, télécommande patient, matelas anti-escarres inclus. Conforme aux normes CE. Garantie constructeur 2 ans.",
  },
  {
    id: 2,
    name: "Échographe portable Mindray M7",
    brand: "Mindray",
    category: "imagerie",
    subCategory: "Imagerie",
    condition: "Reconditionné",
    condColor: "#C9973A",
    stock: "2 disponibles",
    location: "Cocody, Abidjan",
    seller: "Dr. K. Traoré",
    rating: 4.6,
    reviews: 12,
    verified: true,
    tags: ["Garantie 6 mois", "Sonde incluse"],
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Échographe portable en clinique",
    desc: "Échographe portable Mindray M7 avec sonde convexe et linéaire, écran 15 pouces, Doppler couleur. Rapport de vérification technique fourni. Formation de 2h incluse.",
  },
  {
    id: 3,
    name: "Autoclave Classe B — 50 litres",
    brand: "Tuttnauer",
    category: "equipements",
    subCategory: "Stérilisation",
    condition: "Neuf",
    condColor: "#2E7D5A",
    stock: "En stock",
    location: "Treichville, Abidjan",
    seller: "DentaTech SARL",
    rating: 4.9,
    reviews: 28,
    verified: true,
    tags: ["Norme EN 13060", "Formation incluse"],
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Autoclave de stérilisation",
    desc: "Autoclave de classe B conforme à la norme EN 13060, imprimante de cycles intégrée, afficheur LCD tactile. Idéal pour cliniques et blocs opératoires. Maintenance 1ère année incluse.",
  },
  {
    id: 4,
    name: "Kit pansements & sutures stériles (lot de 100)",
    brand: "Hartmann",
    category: "consommables",
    subCategory: "Consommables",
    condition: "Neuf",
    condColor: "#2E7D5A",
    stock: "Stock important",
    location: "Marcory, Abidjan",
    seller: "PharmaMed CI",
    rating: 4.7,
    reviews: 89,
    verified: false,
    tags: ["Expédition 24h", "Lot de 100"],
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Matériel médical stérile",
    desc: "Lot complet de 100 kits de pansements et sutures stériles, compresses, bandes, gants et antiseptiques. Date de péremption : Décembre 2026.",
  },
  {
    id: 5,
    name: "Scanner CT 16 barrettes Siemens",
    brand: "Siemens",
    category: "imagerie",
    subCategory: "Imagerie",
    condition: "Occasion",
    condColor: "#8b5cf6",
    stock: "1 disponible",
    location: "Bouaké Centre",
    seller: "Centre Médical Ivoire",
    rating: 4.6,
    reviews: 7,
    verified: true,
    tags: ["Inspection possible", "Docs d'entretien fournis"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Scanner médical en hôpital",
    desc: "Scanner CT 16 barrettes Siemens Emotion, 45 000 scans enregistrés sur 5 ans, dernier entretien en janvier 2025. Logiciel de reconstruction 3D inclus.",
  },
  {
    id: 6,
    name: "Mobilier complet de consultation",
    brand: "MediFurni",
    category: "equipements",
    subCategory: "Mobilier",
    condition: "Neuf",
    condColor: "#2E7D5A",
    stock: "Sur commande",
    location: "Zone 4, Abidjan",
    seller: "AfroMed Pro",
    rating: 4.3,
    reviews: 18,
    verified: false,
    tags: ["Personnalisable", "Délai 3 semaines"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Mobilier de cabinet médical",
    desc: "Pack complet de mobilier pour cabinet de consultation : bureau médecin, table d'examen, armoire à dossiers, tabouret praticien et 3 chaises visiteurs. Disponible en blanc ou beige.",
  },
  {
    id: 7,
    name: "Tensiomètre électronique Omron M7",
    brand: "Omron",
    category: "consommables",
    subCategory: "Consommables",
    condition: "Neuf",
    condColor: "#2E7D5A",
    stock: "En stock",
    location: "Yopougon, Abidjan",
    seller: "MediShop CI",
    rating: 4.6,
    reviews: 45,
    verified: true,
    tags: ["Validé cliniquement", "Garantie 3 ans"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Tensiomètre médical",
    desc: "Tensiomètre électronique Omron M7 Intelli IT, brassard universel 22-42 cm, détection d'arythmie, mémoire 100 mesures, connexion Bluetooth. Validé cliniquement.",
  },
  {
    id: 8,
    name: "Défibrillateur semi-automatique Zoll AED Plus",
    brand: "Zoll",
    category: "equipements",
    subCategory: "Diagnostic",
    condition: "Reconditionné",
    condColor: "#C9973A",
    stock: "3 disponibles",
    location: "Adjamé, Abidjan",
    seller: "MédiMat SARL",
    rating: 4.5,
    reviews: 22,
    verified: true,
    tags: ["Garantie 6 mois", "Testé"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Défibrillateur en clinique",
    desc: "Défibrillateur semi-automatique Zoll AED Plus avec électrodes adultes, batterie longue durée, guide vocal et visuel. Vérifié et testé avant expédition. Formation RCP incluse.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Marketplace() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("equipements");
  const [activeSubCategory, setActiveSubCategory] = useState("Tous");
  const [activeCondition, setActiveCondition] = useState("Tous");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === "cession") {
      navigate("/concession");
      return;
    }
    setActiveCategory(categoryId);
    setActiveSubCategory("Tous");
  };

  const filtered = products.filter((p) => {
    const matchCat = p.category === activeCategory;
    const matchSubCat = activeSubCategory === "Tous" || p.subCategory === activeSubCategory;
    const matchCond = activeCondition === "Tous" || p.condition === activeCondition;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSubCat && matchCond && matchSearch;
  });

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F8FD] to-white">
      {/* ══════════ HEADER ══════════ */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <button
              onClick={() => navigate("/accueil")}
              className="flex items-center gap-2 text-gray-600 hover:text-[#1B4F8A] transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Retour</span>
            </button>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1B4F8A] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-base font-bold text-gray-900 leading-tight">
                  Marketplace PSPSCI
                </h1>
                <p className="text-xs text-gray-500">
                  Équipements & services — Côte d'Ivoire
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <span className="text-sm font-semibold text-[#1B4F8A] bg-blue-50 px-3 py-1 rounded-full">
                {filtered.length} annonce{filtered.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════ HERO ══════════ */}
      <div className="bg-gradient-to-br from-[#1B4F8A] via-[#133868] to-[#2E7D5A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#7DD3AC] rounded-full animate-pulse" />
            <span className="text-[#7DD3AC] text-xs font-semibold uppercase tracking-widest">
              Espace PSPSCI
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            MARKETPLACE PSPSCI
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            La marketplace officielle du secteur privé de la santé en Côte d'Ivoire.
            Achetez, vendez et connectez-vous avec l'ensemble des acteurs du secteur.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <div className="flex-1 flex items-center gap-2 bg-white/15 backdrop-blur border border-white/30 rounded-xl px-4 py-3">
                <Search className="w-5 h-5 text-white/70 flex-shrink-0" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher un équipement, une marque, un service..."
                  className="bg-transparent text-white placeholder-white/60 text-sm outline-none flex-1"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {[
              { icon: <ShoppingBag className="w-4 h-4" />, label: `${products.length} annonces` },
              { icon: <ShieldCheck className="w-4 h-4" />, label: "Vendeurs vérifiés PSPSCI" },
              { icon: <Zap className="w-4 h-4" />, label: "Livraison 24h Abidjan" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 text-sm text-blue-100 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm"
              >
                {s.icon}
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ CATÉGORIES ══════════ */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 mb-3">
            <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-semibold text-gray-700">Catégories</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all border"
                  style={{
                    background: isActive ? cat.color : "#f8fafc",
                    color: isActive ? "#fff" : "#64748b",
                    borderColor: isActive ? cat.color : "#e2e8f0",
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════ SOUS-CATÉGORIES (pour équipements) ══════════ */}
      {activeCategory === "equipements" && (
        <div className="bg-[#F5F8FD] border-b border-gray-200 sticky top-32 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Sous-catégories */}
              <div className="flex-1">
                <span className="text-xs font-semibold text-gray-600 mb-2 block">
                  Sous-catégories
                </span>
                <div className="flex items-center gap-2 overflow-x-auto">
                  {equipementSubCategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSubCategory(sub)}
                      className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                      style={{
                        background: activeSubCategory === sub ? "#1B4F8A" : "#fff",
                        color: activeSubCategory === sub ? "#fff" : "#64748b",
                        border: `1px solid ${activeSubCategory === sub ? "#1B4F8A" : "#e2e8f0"}`,
                      }}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              {/* État */}
              <div>
                <span className="text-xs font-semibold text-gray-600 mb-2 block">État</span>
                <div className="flex items-center gap-2">
                  {conditions.map((cond) => (
                    <button
                      key={cond}
                      onClick={() => setActiveCondition(cond)}
                      className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                      style={{
                        background: activeCondition === cond ? "#2E7D5A" : "#fff",
                        color: activeCondition === cond ? "#fff" : "#64748b",
                        border: `1px solid ${activeCondition === cond ? "#2E7D5A" : "#e2e8f0"}`,
                      }}
                    >
                      {cond}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ GRILLE PRODUITS ══════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            {currentCategory && (
              <>
                <currentCategory.icon
                  className="w-7 h-7"
                  style={{ color: currentCategory.color }}
                />
                {currentCategory.label}
              </>
            )}
          </h3>
          <p className="text-gray-600 mt-1">
            {filtered.length} produit{filtered.length > 1 ? "s" : ""} disponible
            {filtered.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => {
            const isExpanded = expandedId === p.id;
            return (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-blue-50">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span
                    className="absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-lg shadow-sm"
                    style={{ background: `${p.condColor}`, color: "#fff" }}
                  >
                    {p.condition}
                  </span>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  {/* Badge vérifié */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {p.verified && (
                      <span className="text-xs font-bold text-[#1B4F8A] bg-blue-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Vérifié PSPSCI
                      </span>
                    )}
                  </div>

                  {/* Nom */}
                  <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3">
                    {p.brand} · {p.stock}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md flex items-center gap-1"
                      >
                        <Tag className="w-2.5 h-2.5" /> {t}
                      </span>
                    ))}
                  </div>

                  {/* Description toggle */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : p.id)}
                    className="flex items-center gap-1 text-xs text-[#1B4F8A] font-semibold mb-3"
                  >
                    {isExpanded ? "Moins de détails" : "Voir les détails"}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <p className="text-xs text-gray-500 leading-relaxed mb-3 bg-[#F5F8FD] rounded-xl p-3">
                      {p.desc}
                    </p>
                  )}

                  <div className="mt-auto">
                    {/* Localisation + rating */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                      <MapPin className="w-3 h-3" />
                      <span>{p.location}</span>
                      <span className="ml-auto flex items-center gap-1 font-semibold text-gray-700">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {p.rating}
                        <span className="font-normal text-gray-400">
                          ({p.reviews})
                        </span>
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#1B4F8A] hover:bg-[#133868] text-white text-xs font-bold transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                        Contacter
                      </button>
                      <button className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-[#1B4F8A]/20 text-[#1B4F8A] text-xs font-bold hover:bg-blue-50 transition-colors">
                        <MessageCircle className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p className="text-xl font-medium text-gray-600">
              Aucun produit trouvé
            </p>
            <p className="text-sm mt-2">
              Essayez d'autres filtres ou une autre recherche
            </p>
          </div>
        )}

        {/* ══════════ CTA FINAL ══════════ */}
        <div className="mt-16 bg-gradient-to-br from-[#1B4F8A] to-[#0D2744] rounded-2xl p-10 text-center shadow-xl">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2E7D5A] mb-5 shadow-lg">
            <ShoppingBag className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Vous êtes professionnel du secteur privé de la santé ?
          </h3>
          <p className="text-blue-100 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            Rejoignez la marketplace PSPSCI et publiez gratuitement vos annonces.
            Vous bénéficiez de la visibilité de la plateforme et de la confiance de 2 500+ acteurs du secteur.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => alert("Formulaire de publication à venir")}
              className="bg-[#2E7D5A] hover:bg-[#245f45] text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-sm shadow-lg"
            >
              Publier une annonce
            </button>
            <button
              onClick={() => alert("Page d'information à venir")}
              className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}