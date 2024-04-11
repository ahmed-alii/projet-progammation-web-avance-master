'use client' // Indique que ce composant s'exécute uniquement côté client.
import { useState } from 'react'; // Importation du hook d'état de React.
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation.
import styles from './Events.module.css'; // Importation des styles CSS spécifiques à Events.
import Image from 'next/image'; // Importation du composant Image de Next.js pour l'optimisation des images.
import allEvents from '@/public/evenData/allEventsEvs.json'; // Importation des données des événements depuis un fichier JSON local.

// Définition du composant fonctionnel Events.
export default function Events() {
  // Fonction pour gérer le clic sur un événement et stocker son ID dans localStorage.
  const handleClick = (eventId) => {
    localStorage.setItem('eventId', eventId);
  };

  // Hook d'état pour contrôler la pagination.
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 2; // Définit le nombre d'événements à afficher par page.

  // Calcul pour déterminer quels événements afficher sur la page actuelle.
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = allEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Calcul du nombre total de pages nécessaires.
  const totalPages = Math.ceil(allEvents.length / eventsPerPage);

  // Fonction pour changer de page lorsqu'un bouton de pagination est cliqué.
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={`container py-5 mt-1`}>
      <div className="row">
        {/* Mapping sur la liste d'événements pour les afficher */}
        {currentEvents.map((event) => (
          <div className={`col-sm-6 mb-5 text-center ${styles.divEvent}`} key={event.id}>
            <div className={` ${styles.imgDiv} mx-auto`}>
              <Link href={`/event`} passHref legacyBehavior>
                <a onClick={() => handleClick(event.id)} className='text-center'>
                  <Image src={event.image} alt={`Image for ${event.title}`} className={`mb-5 ${styles.imgEv}`} priority={event.priority} width={event.width} height={event.height} sizes="(max-width: 425px) 400px" layout='responsive' />
                </a>
              </Link>
            </div>
            <h2 className={`${styles.titre}`}>
              <Link href={`/event`} legacyBehavior>
                <a onClick={() => handleClick(event.id)} className={`text-white ${styles.titleEven}`}>{event.title}</a>
              </Link>
            </h2>
            <p className={`${styles.dateEven}`}>{event.date}</p>
            {/* Exemple de description statique ; à remplacer par des données réelles si nécessaire */}
            <div className="d-flex flex-column align-items-center mt-3">
              <p className={`description ${styles.descEven} mb-3 text-start`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magni natus veritatis deserunt iste ut quidem in? Necessitatibus ratione voluptatem fugit officia labore modi nam, sint natus est iure vitae!</p>
              <Link href={`/event`} className={`${styles.btnEven} w-100`} legacyBehavior>
                  <button onClick={() => handleClick(event.id)} className='btn btn-danger w-100 mt-3'>Take a ticket</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination mb-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} className={`btn ${currentPage === index + 1 ? 'btn-danger' : 'btn-secondary'}`} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
