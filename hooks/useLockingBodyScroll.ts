import { getScrollbarWidth, lockScrollbar, unlockScrollbar } from "@/libs/scroll";
import { useCallback, useMemo, useState } from "react";

export function useLockingBodyScroll() {
	const [isLocked, setLock] = useState(false);
	const scrollbarWidth = useMemo(getScrollbarWidth, []);

	const lock = useCallback((shouldLock: boolean) => {
		setLock(shouldLock);

		if (shouldLock) return lockScrollbar(scrollbarWidth);
		setTimeout(unlockScrollbar, 300);
	}, [scrollbarWidth]);

	return [isLocked, lock] as const;
}
