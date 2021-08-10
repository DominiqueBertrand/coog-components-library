import { SRHeaderProps } from './SRHeader.types';
import './SRHeader.scss';
/**
 * @description Heaader block of EditSalesRoute view
 *
 * @param {string} title
 * @param {string} buttons
 * @param {string} status "play" | "pause" | "stop" | "file-export";
 * @callback eventEmitter
 */
declare const SRHeader: ({ title, buttons, eventEmitter, status }: SRHeaderProps) => JSX.Element;
export default SRHeader;
