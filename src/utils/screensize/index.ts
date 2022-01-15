import React, { useLayoutEffect, useState, useEffect } from "react";

// Responsive device screen size (width, height)
export default function ScreenSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

export const useLocalStorage = <S>(
	key: string,
	defaultValue: S
): [any, React.Dispatch<any>] => {
	const stored = localStorage.getItem(key);
	const initial = stored
		? typeof stored === "object"
			? (JSON.parse(stored) as S)
			: (stored as unknown as S)
		: defaultValue;
	const [value, setValue] = useState<S>(initial);

	useEffect(() => {
		typeof value === "object"
			? localStorage.setItem(key, JSON.stringify(value))
			: localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
