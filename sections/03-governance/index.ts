/**
 * [[include:governance.md]]
 * @module 03_00-Governance
 * 
 */
import { core_group } from "./core-group";

export { core_group } from "./core-group";

export class governance {
    name: string = 'governance';
    type: string = 'section';
    parent: string = 'introduction';
    children: any[] = [ core_group ];
};
