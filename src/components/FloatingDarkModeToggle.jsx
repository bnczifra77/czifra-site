export default function FloatingDarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed bottom-4 right-4 z-[9999] shadow-none w-14 h-14 aspect-square flex items-center justify-center transition-all duration-200 hover:bg-blue-50/40 dark:hover:bg-gray-800/40 outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 safe-area-bottom safe-area-right hover-lift"
      onClick={toggleDarkMode}
      style={{ background: 'transparent', WebkitTapHighlightColor: 'transparent' }}
      tabIndex={0}
    >
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="block mx-auto my-auto w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 4.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="block mx-auto my-auto w-7 h-7 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
} 