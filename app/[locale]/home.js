'use client' // Indique que ce fichier doit être exécuté uniquement côté client
// Importation des styles CSS et des composants nécessaires
import styles from './Home.module.css';
import DescAlpha from '@/components/DescriptionAlphaCenter';
import MainEven from '@/components/MainEvent';
import { useRouter } from "next/navigation" // Importation du hook useRouter de Next.js pour la navigation

// Définition du composant Home, représentant la page d'accueil
export default function Home() {
  // Utilisation du hook useRouter pour accéder à l'instance du routeur
  const router = useRouter();
  return (
    // Utilisation de fragments pour grouper plusieurs éléments sans ajouter de nœuds supplémentaires au DOM
    <>
      {/* Section contenant la description de l'Alpha Center */}
      <div className={`container-fluid bg-dark py-4`}>
        <DescAlpha /> {/* Composant pour la description de l'Alpha Center */}
      </div>
      {/* Section affichant les événements principaux */}
      <div className={`${styles.down} container-fluid py-5`}>
        <MainEven /> {/* Composant pour les événements principaux */}
      </div>
    </>
  );
}
