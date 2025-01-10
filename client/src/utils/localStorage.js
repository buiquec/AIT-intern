export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (error) {
        console.error('Could not save state to localStorage:', error);
    }
};

export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.error('Could not load state from localStorage:', error);
        return undefined;
    }
};