/** export questions */
declare const questions: {
    id: string;
    title: string;
    questions: {
        id: string;
        question: string;
        answer: string;
    }[];
}[];
/** export groupItem */
declare const groupItem: {
    questions: {
        id: string;
        title: string;
        questions: {
            id: string;
            question: string;
            answer: string;
        }[];
    }[];
    title: string;
    sequence: number;
};
/** export groupList */
declare const groupList: {
    questions: {
        id: string;
        title: string;
        questions: {
            id: string;
            question: string;
            answer: string;
        }[];
    }[];
    title: string;
    sequence: number;
}[];
declare const title = "Group title";
export { questions, groupItem, groupList, title };
