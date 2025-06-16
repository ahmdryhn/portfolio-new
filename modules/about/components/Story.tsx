"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const Story = () => {
  const t = useTranslations("AboutPage");
  const locale = useLocale();
  const [isExpanded, setIsExpanded] = useState(false);

  const paragrafData = [
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
    { index: 5 },
  ];

  const paragraphs = paragrafData.map((p) => t(`resume.paragraf_${p.index}`));

  // Total karakter untuk batas collapsed
  const collapsedCharLimit = 995;

  // Hitung batas paragraf berdasarkan jumlah karakter total
  const collapsedParagraphs = () => {
    let totalChars = 0;
    const limitedParagraphs: string[] = [];

    for (const paragraph of paragraphs) {
      if (totalChars + paragraph.length <= collapsedCharLimit) {
        limitedParagraphs.push(paragraph);
        totalChars += paragraph.length;
      } else {
        const remainingChars = collapsedCharLimit - totalChars;
        const truncated = paragraph.slice(0, remainingChars);
        const lastSpace = truncated.lastIndexOf(" ");
        const visiblePart = truncated.slice(0, lastSpace);
        const words = visiblePart.split(" ");
        const lastWord = words.pop() || "";
        const truncatedWord =
          lastWord.length > 3
            ? lastWord.slice(0, lastWord.length - 3) + "..."
            : lastWord + "...";

        limitedParagraphs.push(`${words.join(" ")} ${truncatedWord}`);
        break; // stop looping setelah mencapai batas
      }
    }

    return limitedParagraphs;
  };

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <section className="space-y-1 leading-loose text-neutral-800 dark:text-neutral-300 text-justify">
      {(isExpanded ? paragraphs : collapsedParagraphs()).map((text, idx) => (
        <p className="pt-2" key={idx}>{text}</p>
      ))}

      <button
        onClick={toggleExpand}
        className="text-sm font-semibold text-blue-600 hover:underline"
      >
        {isExpanded
          ? locale === "en"
            ? "Show Less"
            : "Tampilkan Lebih Sedikit"
          : locale === "en"
          ? "Read More"
          : "Baca Selengkapnya"}
      </button>
    </section>
  );
};

export default Story;
