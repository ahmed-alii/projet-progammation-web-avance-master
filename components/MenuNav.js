"use client" ;
import styles from './MenuNav.module.css'; // Importation des styles CSS pour ce composant
// import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import {usePathname} from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel
import Link from "next-intl/link";


// Définition du composant fonctionnel MenuNav
export default function MenuNav({langbtn}) {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}> {/* Application des styles au composant nav */}
            <ul className="nav justify-content-center m-0"> {/* Utilisation de classes Bootstrap pour le style et l'alignement */}
                {/* Liste des liens de navigation */}
                <li>
                    <Link href="/" className={pathname === '/' ? `bg-white text-dark` : 'nav-item'}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link href="/events" className={pathname === '/events' ? `bg-white text-dark` : 'nav-item'}>
                        Événements
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={pathname === '/contact' ? `bg-white text-dark` : 'nav-item'}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/faq" className={pathname === '/faq' ? `bg-white text-dark` : 'nav-item'}>
                        FAQ
                    </Link>
                </li>
                <li>
                    <button className={"switch btn text-light"}
                            onClick={() => {
                                document.body.classList.toggle("clear-theme")
                            }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             style={{fill: "rgb(255,255,255)"}}>
                            <path
                                d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                        </svg>
                    </button>
                </li>
                <li>
                    <Link href="/" className={pathname === '/faq' ? `bg-white text-dark` : 'nav-item'} locale={"en"}>
                        EN
                    </Link>
                    <Link href="/" className={pathname === '/faq' ? `bg-white text-dark` : 'nav-item'} locale={"fr"}>
                        FR
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
