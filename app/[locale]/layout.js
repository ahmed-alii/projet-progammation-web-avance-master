// 'use client' // Indique que ce fichier doit s'exécuter uniquement côté client
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Importation des polices depuis Google Fonts via l'API next/font
import {Montserrat} from "next/font/google";
import 'normalize.css/normalize.css'; // Réinitialise et normalise les styles par défaut du navigateur
import styles from "./layout.module.css"; // Styles spécifiques au layout
import 'bootstrap/dist/css/bootstrap.min.css'; // Styles Bootstrap pour les composants
import {useLocale, useTranslations} from "next-intl";
import {notFound} from "next/navigation";

// Initialisation des polices avec configurations spécifiques
const montserrat = Montserrat({subsets: ["latin"], weight: "400"});


const RootLayout = ({children, params}) => {
    const locale = useLocale();
    const t = useTranslations("Index");
    if (params.locale !== locale) {
        notFound();
    }

    return (
        <html lang={locale}> {/* Définit la langue de base pour le contenu */}
        <body className={`${montserrat.className}  d-flex flex-column`}>
        <div className={styles.principal}>
            <Header langbtn={t("langbutton")}/> {/* Inclusion de l'entête */}
            <main className={`${styles.bob} container-fluid flex-grow-1 min-vh-100`}>
                {children} {/* Affiche le contenu enfant passé au composant Layout */}
            </main>
            <Footer/> {/* Inclusion du pied de page */}
        </div>
        </body>
        </html>
    );
}

export default (RootLayout)

