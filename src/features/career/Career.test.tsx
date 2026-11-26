import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Career } from './Career';

describe('<Career />', () => {
  it('bascule entre formation et expériences', async () => {
    render(<Career />);
    expect(screen.getByText('BUT Informatique')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: /Expériences/ }));
    expect(screen.getByText(/Super U/)).toBeInTheDocument();
    expect(screen.queryByText('BUT Informatique')).not.toBeInTheDocument();
  });

  it('ouvre et ferme le CV avec Échap', async () => {
    render(<Career />);
    await userEvent.click(screen.getByRole('button', { name: 'Afficher' }));
    expect(screen.getByRole('dialog', { name: /CV de/ })).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
