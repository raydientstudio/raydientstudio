"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    FC
} from 'react';

type SettingsContextType = {
    isScrollbarDisabled: boolean;
    toggleScrollbar: () => void;
    isMaintenance: boolean;
    toggleMaintenance: () => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};

type SettingsProviderProps = {
    children: ReactNode;
};

const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {

    // Initialize scrollbar state from localStorage or default to true
    const [isScrollbarDisabled, setIsScrollbarDisabled] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('isScrollbarDisabled');
            return saved !== null ? JSON.parse(saved) : true;
        }
        return true;
    });

    const toggleScrollbar = () => {
        setIsScrollbarDisabled((prev: boolean) => {
            const newState = !prev;
            localStorage.setItem('isScrollbarDisabled', JSON.stringify(newState));
            return newState;
        });
    };

    // Initialize maintenance mode state from localStorage or default to false
    const [isMaintenance, setIsMaintenance] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('isMaintenance');
            return saved !== null ? JSON.parse(saved) : false;
        }
        return false;
    });

    const toggleMaintenance = () => {
        setIsMaintenance((prev: boolean) => {
            const newState = !prev;
            localStorage.setItem('isMaintenanceMode', JSON.stringify(newState));
            return newState;
        });
    };

    useEffect(() => {

        // Update the document class to hide or show the scrollbar based on the state
        const classList = document.documentElement.classList;
        isScrollbarDisabled ? classList.add('scrollbar-hidden') : classList.remove('scrollbar-hidden');

    }, [isScrollbarDisabled]);

    const value = {
        isScrollbarDisabled,
        toggleScrollbar,
        isMaintenance,
        toggleMaintenance
    };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

export { SettingsProvider, useSettings };