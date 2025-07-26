import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImage = screen.getAllByAltText('Hero-Image');
    expect(heroImage[0]).toBeInTheDocument();
    expect(heroImage[0].getAttribute('src')).toContain('homeHero.png');
  });
});
