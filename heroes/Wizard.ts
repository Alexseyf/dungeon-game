import { Character } from "../super/Character";
import { Utils } from "../Utils/Utils";

export class Wizard extends Character {
    constructor(nome: string) {
        super(nome, 15, 8, 8, 1, 4, 8);
        //AC, MaxHP, Attack, Damage, CureValue, HP
    }

    public makeAttack(target: Character): void {
        console.log(`\n${this.name} lança um feitiço contra ${target.name}!`);
        const hit = Utils.roll(20)+this.attack;
        if (hit >= target.ac) {
            const damage = this.damage;
            target.hp -= damage;
            console.log(`${this.name} acerta ${target.name} causando ${damage} de dano!`);
        }else{
            console.log(`${this.name} erra ${target.name}!`);
        }
    }

    public usePotion(target: Character): void {

        console.log(`\n${this.name} usa uma poção de cura!`);
        target.hp += target.cureValue;
        if (target.hp > target.maxHp) {
            target.hp = target.maxHp;
        }
        console.log(`${target.name} recupera ${target.cureValue} pontos de vida!`);
    }

}

