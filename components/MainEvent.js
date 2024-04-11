// Importation des styles CSS et des composants nécessaires
import styles from './MainEvent.module.css';
import Image from 'next/image';
import Link from 'next/link'; // Permet de créer des liens navigables sans recharger la page
import allEvents from '@/public/evenData/allEventsHome.json'; // Charge la liste des événements depuis un fichier JSON local

// Composant MainEvent pour afficher les événements principaux
export default function MainEvent() {
  // Fonction pour gérer les clics sur les événements et stocker l'ID de l'événement dans localStorage
  const handleClick = (eventId) => {
    localStorage.setItem('eventId', eventId);
  }
  // Rendu des événements
  return (
    <div className={`container ${styles.bob}`}>
      <div className={`row`}>
        {/* Boucle sur chaque événement pour afficher ses détails */}
        {allEvents.map((event) => (
          <div className={`col-md-6 d-flex align-items-stretch ${styles.mainDivCard}`} key={event.id}>
            <div className={`card ${styles.backDiv} mb-5`}>
              {/* Lien vers la page de l'événement */}
              <Link href={`/event`} passHref legacyBehavior>
                <a className='text-center' onClick={() => handleClick(event.id)}>
                  {/* Image de l'événement */}
                  <Image  src={event.image} alt={`Event Image ${event.id}`} className="card-img-top mx-auto" layout='responsive' width={event.width} height={event.height}  sizes="(max-width: 425px) 342px" priority={event.priority}  />
                </a>
              </Link>
              {/* Description de l'événement */}
              <div className={`${styles.divDescription} card-body mx-auto text-center mt-3 py-1`}>
                <h2 className={`${styles.titre}`}>
                  {/* Titre de l'événement cliquable */}
                  <Link href={`/event`} className={`text-white ${styles.titleEven}`} legacyBehavior>
                    <a onClick={() => handleClick(event.id)}>{event.title}</a>
                  </Link>
                </h2>
                {/* Date de l'événement */}
                <p className="card-text pt-5 ">{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
