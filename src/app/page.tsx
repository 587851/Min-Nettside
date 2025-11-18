'use client';

import { useState } from 'react';
import ReactiveButton from 'reactive-button';
import styles from './page.module.css';

export default function Home() {
  const [buttonStates, setButtonStates] = useState<{ [key: string]: string }>({});

  const openSite = (key: string, url: string) => {
    setButtonStates((prev) => ({ ...prev, [key]: 'loading' }));

    setTimeout(() => {
      setButtonStates((prev) => ({ ...prev, [key]: 'success' }));

      const isExternal = url.startsWith("http");
      window.open(url, isExternal ? "_blank" : "_self");
    }, 100);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.intro}>
          <h1 className="fade-title">Torje Gloppholm Sylta</h1>

          <div className="ctas">

            {/* Button 1 — Om meg */}
            <div className="cta-wrapper">
              <ReactiveButton
                buttonState={buttonStates.omMeg || 'idle'}
                onClick={() => openSite('omMeg', '/om-meg')}
                idleText="Om meg"
                loadingText="Åpner…"
                successText="Ferdig!"
                color="red"
                size="large"
                rounded
                shadow
                width="100%"
              />
            </div>

            {/* Button 2 — Min CV */}
            <div className="cta-wrapper">
              <ReactiveButton
                buttonState={buttonStates.minCv || 'idle'}
                onClick={() => openSite('minCv', '/min-cv')}
                idleText="Min CV"
                loadingText="Åpner…"
                successText="Ferdig!"
                color="yellow"
                size="large"
                rounded
                shadow
                width="100%"
              />
            </div>

            {/* Button 3 — GitHub */}
            <div className="cta-wrapper">
              <ReactiveButton
                buttonState={buttonStates.github || 'idle'}
                onClick={() => openSite('github', 'https://github.com/587851')}
                idleText="GitHub"
                loadingText="Åpner…"
                successText="Ferdig!"
                color="green"
                size="large"
                rounded
                shadow
                width="100%"
              />
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
