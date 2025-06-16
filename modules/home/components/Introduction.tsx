"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const Introduction = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">
        <h1>{t("intro")}</h1>
      </div>

      <div className="space-y-1 text-justify">
        <ul className="ml-5 flex list-disc flex-col gap-x-10 gap-y-2 text-neutral-700 dark:text-neutral-400">
          <li>{t("role")}</li>
          <li>{t("location")}</li>
          <li>{t("location_type")}</li>
        </ul>
        <p className="mt-6 pt-4 leading-loose text-neutral-600 dark:text-neutral-300">
          {isExpanded ? (
            t("resume")
          ) : (
            <>
              {(() => {
                const fullText = t("resume");
                const sliced = fullText.slice(0, 530); // batas karakter awal
                const lastSpaceIndex = sliced.lastIndexOf(" ");
                const visiblePart = sliced.slice(0, lastSpaceIndex);

                const lastWord = visiblePart.split(" ").pop() || "";
                const truncatedWord = lastWord.length > 1
                  ? lastWord.slice(0, lastWord.length - 1) + "..."
                  : lastWord + "...";

                const beforeLastWord = visiblePart.slice(0, -lastWord.length);

                return (
                  <>
                    {beforeLastWord}
                    <span className="">{truncatedWord}</span>
                  </>
                );
              })()}
            </>
          )}
        </p>
        <button
          onClick={toggleExpand}
          className="mt-2 text-sm font-semibold text-blue-500 hover:underline dark:text-blue-400"
        >
          {isExpanded
            ? locale === "en"
              ? "Read Less"
              : "Tampilkan Lebih Sedikit"
            : locale === "en"
            ? "Read More"
            : "Baca Selengkapnya"}
        </button>
      </div>
    </section>
  );
};

export default Introduction;
