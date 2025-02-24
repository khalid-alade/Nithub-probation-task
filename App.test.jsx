import { describe, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './src/components/Sidebar';
import Table from './src/components/Table';
import { ThemeContext } from './src/ThemeContext';
import Navbar from './src/components/Navbar';

describe("unit tests", () => {
  test('Sidebar', () => {
    render(<Sidebar />);
    expect(screen.getByText(/Logistics/i)).toBeDefined();
  });

  test('Shipment data table', () => {
    render(<ThemeContext.Provider value={{ theme: "light" }}>
      <Table />
    </ThemeContext.Provider>);
    expect(screen.getByTestId('spinner')).toBeDefined();
  });

  test('Theme toggle', () => {
    render(<ThemeContext.Provider value={{ theme: "light" }}>
      <Navbar />
    </ThemeContext.Provider>);
    expect(screen.getByTestId('theme-toggle')).toBeDefined();
    const toggleButton = screen.getByTestId('theme-toggle');
    fireEvent.click(toggleButton);
  });
});