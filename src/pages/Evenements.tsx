import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Clock,
  Users,
  ExternalLink,
  Tag,
  Search,
  Filter,
  Calendar,
} from "lucide-react";
import { useState } from "react";

// ─── Data — Événements PSPSCI ────────────────────────────────────────────────

const events = [
  {
    type: "Assemblée",
    title: "Assemblée Générale Ordinaire PSPSCI 2025",
    date: "2025-09-10",
    dateDisplay: "10 Septembre 2025",
    heure: "09h00 – 17h00",
    lieu: "Hôtel Pullman, Plateau — Abidjan",
    organisateur: "PSPSCI",
    participants: "400+",
    tag: "Institutionnel",
    tagColor: "#1B4F8A",
    desc: "Troisième Assemblée Générale Ordinaire de la PSPSCI : bilan des actions 2024–2025, présentation des états financiers et vote du plan d'action 2026.",
    color: "#1B4F8A",
    bg: "#eff6ff",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Assemblée générale PSPSCI",
  },
  {
    type: "Forum",
    title: "6ème Forum Annuel de la Santé Privée",
    date: "2025-11-14",
    dateDisplay: "14–15 Novembre 2025",
    heure: "08h00 – 18h00",
    lieu: "Palais des Congrès, Grand-Bassam",
    organisateur: "PSPSCI",
    participants: "600+",
    tag: "National",
    tagColor: "#2E7D5A",
    desc: "Thème : « Financement, qualité et innovation : construire le secteur privé de santé de demain ». Experts nationaux et internationaux, décideurs publics et bailleurs.",
    color: "#2E7D5A",
    bg: "#ecfdf5",
    image: "https://images.unsplash.com/photo-1758691736082-b69a65770026?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Forum santé privée Grand-Bassam",
  },
  {
    type: "Formation",
    title: "Gestion Moderne d'un Établissement de Santé Privé",
    date: "2025-10-08",
    dateDisplay: "8 Octobre 2025",
    heure: "09h00 – 13h00",
    lieu: "Siège PSPSCI, Cocody — Abidjan",
    organisateur: "Direction Formation PSPSCI",
    participants: "50",
    tag: "Certifié DPC",
    tagColor: "#C9973A",
    desc: "Comptabilité simplifiée, gestion des rendez-vous, facturation CNAM, dossiers patients numériques et obligations légales pour les cliniques privées.",
    color: "#C9973A",
    bg: "#fffbeb",
    image: "https://images.unsplash.com/photo-1666886573264-38075cc56104?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Formation gestion clinique",
  },
  {
    type: "Conférence",
    title: "Innovation & Télémédecine en Côte d'Ivoire",
    date: "2025-10-18",
    dateDisplay: "18 Octobre 2025",
    heure: "10h00 – 16h30",
    lieu: "Palais de la Culture, Abidjan",
    organisateur: "PSPSCI / Ministère de la Santé",
    participants: "250",
    tag: "Innovation",
    tagColor: "#8b5cf6",
    desc: "Digitalisation des soins, cartographie sanitaire intelligente, téléconsultation et financement de l'innovation dans le secteur privé.",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    image: "https://images.unsplash.com/photo-1666886573301-b5d526cfd518?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Conférence télémédecine",
  },
  {
    type: "Partenariat",
    title: "Signature PSPSCI–OMS : Programme d'Accréditation",
    date: "2025-08-11",
    dateDisplay: "11 Août 2025",
    heure: "10h00 – 12h00",
    lieu: "Bureau OMS, Cocody — Abidjan",
    organisateur: "PSPSCI / OMS AFRO",
    participants: "150",
    tag: "International",
    tagColor: "#0891b2",
    desc: "Signature officielle de l'accord de coopération technique pour le déploiement du programme d'accréditation dans 300 établissements privés de santé.",
    color: "#0891b2",
    bg: "#ecfeff",
    image: "https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Signature accord OMS PSPSCI",
  },
  {
    type: "Salon",
    title: "Salon International des Équipements Médicaux",
    date: "2025-12-05",
    dateDisplay: "5–7 Décembre 2025",
    heure: "09h00 – 18h00",
    lieu: "Parc des Expositions, Abidjan",
    organisateur: "CI MedEvents / PSPSCI",
    participants: "800+",
    tag: "International",
    tagColor: "#8b5cf6",
    desc: "Plus de 80 exposants présentent les dernières innovations en équipements médicaux, imagerie, logiciels de gestion et solutions numériques de santé.",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Salon équipements médicaux",
  },
  {
    type: "Formation",
    title: "Plateforme e-Learning PSPSCI : 50 modules",
    date: "2025-08-28",
    dateDisplay: "28 Août 2025",
    heure: "En ligne — 24/7",
    lieu: "Plateforme numérique PSPSCI",
    organisateur: "Direction Formation PSPSCI",
    participants: "Illimité",
    tag: "Certifié DPC",
    tagColor: "#C9973A",
    desc: "Lancement officiel de la plateforme e-learning PSPSCI avec 50 modules de formation continue validants pour le DPC, accessibles gratuitement aux membres adhérents.",
    color: "#C9973A",
    bg: "#fffbeb",
    image: "https://images.unsplash.com/photo-1666886573264-38075cc56104?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Plateforme e-learning",
  },
  {
    type: "Campagne",
    title: "Mois de la Santé Publique — Couverture Maladie Universelle",
    date: "2025-04-01",
    dateDisplay: "1–30 Avril 2025",
    heure: "08h00 – 12h00",
    lieu: "Centres de santé — Tout le territoire",
    organisateur: "MSHP / CNAM / PSPSCI",
    participants: "30 000",
    tag: "National",
    tagColor: "#2E7D5A",
    desc: "Campagne nationale d'information sur la CMU, avec consultations gratuites dans les établissements privés conventionnés et sensibilisation dans les écoles.",
    color: "#2E7D5A",
    bg: "#ecfdf5",
    image: "https://images.unsplash.com/photo-1653566031587-74f7d86a2e71?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Campagne santé publique CMU",
  },
  {
    type: "Conférence",
    title: "Réglementation & Nouveau Cadre d'Agrément des Cliniques",
    date: "2025-09-20",
    dateDisplay: "20 Septembre 2025",
    heure: "09h00 – 13h00",
    lieu: "CCIAD, Treichville — Abidjan",
    organisateur: "Direction Juridique PSPSCI",
    participants: "180",
    tag: "Réglementation",
    tagColor: "#f59e0b",
    desc: "Présentation du décret n°2025-412 sur les nouvelles normes d'agrément et remise officielle du guide d'accompagnement PSPSCI aux établissements privés.",
    color: "#f59e0b",
    bg: "#fffbeb",
    image: "https://images.unsplash.com/photo-1575029645663-d8faa1ac2880?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Conférence réglementation cliniques",
  },
  {
    type: "Forum",
    title: "Forum des Partenariats Public-Privé en Santé",
    date: "2025-06-14",
    dateDisplay: "14–15 Juin 2025",
    heure: "08h00 – 17h00",
    lieu: "Hôtel Tiama, Plateau — Abidjan",
    organisateur: "PSPSCI / Ministère de la Santé",
    participants: "350+",
    tag: "National",
    tagColor: "#1B4F8A",
    desc: "Rencontres interprofessionnelles entre secteur public et privé, ateliers sur la tarification des soins, la CMU et les nouvelles directives sanitaires.",
    color: "#1B4F8A",
    bg: "#eff6ff",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Forum partenariats santé",
  },
  {
    type: "Formation",
    title: "Formation Continue : Qualité et Accréditation des Soins",
    date: "2025-07-05",
    dateDisplay: "5 Juillet 2025",
    heure: "08h30 – 14h00",
    lieu: "Siège PSPSCI, Cocody — Abidjan",
    organisateur: "Direction Formation PSPSCI",
    participants: "60",
    tag: "Certifié DPC",
    tagColor: "#C9973A",
    desc: "Formation certifiante sur les standards internationaux de qualité et les procédures d'accréditation des établissements privés de santé.",
    color: "#C9973A",
    bg: "#fffbeb",
    image: "https://images.unsplash.com/photo-1666886573264-38075cc56104?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Formation qualité des soins",
  },
  {
    type: "Salon",
    title: "MobiSanté Expo — Le Numérique en Santé",
    date: "2025-12-15",
    dateDisplay: "15–17 Décembre 2025",
    heure: "09h00 – 18h00",
    lieu: "CCIAD, Treichville — Abidjan",
    organisateur: "PSPSCI / Direction Innovations",
    participants: "500+",
    tag: "Innovation",
    tagColor: "#8b5cf6",
    desc: "Exposition des solutions numériques de santé : MobiSanté, identité digitale PSPSCI, télémédecine et logiciels de gestion pour établissements privés.",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=500&fit=crop&auto=format",
    imageAlt: "Salon numérique santé",
  },
];

const types = ["Tous", "Forum", "Salon", "Formation", "Campagne", "Conférence", "Assemblée", "Partenariat"];

const months = [
  "Tous les mois",
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const typeStyle: Record<string, { bg: string; text: string }> = {
  Forum: { bg: "#dbeafe", text: "#1B4F8A" },
  Salon: { bg: "#ede9fe", text: "#7c3aed" },
  Formation: { bg: "#d1fae5", text: "#2E7D5A" },
  Campagne: { bg: "#fef3c7", text: "#b45309" },
  Conférence: { bg: "#fce7f3", text: "#be185d" },
  Assemblée: { bg: "#e0e7ff", text: "#1B4F8A" },
  Partenariat: { bg: "#cffafe", text: "#0891b2" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Evenements() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("Tous");
  const [activeMonth, setActiveMonth] = useState("Tous les mois");

  const filtered = events.filter((e) => {
    const matchType = activeType === "Tous" || e.type === activeType;
    const matchSearch =
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.lieu.toLowerCase().includes(search.toLowerCase()) ||
      e.organisateur.toLowerCase().includes(search.toLowerCase());

    let matchMonth = true;
    if (activeMonth !== "Tous les mois") {
      const eventDate = new Date(e.date);
      const monthIndex = months.indexOf(activeMonth);
      matchMonth = eventDate.getMonth() + 1 === monthIndex;
    }

    return matchType && matchSearch && matchMonth;
  });

  const groupedByMonth = filtered.reduce((acc, event) => {
    const eventDate = new Date(event.date);
    const monthName = months[eventDate.getMonth() + 1];
    if (!acc[monthName]) acc[monthName] = [];
    acc[monthName].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  return (
    <div className="min-h-screen bg-[#F5F8FD]">
      {/* Header */}
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
                <CalendarDays className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-base font-bold text-gray-900 leading-tight">
                  Événements PSPSCI
                </h1>
                <p className="text-xs text-gray-500">Secteur privé de la santé — Côte d'Ivoire</p>
              </div>
            </div>

            <div className="ml-auto">
              <span className="text-sm font-semibold text-[#1B4F8A] bg-blue-50 px-3 py-1 rounded-full">
                {filtered.length} événement{filtered.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero banner */}
      <div className="bg-gradient-to-r from-[#1B4F8A] to-[#2E7D5A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Forums, Salons, Formations & Conférences
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl">
            Retrouvez tous les événements du secteur privé de la santé ivoirien : formations
            certifiantes, salons d'équipements, campagnes nationales et conférences professionnelles.
          </p>

          <div className="mt-6 flex gap-3 max-w-xl">
            <div className="flex-1 flex items-center gap-2 bg-white/15 backdrop-blur border border-white/30 rounded-xl px-4 py-2.5">
              <Search className="w-4 h-4 text-white/70 flex-shrink-0" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher un événement, un lieu, un organisateur..."
                className="bg-transparent text-white placeholder-white/60 text-sm outline-none flex-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filtre Type */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Type</span>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: activeType === t ? "#1B4F8A" : "#f1f5f9",
                  color: activeType === t ? "#fff" : "#475569",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filtre Mois */}
      <div className="bg-white border-b border-gray-100 sticky top-28 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Mois</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {months.map((m) => (
              <button
                key={m}
                onClick={() => setActiveMonth(m)}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: activeMonth === m ? "#2E7D5A" : "#f1f5f9",
                  color: activeMonth === m ? "#fff" : "#475569",
                }}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeMonth === "Tous les mois" ? (
          Object.keys(groupedByMonth).map((monthName) => (
            <div key={monthName} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B4F8A] to-[#2E7D5A] text-white shadow-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{monthName} 2025</h2>
                  <p className="text-sm text-gray-500">
                    {groupedByMonth[monthName].length} événement
                    {groupedByMonth[monthName].length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedByMonth[monthName].map((ev, i) => (
                  <EventCard key={i} ev={ev} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ev, i) => (
              <EventCard key={i} ev={ev} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <CalendarDays className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="text-lg font-medium">Aucun événement trouvé</p>
            <p className="text-sm mt-1">Modifiez vos filtres ou votre recherche</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Carte événement ─────────────────────────────────────────────────────────

function EventCard({ ev }: { ev: typeof events[0] }) {
  const date = new Date(ev.date);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col group">
      <div className="relative overflow-hidden h-44">
        <img
          src={ev.image}
          alt={ev.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute top-3 left-3 bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            className="text-white text-[0.65rem] font-bold text-center py-0.5 px-3 uppercase tracking-wider"
            style={{ background: ev.color }}
          >
            {date.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "")}
          </div>
          <div className="text-2xl font-bold text-gray-900 text-center py-1 px-3 leading-none">
            {date.getDate()}
          </div>
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
          <span
            className="text-[0.65rem] font-bold tracking-wide px-2.5 py-1 rounded-lg uppercase shadow-sm"
            style={{
              background: typeStyle[ev.type]?.bg || "#e5e7eb",
              color: typeStyle[ev.type]?.text || "#374151",
            }}
          >
            {ev.type}
          </span>
          <span className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 bg-black/40 text-white backdrop-blur-sm shadow-sm">
            <Tag className="w-3 h-3" />
            {ev.tag}
          </span>
        </div>

        <h3 className="absolute bottom-3 left-4 right-4 text-sm font-bold text-white leading-snug drop-shadow-lg">
          {ev.title}
        </h3>
      </div>

      <div className="px-5 py-4 flex flex-col flex-1">
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{ev.desc}</p>

        <div className="flex flex-col gap-2.5 mt-auto">
          <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: ev.color }}>
            <CalendarDays className="w-4 h-4 flex-shrink-0" />
            <span>{ev.dateDisplay}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 flex-shrink-0" style={{ color: ev.color }} />
            <span>{ev.heure}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ev.color }} />
            <span>{ev.lieu}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ev.color }} />
            <span>
              {ev.participants} · {ev.organisateur}
            </span>
          </div>
        </div>

        <button
          className="mt-5 w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-opacity hover:opacity-90 text-white"
          style={{ background: ev.color }}
        >
          <ExternalLink className="w-4 h-4" />
          S'inscrire / En savoir plus
        </button>
      </div>
    </div>
  );
}