import Link from "next/link";
import styles from "./page.module.css";

export default function MinCvPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Min CV</h1>
        </header>

        {/* Informasjon */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Informasjon</h2>

          <div className={styles.infoGrid}>
            <div className={styles.infoLabel}>Navn</div>
            <div className={styles.infoValue}>Torje Gloppholm Sylta</div>

            <div className={styles.infoLabel}>Telefon</div>
            <div className={styles.infoValue}>+47 91 34 10 71</div>

            <div className={styles.infoLabel}>E-post</div>
            <div className={styles.infoValue}>torje@sklbb.no</div>

            <div className={styles.infoLabel}>Fødselsdato</div>
            <div className={styles.infoValue}>26.02.1999</div>
          </div>
        </section>

        {/* Utdanning */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Utdanning</h2>

          <div className={styles.sectionBody}>
            <div className={styles.entry}>
              <div className={styles.entryTopRow}>
                <span className={styles.entryTitle}>Høgskulen på Vestlandet, Bergen / Universitetet i Bergen</span>
                <span className={styles.entryPeriod}>August 2023 – Juni 2025</span>
              </div>
              <p className={styles.entrySubtitle}>Master i programvareutvikling - 2 år</p>

            </div>

            <div className={styles.entry}>
              <div className={styles.entryTopRow}>
                <span className={styles.entryTitle}>Høgskulen på Vestlandet, Bergen</span>
                <span className={styles.entryPeriod}>August 2019 – Juni 2023</span>
              </div>
              <p className={styles.entrySubtitle}>Bachelor i dataingeniør med spesialisering i programutvikling - 3 år</p>
              <p className={styles.entrySubtitle}>Realfagskurs - 1 år</p>
            </div>

            <div className={styles.entry}>
              <div className={styles.entryTopRow}>
                <span className={styles.entryTitle}>Toneheim</span>
                <span className={styles.entryPeriod}>August 2018 – Mai 2019</span>
              </div>
              <p className={styles.entrySubtitle}>Eufonium som hovedinstrument</p>
            </div>

            <div className={styles.entry}>
              <div className={styles.entryTopRow}>
                <span className={styles.entryTitle}>Stord VGS</span>
                <span className={styles.entryPeriod}>August 2015 – Juni 2018</span>
              </div>
              <p className={styles.entrySubtitle}>Musikk, dans og drama med musikk som hovedfag</p>

            </div>
          </div>
        </section>

        {/* Arbeidserfaring */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Jobberfaring</h2>

          <div className={styles.sectionBody}>
            <div className={styles.entry}>
              <div className={styles.entryTopRow}>
                <span className={styles.entryTitle}>Rema 1000 Fitjar</span>
                <span className={styles.entryPeriod}>Mai 2019 – August 2022</span>
              </div>
              <p className={styles.entrySubtitle}>Butikkmedarbeider</p>
              <p className={styles.entryText}>
                Hver sommerferie og annenhver helg i 2019/2020. Jobben gikk ut på å sitte i kassen, sette varer på plass og være låseansvarlig..
              </p>
            </div>
          </div>
        </section>

        {/* Verv */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Verv</h2>

          <div className={styles.sectionBody}>
            <div className={styles.entry}>
              <div className={styles.entryTopRow}>
                <span className={styles.entryTitle}>Styremedlem i Sandviken Janitsjar</span>
                <span className={styles.entryPeriod}>Februar 2024 – September 2025</span>
              </div>
            </div>
            <div className={styles.entry}>
              <div className={styles.entryTopRow}>
                <span className={styles.entryTitle}>Leder for Teknolikken, Studentkorpset ved Bergen Teknikersamfund</span>
                <span className={styles.entryPeriod}>Mars 2022 – September 2024</span>
              </div>
            </div>
            <div className={styles.entry}>
              <div className={styles.entryTopRow}>
                <span className={styles.entryTitle}>Styremedlem i Sagvåg musikklag</span>
                <span className={styles.entryPeriod}>Mai 2017 – August 2018</span>
              </div>
            </div>
          </div>
        </section>

        {/* Språk */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Språk</h2>

          <div className={styles.sectionBody}>
            <ul className={styles.list}>
              <li>Norsk — morsmål</li>
              <li>Engelsk — flytende skriftlig og muntlig</li>
            </ul>
          </div>
        </section>

        {/* Sertifikat */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sertifikat</h2>

          <div className={styles.sectionBody}>
            <p className={styles.entryText}>Førerkort klasse B</p>
          </div>
        </section>

        {/* Programmeringsspråk */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Programmeringserfaring</h2>

          <div className={styles.sectionBody}>
            <h3 className={styles.entrySmallTitle}>Mest erfaring</h3>
            <ul className={styles.list}>
              <li>Java</li>
              <li>Kotlin</li>
              <li>C#</li>
              <li>SQL</li>
            </ul>

            <h3 className={styles.entrySmallTitle}>Noe erfaring</h3>
            <ul className={styles.list}>
              <li>Python</li>
              <li>Swift</li>
              <li>JavaScript / TypeScript</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
        </section>

        {/* Fritidsinteresser */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fritidsinteresser</h2>

          <div className={styles.sectionBody}>
            <ul className={styles.list}>
              <li>Korps</li>
              <li>Musikk</li>
              <li>Fotball</li>
              <li>Gaming</li>
              <li>Lesing</li>
            </ul>

          </div>
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
