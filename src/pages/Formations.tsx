import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Formation = typeof formations[0];

// ─── Data ─────────────────────────────────────────────────────────────────────

const domaines = [
  "Tous les domaines",
  "Clinique & Médecine",
  "Gestion & Management",
  "Réglementation",
  "Numérique & Innovation",
  "Pharmacie",
  "Soins infirmiers",
];

const niveaux = ["Tous niveaux", "Débutant", "Intermédiaire", "Avancé"];
const formats = ["Tous formats", "Présentiel", "En ligne", "Hybride"];

const formations = [
  {
    id: 1,
    titre: "Gestion et administration d'une clinique privée",
    domaine: "Gestion & Management",
    format: "Présentiel",
    niveau: "Intermédiaire",
    duree: "3 jours",
    heures: 21,
    places: 25,
    placesRestantes: 8,
    prix: "180 000 FCFA",
    prixMembre: "120 000 FCFA",
    date: "14–16 octobre 2025",
    dateISO: "2025-10-14",
    lieu: "Centre de Formation PSPSCI, Cocody — Abidjan",
    image: "https://images.unsplash.com/photo-1653566031587-74f7d86a2e71?w=800&h=500&fit=crop&auto=format",
    badge: "Populaire",
    badgeColor: "bg-[#2E7D5A] text-white",
    certifiante: true,
    dpc: false,
    resume: "Une formation complète dédiée aux responsables d'établissements privés de santé. Couvre les aspects administratifs, financiers, RH et réglementaires de la gestion d'une structure sanitaire privée.",
    objectifs: [
      "Maîtriser les fondamentaux de la gestion administrative d'un établissement de santé",
      "Comprendre les obligations légales et réglementaires applicables au secteur privé",
      "Développer des outils de pilotage financier adaptés aux structures de santé",
      "Optimiser la gestion des ressources humaines médicales et paramédicales",
      "Mettre en place une démarche qualité et d'amélioration continue",
    ],
    programme: [
      {
        jour: "Jour 1",
        titre: "Cadre juridique et réglementaire",
        modules: [
          "Le cadre légal de l'exercice privé en Côte d'Ivoire",
          "Procédures d'agrément et obligations déclaratives",
          "Responsabilité civile et pénale du gestionnaire",
          "Relations avec les autorités sanitaires",
        ],
      },
      {
        jour: "Jour 2",
        titre: "Gestion financière et comptable",
        modules: [
          "Élaboration et suivi du budget de l'établissement",
          "Gestion de la trésorerie et des créances",
          "Tarification des actes et négociation avec les assureurs",
          "Optimisation fiscale des structures de santé",
        ],
      },
      {
        jour: "Jour 3",
        titre: "Ressources humaines et qualité",
        modules: [
          "Recrutement et fidélisation des professionnels de santé",
          "Droit du travail spécifique au secteur médical",
          "Introduction à la démarche qualité et à l'accréditation",
          "Gestion des conflits et communication interne",
        ],
      },
    ],
    intervenants: [
      { nom: "Dr. Bamba Oumar", titre: "Directeur Administratif, CHU de Cocody", role: "Intervenant principal" },
      { nom: "Me. Aya Kouassi", titre: "Avocate spécialiste droit de la santé", role: "Module juridique" },
      { nom: "M. Yao Gbané", titre: "Expert-comptable, Cabinet AuditSanté CI", role: "Module financier" },
    ],
    public: "Directeurs et co-directeurs de cliniques, médecins libéraux souhaitant ouvrir un cabinet, gestionnaires de structures de santé privées.",
    prerequis: "Être titulaire d'un diplôme de santé ou de gestion. Exercer ou projeter d'exercer dans le secteur privé de la santé.",
    inclus: ["Support de cours complet", "Déjeuners et pauses-café", "Attestation de formation", "Accès à la communauté PSPSCI"],
  },
  {
    id: 2,
    titre: "Prise en charge des urgences médicales en cabinet",
    domaine: "Clinique & Médecine",
    format: "Hybride",
    niveau: "Intermédiaire",
    duree: "2 jours",
    heures: 14,
    places: 20,
    placesRestantes: 4,
    prix: "150 000 FCFA",
    prixMembre: "95 000 FCFA",
    date: "22–23 octobre 2025",
    dateISO: "2025-10-22",
    lieu: "Centre de Simulation, Plateau — Abidjan",
    image: "https://images.unsplash.com/photo-1739956681626-70dc0cd480bd?w=800&h=500&fit=crop&auto=format",
    badge: "Dernières places",
    badgeColor: "bg-red-500 text-white",
    certifiante: true,
    dpc: true,
    resume: "Formation pratique sur la reconnaissance et la gestion des situations d'urgence médicale pouvant survenir en cabinet ou en clinique. Inclut des ateliers de simulation sur mannequins.",
    objectifs: [
      "Identifier rapidement les signes d'une urgence vitale",
      "Appliquer les protocoles de réanimation cardio-pulmonaire de base et avancée",
      "Organiser la chaîne de soins en situation d'urgence en cabinet",
      "Maîtriser les gestes techniques d'urgence : intubation, défibrillation, voie veineuse",
      "Gérer le stress et coordonner une équipe en situation de crise",
    ],
    programme: [
      {
        jour: "Jour 1 — Théorie",
        titre: "Reconnaissance et protocoles",
        modules: [
          "Reconnaître les détresses vitales : cardio-vasculaires, respiratoires, neurologiques",
          "Arrêt cardio-respiratoire : conduite à tenir",
          "Choc anaphylactique : diagnostic et traitement d'urgence",
          "Crise convulsive et AVC : signes d'alarme et premiers gestes",
        ],
      },
      {
        jour: "Jour 2 — Pratique",
        titre: "Ateliers de simulation",
        modules: [
          "RCP adulte et pédiatrique sur mannequin haute-fidélité",
          "Utilisation du défibrillateur automatique (DEA)",
          "Pose de voie veineuse périphérique en urgence",
          "Simulation de scénarios d'urgence en équipe",
        ],
      },
    ],
    intervenants: [
      { nom: "Dr. Assoa Eba Thierry", titre: "Médecin urgentiste, CHU Yopougon", role: "Responsable pédagogique" },
      { nom: "Dr. Soro Mariame", titre: "Anesthésiste-réanimatrice", role: "Ateliers pratiques" },
    ],
    public: "Médecins généralistes et spécialistes, infirmiers, sages-femmes exerçant en cabinet ou clinique privée.",
    prerequis: "Diplôme de médecine, de soins infirmiers ou de sage-femme. Aucun prérequis technique spécifique.",
    inclus: ["Équipements de simulation", "Manuel de référence urgences", "Attestation DPC", "Fiche mémo urgences plastifiée"],
  },
  {
    id: 3,
    titre: "Introduction à la télémédecine et aux outils numériques de santé",
    domaine: "Numérique & Innovation",
    format: "En ligne",
    niveau: "Débutant",
    duree: "5 jours",
    heures: 10,
    places: 100,
    placesRestantes: 62,
    prix: "Gratuit",
    prixMembre: "Gratuit",
    date: "Disponible dès maintenant",
    dateISO: "2025-10-01",
    lieu: "Plateforme e-learning PSPSCI",
    image: "https://images.unsplash.com/photo-1666886573264-38075cc56104?w=800&h=500&fit=crop&auto=format",
    badge: "En ligne",
    badgeColor: "bg-[#1B4F8A] text-white",
    certifiante: false,
    dpc: false,
    resume: "Découvrez les outils numériques qui transforment la pratique médicale : téléconsultation, dossier médical partagé, prescription électronique et application MobiSanté. Formation 100% en ligne et à votre rythme.",
    objectifs: [
      "Comprendre les bases légales et déontologiques de la télémédecine en Côte d'Ivoire",
      "Prendre en main les outils de téléconsultation disponibles sur MobiSanté",
      "Paramétrer et utiliser un dossier médical électronique en cabinet",
      "Sécuriser les données de santé dans un environnement numérique",
      "Intégrer le numérique dans son parcours de soins sans perturber la relation patient",
    ],
    programme: [
      {
        jour: "Module 1",
        titre: "Cadre légal et éthique",
        modules: [
          "La télémédecine en Côte d'Ivoire : textes de référence",
          "Consentement du patient et responsabilité du médecin",
          "Secret médical et protection des données numériques",
        ],
      },
      {
        jour: "Module 2",
        titre: "Outils et pratique",
        modules: [
          "Prise en main de la plateforme MobiSanté",
          "Conduire une téléconsultation de qualité",
          "Dossier médical électronique : paramétrage et utilisation quotidienne",
          "Prescription électronique et ordonnances sécurisées",
        ],
      },
    ],
    intervenants: [
      { nom: "Dr. Koné Aboubacar", titre: "Médecin e-santé, Directeur MobiSanté", role: "Concepteur pédagogique" },
    ],
    public: "Tout professionnel de santé souhaitant se familiariser avec les outils numériques, sans expérience préalable requise.",
    prerequis: "Disposer d'un ordinateur ou tablette avec connexion internet. Être membre de la PSPSCI pour l'accès gratuit.",
    inclus: ["Accès illimité aux contenus", "Quiz d'évaluation", "Badge numérique de complétion", "Support PSPSCI par email"],
  },
  {
    id: 4,
    titre: "Droit pharmaceutique et bonnes pratiques de dispensation",
    domaine: "Pharmacie",
    format: "Présentiel",
    niveau: "Avancé",
    duree: "2 jours",
    heures: 14,
    places: 30,
    placesRestantes: 18,
    prix: "130 000 FCFA",
    prixMembre: "85 000 FCFA",
    date: "5–6 novembre 2025",
    dateISO: "2025-11-05",
    lieu: "Hôtel Radisson Blu, Plateau — Abidjan",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=500&fit=crop&auto=format",
    badge: "Nouveau",
    badgeColor: "bg-[#C9973A] text-white",
    certifiante: true,
    dpc: true,
    resume: "Formation destinée aux pharmaciens d'officine et de clinique sur les évolutions réglementaires récentes et les bonnes pratiques de dispensation pour sécuriser l'acte pharmaceutique.",
    objectifs: [
      "Maîtriser le cadre réglementaire de l'exercice pharmaceutique en Côte d'Ivoire",
      "Appliquer les bonnes pratiques de dispensation pour sécuriser le patient",
      "Gérer les interactions médicamenteuses complexes en contexte clinique",
      "Comprendre les règles de traçabilité et de gestion des stupéfiants",
      "Mettre en œuvre la pharmacovigilance au niveau de l'officine",
    ],
    programme: [
      {
        jour: "Jour 1",
        titre: "Cadre réglementaire actualisé",
        modules: [
          "Textes régissant l'exercice pharmaceutique : actualisation 2025",
          "Obligations de l'officine en matière de délivrance",
          "Gestion des médicaments soumis à prescription obligatoire",
          "Stupéfiants et psychotropes : réglementation spécifique",
        ],
      },
      {
        jour: "Jour 2",
        titre: "Bonnes pratiques et sécurité",
        modules: [
          "Analyse pharmaceutique de l'ordonnance",
          "Interactions médicamenteuses : cas pratiques",
          "Pharmacovigilance : déclaration des effets indésirables",
          "Conseils au patient et éducation thérapeutique",
        ],
      },
    ],
    intervenants: [
      { nom: "Dr. Gnahoré Véronique", titre: "Pharmacien inspecteur, DPMED", role: "Module réglementaire" },
      { nom: "Pr. Traoré Amadou", titre: "Chef de département Pharmacologie, UFR Pharmacie", role: "Module clinique" },
    ],
    public: "Pharmaciens d'officine, pharmaciens de clinique, préparateurs en pharmacie confirmés.",
    prerequis: "Être titulaire d'un diplôme de pharmacien. Exercer en officine ou en établissement de santé.",
    inclus: ["Guide de poche réglementaire", "Attestation DPC", "Déjeuners inclus", "Accès aux mises à jour réglementaires PSPSCI"],
  },
  {
    id: 5,
    titre: "Management des équipes soignantes et leadership infirmier",
    domaine: "Soins infirmiers",
    format: "Hybride",
    niveau: "Avancé",
    duree: "3 jours",
    heures: 21,
    places: 30,
    placesRestantes: 15,
    prix: "140 000 FCFA",
    prixMembre: "90 000 FCFA",
    date: "18–20 novembre 2025",
    dateISO: "2025-11-18",
    lieu: "Centre de Formation PSPSCI + en ligne",
    image: "https://images.unsplash.com/photo-1739956802238-2f37aefec7e1?w=800&h=500&fit=crop&auto=format",
    badge: null,
    badgeColor: "",
    certifiante: true,
    dpc: false,
    resume: "Développez vos compétences de leadership et de management d'équipes soignantes. Cette formation s'adresse aux infirmiers chefs de service et cadres de santé en exercice dans le secteur privé.",
    objectifs: [
      "Développer un leadership adapté aux équipes de soins pluridisciplinaires",
      "Gérer les plannings et l'organisation du travail en unité de soins",
      "Conduire un entretien professionnel et évaluer les compétences de son équipe",
      "Prévenir et gérer les conflits au sein d'une équipe soignante",
      "Piloter un projet d'amélioration de la qualité des soins",
    ],
    programme: [
      {
        jour: "Jour 1",
        titre: "Leadership et posture managériale",
        modules: [
          "Les styles de leadership : quel manager êtes-vous ?",
          "Communication assertive et gestion des émotions",
          "Délégation et responsabilisation de l'équipe",
          "Ateliers : mises en situation managériales",
        ],
      },
      {
        jour: "Jour 2",
        titre: "Organisation et gestion opérationnelle",
        modules: [
          "Élaboration et optimisation des plannings de soins",
          "Gestion des absences et continuité des soins",
          "Tableaux de bord de l'activité soignante",
          "Prévention des risques professionnels en milieu de soins",
        ],
      },
      {
        jour: "Jour 3 — En ligne",
        titre: "Qualité et développement professionnel",
        modules: [
          "Démarche qualité en unité de soins : méthodes et outils",
          "Conduire un projet d'amélioration au sein de son service",
          "Évaluation des pratiques professionnelles (EPP)",
          "Plan de développement des compétences de l'équipe",
        ],
      },
    ],
    intervenants: [
      { nom: "Mme Doumbia Fatoumata", titre: "Directrice des soins, Clinique Sainte-Marie", role: "Responsable pédagogique" },
      { nom: "Dr. Kouakou Ernest", titre: "Consultant RH Santé", role: "Module management" },
    ],
    public: "Infirmiers chefs de service, cadres de santé, infirmiers ayant une mission d'encadrement en établissement privé.",
    prerequis: "Être infirmier diplômé d'État avec au minimum 3 ans d'exercice. Exercer ou aspirer à exercer une fonction d'encadrement.",
    inclus: ["Manuel du cadre de santé", "Accès à la plateforme e-learning 6 mois", "Attestation de formation", "Réseau Alumni PSPSCI"],
  },
  {
    id: 6,
    titre: "Facturation, codage et optimisation des recettes en clinique",
    domaine: "Gestion & Management",
    format: "Présentiel",
    niveau: "Intermédiaire",
    duree: "2 jours",
    heures: 14,
    places: 20,
    placesRestantes: 20,
    prix: "120 000 FCFA",
    prixMembre: "75 000 FCFA",
    date: "25–26 novembre 2025",
    dateISO: "2025-11-25",
    lieu: "Hôtel Ivoire, Cocody — Abidjan",
    image: "https://images.unsplash.com/photo-1731419713280-34235a2ef1fa?w=800&h=500&fit=crop&auto=format",
    badge: "Ouverture",
    badgeColor: "bg-teal-600 text-white",
    certifiante: false,
    dpc: false,
    resume: "Maîtrisez les techniques de facturation médicale, de codage des actes et d'optimisation des recettes pour maximiser les revenus de votre établissement privé de santé tout en restant conforme aux règles.",
    objectifs: [
      "Comprendre les systèmes de nomenclature des actes médicaux en Côte d'Ivoire",
      "Coder correctement les actes pour maximiser les remboursements",
      "Optimiser le circuit de facturation de l'admission à l'encaissement",
      "Réduire les taux de rejets et de litiges avec les assureurs",
      "Mettre en place un système de suivi des recettes et des créances",
    ],
    programme: [
      {
        jour: "Jour 1",
        titre: "Fondamentaux de la facturation médicale",
        modules: [
          "La nomenclature des actes : CNAM, mutuelles et assurances privées",
          "Règles de codage et erreurs fréquentes à éviter",
          "Circuit de la facture : de la prescription à l'encaissement",
          "Cas pratiques de facturation complexe",
        ],
      },
      {
        jour: "Jour 2",
        titre: "Optimisation et suivi des recettes",
        modules: [
          "Analyse et réduction des rejets de facturation",
          "Négociation des conventions avec les assureurs",
          "Tableaux de bord financiers : suivi des recettes et des créances",
          "Outils numériques de facturation médicale",
        ],
      },
    ],
    intervenants: [
      { nom: "M. Akoi Jean-Baptiste", titre: "Responsable facturation, Clinique Internationale d'Abidjan", role: "Formateur principal" },
    ],
    public: "Responsables administratifs, comptables et gestionnaires d'établissements privés de santé. Médecins libéraux.",
    prerequis: "Notions de base en comptabilité ou en gestion. Exercer dans un établissement de santé privé.",
    inclus: ["Fichier Excel de suivi des recettes", "Guide de codage des actes", "Attestation de participation", "Support de cours numérique"],
  },
];

// ─── Color maps ───────────────────────────────────────────────────────────────

const domaineColors: Record<string, string> = {
  "Clinique & Médecine":    "bg-[#1B4F8A]/10 text-[#1B4F8A]",
  "Gestion & Management":   "bg-[#2E7D5A]/10 text-[#2E7D5A]",
  "Réglementation":         "bg-orange-100 text-orange-700",
  "Numérique & Innovation": "bg-[#C9973A]/10 text-[#C9973A]",
  "Pharmacie":              "bg-purple-100 text-purple-700",
  "Soins infirmiers":       "bg-teal-100 text-teal-700",
};

const formatIcons: Record<string, string> = {
  "Présentiel": "🏛️",
  "En ligne":   "💻",
  "Hybride":    "🔀",
};

// ─── Formation Card ───────────────────────────────────────────────────────────

function FormationCard({ f, onClick }: { f: Formation; onClick: () => void }) {
  const full = f.placesRestantes === 0;
  return (
    <div
      onClick={!full ? onClick : undefined}
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col transition-all ${full ? "opacity-60 cursor-not-allowed" : "hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"}`}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-gray-100 flex-shrink-0">
        <img src={f.image} alt={f.titre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {f.badge && (
            <span className={`text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${f.badgeColor}`}>
              {f.badge}
            </span>
          )}
          {f.dpc && (
            <span className="text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 text-[#1B4F8A]">
              DPC
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-[#1A2332] text-xs font-bold px-2.5 py-1 rounded-full">
            {formatIcons[f.format]} {f.format}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${domaineColors[f.domaine] ?? "bg-gray-100 text-gray-600"}`}>
            {f.domaine}
          </span>
          <span className="text-[0.65rem] text-[#5A6B80] font-semibold uppercase tracking-wider">{f.niveau}</span>
        </div>

        <h3 className="font-bold text-[#1A2332] text-base leading-snug mb-2 group-hover:text-[#1B4F8A] transition-colors flex-1" style={{ fontFamily: "var(--font-display)" }}>
          {f.titre}
        </h3>

        <p className="text-[#5A6B80] text-sm leading-relaxed line-clamp-2 mb-4">{f.resume}</p>

        {/* Meta */}
        <div className="space-y-1.5 mb-4 text-xs text-[#5A6B80]">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#2E7D5A] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span>{f.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#2E7D5A] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{f.duree} — {f.heures}h de formation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#2E7D5A] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="truncate">{f.lieu}</span>
          </div>
        </div>

        {/* Places */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="font-semibold text-[#5A6B80]">Places disponibles</span>
            <span className={`font-bold ${f.placesRestantes < 5 ? "text-red-500" : "text-[#2E7D5A]"}`}>
              {full ? "Complet" : `${f.placesRestantes} / ${f.places}`}
            </span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${f.placesRestantes < 5 ? "bg-red-400" : "bg-[#2E7D5A]"}`}
              style={{ width: `${Math.round(((f.places - f.placesRestantes) / f.places) * 100)}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <div>
            <div className="text-xs text-[#5A6B80]">Membres</div>
            <div className="font-bold text-[#1B4F8A] text-sm">{f.prixMembre}</div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); if (!full) onClick(); }}
            disabled={full}
            className={`text-sm font-bold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${full ? "bg-gray-100 text-gray-400" : "bg-[#1B4F8A] text-white hover:bg-[#133868]"}`}
          >
            {full ? "Complet" : "Voir la formation"}
            {!full && (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Formation Detail ─────────────────────────────────────────────────────────

function FormationDetail({ f, onBack }: { f: Formation; onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<"programme" | "intervenants" | "infos">("programme");
  const [formStep, setFormStep] = useState<"form" | "confirm">("form");
  const [formData, setFormData] = useState({ nom: "", prenom: "", email: "", tel: "", structure: "", statut: "medecin", membre: "oui" });

  const similaires = formations.filter(x => x.id !== f.id && x.domaine === f.domaine).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F5F8FD] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm">
          <button onClick={onBack} className="text-[#1B4F8A] hover:text-[#133868] font-semibold flex items-center gap-1.5 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Formations
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-[#5A6B80] truncate">{f.titre.substring(0, 55)}{f.titre.length > 55 ? "…" : ""}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[45vh] min-h-[320px] bg-gray-100 overflow-hidden">
        <img src={f.image} alt={f.titre} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2744]/80 via-[#0D2744]/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 max-w-7xl mx-auto px-6 pb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${domaineColors[f.domaine] ?? "bg-gray-100 text-gray-600"}`}>
              {f.domaine}
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {formatIcons[f.format]} {f.format}
            </span>
            {f.certifiante && <span className="bg-[#2E7D5A] text-white text-xs font-bold px-3 py-1.5 rounded-full">✓ Certifiante</span>}
            {f.dpc && <span className="bg-[#C9973A] text-white text-xs font-bold px-3 py-1.5 rounded-full">DPC validant</span>}
          </div>
          <h1 className="text-white font-bold leading-snug" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}>
            {f.titre}
          </h1>
        </div>
      </div>

      {/* Quick info bar */}
      <div className="bg-[#1B4F8A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "📅", label: "Date", val: f.date },
            { icon: "⏱️", label: "Durée", val: `${f.duree} — ${f.heures}h` },
            { icon: "📍", label: "Lieu", val: f.lieu },
            { icon: "👥", label: "Places restantes", val: f.placesRestantes === 0 ? "Complet" : `${f.placesRestantes} places` },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-[0.65rem] text-blue-300 uppercase tracking-wider font-semibold mb-0.5">{item.icon} {item.label}</div>
              <div className="text-sm font-bold text-white leading-tight">{item.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left: tabs content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Présentation */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="section-number text-[#2E7D5A]">01</div>
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs text-[#5A6B80] uppercase tracking-widest font-semibold">Présentation</span>
              </div>
              <p className="text-lg text-[#1A2332] leading-relaxed font-medium border-l-4 border-[#2E7D5A] pl-5 bg-[#F5F8FD] py-4 pr-4 rounded-r-xl">
                {f.resume}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#5A6B80]">
                <span className="flex items-center gap-2"><span className="font-bold text-[#1A2332]">Public visé :</span> {f.public}</span>
              </div>
            </div>

            {/* Objectifs */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="section-number text-[#2E7D5A]">02</div>
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs text-[#5A6B80] uppercase tracking-widest font-semibold">Objectifs pédagogiques</span>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <ul className="space-y-3">
                  {f.objectifs.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-[#2E7D5A]/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#2E7D5A] rounded-full" />
                      </div>
                      <span className="text-[#1A2332] text-sm leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Programme / Intervenants / Infos — Tabs */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="section-number text-[#2E7D5A]">03</div>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Tab bar */}
              <div className="flex gap-1 bg-[#F5F8FD] p-1 rounded-xl border border-gray-100 mb-6">
                {(["programme", "intervenants", "infos"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold capitalize transition-all ${activeTab === tab ? "bg-[#1B4F8A] text-white shadow-sm" : "text-[#5A6B80] hover:text-[#1A2332]"}`}
                  >
                    {tab === "programme" ? "Programme" : tab === "intervenants" ? "Intervenants" : "Infos pratiques"}
                  </button>
                ))}
              </div>

              {/* Programme */}
              {activeTab === "programme" && (
                <div className="space-y-4">
                  {f.programme.map((j, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                      <div className="bg-[#F5F8FD] border-b border-gray-100 px-6 py-4 flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#1B4F8A] text-white rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <div className="text-xs text-[#5A6B80] font-semibold uppercase tracking-wider">{j.jour}</div>
                          <div className="font-bold text-[#1A2332]" style={{ fontFamily: "var(--font-display)" }}>{j.titre}</div>
                        </div>
                      </div>
                      <ul className="px-6 py-4 space-y-2.5">
                        {j.modules.map((mod, mi) => (
                          <li key={mi} className="flex items-start gap-3 text-sm text-[#5A6B80]">
                            <svg className="w-4 h-4 text-[#2E7D5A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            {mod}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Intervenants */}
              {activeTab === "intervenants" && (
                <div className="space-y-4">
                  {f.intervenants.map((int, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B4F8A] to-[#2D6BB5] flex items-center justify-center flex-shrink-0 text-white text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                        {int.nom.split(" ").map(w => w[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-bold text-[#1A2332]" style={{ fontFamily: "var(--font-display)" }}>{int.nom}</div>
                        <div className="text-[#5A6B80] text-sm mt-0.5">{int.titre}</div>
                        <span className="inline-block mt-2 text-xs font-bold px-2.5 py-1 bg-[#2E7D5A]/10 text-[#2E7D5A] rounded-full">
                          {int.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Infos pratiques */}
              {activeTab === "infos" && (
                <div className="space-y-5">
                  {[
                    { label: "Public visé", content: f.public },
                    { label: "Prérequis", content: f.prerequis },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-2xl border border-gray-100 p-6">
                      <div className="text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-2">{item.label}</div>
                      <p className="text-[#1A2332] text-sm leading-relaxed">{item.content}</p>
                    </div>
                  ))}

                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <div className="text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-3">Ce qui est inclus</div>
                    <ul className="space-y-2">
                      {f.inclus.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[#1A2332]">
                          <svg className="w-4 h-4 text-[#2E7D5A] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: inscription */}
          <aside className="space-y-5">
            {/* Prix card */}
            <div className="bg-white rounded-2xl border-2 border-[#1B4F8A]/20 p-6 shadow-lg">
              <div className="text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-4">Tarifs d'inscription</div>
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between bg-[#2E7D5A]/8 rounded-xl px-4 py-3 border border-[#2E7D5A]/20">
                  <div>
                    <div className="text-xs font-bold text-[#2E7D5A] uppercase tracking-wider">Membres PSPSCI</div>
                  </div>
                  <div className="text-xl font-bold text-[#2E7D5A]" style={{ fontFamily: "var(--font-display)" }}>{f.prixMembre}</div>
                </div>
                <div className="flex items-center justify-between bg-[#F5F8FD] rounded-xl px-4 py-3">
                  <div>
                    <div className="text-xs font-bold text-[#5A6B80] uppercase tracking-wider">Non-membres</div>
                  </div>
                  <div className="text-lg font-bold text-[#1A2332]" style={{ fontFamily: "var(--font-display)" }}>{f.prix}</div>
                </div>
              </div>

              {f.placesRestantes > 0 && f.placesRestantes <= 8 && (
                <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 mb-4 text-xs text-red-600 font-semibold flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  Plus que {f.placesRestantes} place{f.placesRestantes > 1 ? "s" : ""} disponible{f.placesRestantes > 1 ? "s" : ""}
                </div>
              )}

              <a
                href="#inscription-form"
                className={`block w-full text-center font-bold py-3.5 rounded-xl transition-colors text-sm ${f.placesRestantes === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-[#1B4F8A] hover:bg-[#133868] text-white"}`}
              >
                {f.placesRestantes === 0 ? "Complet — Liste d'attente" : "S'inscrire à cette formation"}
              </a>
              <button onClick={onBack} className="block w-full text-center text-sm font-semibold text-[#5A6B80] hover:text-[#1B4F8A] py-2.5 transition-colors mt-2">
                ← Retour aux formations
              </button>
            </div>

            {/* Certifications */}
            {(f.certifiante || f.dpc) && (
              <div className="bg-[#F5F8FD] rounded-2xl border border-gray-100 p-5">
                <div className="text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-3">Certifications</div>
                <div className="space-y-2">
                  {f.certifiante && (
                    <div className="flex items-center gap-2.5 text-sm">
                      <div className="w-5 h-5 bg-[#2E7D5A] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-[#1A2332] font-medium">Attestation de formation certifiante</span>
                    </div>
                  )}
                  {f.dpc && (
                    <div className="flex items-center gap-2.5 text-sm">
                      <div className="w-5 h-5 bg-[#C9973A] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-[#1A2332] font-medium">Validant pour le DPC</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="bg-[#1B4F8A] rounded-2xl p-5 text-white">
              <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-3">Une question ?</div>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">Notre équipe pédagogique répond à vos questions sous 24h ouvrées.</p>
              <a href="mailto:formations@pspsci.ci" className="flex items-center gap-2 text-sm font-semibold text-[#7DD3AC] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                formations@pspsci.ci
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Formulaire d'inscription */}
      <section id="inscription-form" className="py-16 bg-[#F5F8FD] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="section-number text-[#2E7D5A]">04</div>
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-xs text-[#5A6B80] uppercase tracking-widest font-semibold">Inscription</span>
          </div>
          <h2 className="text-3xl font-bold text-[#1B4F8A] mb-2 mt-4" style={{ fontFamily: "var(--font-display)" }}>
            S'inscrire à la formation
          </h2>
          <p className="text-[#5A6B80] mb-8">Remplissez le formulaire ci-dessous. Vous recevrez une confirmation par e-mail sous 48h.</p>

          {formStep === "confirm" ? (
            <div className="bg-white rounded-3xl border border-[#2E7D5A]/30 p-10 text-center shadow-lg">
              <div className="w-16 h-16 bg-[#2E7D5A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2E7D5A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-2" style={{ fontFamily: "var(--font-display)" }}>Demande envoyée !</h3>
              <p className="text-[#5A6B80] leading-relaxed mb-6">
                Votre demande d'inscription à <strong>{f.titre}</strong> a bien été reçue.
                Notre équipe reviendra vers vous à l'adresse <strong>{formData.email}</strong> sous 48h ouvrées avec les instructions de paiement.
              </p>
              <button onClick={() => setFormStep("form")} className="text-[#1B4F8A] font-semibold text-sm hover:underline">
                Soumettre une autre inscription
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-md">
              <div className="flex gap-1 bg-[#F5F8FD] p-1 rounded-xl mb-6 border border-gray-100">
                {[{ val: "medecin", label: "Médecin / Professionnel" }, { val: "structure", label: "Structure de santé" }].map(t => (
                  <button key={t.val} onClick={() => setFormData(d => ({ ...d, statut: t.val }))}
                    className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${formData.statut === t.val ? "bg-[#1B4F8A] text-white shadow-sm" : "text-[#5A6B80] hover:text-[#1A2332]"}`}>
                    {t.label}
                  </button>
                ))}
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setFormStep("confirm"); }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-1.5">Prénom</label>
                    <input type="text" required placeholder="Marie" value={formData.prenom} onChange={e => setFormData(d => ({ ...d, prenom: e.target.value }))}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A] focus:ring-2 focus:ring-[#1B4F8A]/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-1.5">Nom</label>
                    <input type="text" required placeholder="Konan" value={formData.nom} onChange={e => setFormData(d => ({ ...d, nom: e.target.value }))}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A] focus:ring-2 focus:ring-[#1B4F8A]/10 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-1.5">Adresse e-mail professionnelle</label>
                  <input type="email" required placeholder="dr.konan@clinique.ci" value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A] focus:ring-2 focus:ring-[#1B4F8A]/10 transition-all" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-1.5">Téléphone</label>
                    <input type="tel" required placeholder="+225 07 …" value={formData.tel} onChange={e => setFormData(d => ({ ...d, tel: e.target.value }))}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A] focus:ring-2 focus:ring-[#1B4F8A]/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-1.5">Membre PSPSCI ?</label>
                    <select value={formData.membre} onChange={e => setFormData(d => ({ ...d, membre: e.target.value }))}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#1A2332] focus:outline-none focus:border-[#1B4F8A] bg-white transition-all">
                      <option value="oui">Oui — tarif membre</option>
                      <option value="non">Non — tarif standard</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-1.5">
                    {formData.statut === "medecin" ? "Spécialité / Fonction" : "Nom de l'établissement"}
                  </label>
                  <input type="text" placeholder={formData.statut === "medecin" ? "Cardiologue, Infirmier chef…" : "Clinique Sainte-Marie…"} value={formData.structure} onChange={e => setFormData(d => ({ ...d, structure: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4F8A] focus:ring-2 focus:ring-[#1B4F8A]/10 transition-all" />
                </div>

                <div className="pt-2 bg-[#F5F8FD] rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#5A6B80] font-medium">Tarif applicable :</span>
                    <span className="font-bold text-[#1B4F8A] text-lg">{formData.membre === "oui" ? f.prixMembre : f.prix}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="cgu-f" required className="mt-1 accent-[#2E7D5A]" />
                  <label htmlFor="cgu-f" className="text-xs text-[#5A6B80] leading-relaxed">
                    J'accepte les <a href="#" className="text-[#1B4F8A] font-semibold hover:underline">conditions générales de formation</a> et la politique de traitement des données de la PSPSCI.
                  </label>
                </div>

                <button type="submit"
                  className="w-full bg-[#1B4F8A] hover:bg-[#133868] text-white font-bold py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 mt-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Envoyer ma demande d'inscription
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Formations similaires */}
      {similaires.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#1B4F8A]" style={{ fontFamily: "var(--font-display)" }}>
                Formations similaires
              </h3>
              <button onClick={onBack} className="text-sm font-semibold text-[#1B4F8A] hover:text-[#133868] flex items-center gap-1.5 transition-colors">
                Voir toutes les formations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {similaires.map(s => (
                <FormationCard key={s.id} f={s} onClick={() => { window.scrollTo(0, 0); }} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function Formations() {
  const [selected, setSelected] = useState<Formation | null>(null);
  const [domaine, setDomaine] = useState("Tous les domaines");
  const [format, setFormat] = useState("Tous formats");
  const [niveau, setNiveau] = useState("Tous niveaux");
  const [search, setSearch] = useState("");

  if (selected) {
    return <FormationDetail f={selected} onBack={() => { setSelected(null); window.scrollTo(0, 0); }} />;
  }

  const filtered = formations.filter(f => {
    const mDomaine = domaine === "Tous les domaines" || f.domaine === domaine;
    const mFormat  = format  === "Tous formats"     || f.format  === format;
    const mNiveau  = niveau  === "Tous niveaux"     || f.niveau  === niveau;
    const mSearch  = search  === ""                 || f.titre.toLowerCase().includes(search.toLowerCase()) || f.resume.toLowerCase().includes(search.toLowerCase());
    return mDomaine && mFormat && mNiveau && mSearch;
  });

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0D2744] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(#2E7D5A 1px, transparent 1px), linear-gradient(90deg, #2E7D5A 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E7D5A]/15 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-[#3D9E72] rounded-full animate-pulse" />
            <span className="text-[#7DD3AC] text-xs font-semibold uppercase tracking-widest">PSPSCI — Formations</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <h1 className="text-white leading-tight mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Formations professionnelles<br />
                <em className="text-[#7DD3AC] not-italic">pour les acteurs de la santé</em>
              </h1>
              <p className="text-blue-200 leading-relaxed max-w-lg">
                La PSPSCI propose des formations certifiantes et des modules de développement professionnel
                continu pour les professionnels et structures de santé du secteur privé ivoirien.
              </p>
            </div>
            <div className="relative max-w-md lg:ml-auto w-full">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A6B80]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher une formation…"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all backdrop-blur-sm" />
            </div>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { val: formations.length + "+", label: "Formations disponibles" },
              { val: formations.filter(f => f.certifiante).length + "", label: "Certifiantes" },
              { val: formations.filter(f => f.dpc).length + "", label: "Validantes DPC" },
              { val: "Gratuit", label: "Pour les membres (certaines)" },
            ].map(s => (
              <div key={s.label}>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{s.val}</span>
                <span className="text-blue-300 text-xs block mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters bar */}
      <div className="sticky top-[65px] z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center gap-3">
          <span className="text-xs text-[#5A6B80] font-bold uppercase tracking-wider flex-shrink-0">Filtrer :</span>
          <div className="flex gap-2 overflow-x-auto no-scrollbar flex-1">
            {domaines.map(d => (
              <button key={d} onClick={() => setDomaine(d)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${domaine === d ? "bg-[#1B4F8A] text-white" : "bg-[#F5F8FD] text-[#5A6B80] hover:bg-gray-100"}`}>
                {d}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <select value={format} onChange={e => setFormat(e.target.value)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 text-[#1A2332] focus:outline-none focus:border-[#1B4F8A] bg-white font-semibold">
              {formats.map(f => <option key={f}>{f}</option>)}
            </select>
            <select value={niveau} onChange={e => setNiveau(e.target.value)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 text-[#1A2332] focus:outline-none focus:border-[#1B4F8A] bg-white font-semibold">
              {niveaux.map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-14 bg-[#F5F8FD]">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-2" style={{ fontFamily: "var(--font-display)" }}>Aucune formation trouvée</h3>
              <p className="text-[#5A6B80] mb-6">Aucune formation ne correspond à vos critères de recherche.</p>
              <button onClick={() => { setDomaine("Tous les domaines"); setFormat("Tous formats"); setNiveau("Tous niveaux"); setSearch(""); }}
                className="text-[#1B4F8A] font-semibold text-sm hover:underline">
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-[#5A6B80]">
                  <span className="font-bold text-[#1A2332]">{filtered.length}</span> formation{filtered.length > 1 ? "s" : ""} trouvée{filtered.length > 1 ? "s" : ""}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(f => (
                  <FormationCard key={f.id} f={f} onClick={() => { setSelected(f); window.scrollTo(0, 0); }} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B4F8A]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Vous proposez des formations dans le secteur santé ?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 max-w-xl mx-auto">
            La PSPSCI accueille les organismes de formation partenaires sur sa plateforme.
            Contactez-nous pour référencer vos programmes.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#2E7D5A] hover:bg-[#245f45] text-white font-bold px-7 py-3.5 rounded-lg transition-colors text-sm">
            Devenir partenaire formation
          </a>
        </div>
      </section>
    </div>
  );
}
