'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

type SectionId = 'starten' | 'ungdomsaarene' | 'studielivet';

interface Section {
  id: SectionId;
  title: string;
  summary: string;
  body: string[];
  image?: string;
}

const sections: Section[] = [
  {
    id: 'starten',
    title: 'Starten',
    summary: 'Barndom, oppvekst og de første interessene.',
    body: [
      'Jeg ble født på Stord Sykehus 26.02.1999 og vokste opp sammen med foreldrene mine og en eldre bro på Stord. Barndommen min var preget av mange ulike aktiviteter og interesser. Jeg har holdt på med både på piano, gitar, speideren og fotball, men det var korpset som virkelig ble en viktig del av livet mitt. Jeg begynte på kornett, gikk videre til baryton og deretter euphonium, som jeg fortsatt spiller i dag.',

      'På skolen hadde jeg alltid en preferanse for realfag og musikk. Fag som norsk og engelsk syntes jeg ofte var mindre motiverende, mens struktur, tall og logikk var noe som passet meg mye bedre.'
    ],
    image: '/images/start.png'
  },
  {
    id: 'ungdomsaarene',
    title: 'Ungdomsårene',
    summary: 'Valg, erfaringer og retning videre.',
    body: [
      "Etter ungdomsskolen begynte jeg på musikklinja ved Stord VGS, hvor jeg hadde euphonium som hovedinstrument. Der trivdes jeg godt, både faglig og sosialt, og jeg fikk mange gode venner som jeg fortsatt har kontakt med i dag. Etter videregående ønsket jeg å fordype meg enda mer i musikken, og jeg tok derfor et år på Toneheim folkehøgskole, en folkehøgskole for klassisk og jazz musikk.",

      "Året på Toneheim ga meg mye øvingstid, nye erfaringer og et enda sterkere forhold til musikken. Målet mitt gjennom dette året var å bestå opptaksprøve til musikkstudier, og jeg klarte opptaket til musikkonservatoriet i Tromsø. Av ulike grunner valgte jeg til slutt gå videre med musikkutdanningen, men heller bare beholde det som en hobby."
    ],
    image: '/images/ungdomsaarene.png'
  },

  {
    id: 'studielivet',
    title: 'Studielivet',
    summary: 'Livet under studiene',
    body: [
      "Siden ungdomsskolen hadde jeg alltid sett for meg at dataingeniør/utvikler kunne være et yrke som passet meg. Kombinasjonen av interesse for realfag, problemløsning og det å jobbe på PC gjorde det til en naturlig retning for meg. Siden jeg gikk musikklinja på videregående fikk jeg ikke tatt R-matte og fysikk, så jeg startet med et år på 50 % realfagskurs for å ta opp disse fagene. Etterpå begynte jeg på bachelor i dataingeniør ved HVL i Bergen, og fortsatte deretter med en master i programvareutvikling gjennom et samarbeidstudie mellom HVL og UiB.",

      "Under studietiden var jeg aktiv i studentkorpset Teknolikken, hvor jeg var både leder i to år og musikalsk leder i ett år. Jeg fikk også verdifull arbeidserfaring ved siden av studiene. Fra 2019 til 2022 jobbet jeg hver sommer på Rema 1000 på Fitjar, og i perioden med 50 % realfagskurs jobbet jeg også annenhver helg. Gjennom studiene, musikken og jobbe fikk jeg både faglig utvikling, ansvar og et sosialt miljø jeg trivdes svært godt i."
    ],
    image: 'images/voksen.png'
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
                    {section.image ? (
                      <img
                        src={section.image}
                        alt={section.title}
                        className={styles.sectionImage}
                      />
                    ) : (
                      <div className={styles.mediaPlaceholder}>
                        Ingen bilde
                      </div>
                    )}
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
