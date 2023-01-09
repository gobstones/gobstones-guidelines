/**
 * Project governance provides direction and defines decision making.
 * Flow of communication guarantees that all contributors are aware 
 * of the latest decisions in the project that may affect them.
 * 
 * ## Governance
 * 
 * **Gobstones Project** involves all the aspects of **Gobstones**, 
 * including the language, the didactics, and the environments.
 * 
 * Although there is, still, no organized committee, there is a 
 * {@link 03_01-Current-Core-Group-of-Gobstones-Project **Core Group**} 
 * of researchers and developers that currently take all major decisions regarding 
 * the language and the environments, thus providing the direction,  defining the 
 * metrics for validating impacts to the project, and providing the tools needed 
 * to communicate, deliver on requirements, etc.
 * We expect to be able to have a formal committee at some point.
 * 
 * The **Gobstones Community** is integrated by all researchers, developers, 
 * and users interested in **Gobstones**.
 * 
 * **GobstonesWeb2** is an open source project aimed at providing a new version 
 * of the current environment, with a solid architecture that is understandable, 
 * maintainable, and extensible.
 * The **Core Group** is actively engaged in complete a MVP, and all contributions are welcome.
 * 
 * If you are interested in contributing to **GobstonesWeb2**, please understand the 
 * flow of communication, and also the standards we use for the development.
 * You can read about the flow of communication below, and about other things on 
 * the [**Guidelines**](../index.html).
 * 
 * ## Flow of communication
 * 
 * **TO BE DEVELOPED**
 * 
 * @module 03_00-Governance-and-flow-of-communication-for-GobstonesWeb2
 * 
 */
import { core_group } from "./core-group";

export { core_group } from "./core-group";

export class governance_and_communication {
    name: string = 'governance';
    type: string = 'section';
    parent: string = 'gobstones-guidelines';
    children: any[] = [ core_group ];
};
