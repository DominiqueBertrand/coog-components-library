import { QuestionProps } from "./Question.types";
import "./Question.scss";
declare const Question: ({ id, question, answer, separator }: QuestionProps) => JSX.Element;
export default Question;
