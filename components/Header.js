import Image from "next/legacy/image"; // Importation du composant Image de Next.js pour une gestion optimisée des images
import logo from "@/public/logo.png"; // Importation du logo depuis les ressources publiques
import MenuNav from "./MenuNav"; // Importation du composant de menu de navigation
import styles from './Header.module.css';

// Déclaration du composant fonctionnel Header qui accepte setPage comme prop
export default function Header({langbtn}) {
  return (
    // Enveloppe tout le contenu de l'en-tête dans une balise <header>
    <header className={styles.header}>
      {/* Barre de navigation Bootstrap pour un design réactif et stylé */}
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* Container fluide pour une mise en page réactive et un alignement centré */}
        <div className="container-fluid justify-content-center">
          {/* Lien de la marque du site incluant le logo et le nom du site */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            {/* Conteneur flex pour le logo et le nom du site, alignés au centre */}
            <div className="d-flex align-items-center">
              {/* Logo du site avec taille spécifiée et texte alternatif pour l'accessibilité */}
              <Image src={logo} alt="logo Alpha center" width={80} height={80} />
              {/* Nom du site à côté du logo */}
              <h1 className="ms-3 mb-0">Alpha Center</h1>
            </div>
          </a>
        </div>
      </nav>
      {/* Section sous la navbar pour le composant de navigation supplémentaire */}
      <div className="bg-dark text-white">
        <div>
          {/* Insertion du composant MenuNav, setPage permet de gérer le changement de page */}
          <MenuNav langbtn={langbtn}/>
        </div>
      </div>
    </header>
  );
}
