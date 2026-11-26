import { useCallback, useState } from 'react';
import { career, profile, SECTION_IDS, type TimelineEntry } from '@/content';
import { useInView } from '@/shared/hooks';
import { cx } from '@/shared/lib/cx';
import { Reveal, Section, SectionHeading } from '@/shared/ui';
import styles from './Career.module.css';
import { CvDownloadCard } from './CvDownloadCard';
import { CvModal } from './CvModal';
import { HobbiesCard } from './HobbiesCard';
import { LanguagesCard } from './LanguagesCard';
import { Timeline } from './Timeline';

type TabId = 'education' | 'experience';

const TABS: ReadonlyArray<{ id: TabId; label: string; entries: readonly TimelineEntry[] }> = [
  { id: 'education', label: '🎓 Formation', entries: career.education },
  { id: 'experience', label: '💼 Expériences', entries: career.experience },
];

export function Career() {
  const [tab, setTab] = useState<TabId>('education');
  const [cvOpen, setCvOpen] = useState(false);
  const closeCv = useCallback(() => setCvOpen(false), []);
  const [layoutRef, layoutInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const current = TABS.find((t) => t.id === tab) ?? TABS[0]!;

  return (
    <Section id={SECTION_IDS.career}>
      <SectionHeading kicker="Parcours">
        Mon <em>CV</em> en bref
      </SectionHeading>

      <Reveal>
        <div className={styles.tabs} role="tablist" aria-label="Parcours">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              id={`tab-${id}`}
              type="button"
              role="tab"
              aria-selected={tab === id}
              aria-controls={`panel-${id}`}
              className={cx(styles.tab, tab === id && styles.tabActive)}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </Reveal>

      <div ref={layoutRef} className={styles.layout}>
        {/* `key` remonte le panneau : animation d'entrée + ligne qui se remplit à nouveau. */}
        <div key={current.id} id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} className={styles.panel}>
          <Timeline entries={current.entries} animate={layoutInView} />
        </div>

        <aside className={styles.aside}>
          <CvDownloadCard cvUrl={profile.cvUrl} onOpen={() => setCvOpen(true)} />
          <LanguagesCard languages={career.languages} />
          <HobbiesCard hobbies={career.hobbies} />
        </aside>
      </div>

      <CvModal open={cvOpen} onClose={closeCv} cvUrl={profile.cvUrl} ownerName={profile.fullName} />
    </Section>
  );
}
