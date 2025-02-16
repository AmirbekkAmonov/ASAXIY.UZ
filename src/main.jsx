import React from 'react';
import { Provider } from "@/components/ui/provider"
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from '@/App.jsx';
import '@/styles/main.scss';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>

);
