// Importation des styles CSS spécifiques au composant Eve
import styles from './eve.module.css';
// Importation du composant Events, qui est responsable de l'affichage des événements individuels
import Events from './Events';

// Définition du composant fonctionnel Eve
export default function Eve() {
  return (
    // Fragment React pour englober le contenu sans ajouter de nœud DOM supplémentaire
    <>
      {/* Conteneur principal pour les événements avec des styles appliqués depuis eve.module.css */}
      <div className={`${styles.eventsMain}`}>
        {/* Insertion du composant Events pour afficher les événements */}
        <Events />
      </div>
    </>
  );
}
