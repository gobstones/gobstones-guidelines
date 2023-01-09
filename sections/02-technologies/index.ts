/**
 * [[include:technologies.md]]
 * @module 02_00-Technologies
 * 
 */
import { installation } from './installation-tutorial';

export * from './installation-tutorial'
export class technologies {
    name: string = 'technologies';
    type: string = 'section';
    parent: string = 'introduction';
    children: any[] = [ installation ];
};
