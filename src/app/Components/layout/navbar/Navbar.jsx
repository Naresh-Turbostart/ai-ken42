"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import routes from "@/app/utils/routes";
import { navSections } from "./data";

const renderItemList = (items, { nested = false, onLinkClick } = {}) => (
  <div className={`space-y-1 text-black text-sm ${nested ? "pl-3" : ""}`}>
    {items.map((item) => {
      const key = typeof item === "string" ? item : item.title;
      const hasLink = typeof item === "object" && Boolean(item.path);
      return (
        <div key={key} className="space-y-1">
          <div className="bg-white  px-4 py-2 font-semibold text-black border border-transparent transition-colors duration-150 hover:bg-gray-100 hover:border-gray-200">
            {hasLink ? (
              <Link
                href={item.path}
                className="block w-full text-left text-sm text-black"
                onClick={onLinkClick}
              >
                {item.title}
              </Link>
            ) : (
              <span className="block text-sm text-black">{item.title}</span>
            )}
          </div>
          {item.children &&
            renderItemList(item.children, {
              nested: true,
              onLinkClick,
            })}
        </div>
      );
    })}
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSection(null);
  }, [pathname]);

  const toggleSection = (section) => {
    if (!section.items?.length) {
      return;
    }
    setOpenSection((prev) => (prev === section.title ? null : section.title));
  };

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setOpenSection(null);
  };

  useEffect(() => {
    if (!openSection) {
      return;
    }

    const handleClickOutside = (event) => {
      if (navRef.current?.contains(event.target)) {
        return;
      }
      setOpenSection(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openSection]);

  return (
    <>
      <div className="py-2 fixed top-0 left-0 z-50 w-full  pr-4">
        <div className="section-width">
          <div className="flex items-center justify-center bg-white border border-black/10 rounded-[2rem] shadow-sm">
            <div className="w-full flex items-center justify-between gap-6 px-4 py-3">
              <Link href={routes.home} className="text-lg font-semibold text-black">
                Ken42
              </Link>

              <div
                ref={navRef}
                className="hidden xl:flex items-center flex-wrap gap-6 text-black"
              >
                {navSections.map((section) => (
                  <div key={section.title} className="relative">
                    {section.items?.length ? (
                      <>
                        <button
                          type="button"
                          className="flex items-center gap-1 text-sm font-semibold text-black"
                          onClick={() => toggleSection(section)}
                        >
                          {section.title}
                          <IoIosArrowDown
                            className={`h-3 w-3 transition-transform duration-200 ${openSection === section.title ? "rotate-180" : ""
                              }`}
                          />
                        </button>

                        <div
                          className={`absolute overflow-hidden top-full left-0 z-50 mt-3 w-56 rounded-md border border-black/10 bg-white  shadow-sm transition-opacity duration-200 ${
                            openSection === section.title ? "opacity-100" : "opacity-0 pointer-events-none"
                          }`}
                        >
                          {renderItemList(section.items, {
                            onLinkClick: () => setOpenSection(null),
                          })}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={section.path ?? routes.home}
                        className="text-sm font-semibold text-black"
                      >
                        {section.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="xl:hidden flex flex-col gap-1.5"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation"
              >
                <span className="block h-[2px] w-6 bg-black"></span>
                <span className="block h-[2px] w-6 bg-black"></span>
                <span className="block h-[2px] w-6 bg-black"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
            <Link href={routes.home} className="text-lg font-semibold text-black">
              Ken42
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="flex flex-col gap-1.5"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="block h-[2px] w-6 bg-black rotate-45 origin-center"></span>
              <span className="block h-[2px] w-6 bg-black -rotate-45 origin-center -translate-y-1.5"></span>
            </button>
          </div>
          <div className="space-y-8 z-5 px-6 py-6">
            {navSections.map((section) => (
              <div key={`mobile-${section.title}`}>
                  <p
                    className="text-lg font-semibold text-black"
                  >
                  {section.items?.length ? (
                    section.title
                  ) : (
                      <Link
                        href={section.path ?? routes.home}
                        onClick={handleMobileLinkClick}
                        className="text-lg font-semibold text-black"
                      >
                      {section.title}
                    </Link>
                  )}
                </p>
                {section.items?.length
                  ? renderItemList(section.items, {
                      onLinkClick: handleMobileLinkClick,
                    })
                  : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
