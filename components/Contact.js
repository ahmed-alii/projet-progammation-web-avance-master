'use client'
// Assure que ce composant s'exécute uniquement côté client, permettant l'accès à des APIs telles que localStorage.
import {useState} from 'react'; // Importe useState de React pour créer des états locaux.
import styles from './Contact.module.css'; // Importe les styles spécifiques au composant Contact.

export default function Contact({one, two}) {


    // Déclaration des états pour stocker les valeurs des champs du formulaire et les messages d'erreur/validation.
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorNom, setErrorNom] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // Fonction pour valider l'adresse email à l'aide d'une expression régulière.
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
        );
    };

    // Fonction pour valider chaque champ du formulaire en temps réel.
    // Utilise une instruction switch pour gérer la logique de validation en fonction du champ spécifié.
    const validateField = (field, value) => {
        switch (field) {
            case 'nom':
                setErrorNom(value ? '' : 'Veuillez entrer un nom.'); // Définit ou efface le message d'erreur pour le champ nom.
                break;
            case 'email':
                setErrorEmail(value && validateEmail(value) ? '' : 'Veuillez entrer une adresse e-mail valide.'); // Définit ou efface le message d'erreur pour le champ email.
                break;
            case 'message':
                setErrorMessage(value ? '' : 'Veuillez entrer un message.'); // Définit ou efface le message d'erreur pour le champ message.
                break;
            default:
                break;
        }
    };

    // Gère la soumission du formulaire.
    // Vérifie que tous les champs sont correctement remplis avant de simuler l'envoi du formulaire.
    // const handleSubmit = (e) => {
    //     e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page).
    //     if (nom && email && validateEmail(email) && message) {
    //         console.log('Form submitted', {nom, email, message}); // Simule l'envoi du formulaire avec les valeurs des champs.
    //         setShowSuccessMessage(true); // Affiche le message de succès.
    //         // Réinitialise les champs du formulaire.
    //         setNom('');
    //         setEmail('');
    //         setMessage('');
    //         // Cache le message de succès après 5 secondes.
    //         setTimeout(() => setShowSuccessMessage(false), 5000);
    //     } else {
    //         // Valide à nouveau chaque champ pour s'assurer que les messages d'erreur sont affichés si nécessaire.
    //         validateField('nom', nom);
    //         validateField('email', email);
    //         validateField('message', message);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form behavior (page reload).

        if (nom && email && validateEmail(email) && message) {
            // Prepare the data to send
            const formData = {
                name: nom,
                email: email,
                message: message,
            };

            try {
                // Make a POST request to your API endpoint
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    console.log('Form submitted successfully');
                    setShowSuccessMessage(true); // Show success message
                    // Reset form fields
                    setNom('');
                    setEmail('');
                    setMessage('');
                    // Hide success message after 5 seconds
                    setTimeout(() => setShowSuccessMessage(false), 5000);
                } else {
                    console.error('Error submitting form');
                    // Handle error cases, e.g., show error message to user
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle network errors, e.g., show error message to user
            }
        } else {
            // Validate fields again to ensure error messages are displayed if necessary
            validateField('nom', nom);
            validateField('email', email);
            validateField('message', message);
        }
    };


    return (
        <>

                <div className={`${styles.pageContact} container`}>
                    {/* Affichage conditionnel du message de succès */}
                    {showSuccessMessage && (
                        <div className="alert alert-success" role="alert" style={{
                            position: 'fixed',
                            top: '10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 1050
                        }}>
                            Votre demande a été soumise avec succès.
                        </div>
                    )}
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="bg-white p-4 rounded">
                                <h2 className='mb-5'>Envoyez-nous un message</h2>
                                <form onSubmit={handleSubmit}>
                                    {/* Champs du formulaire avec gestion des erreurs */}
                                    <div className={`mb-3 ${styles.forumId}`}>
                                        <label htmlFor="nom" className="form-label">Nom</label>
                                        <input type="text" className={`form-control ${errorNom ? 'is-invalid' : ''}`}
                                               id="nom" value={nom} onChange={(e) => {
                                            setNom(e.target.value);
                                            validateField('nom', e.target.value);
                                        }}/>
                                        {errorNom && <div className="invalid-feedback">{errorNom}</div>}
                                    </div>
                                    <div className={`mb-3 ${styles.forumId}`}>
                                        <label htmlFor="email" className="form-label">Adresse e-mail</label>
                                        <input type="email" className={`form-control ${errorEmail ? 'is-invalid' : ''}`}
                                               id="email" value={email} onChange={(e) => {
                                            setEmail(e.target.value);
                                            validateField('email', e.target.value);
                                        }}/>
                                        {errorEmail && <div className="invalid-feedback">{errorEmail}</div>}
                                    </div>
                                    <div className={`mb-3 ${styles.forumMessage}`}>
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
                                                  id="message" rows="5" value={message} onChange={(e) => {
                                            setMessage(e.target.value);
                                            validateField('message', e.target.value);
                                        }}></textarea>
                                        {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
                                    </div>
                                    <button type="submit" className="btn btn-dark">Envoyer</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* Informations de contact */}
                            <div className="bg-white p-4 rounded">
                                <h2 className='mb-5'>{one}</h2>
                                <p>{two}</p>
                                <ul>
                                    <li>Téléphone : +1234567890</li>
                                    <li>Email : contact@example.com</li>
                                    <li>Adresse : 123 Rue de la Réussite, 75000 Paris, France</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
}
