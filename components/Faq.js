'use client' // Assure que le composant s'exécute uniquement côté client.
// Importation des styles CSS spécifiques à la FAQ.
import styles from './Faq.module.css';
import { useEffect } from 'react'; // Importation de useEffect pour exécuter du code après le montage du composant.

export default function Faq({faqData}) {
  // Utilisation de useEffect pour charger dynamiquement les scripts Bootstrap nécessaires.
  useEffect(() => {
    // Vérifie si le code s'exécute côté client car `window` n'est pas défini côté serveur.
    if (typeof window !== "undefined") {
      // Charge le bundle de Bootstrap qui inclut les fonctionnalités JavaScript, comme l'accordéon.
      require('bootstrap/dist/js/bootstrap.bundle.min');
    }
  }, []);

  return (
    // Utilise un conteneur Bootstrap avec un padding vertical et les styles personnalisés de la page FAQ.
    <div className={`container py-5 ${styles.pageFaq}`}>
      <h1 className="text-center mb-4">Foire aux questions (FAQ)</h1>
      <div className="accordion" id="accordionFAQ">
        {/* Mappe chaque élément de `faqData` pour créer des éléments d'accordéon. */}
        {faqData.map(({ question, answer, id }) => (
          <div className="accordion-item" key={id}>
            <h2 className="accordion-header" id={`heading${id}`}>
              {/* Le bouton sert de déclencheur pour afficher ou masquer la réponse à la question. */}
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                {question} {/* Affiche la question. */}
              </button>
            </h2>
            {/* La réponse est contenue ici et est montrée/cachée en fonction de l'état de l'accordéon. */}
            <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`heading${id}`} data-bs-parent="#accordionFAQ">
              <div className="accordion-body">
                {answer} {/* Affiche la réponse. */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
