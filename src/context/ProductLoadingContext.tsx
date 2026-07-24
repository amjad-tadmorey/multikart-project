'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProductLoadingContextType {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

const ProductLoadingContext = createContext<ProductLoadingContextType | undefined>(undefined);

export function ProductLoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <ProductLoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </ProductLoadingContext.Provider>
    );
}

// Custom hook for easy consumption
export function useProductLoading() {
    const context = useContext(ProductLoadingContext);
    if (!context) {
        throw new Error('useProductLoading must be used within a ProductLoadingProvider');
    }
    return context;
}
