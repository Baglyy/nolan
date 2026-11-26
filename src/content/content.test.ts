import { career, navItems, profile, projects } from '@/content';

describe('contenu', () => {
  it('a des slugs de projets uniques', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('pointe chaque projet vers un dépôt GitHub de Baglyy', () => {
    for (const project of projects) expect(project.repoUrl).toMatch(/^https:\/\/github\.com\/Baglyy\//);
  });

  it('met en avant un seul projet', () => {
    expect(projects.filter((p) => p.featured)).toHaveLength(1);
  });

  it('garde les niveaux de langue entre 0 et 100', () => {
    for (const language of career.languages) {
      expect(language.percent).toBeGreaterThanOrEqual(0);
      expect(language.percent).toBeLessThanOrEqual(100);
    }
  });

  it('expose les moyens de contact', () => {
    expect(profile.email).toMatch(/@/);
    expect(profile.socials.linkedin.href).toContain('linkedin.com/in/');
    expect(navItems.filter((n) => n.cta)).toHaveLength(1);
  });
});
