// Importe les styles CSS du module pour ce composant. Assurez-vous que le chemin est correct et que le fichier existe.
import styles from './pageEve.module.css';
// Importe le composant PageEvent. Ce composant doit être responsable de l'affichage des détails d'un événement spécifique.
import PageEvent from './pageEvent';

// Définit le composant fonctionnel PageEve qui reçoit un objet 'event' comme prop.
// Cela permet de passer dynamiquement les détails d'un événement spécifique à ce composant pour affichage.
export default function PageEve({ event }) {
  return (
    // Utilise une div comme conteneur principal pour ce composant, appliquant une classe CSS pour le style.
    // Les styles sont définis dans le fichier CSS importé au début du fichier. Cette classe pourrait, par exemple, définir le layout, le background, la marge, etc.
    <div className={styles.pageEventMain}>
      {/* Inclut le composant PageEvent, en lui passant l'objet 'event' reçu comme prop.
          Le composant PageEvent utilisera ces données pour afficher les détails de l'événement.
          Cela permet une réutilisation efficace des composants et facilite la maintenance. */}
      <PageEvent event={event} />
    </div>
  );
}
