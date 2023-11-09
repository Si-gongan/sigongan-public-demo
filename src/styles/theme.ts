import { Theme } from '@emotion/react';

export const themeLight: Theme = {
  color: {
    text: '#000',
    background: '#fff',
    primary: 'var(--color-gray-700)',
    secondary: 'var(--color-gray-600)',
    border: 'var(--color-gray-100)',
    muted: 'var(--color-gray-200)',
  },
  lineChart: {
    primary: 'var(--color-gray-300)',
    secondary: 'var(--color-gray-200)',
    primaryBlue: 'var(--color-blue-500)',
    secondaryBlue: 'var(--color-blue-300)',
    dotStroke: '#fff',
  },
  searchBar: {
    background: '#fff',
  },
  mainBtn: {
    background: '#000',
    content: '#fff',
  },
  subBtn: {
    background: '#fff',
    content: 'var(--color-gray-700)',
    border: 'var(--color-gray-100)',
  },
  clearBtn: {
    background: 'var(--color-gray-200)',
    color: '#fff',
  },
  card: {
    background: '#fff',
    color: 'var(--color-gray-700)',
  },
};

export const themeDark: Theme = {
  color: {
    text: 'var(--color-gray-100)',
    background: 'var(--color-gray-900)',
    primary: 'var(--color-gray-200)',
    secondary: 'var(--color-gray-400)',
    border: 'var(--color-gray-700)',
    muted: 'var(--color-gray-600)',
  },
  lineChart: {
    primary: 'var(--color-gray-600)',
    secondary: 'var(--color-gray-700)',
    primaryBlue: 'var(--color-blue-500)',
    secondaryBlue: 'var(--color-blue-600)',
    dotStroke: 'var(--color-gray-900)',
  },
  searchBar: {
    background: 'var(--color-gray-700)',
  },
  mainBtn: {
    background: 'var(--color-gray-700)',
    content: 'var(--color-gray-100)',
  },
  subBtn: {
    background: 'var(--color-gray-800)',
    content: 'var(--color-gray-100)',
    border: 'var(--color-gray-800)',
  },
  clearBtn: {
    background: 'var(--color-gray-500)',
    color: 'var(--color-gray-800)',
  },
  card: {
    background: 'var(--color-gray-800)',
    color: 'var(--color-gray-100)',
  },
};
