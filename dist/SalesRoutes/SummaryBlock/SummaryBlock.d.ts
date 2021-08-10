import { SummaryBlockProps } from "./SummaryBlock.types";
import "./SummaryBlock.scss";
/**
 * @class
 * SummaryBlock Component
 * @param {SummaryBlockProps}
 *          list - list of Questions
 *          groups - groups of Questions list
 */
declare const SummaryBlock: ({ list, id, groups }: SummaryBlockProps) => JSX.Element;
export default SummaryBlock;
