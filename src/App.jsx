import { useCallback, useEffect, useRef, useState } from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import WorksSection from "./WorksSection";

const exampleHeroContent = {
  mark: "KDH",
  note: "본 페이지는 화면 해상도 1920 x 1080에 최적화되어 있습니다.",
  title: ["PORTFOLIO"],
  intro: "공정 데이터 분석과 머신러닝을 공부하며, 데이터를 통해 문제를 발견하고 개선하는 방법을 고민합니다.",
};

function App() {
  const [activePage, setActivePage] = useState(0);
  const isTransitioning = useRef(false);
  const touchStartY = useRef(null);

  const movePage = useCallback((direction) => {
    if (isTransitioning.current) return;

    setActivePage((currentPage) => {
      const nextPage = Math.min(Math.max(currentPage + direction, 0), 3);

      if (nextPage === currentPage) return currentPage;

      isTransitioning.current = true;
      window.setTimeout(() => {
        isTransitioning.current = false;
      }, 720);

      return nextPage;
    });
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 12) return;

      event.preventDefault();
      movePage(event.deltaY > 0 ? 1 : -1);
    };

    const handleKeyDown = (event) => {
      const forwardKeys = ["ArrowDown", "PageDown", " "];
      const backKeys = ["ArrowUp", "PageUp"];

      if (forwardKeys.includes(event.key)) {
        event.preventDefault();
        movePage(1);
      }

      if (backKeys.includes(event.key)) {
        event.preventDefault();
        movePage(-1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [movePage]);

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event) => {
    if (window.matchMedia("(max-width: 760px)").matches || (activePage === 2 && window.matchMedia("(max-width: 980px)").matches)) return;

    const touchEndY = event.changedTouches[0]?.clientY;

    if (touchStartY.current === null || touchEndY === undefined) return;

    const distance = touchStartY.current - touchEndY;
    touchStartY.current = null;

    if (Math.abs(distance) >= 56) movePage(distance > 0 ? 1 : -1);
  };

  return (
    <main
      className="portfolio-shell"
      aria-labelledby="page-title"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <header className="site-header" aria-label="Portfolio header">
        <a
          className="brand-mark"
          href="#home"
          aria-label="Go to portfolio home"
          onClick={(event) => {
            event.preventDefault();
            setActivePage(0);
          }}
        >
          {exampleHeroContent.mark}
        </a>
        <p className="screen-note">{exampleHeroContent.note}</p>
      </header>

      <div className="page-stage">
        <section
          id="home"
          className={`page-slide hero-page${activePage === 0 ? " is-active" : ""}`}
          aria-label="Portfolio introduction"
          aria-hidden={activePage !== 0}
        >
          <div className="hero-copy">
            <h1 id="page-title" className="hero-title">
              {exampleHeroContent.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="hero-intro">{exampleHeroContent.intro}</p>
          </div>
        </section>

        <div className={`page-slide about-slide${activePage === 1 ? " is-active" : ""}`} aria-hidden={activePage !== 1}>
          <AboutSection />
        </div>

        <div
          className={`page-slide works-slide${activePage === 2 ? " is-active" : ""}`}
          aria-hidden={activePage !== 2}
          onWheel={(event) => {
            if (!window.matchMedia("(max-width: 980px)").matches) return;

            const { clientHeight, scrollHeight, scrollTop } = event.currentTarget;
            const isAtTop = scrollTop <= 1;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
            const isMovingWithinPage = (event.deltaY < 0 && !isAtTop) || (event.deltaY > 0 && !isAtBottom);

            if (isMovingWithinPage) event.stopPropagation();
          }}
          onTouchStart={(event) => {
            if (window.matchMedia("(max-width: 980px)").matches) event.stopPropagation();
          }}
          onTouchEnd={(event) => {
            if (window.matchMedia("(max-width: 980px)").matches) event.stopPropagation();
          }}
        >
          <WorksSection />
        </div>

        <div className={`page-slide contact-slide${activePage === 3 ? " is-active" : ""}`} aria-hidden={activePage !== 3}>
          <ContactSection />
        </div>
      </div>

      <div className="page-indicator" aria-label={`Page ${activePage + 1} of 4`}>
        {[0, 1, 2, 3].map((page) => (
          <button
            key={page}
            type="button"
            className={activePage === page ? "is-active" : ""}
            aria-label={`Go to page ${page + 1}`}
            aria-pressed={activePage === page}
            onClick={() => setActivePage(page)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
