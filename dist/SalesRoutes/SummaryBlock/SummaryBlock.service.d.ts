import { groupList } from "./Group/Group.service";
declare const summaryList: {
    id: string;
    title: string;
    questions: {
        id: string;
        question: string;
        answer: string;
    }[];
}[];
export { groupList, summaryList };
