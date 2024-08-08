import english from "@src/i18n/en.json";
import spanish from "@src/i18n/es.json";

const Language = {
    English: 'en',
    Spanish: 'es',
};

export const getI18n = ({
    currentLocale = 'es',
}: {
    currentLocale: string | undefined;
}) => {
    if (currentLocale === Language.English) return {...spanish, ...english};
    return spanish;
};
