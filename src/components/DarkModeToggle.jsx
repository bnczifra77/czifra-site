import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    // On mount, check localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setDark(true);
    else if (saved === 'light') setDark(false);
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setDark(true);
  }, []);

  return (
    <button
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed right-4 bottom-4 z-[9999] bg-white dark:bg-[#0a1627] border-2 border-blue-500 dark:border-blue-300 shadow-lg rounded-full p-4 md:p-3 flex items-center justify-center transition-colors hover:bg-blue-50 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={() => setDark((d) => !d)}
      style={{
        boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
        right: 'max(1rem, env(safe-area-inset-right))',
        bottom: 'max(1.5rem, env(safe-area-inset-bottom))',
      }}
    >
      {dark ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-6 md:w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 4.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-6 md:w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
      )}
    </button>
  );
} 