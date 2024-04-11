// Importation du composant EventPage pour afficher les détails d'un événement spécifique
import EventPage from '@/components/pageEvent';
// Importation des styles CSS pour ce composant
import styles from './page.module.css';

// Définition des métadonnées pour le SEO, utile pour améliorer la visibilité sur les moteurs de recherche

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: 'Ticket | AlphaCenter - Réservez maintenant',
    description: 'Détails et billetterie pour Nom de l’Événement à AlphaCenter. Ne manquez pas cet événement exceptionnel. Réservez vos places dès maintenant pour une expérience mémorable.',
    openGraph: {
        title: 'Ticket | AlphaCenter - Réservez maintenant',
        description: 'Détails et billetterie pour Nom de l’Événement à AlphaCenter. Ne manquez pas cet événement exceptionnel. Réservez vos places dès maintenant pour une expérience mémorable.',
        images: ['/logo.png']
    }
}

// Composant fonctionnel Events qui renvoie le composant EventPage
export default function Events() {
    return (
        // Conteneur pour le composant EventPage avec styles appliqués
        <div className={styles.all}>
            <EventPage />
        </div>
    );
}
