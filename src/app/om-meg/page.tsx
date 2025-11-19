'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

type SectionId = 'starten' | 'ungdomsaarene' | 'voksenlivet';

interface Section {
  id: SectionId;
  title: string;
  summary: string;
  body: string[];
}

const sections: Section[] = [
  {
    id: 'starten',
    title: 'Starten',
    summary: 'Barndom, oppvekst og de første interessene.',
    body: [
      ' tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst',
      'tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst' ,
      'tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst',
      'tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst',
      'tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst',
      'tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst'
    ],
  },
  {
    id: 'ungdomsaarene',
    title: 'Ungdomsårene',
    summary: 'Valg, erfaringer og retning videre.',
    body: [
      ' tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst',
      'tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst' ,
    ],
  },
  {
    id: 'voksenlivet',
    title: 'Voksenlivet',
    summary: 'Studier og livet alene',
    body: [
      ' tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst',
      'tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst' ,
    ],
  },
];

export default function OmMegPage() {
  const [openSection, setOpenSection] = useState<SectionId | null>(null);

  const toggleSection = (id: SectionId) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Om meg</h1>
          <p className={styles.subtitle}>
            En liten oversikt over livet mitt, delt inn i kapitler du kan bla i.
          </p>
        </header>

        <section className={styles.sectionList}>
          {sections.map((section) => {
            const isOpen = openSection === section.id;

            return (
              <article
                key={section.id}
                className={`${styles.section} ${isOpen ? styles.sectionOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.sectionHeader}
                  onClick={() => toggleSection(section.id)}
                >
                  <div className={styles.sectionHeaderText}>
                    <h2>{section.title}</h2>
                    <p className={styles.sectionSummary}>{section.summary}</p>
                  </div>
                  <span className={styles.sectionIcon}>
                    {isOpen ? '–' : '+'}
                  </span>
                </button>

                <div
                  className={`${styles.sectionBody} ${isOpen ? styles.sectionBodyOpen : styles.sectionBodyClosed
                    }`}
                >
                  <div className={styles.sectionText}>
                    {section.body.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <div className={styles.sectionMedia}>
                    <div className={styles.mediaPlaceholder}>
                      Bilder....
                    </div>
                  </div>
                </div>

              </article>
            );
          })}
        </section>

        <footer className={styles.footer}>
          <Link href="/" className={styles.backLink}>
            ← Tilbake til forsiden
          </Link>
        </footer>
      </main>
    </div>
  );
}
