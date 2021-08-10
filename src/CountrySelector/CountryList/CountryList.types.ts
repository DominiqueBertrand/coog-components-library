import { SelectOptions } from '../../Select/Select.types';

/**
 * @type Alpha2
 */
 // type Alpha2 = 'dv' | 'sw' | 'eu' | 'af' | 'am' | 'ha' | 'ku' | 'ml' | 'no' | 'ps' | 'sd' | 'so' | 'sq' | 'ta' | 'tg' | 'tt' | 'ug' | 'ur' | 'vi' | 'ar' | 'az' | 'be' | 'bg' | 'bn' | ' bs' | 'ca' | 'cs' | 'da' | 'de' | 'en' | 'es' | 'et' | 'fa' | 'fi' | 'fr' | 'gl' | 'el' | 'he' | 'hi' | 'hr' | 'hu' | 'hy' | 'id' | 'is' | 'it' | 'ja' | 'ka' | ' kk' | 'km' | 'ko' | 'ky' | 'lt' | 'lv' | 'mk' | 'mn' | 'ms' | 'nb' | 'nl' | 'nn' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'tr' | 'uk' | 'uz' | 'zh';
 
 enum Alpha2 {
    dv = 'dv',
    sw = 'sw',
    eu = 'eu',
    af = 'af',
    am = 'am',
    ha = 'ha',
    ku = 'ku',
    ml = 'ml',
    no = 'no',
    ps = 'ps',
    sd = 'sd',
    so = 'so',
    sq = 'sq',
    ta = 'ta',
    tg = 'tg',
    tt = 'tt',
    ug = 'ug',
    ur = 'ur',
    vi = 'vi',
    ar = 'ar',
    az = 'az',
    be = 'be',
    bg = 'bg',
    bn = 'bn',
    bs = 'bs',
    ca = 'ca',
    cs = 'cs',
    da = 'da',
    de = 'de',
    en = 'en',
    es = 'es',
    et = 'et',
    fa = 'fa',
    fi = 'fi',
    fr = 'fr',
    gl = 'gl',
    el = 'el',
    he = 'he',
    hi = 'hi',
    hr = 'hr',
    hu = 'hu',
    hy = 'hy',
    id = 'id',
    is = 'is',
    it = 'it',
    ja = 'ja',
    ka = 'ka',
    kk = 'kk',
    km = 'km',
    ko = 'ko',
    ky = 'ky',
    lt = 'lt',
    lv = 'lv',
    mk = 'mk',
    mn = 'mn',
    ms = 'ms',
    nb = 'nb',
    nl = 'nl',
    nn = 'nn',
    pl = 'pl',
    pt = 'pt',
    ro = 'ro',
    ru = 'ru',
    sk = 'sk',
    sl = 'sl',
    sr = 'sr',
    sv = 'sv',
    th = 'th',
    tr = 'tr',
    uk = 'uk',
    uz = 'uz',
    zh = 'zh',
 } 

/**
 * Locale
 */
 interface Locale {
    locale: string; // ex. "FR"
    countries: {
        [alpha2Key: string]: string[] | string
      }
};

/**
 * Locales
 */
type Locales = Record<Alpha2, Locale>


/**
 * 
 */
interface Country {
    alpha2?:string; // ex. "FR"
    alpha3?:string; // ex. "FRA"
    numeric?:string; // ex. "250"
    invertedNumeric?:string; // ex. "ISO 3166-2:FR"
    countryList: Locale;
};

/**
 * Countries
 */
 interface iCountries extends Locale { 
    getSelectOptions: () => SelectOptions;
    setLocale: (locale: Alpha2) => iCountries;
};

export { iCountries, Country, Locales, Locale, Alpha2, SelectOptions };
