import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { profile } from '@/content';
import { Contact } from './Contact';

describe('<Contact />', () => {
  it("copie l'adresse mail et affiche une confirmation", async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, 'writeText');
    render(<Contact />);

    await user.click(screen.getByRole('button', { name: "Copier l'adresse" }));

    expect(writeText).toHaveBeenCalledWith(profile.email);
    expect(await screen.findByText('Adresse copiée ✓')).toBeInTheDocument();
  });

  it('propose LinkedIn et GitHub', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', profile.socials.linkedin.href);
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', profile.socials.github.href);
  });
});
