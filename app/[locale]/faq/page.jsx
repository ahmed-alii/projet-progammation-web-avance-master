// Importe le composant FAQ depuis votre dossier de composants.
// Assurez-vous que le chemin d'importation '@/components/Faq' est correct et que le composant existe.
import FAQ from '@/components/Faq';
import {useLocale, useTranslations} from "next-intl";
import faqDataEN from '@/public/evenData/faqDataEN.json';
import faqDataFR from '@/public/evenData/faqDataFR.json';
// Définit les métadonnées pour la page FAQ. Ces informations peuvent être utilisées
// pour enrichir les balises <head> de la page, ce qui est crucial pour le SEO.

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: 'FAQ | AlphaCenter - Réponses à vos questions',
    description: 'Trouvez les réponses aux questions fréquemment posées sur AlphaCenter, nos événements, services, et bien plus. Nous sommes là pour vous aider à profiter pleinement de votre expérience.',
    openGraph: {
        title: 'FAQ | AlphaCenter - Réponses à vos questions',
        description: 'Trouvez les réponses aux questions fréquemment posées sur AlphaCenter, nos événements, services, et bien plus. Nous sommes là pour vous aider à profiter pleinement de votre expérience.',
        images: ['/logo.png']
    }
}

// Composant fonctionnel Faq qui sert de conteneur pour le composant FAQ.
export default function Faq() {
    const t = useTranslations("faq");
    const locale = useLocale();

    console.log(locale)

    return (
        // Le composant FAQ est retourné ici. Aucune balise supplémentaire n'est nécessaire grâce à l'usage des fragments.
        // Cela simplifie le DOM en évitant l'ajout de div inutiles.
        <FAQ faqData={locale === "en" ? faqDataEN : faqDataFR}/>
    );
}
