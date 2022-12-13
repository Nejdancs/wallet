const { useLayoutEffect } = require('react');

function useLockBodyScroll() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalPaddingRight = window.getComputedStyle(
      document.body
    ).paddingRight;

    const root = document.getElementById('root'); // or root
    const scrollBarWidth = root ? window.innerWidth - root.offsetWidth : 0;

    document.body.style.overflow = 'hidden';

    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.dataset.scrollLock = 'true';
    }
    return () => {
      document.body.style.overflow = originalStyle;

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
        delete document.body.dataset.scrollLock;
      }
    };
  }, []);
}

export default useLockBodyScroll;
