import React, { createContext, useContext, useEffect, useState } from 'react';

interface DARKMODE {
	children: JSX.Element;
}

export function DarkModeProvider({ children }: DARKMODE): JSX.Element {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		updateDarkMode(!darkMode);
	};

	useEffect(() => {
		const isDark =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
		setDarkMode(isDark);
		updateDarkMode(isDark);
	}, []);

	return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

function updateDarkMode(darkMode) {
	if (darkMode) {
		document.documentElement.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.theme = 'light';
	}
}

const DarkModeContext = createContext({});
export const useDarkMode = () => useContext(DarkModeContext);
