"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import { translations } from "@/lib/i18n";
import LanguageSwitcher from "@/components/switch/Switcher";
import logo from "@/public/images/logo.jpeg";

type NavbarProps = {
  locale: string;
};

/**
 * Hook para detectar si la pantalla es móvil (ancho menor a 768px)
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

/**
 * Componente Dropdown que mide dinámicamente su altura y aplica una transición
 * en la propiedad height. En móviles se muestra en el flujo (position: static) para
 * empujar el contenido hacia abajo.
 */
type DropdownProps = {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
};

const Dropdown = ({ isOpen, children, className }: DropdownProps) => {
  const contentRef = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  return (
    <ul
      ref={contentRef}
      className={className}
      style={{
        height: isOpen ? `${height}px` : "0px",
        overflow: "hidden",
        transition: "height 0.3s ease"
      }}
      role="menu"
    >
      {children}
    </ul>
  );
};

export default function Navbar({ locale }: NavbarProps) {
  const t = translations[locale as keyof typeof translations] || translations.es;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeDropdown = () => setOpenDropdown(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    closeDropdown();
  };

  // Cierra menú y dropdown si se hace click fuera del navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /**
   * Renderiza el dropdown. En móviles se usa el componente Dropdown para la
   * transición dinámica y flujo normal; en escritorio se renderiza condicionalmente
   * (apoyado en :hover).
   */
  const renderDropdown = (menu: string, items: React.ReactNode) => {
    if (isMobile) {
      return (
        <Dropdown
          isOpen={openDropdown === menu}
          className={styles.dropdown}
        >
          {items}
        </Dropdown>
      );
    }
    return openDropdown === menu && (
      <ul className={styles.dropdown} role="menu">
        {items}
      </ul>
    );
  };

  return (
    <nav className={styles.navbar} ref={navRef}>
      {/* Fila superior: Switcher, Logo y botón/hamburguesa o menú inline en escritorio */}
      <div className={styles.topRow}>
        <div className={styles.switcher}>
          <LanguageSwitcher locale={locale} />
        </div>
        <div className={styles.logoContainer}>
          <Link
            href={`/${locale}/landing`}
            onClick={() => {
              setMobileMenuOpen(false);
              closeDropdown();
            }}
          >
            <Image
              src={logo.src}
              alt="Logo Qori Wayra"
              width={90}
              height={90}
              quality={100}
              className={styles.logo}
              priority
            />
          </Link>
        </div>
        {isMobile ? (
          <button
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            ☰
          </button>
        ) : (
          <div className={styles.menu}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <button
                  onClick={() => toggleDropdown("machupicchu")}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "machupicchu"}
                >
                  {t.machuPicchuTour}
                </button>
                {renderDropdown(
                  "machupicchu",
                  <>
                    <li role="none">
                      <Link
                        href={`/${locale}/machupicchu/oneDay`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.machupicchuFullDay}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/machupicchu/twoDays`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.machupicchuByTrain}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/machupicchu/hidro`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.machupicchuByCar}
                      </Link>
                    </li>
                  </>
                )}
              </li>
              <li className={styles.navItem}>
                <button
                  onClick={() => toggleDropdown("oneday")}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "oneday"}
                >
                  {t.oneDayTour}
                </button>
                {renderDropdown(
                  "oneday",
                  <>
                    <li role="none">
                      <Link
                        href={`/${locale}/OneDay/valleVIP`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.sacredValleyVip}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/OneDay/valleTradicional`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.traditionalSacredValley}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/OneDay/7lagunas`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.sieteLagunas}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/OneDay/waqrapucara`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.waqraPucara}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/OneDay/perolniyoq`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.perolniyoq}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/OneDay/Humantay`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.lagunaHumantay}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/OneDay/7colores`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.montana7Colores}
                      </Link>
                    </li>
                  </>
                )}
              </li>
              
              <li className={styles.navItem}>
                <button
                  onClick={() => toggleDropdown("valle")}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "valle"}
                >
                  {t.partTimeTour}
                </button>
                {renderDropdown(
                  "valle",
                  <>
                    <li role="none">
                      <Link
                        href={`/${locale}/midDay/cityTour`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.cityTourCusco}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/midDay/maras`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.marasMoray}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/midDay/valleSur`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.sacredValleyLite}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/midDay/mistico`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.tourMistico}
                      </Link>
                    </li>
                  </>
                )}
              </li>
              {/*<li className={styles.navItem}>
                <button
                  onClick={() => toggleDropdown("inca")}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "inca"}
                >
                  {t.incaTrail}
                </button>
                {renderDropdown(
                  "inca",
                  <>
                    <li role="none">
                      <Link
                        href={`/${locale}/CaminoInca/Short`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.incaTrail2d}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/CaminoInca/Large`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.incaTrail4d}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/CaminoInca/Salkantay`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.salkantayTrek}
                      </Link>
                    </li>
                  </>
                )}
              </li>
              <li className={styles.navItem}>
                <button
                  onClick={() => toggleDropdown("bestPackages")}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "bestPackages"}
                >
                  {t.packages}
                </button>
                {renderDropdown(
                  "bestPackages",
                  <>
                    <li role="none">
                      <Link
                        href={t.wppMessage1}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.mapi_valle}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={t.wppMessage2}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        {t.mapi_city}
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href={`/${locale}/mostrarServicios`}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        Reservas
                      </Link>
                    </li>
                  </>
                )}
              </li>*/}
            </ul>
          </div>
        )}
      </div>

      {/* En móviles, el menú principal se despliega debajo de la fila superior */}
      {isMobile && mobileMenuOpen && (
        <div className={styles.menu}>
          <ul className={styles.navList}>
            
            {/* Tour de un día */}
            <li className={styles.navItem}>
              <button 
                onClick={() => toggleDropdown("oneday")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "oneday"}
                >
                {t.oneDayTour}
              </button>
              {renderDropdown(
			          "oneday",
                <>
                  <li role="none">
                    <Link
                      href={`/${locale}/valle-sagrado/valle-sagrado-vip`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
				              role="menuitem"	
                    >
                      {t.sacredValleyVip}
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href={`/${locale}/valle-sagrado/valle-sagrado-tradicional`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.traditionalSacredValley}
                    </Link>
                  </li>
                 
                  <li role="none">
                    <Link
                      href={`/${locale}/one-day/siete-lagunas`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.sieteLagunas}
                    </Link>
                  </li>
                 
                  <li role="none">
                    <Link
                      href={`/${locale}/one-day/waqrapukara`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.waqraPucara}
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href={`/${locale}/one-day/tour-palccoyo`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.perolniyoq}
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href={`/${locale}/One Day/Humantay`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.lagunaHumantay}
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href={`/${locale}/one-day/siete-colores`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.montana7Colores}
                    </Link>
                  </li>
                </>
              )}
            </li>

            {/* Part Time Tour */}
            <li className={styles.navItem}>
              <button 
                onClick={() => toggleDropdown("valle")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "valle"}
                >
                {t.partTimeTour}
              </button>
              {renderDropdown (
                "valle",
                <>
                  <li role="none">
                    <Link
                      href={`/${locale}/one-day/city-tour-cusco`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.cityTourCusco}
                    </Link>
                  </li>                  
                  <li role="none">
                    <Link
                      href={`/${locale}/valle-sagrado/maras-moray`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.marasMoray}
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href={`/${locale}/valle-sagrado/valle-sagrado-sur`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.sacredValleyLite}
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href={`/${locale}/one-day/tour-mistico`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.tourMistico}
                    </Link>
                  </li>
                </>
              )}
            </li>

            {/* Camino Inca (Penúltimo) */}
            <li className={styles.navItem}>
              <button 
                onClick={() => toggleDropdown("inca")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "inca"}
                >
                {t.incaTrail}
              </button>
              {renderDropdown (
                "inca",
                <>
                  <li role="none">
                    <Link
                      href={`/${locale}/CaminoInca/Short`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.incaTrail2d}
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href={`/${locale}/CaminoInca/Large`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.incaTrail4d}
                    </Link>
                  </li>
                  {/* Movemos Machu Picchu por Salkantay aquí */}
                  <li role="none">
                    <Link
                      href={`/${locale}/CaminoInca/Salkantay`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.salkantayTrek}
                    </Link>
                  </li>
                </>
              )}
            </li>

            {/* Paquetes Completos (Último) */}
            <li className={styles.navItem}>
              <button 
                onClick={() => toggleDropdown("bestPackages")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "bestPackages"}
                >
              {t.packages}
              </button>
              {renderDropdown (
                "bestPackages",
                <>
                  <li role="none">
                    <Link
                      href={t.wppMessage1}
                      target="_blank"
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.mapi_valle}
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href={t.wppMessage2}
                      target="_blank"
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {t.mapi_city}
                    </Link>
                  </li>
                  
                </>
              )}
              
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
