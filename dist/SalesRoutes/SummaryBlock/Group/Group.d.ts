import { GroupProps } from "./Group.types";
import "./Group.scss";
/**
 * @class
 * Group Component
 * @param {GroupProps} lists of Questions
 */
declare const Group: ({ id, title, description, tooltip, sequence, questions }: GroupProps) => JSX.Element;
export default Group;
