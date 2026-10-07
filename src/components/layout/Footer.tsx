import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import { SITE, SOCIAL } from "../../utils/constants";
import { scrollToTop } from "../../utils/scroll";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { stagger, sectionViewport, easeOut } from "../../design/animations";

export function Footer() {
  const reduced = useReducedMotion();
  const container = reduced ? undefined : stagger(0.1, 0.05);

  const item = reduced
    ? undefined
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeOut },
        },
      };

  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <motion.div
          className="footer-top"
          variants={container}
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={sectionViewport}
        >
          <motion.div className="footer-brand" variants={item}>
            <span className="footer-brand-mark" aria-hidden="true" />
            <h2 className="footer-name">{SITE.name}</h2>
            <p className="footer-role">{SITE.role}</p>
            <p className="footer-tagline">
              Support IT · Systèmes · Réseaux · Infrastructure industrielle
            </p>
          </motion.div>

          <motion.div className="footer-contact" variants={item}>
            <span className="footer-eyebrow">Contact</span>

            <ul className="footer-list">
              <li>
                <a href={SITE.emailHref} className="footer-line">
                  <span className="footer-line-icon" aria-hidden="true">
                    <Mail size={14} strokeWidth={1.75} />
                  </span>
                  <span className="footer-line-label">Email</span>
                  <span className="footer-line-value">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="footer-line">
                  <span className="footer-line-icon" aria-hidden="true">
                    <Phone size={14} strokeWidth={1.75} />
                  </span>
                  <span className="footer-line-label">Téléphone</span>
                  <span className="footer-line-value">{SITE.phone}</span>
                </a>
              </li>
              <li>
                <span className="footer-line footer-line--static">
                  <span className="footer-line-icon" aria-hidden="true">
                    <MapPin size={14} strokeWidth={1.75} />
                  </span>
                  <span className="footer-line-label">Localisation</span>
                  <span className="footer-line-value">{SITE.location}</span>
                </span>
              </li>
              <li>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-line"
                >
                  <span className="footer-line-icon" aria-hidden="true">
                    <Linkedin size={14} strokeWidth={1.75} />
                  </span>
                  <span className="footer-line-label">LinkedIn</span>
                  <span className="footer-line-value">
                    Voir le profil
                    <ArrowUpRight size={12} strokeWidth={1.75} />
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {year} {SITE.name} — Tous droits réservés
          </span>

          <button
            type="button"
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Retour en haut de page"
          >
            Haut de page
            <ArrowUp size={14} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}