import { About } from '@/features/about';
import { Career } from '@/features/career';
import { Contact } from '@/features/contact';
import { Hero } from '@/features/hero';
import { Footer, Navbar, ScrollProgress } from '@/features/layout';
import { TechMarquee } from '@/features/marquee';
import { Projects } from '@/features/projects';
import { Stats } from '@/features/stats';
import { useScroll } from '@/shared/hooks';

/** Assemble la page : l'ordre des sections se lit ici, de haut en bas. */
export function App() {
  const { y, progress } = useScroll();

  return (
    <>
      <ScrollProgress progress={progress} />
      <Navbar scrolled={y > 20} />
      <main id="top">
        <Hero />
        <Stats />
        <TechMarquee />
        <About />
        <Projects />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
