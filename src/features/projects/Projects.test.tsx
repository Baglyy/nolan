import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { projects } from '@/content';
import { filterProjects } from './filterProjects';
import { Projects } from './Projects';

describe('filterProjects', () => {
  it('renvoie tout pour « all »', () => {
    expect(filterProjects(projects, 'all')).toHaveLength(projects.length);
  });

  it('ne garde que la catégorie demandée', () => {
    expect(filterProjects(projects, 'java').every((p) => p.category === 'java')).toBe(true);
  });
});

describe('<Projects />', () => {
  it('filtre les cartes au clic', async () => {
    render(<Projects />);
    const grid = () => screen.getAllByRole('link').filter((a) => a.getAttribute('aria-label')?.includes('dépôt'));
    expect(grid()).toHaveLength(projects.length);

    const filters = screen.getByRole('group', { name: 'Filtrer les projets' });
    await userEvent.click(within(filters).getByRole('button', { name: 'Java' }));

    expect(grid()).toHaveLength(projects.filter((p) => p.category === 'java').length);
    expect(within(filters).getByRole('button', { name: 'Java' })).toHaveAttribute('aria-pressed', 'true');
  });
});
