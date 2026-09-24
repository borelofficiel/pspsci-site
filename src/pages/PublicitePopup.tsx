import { useEffect, useState, useCallback, useRef } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";

interface PublicitePopupProps {
  /** Délai avant la PREMIÈRE apparition (en ms) — par défaut 1000ms */
  delay?: number;
  /** Durée d'affichage (en ms) — par défaut 15000ms = 15s */
  duration?: number;
  /** Intervalle entre deux apparitions (en ms) — par défaut 600000ms = 10 minutes */
  interval?: number;
  /** Titre principal */
  title?: string;
  /** Description */
  description?: string;
  /** Texte du bouton CTA */
  ctaLabel?: string;
  /** URL de destination du CTA */
  ctaUrl?: string;
  /** Image (optionnel) */
  image?: string;
}

export default function PublicitePopup({
  delay = 1000,
  duration = 15000,
  interval = 10 * 60 * 1000, // ⏱️ 10 minutes
  title = "Rejoignez la PSPSCI",
  description = "Adhérez dès aujourd'hui et bénéficiez de tous les avantages de la plateforme du secteur privé de la santé.",
  ctaLabel = "En savoir plus",
  ctaUrl = "/paiement",
  image,
}: PublicitePopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Référence pour stocker les timers et les nettoyer proprement
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ─── Fonction de fermeture avec animation ───
  const handleClose = useCallback(() => {
    setIsSlidingOut(true);
    setIsVisible(false);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setShouldRender(false), 500);
  }, []);

  // ─── Fonction pour afficher la popup ───
  const showPopup = useCallback(() => {
    setShouldRender(true);
    // Petit délai pour laisser le montage se faire puis déclencher l'anim
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  // ─── Cycle : apparition → auto-fermeture → répétition toutes les `interval` ───
  useEffect(() => {
    // 1️⃣ Première apparition après `delay`
    const initialTimer = setTimeout(() => {
      showPopup();
    }, delay);

    // 2️⃣ Puis répétition toutes les `interval` ms (10 min)
    const intervalTimer = setInterval(() => {
      // Ne pas ré-afficher si elle est déjà visible
      setIsVisible((currentlyVisible) => {
        if (!currentlyVisible) {
          showPopup();
        }
        return currentlyVisible;
      });
    }, interval);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [delay, interval, showPopup]);

  // ─── Auto-fermeture après `duration` ───
  useEffect(() => {
    if (!isVisible) return;

    timerRef.current = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isVisible, duration, handleClose]);

  if (!shouldRender) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden={!isVisible}
    >
      {/* Overlay sombre léger (optionnel) */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-auto"
        style={{
          opacity: isVisible && !isSlidingOut ? 1 : 0,
        }}
        onClick={handleClose}
      />

      {/* Fenêtre publicitaire */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-auto"
        style={{
          transform: isVisible && !isSlidingOut
            ? "translateX(0) translateY(-50%)"
            : "translateX(-120%) translateY(-50%)",
          transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
          maxWidth: "440px",
          width: "calc(100% - 2rem)",
        }}
      >
        <div className="relative bg-white rounded-r-3xl shadow-2xl overflow-hidden border-l-4 border-[#2E7D5A]">
          {/* Barre de progression */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100">
            <div
              className="h-full bg-gradient-to-r from-[#2E7D5A] to-[#7DD3AC]"
              style={{
                animation: isVisible && !isSlidingOut
                  ? `progress ${duration}ms linear forwards`
                  : "none",
              }}
            />
          </div>

          {/* Bouton fermer */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-gray-100 flex items-center justify-center shadow-md transition-all hover:scale-110"
            aria-label="Fermer la publicité"
          >
            <X className="w-4 h-4 text-gray-700" />
          </button>

          {/* Image (optionnelle) */}
          {image && (
            <div className="h-40 overflow-hidden bg-gray-100">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Contenu */}
          <div className="p-6 sm:p-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#2E7D5A]/10 text-[#2E7D5A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Offre spéciale
            </div>

            {/* Titre */}
            <h3
              className="text-xl sm:text-2xl font-bold text-[#1A2332] mb-2 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              {description}
            </p>

            {/* CTA */}
            <a
              href={ctaUrl}
              onClick={handleClose}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2E7D5A] to-[#245F45] hover:from-[#245F45] hover:to-[#1d4d38] text-white font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-lg shadow-[#2E7D5A]/25 hover:shadow-[#2E7D5A]/40 group"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Petite mention */}
            <p className="text-[0.7rem] text-gray-400 mt-4">
              Fermeture automatique dans quelques secondes...
            </p>
          </div>
        </div>
      </div>

      {/* Animation keyframes injectées */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}