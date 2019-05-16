import { Skill } from '../common/skill.model';


export class Developer {
    constructor(public lastName: string,
        public firstName: string,
        public age: number,
        public sexe: string,
        public bio: string,
        public skills: Skill[]) {}
}
