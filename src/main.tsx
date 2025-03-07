import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { CreateEncounter } from './pages/CreateEncounter.tsx';
import { Monsters } from './pages/Monsters.tsx';
import { SavedEncounters } from './pages/SavedEncounters.tsx';
import { CreateParty } from './pages/CreateParty.tsx';
import { SavedParties } from './pages/SavedParties.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'parties',
        element: <SavedParties />,
      },
      {
        path: 'parties/create',
        element: <CreateParty />,
      },
      {
        path: 'monsters',
        element: <Monsters />,
      },
      {
        path: 'encounters',
        element: <SavedEncounters />,
      },
      {
        path: 'encounters/create',
        element: <CreateEncounter />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
