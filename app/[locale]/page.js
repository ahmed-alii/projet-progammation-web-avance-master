// Importation du composant Home depuis le fichier home.jsx
import Home from './home';
import styles from './page.module.css';
import { useTranslations } from "next-intl";


// Objet metadata pour stocker les métadonnées de la page, telles que le titre et la description
// Ces métadonnées peuvent être utilisées pour améliorer le SEO de la page

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: 'Accueil | AlphaCenter - Le cœur du divertissement',
  description: 'Découvrez les plus grands jeux, spectacles, et moments inoubliables à AlphaCenter, la destination ultime pour le divertissement. Explorez nos événements à venir et plongez dans l\'expérience AlphaCenter.',
  openGraph: {
    title: 'Accueil | AlphaCenter - Le cœur du divertissement',
    description: 'Découvrez les plus grands jeux, spectacles, et moments inoubliables à AlphaCenter, la destination ultime pour le divertissement. Explorez nos événements à venir et plongez dans l\'expérience AlphaCenter.',
    images: ['/logo.png']
  }
}

// Composant fonctionnel Page qui sert de wrapper pour le composant Home
// Ce composant peut être utilisé comme une page dans une application Next.js
export default function Page() {
  // Le composant retourne simplement le composant Home pour le rendu

  return (
    <div className={styles.home}>

      <Home />
    </div>
  );
}
