import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Home,
  CalendarDays,
  Newspaper,
  BookOpen,
  IdCard,
  ShoppingBag,
  MapPin,
  BarChart3,
} from "lucide-react";

const items = [
  { icon: Home, label: "Accueil", color: "#1B4F8A", path: "/accueil", page: "home" },
  { icon: CalendarDays, label: "Événements", color: "#2E7D5A", path: "/evenements", page: "evenements" },
  { icon: Newspaper, label: "Actualités", color: "#0891b2", path: "/actualites", page: "actualites" },
  { icon: BookOpen, label: "Formations", color: "#C9973A", path: "/formations", page: "formations" },
  { icon: IdCard, label: "Identité digitale", color: "#8b5cf6", path: "/identite-digitale", page: "identite-digitale" },
  { icon: ShoppingBag, label: "Marketplace", color: "#6366f1", path: "/marketplace", page: "marketplace" },
  { icon: MapPin, label: "Cartographie", color: "#14b8a6", path: "/cartographie", page: "cartographie" },
  { icon: BarChart3, label: "Statistiques", color: "#ec4899", path: "/statistiques", page: "statistiques" },
];

export default function FloatingSidebar() {
  const [hovered, setHovered] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const location = useLocation();

  const handleClick = (item: typeof items[0]) => {
    window.dispatchEvent(
      new CustomEvent("navigate-to-page", { detail: { page: item.page } })
    );
    if (item.page === "home") {
      window.location.hash = "";
    } else {
      window.location.hash = `#/${item.page}`;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isItemActive = (page: string) => {
    const hash = location.hash.replace(/^#\/?/, "");
    if (page === "home") return hash === "" || hash === "accueil";
    return hash === page;
  };

  return (
    <div
      className="fixed right-0 top-1/2 z-50 flex flex-col items-end"
      style={{ transform: "translateY(-50%)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActiveIdx(null);
      }}
    >
      <div
        className="flex flex-col gap-1 py-3 px-2 rounded-l-2xl"
        style={{
          background: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: hovered
            ? "-8px 0 40px rgba(30,58,138,0.18), 0 4px 24px rgba(30,58,138,0.10)"
            : "-4px 0 20px rgba(30,58,138,0.10)",
          transition: "box-shadow 0.35s ease",
          borderLeft: "1.5px solid rgba(37,99,235,0.10)",
          borderTop: "1.5px solid rgba(37,99,235,0.08)",
          borderBottom: "1.5px solid rgba(37,99,235,0.08)",
        }}
      >
        {items.map((item, i) => {
          const Icon = item.icon;
          const isActive = isItemActive(item.page);
          const isHov = activeIdx === i;

          return (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              className="group relative flex items-center gap-0 focus:outline-none"
              style={{
                height: 44,
                overflow: "hidden",
                borderRadius: 12,
                cursor: "pointer",
                border: "none",
                background: isActive
                  ? `${item.color}20`
                  : isHov
                  ? `${item.color}10`
                  : "transparent",
                width: hovered ? 180 : 44,
                transitionProperty: "width, background",
                transitionDuration: "0.35s",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 3,
                  height: isActive || isHov ? 24 : 0,
                  borderRadius: 2,
                  background: item.color,
                  transition: "height 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              />
              <span
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  color: isActive || isHov ? item.color : "#475569",
                  transition:
                    "color 0.2s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                  transform: isActive || isHov ? "scale(1.15)" : "scale(1)",
                }}
              >
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span
                className="text-sm font-semibold whitespace-nowrap pr-4"
                style={{
                  color: isActive || isHov ? item.color : "#1e293b",
                  opacity: hovered ? 1 : 0,
                  transform: hovered ? "translateX(0)" : "translateX(-6px)",
                  transition:
                    "opacity 0.28s ease, transform 0.28s ease, color 0.2s ease",
                  transitionDelay: hovered ? `${i * 35}ms` : "0ms",
                  pointerEvents: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}

        {!hovered && (
          <div
            className="mx-auto mt-1"
            style={{
              width: 20,
              height: 3,
              borderRadius: 2,
              background: "rgba(37,99,235,0.25)",
            }}
          />
        )}
      </div>
    </div>
  );
}