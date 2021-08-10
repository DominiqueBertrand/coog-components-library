import { QuestionsProps } from "./Questions/Questions.types";
import { GroupProps } from "./Group/Group.types";
export interface SummaryBlockProps {
    /**
     * id
     */
    id?: string;
    /**
     * list: flat list of questions
     */
    list?: Array<QuestionsProps>;
    /**
     * groups: groups of questions list
     */
    groups?: Array<GroupProps>;
}
