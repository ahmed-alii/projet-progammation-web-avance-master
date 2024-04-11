'use client' // Indique que ce composant doit s'exécuter uniquement côté client.
import { useEffect } from 'react'; // Importation de useEffect de React pour exécuter du code après le rendu du composant

// Définition du composant MyComponent
const MyComponent = () => {
    useEffect(() => {
        // Utilise useEffect pour définir une valeur dans localStorage lorsque le composant est monté
        localStorage.setItem('eventId', ''); // Initialise ou réinitialise 'eventId' dans localStorage
    }, []); // Le tableau de dépendances vide signifie que cet effet ne s'exécutera qu'au montage du composant
};

export default MyComponent; // Exportation du composant pour une utilisation ailleurs dans l'application
