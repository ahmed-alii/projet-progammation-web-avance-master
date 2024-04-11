// Importe le composant ContactPage depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/Contact' est correct.
import ContactPage from '@/components/Contact';
import {useTranslations} from "next-intl";

// Définit les métadonnées pour la page de contact, utile pour le SEO.
// Ces métadonnées peuvent être utilisées dans le <Head> de la page pour améliorer son classement dans les moteurs de recherche.

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: 'Contact | AlphaCenter - Nous sommes à votre écoute',
    description: 'Vous avez des questions ou besoin d’informations supplémentaires ? Contactez AlphaCenter dès aujourd’hui pour obtenir de l’aide ou planifier votre visite.',
    openGraph: {
        title: 'Contact | AlphaCenter - Nous sommes à votre écoute',
        description: 'Vous avez des questions ou besoin d’informations supplémentaires ? Contactez AlphaCenter dès aujourd’hui pour obtenir de l’aide ou planifier votre visite.',
        images: ['/logo.png']
    }
}

// Composant fonctionnel Contact servant de wrapper ou d'interface pour le composant ContactPage.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dans ContactPage si nécessaire.
export default function Contact() {
    const t = useTranslations("contact");


    // Rendu du composant ContactPage pour afficher le contenu de la page de contact.
    return(

            <ContactPage one={t("one")} two={t("two")}/>

    )
}
