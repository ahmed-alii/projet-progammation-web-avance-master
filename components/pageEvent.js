'use client' // S'assure que le composant s'exécute uniquement côté client.
import { useEffect, useState } from 'react'; // Importe useEffect et useState de React.
import Image from 'next/image'; // Utilise le composant Image de Next.js pour une meilleure optimisation des images.
import styles from './pageEvent.module.css'; // Importe les styles CSS spécifiques à PageEvent.
import allEvents from '@/public/evenData/allEventsEvent.json'; // Charge les données de tous les événements depuis un fichier JSON.

export default function PageEvent() {
    const [event, setEventId] = useState(null); // Stocke l'ID de l'événement actuel.

    useEffect(() => {
        // Récupère l'ID de l'événement stocké dans localStorage au montage du composant.
        const storedEventId = localStorage.getItem('eventId');
        if (storedEventId) {
            setEventId(parseInt(storedEventId, 10)); // Convertit l'ID en nombre et met à jour l'état.
        }
    }, []);
    
    // Trouve l'événement actuel dans la liste des événements basé sur l'ID.
    const currentEvent = allEvents.find(e => e.id === event);
    
    // Gère l'état pour le nombre de tickets et l'affichage de l'alerte.
    const [ticket, setTicket] = useState(1); // Nombre de tickets à acheter.
    const [ticketsBought, setTicketsBought] = useState(0); // Nombre de tickets achetés.
    const [showAlert, setShowAlert] = useState(false); // Contrôle l'affichage de l'alerte.

    // Fonctions pour incrémenter/décrémenter le nombre de tickets et gérer l'achat.
    const increment = () => setTicket(ticket >= 99 ? 99 : ticket + 1);
    const decrement = () => setTicket(ticket <= 1 ? 1 : ticket - 1);

    const handleBuyTicket = () => {
        setTicketsBought(ticket); // Sauvegarde le nombre de tickets achetés.
        setShowAlert(true); // Affiche l'alerte.
        setTicket(1); // Réinitialise le nombre de tickets.
        setTimeout(() => setShowAlert(false), 1000); // Cache l'alerte après 5 secondes.
    };

    return (
        <div>
            {currentEvent ? (
                <div className={`${styles.eventPageContainer} container text-center py-5 mt-1`}>
                    {showAlert && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert" style={{ position: 'fixed', top: '60px', left: '50%', transform: 'translateX(-50%)', zIndex: 1050 }}>
                            Vous avez acheté {ticketsBought} ticket(s) avec succès.
                        </div>
                    )}
                    <div className={`${styles.eventImage} container`}>
                        <Image src={currentEvent.image} alt={`Image de ${currentEvent.title}`} width={currentEvent.width} height={currentEvent.height} priority = {true} />
                    </div>
                    <div className={`${styles.eventDown} container mx-auto`}>
                        <h1 className={`my-5`}>{currentEvent.title}</h1>
                        <p className={`text-start`}>{currentEvent.date}</p>
                        <div className={`text-start my-3`}>
                            {/* Texte décrivant l'événement */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure temporibus pariatur magni harum laboriosam quia iste, voluptas placeat tenetur consequuntur beatae autem quod. Fugiat, sapiente voluptate autem repellat eos quos.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nihil tempore aperiam nulla mollitia reiciendis, eveniet doloribus iste, magnam, ipsum eum ut quasi ea obcaecati! Quae officiis molestias suscipit tempore!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut enim nihil possimus illum nulla quae assumenda, doloribus explicabo. Iusto, quis? Recusandae sit modi placeat perspiciatis quaerat blanditiis corporis perferendis veritatis.
                        </div>
                    </div>
                    <div className={styles.ticketManagement}>
                        <div className={`${styles.ticketQuantity} my-3`}>
                            <button onClick={increment}>+</button>
                            <span>{ticket}</span>
                            <button onClick={decrement}>-</button>
                        </div>
                        <button className={`mb-5 bg-dark ${styles.submitButton}`} onClick={handleBuyTicket}>Acheter ticket</button>
                    </div>
                </div>
            ) : (
                <div className={`container mx-auto ${styles.main}`}>
                    <p className="text-center">Événement introuvable</p>
                </div>
            )}
        </div>
    );
}
