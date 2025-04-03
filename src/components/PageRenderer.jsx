import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import NotFound from "./NotFound"; // sizning NotFound komponentangiz

export default function PageRenderer({ pages, language, error }) {
  const content = useRef(null);
  const rootRef = useRef(null); // createRoot ni faqat bir marta yaratish uchun

  useEffect(() => {
    function decodeHtmlEntities(encodedStr) {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = encodedStr;
      return textarea.value;
    }

    const pageContent = pages?.contents?.[language]?.content;

    if (!error && pageContent) {
      const decodedHtml = decodeHtmlEntities(pageContent);
      
      // Agar ilgari React root ishlatilgan bo‘lsa, uni tozalash:
      if (rootRef.current) {
        rootRef.current.unmount();
        rootRef.current = null;
      }

      content.current.innerHTML = decodedHtml;
    } else {
      // createRoot faqat bir marta ishlatiladi
      if (!rootRef.current) {
        rootRef.current = createRoot(content.current);
      }

      rootRef.current.render(<NotFound />);
    }
  }, [pages, language, error]);

  return <div ref={content} />;
}
