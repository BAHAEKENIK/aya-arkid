import { lazy, Suspense } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Preloader } from "./components/layout/Preloader";
import { SectionFallback } from "./components/ui/SectionFallback";
import { Hero } from "./sections/Hero";
import { useFirstVisit } from "./hooks/useFirstVisit";

const About = lazy(() =>
  import("./sections/About").then((m) => ({ default: m.About }))
);
const Experience = lazy(() =>
  import("./sections/Experience").then((m) => ({ default: m.Experience }))
);
const Skills = lazy(() =>
  import("./sections/Skills").then((m) => ({ default: m.Skills }))
);
const Certifications = lazy(() =>
  import("./sections/Certifications").then((m) => ({ default: m.Certifications }))
);
const HowIWork = lazy(() =>
  import("./sections/HowIWork").then((m) => ({ default: m.HowIWork }))
);
const Education = lazy(() =>
  import("./sections/Education").then((m) => ({ default: m.Education }))
);

export default function App() {
  const isFirstVisit = useFirstVisit();

  return (
    <>
      {isFirstVisit ? <Preloader /> : null}

      <a href="#main" className="skip-link">
        Aller au contenu
      </a>

      <Navbar />

      <main id="main" style={{ paddingTop: "72px" }}>
        <Hero />

        <Suspense fallback={<SectionFallback rows={3} />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback rows={3} />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionFallback rows={3} />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionFallback rows={2} />}>
          <Certifications />
        </Suspense>

        <Suspense fallback={<SectionFallback variant="dark" rows={1} />}>
          <HowIWork />
        </Suspense>

        <Suspense fallback={<SectionFallback rows={3} />}>
          <Education />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}