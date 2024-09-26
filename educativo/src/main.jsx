import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthContextProvider } from './domain/shared/context/AuthContext.jsx';
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { GrupalProvider } from './context/QuestContext.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GrupalProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </GrupalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,

)