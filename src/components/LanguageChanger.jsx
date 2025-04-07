import { ArrowBigDown } from "lucide-react";
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa6";

const languages = [
  {
    id: "uz",
    name: "O‘zbekcha",
    icon: "/assets/uz.png",
  },
  {
    id: "en",
    name: "English",
    icon: "/assets/gb.png",
  },
  {
    id: "ru",
    name: "Русский",
    icon: "/assets/ru.png",
  },
];

export default function LanguageChanger() {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(
    languages.filter((lang) => lang == language)[0] || languages[0]
  );
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  // Tashqariga bosilsa yopish
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    console.log(lang);
    setSelectedLang(lang);
    changeLanguage(lang.id);
    setOpen(false);
  };

  return (
    <div className="w-44  max-w-sm  mx-auto" ref={selectRef}>
      <div className="bg-amber-500 px-2 rounded-2xl">
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="relative py-3 ps-4 pe-9 w-full border text-white   border-gray-200 rounded-lg text-start text-sm flex items-center gap-x-2 cursor-pointer"
        >
          <img
            src={selectedLang.icon}
            alt={selectedLang.name}
            className="size-4 rounded-sm"
          />
          {selectedLang.name}
          <span className="absolute top-1/2 end-3 -translate-y-1/2">
            <FaAngleDown size={16} />
          </span>
        </button>
      </div>

      {open && (
        <div className="absolute mt-2 z-50 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {languages.map((lang) => (
            <div
              key={lang.id}
              onClick={() => handleSelect(lang)}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedLang.id === lang.id
                  ? "bg-gray-100 font-semibold text-blue-600"
                  : ""
              }`}
            >
              <img
                src={lang.icon}
                alt={lang.name}
                className="size-4 rounded-sm"
              />
              <span>{lang.name}</span>
              {selectedLang.id === lang.id && (
                <svg
                  className="ms-auto size-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
