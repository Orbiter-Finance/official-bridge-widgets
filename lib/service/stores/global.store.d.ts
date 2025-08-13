export declare const languageAtom: import('jotai').WritableAtom<"en" | "zh", ["en" | "zh" | typeof import('jotai/utils').RESET | ((prev: "en" | "zh") => "en" | "zh" | typeof import('jotai/utils').RESET)], void>;
export declare const useLanguage: () => {
    language: "en" | "zh";
    setLanguage: (args_0: "en" | "zh" | typeof import('jotai/utils').RESET | ((prev: "en" | "zh") => "en" | "zh" | typeof import('jotai/utils').RESET)) => void;
};
