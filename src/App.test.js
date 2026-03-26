import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza la barra de navegación', () => {
  render(<App />);
  expect(screen.getByText('Portafolio')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Perfil' })).toBeInTheDocument();
});
