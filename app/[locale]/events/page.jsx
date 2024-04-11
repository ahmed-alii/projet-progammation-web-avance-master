// Importation du composant Eve depuis le dossier des composants
// Assurez-vous que le chemin d'importation correspond à l'emplacement réel du fichier dans votre projet
import Eve from '@/components/eve';

// Définition des métadonnées de la page, qui peuvent être utilisées pour améliorer le SEO de la page
// Ces métadonnées peuvent être traitées dans le composant de mise en page (_app.js ou _document.js) ou utilisées directement dans les balises <Head>

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: 'Événements | AlphaCenter - Tous les événements en un coup d’œil',
    description: 'Parcourez la liste complète des événements à AlphaCenter. De la musique live aux compétitions sportives, trouvez et réservez vos billets pour des expériences inoubliables.',
    openGraph: {
        title: 'Événements | AlphaCenter - Tous les événements en un coup d’œil',
        description: 'Parcourez la liste complète des événements à AlphaCenter. De la musique live aux compétitions sportives, trouvez et réservez vos billets pour des expériences inoubliables.',
        images: ['/logo.png']
    }
}


// Composant fonctionnel Event qui sert de page d'événements
export default function Event() {
    // Le composant retourne simplement le composant Eve pour le rendu
    // Ceci implique que tout le contenu spécifique aux événements est géré par le composant Eve
    return <Eve />
}
