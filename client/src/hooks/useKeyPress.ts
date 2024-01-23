import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

interface KeyPressCallback {
  (event: KeyboardEvent): void;
}

interface Props {
  keys: string[];
  callback: KeyPressCallback;
  node?: HTMLElement | null;
  ctrl?: boolean;
}

export const useKeyPress = ({
  keys,
  callback,
  node = null,
  ctrl,
}: Props): void => {
  // implement the callback ref pattern
  const callbackRef = useRef<KeyPressCallback>(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  // handle what happens on key press
  const handleKeyPress = useCallback(
    (e: Event) => {
      const event = e as KeyboardEvent;
      if (ctrl) {
        if (
          (event.altKey === true || event.metaKey === true) &&
          keys.some((key) => event.key === key)
        ) {
          event.preventDefault();
          callbackRef.current(event);
        }
      } else {
        if (keys.some((key) => event.key === key)) {
          // event.preventDefault();
          callbackRef.current(event);
        }
      }
    },
    [keys]
  );

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode = node ?? document;
    // attach the event listener
    targetNode.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      targetNode.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, node]);
};
