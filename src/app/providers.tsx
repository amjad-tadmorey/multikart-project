// app/providers.tsx
"use client";

import { ProductLoadingProvider } from "@/context/ProductLoadingContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <ProductLoadingProvider>
                {children}
            </ProductLoadingProvider>
        </QueryClientProvider >
    );
}
