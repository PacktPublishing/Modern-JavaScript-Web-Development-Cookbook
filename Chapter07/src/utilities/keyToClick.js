export const keyToClick = fn => e =>
    (e.keyCode === 32 || e.keyCode === 13) && fn();
