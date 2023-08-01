import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
