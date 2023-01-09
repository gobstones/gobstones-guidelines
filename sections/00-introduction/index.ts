/**
 * ## Architecture of **GobstonesWeb2**
 * The architecture of **GobstonesWeb2** combines several modules providing different 
 * functionalities.
 * Consult [the list of modules and their relationship](./sections/gobstonesweb2-architecture.md).
 * 
 * ## Technologies used
 * **GobstonesWeb2** is based on `Node.js` and uses mainly `Typescript` and several 
 * technologies associated with those.
 * Consult what [technologies we use](./sections/technologies-used.md) and how to use them.
 * 
 * ## Governance and flow of communication
 * Project governance provides direction and defines decision making.
 * Flow of communication guarantees that all contributors are aware of the latest decisions 
 * in the project that may affect them.
 * Consult [**GobstonesWeb2** governance and flow of communication](./variables/governance_and_communication.html).
 * 
 * ## Code standards and workflow
 * We follow a series of standards when coding and naming elements, and also a specific workflow. 
 * Please, be sure fo follow those standards when contributing to the project.
 * Consult [**Code standards and workflow**](./sections/code-standards-and-workflow.md).
 * 
 * @module 00_Introduction
 * 
*/
import { code_standards } from "../04-code-standards/index";
import { governance_and_communication } from "../03-governance/index";

export class gobstones_guidelines {
    name: string = 'gobstones-guidelines';
    type: string = 'manual';
    parent: string = undefined;
    children: any[] = [ governance_and_communication, code_standards ];
};
