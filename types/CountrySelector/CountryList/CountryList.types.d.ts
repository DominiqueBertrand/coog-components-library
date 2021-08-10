import { SelectOptions } from '../../Select/Select.types';
/**
 * @type Alpha2
 */
declare enum Alpha2 {
    dv = "dv",
    sw = "sw",
    eu = "eu",
    af = "af",
    am = "am",
    ha = "ha",
    ku = "ku",
    ml = "ml",
    no = "no",
    ps = "ps",
    sd = "sd",
    so = "so",
    sq = "sq",
    ta = "ta",
    tg = "tg",
    tt = "tt",
    ug = "ug",
    ur = "ur",
    vi = "vi",
    ar = "ar",
    az = "az",
    be = "be",
    bg = "bg",
    bn = "bn",
    bs = "bs",
    ca = "ca",
    cs = "cs",
    da = "da",
    de = "de",
    en = "en",
    es = "es",
    et = "et",
    fa = "fa",
    fi = "fi",
    fr = "fr",
    gl = "gl",
    el = "el",
    he = "he",
    hi = "hi",
    hr = "hr",
    hu = "hu",
    hy = "hy",
    id = "id",
    is = "is",
    it = "it",
    ja = "ja",
    ka = "ka",
    kk = "kk",
    km = "km",
    ko = "ko",
    ky = "ky",
    lt = "lt",
    lv = "lv",
    mk = "mk",
    mn = "mn",
    ms = "ms",
    nb = "nb",
    nl = "nl",
    nn = "nn",
    pl = "pl",
    pt = "pt",
    ro = "ro",
    ru = "ru",
    sk = "sk",
    sl = "sl",
    sr = "sr",
    sv = "sv",
    th = "th",
    tr = "tr",
    uk = "uk",
    uz = "uz",
    zh = "zh"
}
/**
 * Locale
 */
interface Locale {
    locale: string;
    countries: {
        [alpha2Key: string]: string[] | string;
    };
}
/**
 * Locales
 */
declare type Locales = Record<Alpha2, Locale>;
/**
 *
 */
interface Country {
    alpha2?: string;
    alpha3?: string;
    numeric?: string;
    invertedNumeric?: string;
    countryList: Locale;
}
/**
 * Countries
 */
interface iCountries extends Locale {
    getSelectOptions: () => SelectOptions;
    setLocale: (locale: Alpha2) => iCountries;
}
export { iCountries, Country, Locales, Locale, Alpha2, SelectOptions };
