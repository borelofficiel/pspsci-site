import { useState, useEffect } from "react"
import FloatingSidebar from "./FloatingSidebar"

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  "Toutes",
  "Événements",
  "Santé publique",
  "Réglementation",
  "Formation",
  "Partenariats",
  "Innovations",
]

const articles = [
  {
    id: 1,
    slug: "assemblee-generale-pspsci-2025",
    categorie: "Événements",
    date: "12 septembre 2025",
    dateISO: "2025-09-12",
    titre:
      "Assemblée Générale Ordinaire de la PSPSCI : un bilan encourageant pour le secteur privé de la santé",
    resume:
      "La PSPSCI a tenu son Assemblée Générale Ordinaire à Abidjan, réunissant plus de 400 membres venus des 18 régions. Le bilan des actions menées et les perspectives 2026 ont été présentés par le Président.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&auto=format",
    vedette: true,
    auteur: "Service Communication PSPSCI",
    contenu: [
      {
        type: "chapeau",
        text: "Le 10 septembre 2025 s'est tenue à l'hôtel Pullman d'Abidjan la troisième Assemblée Générale Ordinaire de la Plateforme du Secteur Privé de la Santé de Côte d'Ivoire (PSPSCI), en présence de plus de 400 membres représentant l'ensemble des acteurs du secteur sanitaire privé ivoirien.",
      },
      { type: "titre", text: "Un bilan 2024–2025 largement salué" },
      {
        type: "paragraphe",
        text: "Le Président de la PSPSCI, le Dr. Alphonse N'Guessan Kouassi, a ouvert la séance en présentant le bilan exhaustif des actions conduites au cours de l'exercice 2024–2025. Parmi les réalisations phares : la signature d'une convention-cadre avec le Ministère de la Santé et de l'Hygiène Publique, le lancement de l'application MobiSanté désormais téléchargée par plus de 12 000 utilisateurs, et le déploiement de l'identité digitale PSPSCI auprès de 4 200 professionnels et structures de santé.",
      },
      {
        type: "paragraphe",
        text: "Le Trésorier Général a ensuite présenté les états financiers de l'exercice, approuvés à l'unanimité par l'assemblée. Les cotisations membres ont progressé de 23 % par rapport à l'exercice précédent, témoignant de la dynamique d'adhésion croissante que connaît la plateforme.",
      },
      { type: "titre", text: "Les grandes orientations 2026" },
      {
        type: "paragraphe",
        text: "Le plan d'action 2026 s'articule autour de quatre axes prioritaires : l'élargissement de la couverture géographique aux zones rurales et périurbaines, le renforcement du dialogue avec les pouvoirs publics sur la tarification des soins, le développement de la formation continue via la plateforme numérique PSPSCI, et la structuration d'un fonds de garantie destiné à faciliter l'accès au crédit pour les petits établissements privés de santé.",
      },
      {
        type: "citation",
        text: '"Le secteur privé de la santé est prêt à assumer pleinement sa part de responsabilité dans la marche vers la Couverture Maladie Universelle. Nous sommes des partenaires, pas des concurrents."',
        auteur: "Dr. Alphonse N'Guessan Kouassi, Président de la PSPSCI",
      },
      {
        type: "paragraphe",
        text: "L'assemblée s'est conclue par l'élection de trois nouveaux membres au Conseil d'Administration, représentant respectivement les régions du Nord, de l'Ouest et du Centre-Ouest. Les travaux se sont poursuivis par un cocktail de networking ayant permis aux membres de tisser de nouveaux liens professionnels.",
      },
    ],
  },
  {
    id: 2,
    slug: "couverture-maladie-universelle-secteur-prive",
    categorie: "Santé publique",
    date: "4 septembre 2025",
    dateISO: "2025-09-04",
    titre:
      "CMU : la PSPSCI signe un protocole d'accord avec la CNAM pour intégrer davantage d'établissements privés",
    resume:
      "Un accord historique entre la PSPSCI et la Caisse Nationale d'Assurance Maladie ouvre la voie à l'intégration de 800 nouveaux établissements privés dans le réseau de soins de la Couverture Maladie Universelle.",
    image:
      "https://images.unsplash.com/photo-1653566031587-74f7d86a2e71?w=800&h=500&fit=crop&auto=format",
    vedette: false,
    auteur: "Service Communication PSPSCI",
    contenu: [
      {
        type: "chapeau",
        text: "La PSPSCI et la Caisse Nationale d'Assurance Maladie (CNAM) ont signé le 4 septembre 2025 un protocole d'accord visant à accélérer l'intégration des établissements privés de santé dans le réseau de la Couverture Maladie Universelle.",
      },
      {
        type: "paragraphe",
        text: "Cet accord ouvre la voie à la conventionnement de 800 nouveaux établissements privés de santé d'ici fin 2026, portant le total des structures conventionnées à plus de 2 000 à l'échelle nationale. Il prévoit également la simplification des procédures de remboursement et la réduction des délais de paiement aux prestataires de soins.",
      },
      { type: "titre", text: "Des tarifs négociés et acceptables" },
      {
        type: "paragraphe",
        text: "La négociation des tarifs de remboursement, longtemps source de friction entre le secteur privé et la CNAM, a abouti à un compromis jugé acceptable par les deux parties. Les tarifs retenus intègrent désormais une indexation annuelle sur l'inflation, garantissant ainsi la pérennité économique des établissements conventionnés.",
      },
    ],
  },
  {
    id: 3,
    slug: "formation-continue-plateforme-numerique",
    categorie: "Formation",
    date: "28 août 2025",
    dateISO: "2025-08-28",
    titre:
      "Lancement de la plateforme de formation continue en ligne de la PSPSCI : 50 modules disponibles dès maintenant",
    resume:
      "La PSPSCI inaugure sa plateforme e-learning dédiée aux professionnels de santé du secteur privé. 50 modules de formation continue, validants pour le DPC, sont accessibles gratuitement aux membres adhérents.",
    image:
      "https://images.unsplash.com/photo-1666886573264-38075cc56104?w=800&h=500&fit=crop&auto=format",
    vedette: false,
    auteur: "Direction Formation PSPSCI",
    contenu: [
      {
        type: "chapeau",
        text: "La PSPSCI franchit une étape majeure dans son engagement pour le développement professionnel continu avec le lancement officiel de sa plateforme e-learning, accessible à l'ensemble des membres adhérents.",
      },
      {
        type: "paragraphe",
        text: "Cinquante modules de formation continue sont d'ores et déjà disponibles, couvrant les grandes spécialités médicales, les aspects réglementaires de l'exercice en cabinet privé, la gestion administrative et financière d'un établissement de santé, ainsi que les nouvelles technologies appliquées à la médecine.",
      },
    ],
  },
  {
    id: 4,
    slug: "nouveau-cadre-reglementaire-cliniques-privees",
    categorie: "Réglementation",
    date: "19 août 2025",
    dateISO: "2025-08-19",
    titre:
      "Nouveau cadre réglementaire pour les cliniques privées : la PSPSCI publie son guide d'accompagnement",
    resume:
      "Suite à la publication du décret n°2025-412 fixant les nouvelles normes d'agrément des établissements privés de santé, la PSPSCI met à disposition de ses membres un guide pratique de mise en conformité.",
    image:
      "https://images.unsplash.com/photo-1575029645663-d8faa1ac2880?w=800&h=500&fit=crop&auto=format",
    vedette: false,
    auteur: "Direction Juridique PSPSCI",
    contenu: [
      {
        type: "chapeau",
        text: "La PSPSCI a publié son guide d'accompagnement destiné à aider les établissements privés de santé à se conformer aux nouvelles exigences réglementaires issues du décret n°2025-412 du 15 juillet 2025.",
      },
      {
        type: "paragraphe",
        text: "Ce guide, élaboré par la Direction Juridique de la PSPSCI en collaboration avec des experts du Ministère de la Santé, détaille les nouvelles normes architecturales, les exigences en matière d'équipements, les obligations de signalisation et les procédures de demande ou de renouvellement d'agrément.",
      },
    ],
  },
  {
    id: 5,
    slug: "partenariat-oms-pspsci",
    categorie: "Partenariats",
    date: "11 août 2025",
    dateISO: "2025-08-11",
    titre:
      "La PSPSCI et l'OMS signent un accord de coopération pour renforcer la qualité des soins en Côte d'Ivoire",
    resume:
      "Un accord de coopération technique entre la PSPSCI et le Bureau de l'OMS en Côte d'Ivoire permettra de déployer des programmes d'accréditation et d'amélioration de la qualité dans 300 établissements privés de santé.",
    image:
      "https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?w=800&h=500&fit=crop&auto=format",
    vedette: false,
    auteur: "Service Communication PSPSCI",
    contenu: [
      {
        type: "chapeau",
        text: "La signature d'un accord de coopération technique entre la PSPSCI et l'Organisation Mondiale de la Santé (OMS) marque une étape décisive dans l'amélioration de la qualité des soins au sein du secteur privé ivoirien.",
      },
      {
        type: "paragraphe",
        text: "Cet accord prévoit le déploiement d'un programme d'accréditation des établissements de santé basé sur les standards internationaux de l'OMS, avec l'appui technique et financier du bureau régional AFRO. Trois cents établissements privés seront accompagnés sur une période de trois ans.",
      },
    ],
  },
  {
    id: 6,
    slug: "telemedicine-secteur-prive-cote-ivoire",
    categorie: "Innovations",
    date: "2 août 2025",
    dateISO: "2025-08-02",
    titre:
      "Télémédecine en Côte d'Ivoire : le secteur privé accélère son déploiement dans les zones rurales",
    resume:
      "Grâce à un programme pilote porté par la PSPSCI, 45 cliniques privées de 12 régions proposent désormais des consultations de télémédecine, permettant l'accès aux spécialistes pour les populations éloignées.",
    image:
      "https://images.unsplash.com/photo-1666886573301-b5d526cfd518?w=800&h=500&fit=crop&auto=format",
    vedette: false,
    auteur: "Direction Innovations PSPSCI",
    contenu: [
      {
        type: "chapeau",
        text: "Le programme pilote de télémédecine porté par la PSPSCI depuis janvier 2025 enregistre ses premiers résultats concrets : 45 cliniques privées de 12 régions ivoiriennes proposent désormais des consultations à distance avec des spécialistes basés à Abidjan ou à Bouaké.",
      },
      {
        type: "paragraphe",
        text: "En six mois, plus de 3 200 consultations de télémédecine ont été réalisées via la plateforme MobiSanté, évitant autant de déplacements coûteux pour des patients vivant dans des zones parfois à plus de 200 kilomètres du spécialiste. Les économies réalisées par les familles sont estimées à plusieurs dizaines de millions de FCFA.",
      },
    ],
  },
  {
    id: 7,
    slug: "forum-sante-privee-grand-bassam",
    categorie: "Événements",
    date: "24 juillet 2025",
    dateISO: "2025-07-24",
    titre:
      "Forum annuel de la Santé Privée : Grand-Bassam accueillera la 6ème édition les 14 et 15 novembre 2025",
    resume:
      "La PSPSCI annonce la tenue du 6ème Forum Annuel de la Santé Privée à Grand-Bassam. Thème : « Financement, qualité et innovation : construire le secteur privé de santé de demain ».",
    image:
      "https://images.unsplash.com/photo-1758691736082-b69a65770026?w=800&h=500&fit=crop&auto=format",
    vedette: false,
    auteur: "Service Communication PSPSCI",
    contenu: [
      {
        type: "chapeau",
        text: "La PSPSCI annonce officiellement la tenue du 6ème Forum Annuel de la Santé Privée les 14 et 15 novembre 2025 à Grand-Bassam, dans les locaux du Palais des Congrès de la cité balnéaire.",
      },
      {
        type: "paragraphe",
        text: "Placé sous le thème « Financement, qualité et innovation : construire le secteur privé de santé de demain », ce forum réunira des experts nationaux et internationaux, des décideurs publics, des représentants des bailleurs de fonds et des acteurs du secteur privé de la santé.",
      },
    ],
  },
  {
    id: 8,
    slug: "mobisante-100000-telechargements",
    categorie: "Innovations",
    date: "15 juillet 2025",
    dateISO: "2025-07-15",
    titre:
      "MobiSanté franchit le cap des 100 000 téléchargements : un succès pour le numérique en santé",
    resume:
      "L'application MobiSanté de la PSPSCI a dépassé les 100 000 téléchargements en moins d'un an, confirmant l'engouement des Ivoiriens pour les services de santé numériques.",
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=500&fit=crop&auto=format",
    vedette: false,
    auteur: "Direction Innovations PSPSCI",
    contenu: [
      {
        type: "chapeau",
        text: "Lancée en octobre 2024, l'application MobiSanté a franchi le cap symbolique des 100 000 téléchargements le 10 juillet 2025, soit en moins de neuf mois d'existence. Un résultat qui dépasse les projections initiales de la PSPSCI.",
      },
      {
        type: "paragraphe",
        text: "MobiSanté permet aux utilisateurs de localiser les établissements de santé privés à proximité, de consulter les profils des médecins, de prendre rendez-vous en ligne et, pour les membres inscrits, d'accéder à leur identité digitale PSPSCI et à la plateforme de télémédecine.",
      },
    ],
  },
]

// ─── Helpers couleurs ────────────────────────────────────────────────────────

const catColors: Record<string, string> = {
  Événements: "bg-[#1B4F8A] text-white",
  "Santé publique": "bg-[#2E7D5A] text-white",
  Réglementation: "bg-orange-500 text-white",
  Formation: "bg-purple-600 text-white",
  Partenariats: "bg-teal-600 text-white",
  Innovations: "bg-[#C9973A] text-white",
}

const catColorsSoft: Record<string, string> = {
  Événements: "bg-[#1B4F8A]/10 text-[#1B4F8A]",
  "Santé publique": "bg-[#2E7D5A]/10 text-[#2E7D5A]",
  Réglementation: "bg-orange-100 text-orange-700",
  Formation: "bg-purple-100 text-purple-700",
  Partenariats: "bg-teal-100 text-teal-700",
  Innovations: "bg-[#C9973A]/10 text-[#C9973A]",
}

const catDot: Record<string, string> = {
  Événements: "bg-[#1B4F8A]",
  "Santé publique": "bg-[#2E7D5A]",
  Réglementation: "bg-orange-500",
  Formation: "bg-purple-500",
  Partenariats: "bg-teal-600",
  Innovations: "bg-[#C9973A]",
}

// ─── Bouton flottant "Retour en haut" ────────────────────────────────────────

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut de la page"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#1B4F8A] hover:bg-[#133868] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  )
}

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({
  article,
  featured = false,
  onClick,
}: {
  article: typeof articles[0]
  featured?: boolean
  onClick: () => void
}) {
  if (featured) {
    return (
      <div
        className="group col-span-full lg:col-span-2 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
        onClick={onClick}
      >
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-full overflow-hidden bg-gray-100">
            <img
              src={article.image}
              alt={article.titre}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg ${catColors[article.categorie]}`}
              >
                {article.categorie}
              </span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-white text-[#1B4F8A] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                À la une
              </span>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-between">
            <div>
              <time className="text-xs text-[#5A6B80] font-semibold uppercase tracking-wider flex items-center gap-2 mb-4">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${catDot[article.categorie]}`} />
                {article.date}
              </time>
              <h2
                className="text-2xl font-bold text-[#1A2332] leading-snug mb-4 group-hover:text-[#1B4F8A] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {article.titre}
              </h2>
              <p className="text-[#5A6B80] leading-relaxed text-sm">{article.resume}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-[#5A6B80]">{article.auteur}</span>
              <span className="text-[#1B4F8A] text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Lire l'article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={article.image}
          alt={article.titre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg ${catColors[article.categorie]}`}
          >
            {article.categorie}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <time className="text-xs text-[#5A6B80] font-semibold uppercase tracking-wider flex items-center gap-2 mb-3">
          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${catDot[article.categorie]}`} />
          {article.date}
        </time>
        <h3
          className="font-bold text-[#1A2332] text-base leading-snug mb-3 group-hover:text-[#1B4F8A] transition-colors flex-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {article.titre}
        </h3>
        <p className="text-[#5A6B80] text-sm leading-relaxed line-clamp-3 mb-4">{article.resume}</p>
        <span className="text-[#1B4F8A] text-sm font-semibold flex items-center gap-1.5 mt-auto group-hover:gap-2.5 transition-all">
          Lire l'article
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </div>
  )
}

// ─── Article Detail ───────────────────────────────────────────────────────────

function ArticleDetail({
  article,
  onBack,
  onArticleClick,
}: {
  article: typeof articles[0]
  onBack: () => void
  onArticleClick: (a: typeof articles[0]) => void
}) {
  const similaires = articles
    .filter((a) => a.id !== article.id && (a.categorie === article.categorie || a.id < 4))
    .slice(0, 3)

  return (
    <div className="bg-white">
      {/* ── Navbar retour ── */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 bg-[#F5F8FD] hover:bg-[#1B4F8A] text-[#1B4F8A] hover:text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-all"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="hidden sm:inline">Retour aux actualités</span>
            <span className="sm:hidden">Retour</span>
          </button>

          <div className="flex items-center gap-3 min-w-0">
            <div className="hidden md:flex items-center gap-3 min-w-0">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${catDot[article.categorie]}`} />
              <span className="text-xs text-[#5A6B80] font-semibold uppercase tracking-wider truncate">
                {article.categorie}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero image ── */}
      <div className="relative h-[50vh] min-h-[360px] bg-gray-100 overflow-hidden">
        <img src={article.image} alt={article.titre} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2744]/85 via-[#0D2744]/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 max-w-4xl mx-auto px-6 pb-10">
          <span
            className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 shadow-lg ${catColors[article.categorie]}`}
          >
            {article.categorie}
          </span>
          <h1
            className="text-white font-bold leading-tight drop-shadow-lg"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)" }}
          >
            {article.titre}
          </h1>
        </div>
      </div>

      {/* ── Meta bar ── */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-[#5A6B80]">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2E7D5A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <time dateTime={article.dateISO}>{article.date}</time>
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2E7D5A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              {article.auteur}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#5A6B80] font-semibold uppercase tracking-wide mr-1">Partager</span>
            {[
              { label: "Facebook", color: "hover:bg-blue-600" },
              { label: "Twitter", color: "hover:bg-sky-500" },
              { label: "LinkedIn", color: "hover:bg-blue-700" },
            ].map((s) => (
              <button
                key={s.label}
                className={`w-8 h-8 rounded-full bg-gray-100 ${s.color} hover:text-white text-[#5A6B80] flex items-center justify-center text-[0.6rem] font-bold uppercase transition-colors`}
              >
                {s.label[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose-pspsci space-y-6">
              {article.contenu.map((block, i) => {
                if (block.type === "chapeau")
                  return (
                    <p
                      key={i}
                      className="text-lg text-[#1A2332] leading-relaxed font-medium border-l-4 border-[#2E7D5A] pl-5 bg-[#F5F8FD] py-4 pr-4 rounded-r-xl"
                    >
                      {block.text}
                    </p>
                  )
                if (block.type === "titre")
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold text-[#1B4F8A] pt-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {block.text}
                    </h2>
                  )
                if (block.type === "paragraphe")
                  return (
                    <p key={i} className="text-[#5A6B80] leading-relaxed text-base">
                      {block.text}
                    </p>
                  )
                if (block.type === "citation")
                  return (
                    <blockquote key={i} className="bg-[#1B4F8A] text-white rounded-2xl p-7 my-8">
                      <svg className="w-10 h-10 text-white/20 mb-3" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm12 0c-4.4 0-8 3.6-8 16v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
                      </svg>
                      <p className="text-lg italic leading-relaxed mb-4" style={{ fontFamily: "var(--font-display)" }}>
                        {block.text}
                      </p>
                      <cite className="text-blue-200 text-sm not-italic font-semibold">{block.auteur}</cite>
                    </blockquote>
                  )
                return null
              })}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <span className="text-xs font-bold text-[#5A6B80] uppercase tracking-wider mr-3">Catégorie :</span>
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${catColorsSoft[article.categorie]}`}
              >
                {article.categorie}
              </span>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={onBack}
                className="flex-1 border border-gray-200 hover:border-[#1B4F8A] hover:text-[#1B4F8A] text-[#5A6B80] text-sm font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Retour aux actualités
              </button>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-[#1B4F8A] rounded-2xl p-6 text-white">
              <img
                src="https://pspsci.org/img/2@4x.png"
                alt="PSPSCI"
                className="h-8 w-auto brightness-0 invert mb-4"
              />
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                La Plateforme du Secteur Privé de la Santé de Côte d'Ivoire fédère l'ensemble des acteurs privés
                de la santé ivoirienne.
              </p>
              <a
                href="#contact"
                className="block w-full text-center bg-[#2E7D5A] hover:bg-[#245f45] text-white text-sm font-bold py-2.5 rounded-lg transition-colors"
              >
                Nous rejoindre
              </a>
            </div>

            <div className="bg-[#F5F8FD] rounded-2xl p-6 border border-gray-100">
              <h4 className="text-xs font-bold text-[#5A6B80] uppercase tracking-wider mb-4">Catégories</h4>
              <ul className="space-y-2">
                {categories
                  .filter((c) => c !== "Toutes")
                  .map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={onBack}
                        className="flex items-center gap-2.5 text-sm w-full text-left hover:text-[#1B4F8A] transition-colors text-[#1A2332]"
                      >
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${catDot[cat]}`} />
                        {cat}
                        <span className="ml-auto text-[#5A6B80] text-xs">
                          {articles.filter((a) => a.categorie === cat).length}
                        </span>
                      </button>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-[#1A2332] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Newsletter PSPSCI
              </h4>
              <p className="text-[#5A6B80] text-sm mb-4 leading-relaxed">
                Recevez les actualités du secteur privé de la santé directement dans votre boîte mail.
              </p>
              <input
                type="email"
                placeholder="votre@email.ci"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm mb-3 focus:outline-none focus:border-[#1B4F8A] focus:ring-2 focus:ring-[#1B4F8A]/10 transition-all"
              />
              <button className="w-full bg-[#1B4F8A] hover:bg-[#133868] text-white text-sm font-bold py-2.5 rounded-lg transition-colors">
                S'abonner
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Articles similaires ── */}
      <section className="bg-[#F5F8FD] py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-[#1B4F8A]" style={{ fontFamily: "var(--font-display)" }}>
              Articles similaires
            </h3>
            <button
              onClick={onBack}
              className="text-sm font-semibold text-[#1B4F8A] hover:text-[#133868] flex items-center gap-1.5 transition-colors"
            >
              Toutes les actualités
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {similaires.map((a) => (
              <ArticleCard
                key={a.id}
                article={a}
                onClick={() => {
                  onArticleClick(a)
                  window.scrollTo(0, 0)
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page principale ──────────────────────────────────────────────────────────

export default function Actualites() {
  const [selectedArticle, setSelectedArticle] = useState<(typeof articles)[0] | null>(null)
  const [activeCat, setActiveCat] = useState("Toutes")
  const [search, setSearch] = useState("")

  if (selectedArticle) {
    return (
      <>
        <ArticleDetail
          article={selectedArticle}
          onBack={() => {
            setSelectedArticle(null)
            window.scrollTo(0, 0)
          }}
          onArticleClick={(a) => {
            setSelectedArticle(a)
            window.scrollTo(0, 0)
          }}
        />
        <FloatingSidebar />
        <ScrollToTopButton />
      </>
    )
  }

  const filtered = articles.filter((a) => {
    const matchCat = activeCat === "Toutes" || a.categorie === activeCat
    const matchSearch =
      search === "" ||
      a.titre.toLowerCase().includes(search.toLowerCase()) ||
      a.resume.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = filtered.find((a) => a.vedette) || filtered[0]
  const rest = filtered.filter((a) => a.id !== featured?.id)

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="bg-[#0D2744] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#2E7D5A 1px, transparent 1px), linear-gradient(90deg, #2E7D5A 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B4F8A]/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-[#3D9E72] rounded-full animate-pulse" />
            <span className="text-[#7DD3AC] text-xs font-semibold uppercase tracking-widest">
              PSPSCI — Actualités
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <h1
                className="text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Actualités du secteur
                <br />
                <em className="text-[#7DD3AC] not-italic">privé de la santé</em>
              </h1>
              <p className="text-blue-200 leading-relaxed max-w-lg">
                Retrouvez toute l'information sur les événements, réglementations, innovations et partenariats du
                secteur privé de la santé en Côte d'Ivoire.
              </p>
            </div>

            <div className="relative max-w-md lg:ml-auto w-full">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A6B80]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher une actualité…"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { val: articles.length.toString(), label: "Articles publiés" },
              { val: (categories.length - 1).toString(), label: "Catégories" },
              { val: "Mensuelle", label: "Fréquence de publication" },
            ].map((s) => (
              <div key={s.label}>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {s.val}
                </span>
                <span className="text-blue-300 text-xs block mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filtres catégories ── */}
      <div className="sticky top-[65px] z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCat === cat
                  ? "bg-[#1B4F8A] text-white shadow-sm"
                  : "bg-[#F5F8FD] text-[#5A6B80] hover:bg-gray-100 hover:text-[#1A2332]"
              }`}
            >
              {cat}
              {cat !== "Toutes" && (
                <span className={`ml-1.5 text-xs ${activeCat === cat ? "text-blue-200" : "text-gray-400"}`}>
                  {articles.filter((a) => a.categorie === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grille articles ── */}
      <section className="py-16 bg-[#F5F8FD]">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Aucun résultat
              </h3>
              <p className="text-[#5A6B80]">Aucune actualité ne correspond à votre recherche.</p>
              <button
                onClick={() => {
                  setSearch("")
                  setActiveCat("Toutes")
                }}
                className="mt-6 text-[#1B4F8A] font-semibold text-sm hover:underline"
              >
                Effacer les filtres
              </button>
            </div>
          ) : (
            <>
              {featured && (
                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                  <ArticleCard
                    featured
                    article={featured}
                    onClick={() => {
                      setSelectedArticle(featured)
                      window.scrollTo(0, 0)
                    }}
                  />
                  {rest.slice(0, 1).map((a) => (
                    <ArticleCard
                      key={a.id}
                      article={a}
                      onClick={() => {
                        setSelectedArticle(a)
                        window.scrollTo(0, 0)
                      }}
                    />
                  ))}
                </div>
              )}

              {rest.length > 1 && (
                <div className="flex items-center gap-4 my-8">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-xs text-[#5A6B80] font-semibold uppercase tracking-widest whitespace-nowrap">
                    {rest.length - 1} article{rest.length - 1 > 1 ? "s" : ""} supplémentaire
                    {rest.length - 1 > 1 ? "s" : ""}
                  </span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.slice(1).map((a) => (
                  <ArticleCard
                    key={a.id}
                    article={a}
                    onClick={() => {
                      setSelectedArticle(a)
                      window.scrollTo(0, 0)
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-16 bg-gradient-to-br from-[#1B4F8A] to-[#0D2744]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2E7D5A] mb-5 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Ne manquez aucune actualité
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed text-base">
            Abonnez-vous à la newsletter PSPSCI pour recevoir chaque mois les informations essentielles du secteur
            privé de la santé en Côte d'Ivoire.
          </p>
          <p className="text-blue-200 text-xs mt-4">
  Découvrez aussi nos <button
    onClick={() => { window.location.hash = "#evenements"; }}
    className="underline hover:text-white"
  >événements à venir</button>.
</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.ci"
              className="flex-1 rounded-lg px-4 py-3 text-sm border-2 border-transparent focus:outline-none focus:border-[#7DD3AC] text-[#1A2332] bg-white placeholder-gray-400"
            />
            <button className="bg-[#2E7D5A] hover:bg-[#245f45] text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap shadow-lg">
              S'abonner
            </button>
          </div>
          <p className="text-blue-200 text-xs mt-4">Aucun spam. Désabonnement en un clic.</p>
        </div>
      </section>

      {/* Barre latérale flottante + retour en haut */}
      <FloatingSidebar />
      <ScrollToTopButton />
    </div>
  )
}