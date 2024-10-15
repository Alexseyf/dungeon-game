import { Npc } from "../super/Npc";
import { Utils } from "../Utils/Utils";

export class Ghoul extends Npc {
    constructor(nome: string) {
        super(nome, 16, 2, 9, 3, 2);
    }

    public counterAttack(target: Npc): void {
        console.log(`\n${this.name} contra ataca ${target.name}!`);
        const hit = Utils.roll(20)+this.attack;
        if (hit >= target.ac) {
            const damage = this.damage;
            target.hp -= damage;
            console.log(`${this.name} acerta ${target.name} causando ${damage} de dano!`);
        }else{
            console.log(`${this.name} erra ${target.name}!`);
        }
    }
}