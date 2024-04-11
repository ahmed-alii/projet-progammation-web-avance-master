// Importation du fichier CSS spécifique au composant DescAlpha
import styles from './DescriptionAlphaCenter.module.css';
// Importation du composant Carousel pour afficher une série d'images ou de contenus
import Carousel from "./CarouselDesc";
// Importation du hook useState de React pour gérer l'état local du composant
import { useState } from 'react';

// Définition du composant fonctionnel DescAlpha
export default function DescAlpha() {
    // Déclaration d'un état local pour contrôler l'affichage du texte complet ou réduit
    const [showFullText, setShowFullText] = useState(false);
    // Définition d'une fonction pour basculer entre l'affichage complet et réduit du texte
    const toggleReadMore = () => {
        setShowFullText(!showFullText);
    }
    // Rendu du composant DescAlpha
    return (
        <div className={styles.bob}>
            {/* Insertion du composant Carousel pour la présentation d'images défilantes */}
            <Carousel />
            <div className="text-white text-justify mx-auto my-5" style={{ maxWidth: '70%', fontSize: '1.2rem', lineHeight: '1.5' }}>
                {/* Affichage conditionnel du texte : complet si showFullText est vrai, réduit sinon */}
                <p>
                    {showFullText ? (
                        // Texte complet de la description de l'Alpha Center
                        `Les plus grands jeux. Les plus grands
                        spectacles. Les meilleurs moments de la
                        capitale nationale se produisent ici.
                        Jetez un œil en profondeur au lieu de 
                        divertissement de classe mondiale. Alpha
                        Center est conçue comme une salle modulable
                        et polyvalente capable d'accueillir 15 289
                        spectateurs en mode stade de rugby et de 10 000
                        à 40 000 spectateurs en mode concert.
                        Initialement prévue pour avoir un toit 
                        rétractable, elle est finalement dotée d'un 
                        toit permanent, les rencontres de rugby se
                        jouant sur une pelouse synthétique. Le choix
                        du toit est lié à des raisons d'acoustique,
                        "Le système d’ouverture et de fermeture 
                        n’aurait pas permis une étanchéité suffisante,
                        au niveau décibels, pour respecter la 
                        tranquillité des habitants lors d’un concert 
                        des Rolling Stones par exemple" selon 
                        l'architecte Christian de Portzamparc. Y sont
                        adjoints des locaux commerciaux dans 
                        l'enceinte du stade, ainsi que 33 000 m2 de
                        bureaux.`
                    ) : (
                        // Version raccourcie du texte pour inciter à lire plus
                        `Les plus grands jeux. Les plus grands
                        spectacles. Les meilleurs moments de la
                        capitale nationale se produisent ici.
                        Jetez un œil en profondeur au lieu de 
                        divertissement de classe mondiale ...`
                    )}
                </p>
                <div className="text-center">
                    {/* Bouton pour basculer l'affichage du texte */}
                    <button onClick={toggleReadMore} className="btn mt-3">
                        {showFullText ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    );
}
