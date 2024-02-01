import { useEffect } from 'react';

const useTrapFocus = (
  modalRef: React.RefObject<HTMLDivElement>,
  escCallbackFn?: () => void,
  deps: React.DependencyList = []
) => {
  useEffect(() => {
    const modalElement = modalRef.current;
    const focusableElements = modalElement?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableElements) {
      return;
    }
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        escCallbackFn?.();
      }
    };

    modalElement?.focus();
    modalElement?.addEventListener('keydown', handleTabKeyPress);
    modalElement?.addEventListener('keydown', handleEscKeyPress);

    return () => {
      modalElement?.removeEventListener('keydown', handleTabKeyPress);
      modalElement?.removeEventListener('keydown', handleEscKeyPress);
    };
  }, deps);
};

export default useTrapFocus;
