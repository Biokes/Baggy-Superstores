import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '@/components/homePage/navbar';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));


describe('Navbar Component', () => {
  it('renders the Navbar with correct text', () => {
    render(<Navbar props={0} />);
    expect(screen.getByText(/Handmade Bags/i)).toBeInTheDocument();
    const homeLink = screen.getByText('Home');
    const contactLink = screen.getByText('Contact');
    expect(homeLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('toggles the slider menu on hamburger click', () => {
    render(<Navbar props={0} />);
    const hamburger = screen.getByRole('button');
    fireEvent.click(hamburger);
    const homeText = screen.getAllByText(/Home/i);
    expect(homeText[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Contact/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/About us/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/New/i)[0]).toBeInTheDocument();
  });

  it('opens and closes the cart modal on cart icon click', () => {
    render(<Navbar props={0} />);
    const cartIcon = screen.getByTestId('cart-icon');
    fireEvent.click(cartIcon);
    expect(screen.getByText(/Close/i)).toBeInTheDocument();
    const closeButton = screen.getByText(/Close/i);
    fireEvent.click(closeButton);
    expect(screen.queryByText(/Close/i)).not.toBeInTheDocument();
  });

  it('navigates to the correct page on menu item click', () => {
    const { push } = useRouter();
    render(<Navbar props={0} />);
    const aboutLink = screen.getByText('About us');
    fireEvent.click(aboutLink);
    expect(push).toHaveBeenCalledWith('/about');
  });
});
