/**
 * [[include:introduction.md]]
 * @module 00-Introduction
 * @author Pablo E. --Fidel-- Martínez López
 */
import { architecture } from '../01-architecture/index';
import { code_standards } from '../04-code-standards/index';
import { governance } from '../03-governance/index';
import { technologies } from '../02-technologies/index';

export class introduction {
    name: string = 'introduction';
    type: string = 'gobstones-guidelines';
    parent: string = undefined;
    children: any[] = [ architecture, technologies, governance, code_standards ];
};
