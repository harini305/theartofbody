"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";

function isActive(pathname, item) {
  if (item.href) return pathname === item.href;
  return item.children.some((c) => pathname === c.href);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  // Close everything on navigation.
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileSub(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Desktop dropdowns: close on outside click and Escape.
  useEffect(() => {
    if (openDropdown === null) return;
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        const btn = navRef.current?.querySelector(`[data-dropdown="${openDropdown}"]`);
        setOpenDropdown(null);
        btn?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDropdown]);

  // Mobile menu: lock scroll, Escape to close, keep focus inside.
  useEffect(() => {
    if (!menuOpen) return;
    const html = document.documentElement;
    html.classList.add("menu-open");
    panelRef.current?.querySelector("a, button")?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = [toggleRef.current, ...panelRef.current.querySelectorAll("a, button")];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 1100 && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      html.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}`}>
      <div className="site-header__inner">
        <Link prefetch={false} href="/" className="site-header__logo" aria-label={`${site.name} — home`}>
          <img src="/images/logo-teal-160.webp" width="160" height="160" alt="" />
          <span className="site-header__wordmark">The Art of Body</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main" ref={navRef}>
          <ul className="desktop-nav__list">
            {nav.map((item, i) =>
              item.href ? (
                <li key={item.label}>
                  <Link
                    prefetch={false}
                    href={item.href}
                    className="desktop-nav__link"
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li
                  key={item.label}
                  className="desktop-nav__group"
                  onPointerEnter={(e) => e.pointerType === "mouse" && setOpenDropdown(i)}
                  onPointerLeave={(e) => e.pointerType === "mouse" && setOpenDropdown((cur) => (cur === i ? null : cur))}
                >
                  <button
                    type="button"
                    className={`desktop-nav__link desktop-nav__trigger${isActive(pathname, item) ? " is-active" : ""}`}
                    aria-expanded={openDropdown === i}
                    aria-controls={`dropdown-${i}`}
                    data-dropdown={i}
                    onClick={(e) =>
                      // A mouse already opened it on hover; clicking keeps it open. Keyboard/touch toggle.
                      e.nativeEvent.pointerType === "mouse"
                        ? setOpenDropdown(i)
                        : setOpenDropdown((cur) => (cur === i ? null : i))
                    }
                  >
                    {item.label}
                    <svg aria-hidden="true" width="10" height="6" viewBox="0 0 10 6">
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </button>
                  <ul id={`dropdown-${i}`} className="dropdown" hidden={openDropdown !== i}>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link prefetch={false} href={c.href} aria-current={pathname === c.href ? "page" : undefined}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </nav>

        <Link prefetch={false} href="/book" className="btn btn--primary site-header__book">
          Book a session
        </Link>

        <button
          type="button"
          ref={toggleRef}
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="menu-toggle__bars" aria-hidden="true" />
          <span className="visually-hidden">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu on-dark" ref={panelRef} hidden={!menuOpen}>
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            <li>
              <Link prefetch={false} href="/" aria-current={pathname === "/" ? "page" : undefined}>
                Home
              </Link>
            </li>
            {nav.map((item, i) =>
              item.href ? (
                <li key={item.label}>
                  <Link prefetch={false} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.label}>
                  <button
                    type="button"
                    className="mobile-menu__toggle"
                    aria-expanded={mobileSub === i}
                    aria-controls={`mobile-sub-${i}`}
                    onClick={() => setMobileSub((cur) => (cur === i ? null : i))}
                  >
                    {item.label}
                    <span className="mobile-menu__plus" aria-hidden="true" />
                  </button>
                  <ul id={`mobile-sub-${i}`} className="mobile-menu__sub" hidden={mobileSub !== i}>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link prefetch={false} href={c.href} aria-current={pathname === c.href ? "page" : undefined}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <Link prefetch={false} href="/book" className="btn btn--light">
            Book a session
          </Link>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.emails.info}`}>{site.emails.info}</a>
        </div>
      </div>
    </header>
  );
}
