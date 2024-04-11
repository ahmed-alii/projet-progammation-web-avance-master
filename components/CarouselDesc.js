import { Carousel } from 'react-bootstrap'; // Importation du composant Carousel depuis React Bootstrap
import Image from "next/legacy/image"; // Importation du composant Image depuis Next.js pour une optimisation des images
import carrouImages from '@/public/evenData/carrouImages.json'; // Chargement des données des images du carrousel depuis un fichier JSON
import styles from "./CarouselDesc.module.css"; // Importation des styles CSS spécifiques au carrousel

// Composant fonctionnel CarouselAlpha pour afficher un carrousel d'images
export default function CarouselAlpha() {
    // Rendu du carrousel avec une classe personnalisée pour le style
    // et centré automatiquement avec mx-auto
    return (
        <Carousel className={`${styles.carou} mx-auto`}>
            { // Boucle sur le tableau des images pour créer un item de carrousel pour chaque image
                carrouImages.map((src, index) => (
                    <Carousel.Item key={index}>
                        <div className={`${styles.carouImage} d-block`}>
                            {/* Utilisation du composant Image de Next.js pour optimiser le chargement des images */}
                            <Image 
                                src={src.src}
                                className={styles.carouI} 
                                alt={`Slide ${index + 1}`} // Description alternative pour chaque image, pour l'accessibilité et le SEO
                                width={src.width}
                                height={src.height}
                                layout='responsive'
                                /*sizes="(max-width: 425px) 380px"*/
                                priority={src.priority}
                            />
                        </div>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}
