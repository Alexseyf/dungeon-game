import prompt from 'prompt-sync';
import { Character } from '../super/Character';
import { Wizard } from '../heroes/wizard';
import { Npc } from '../super/Npc';
import { Kobold } from '../monsters/Kobold';
import { HumanRouge } from '../heroes/HumanRouge';
import { Dragonborn } from '../heroes/Dragonborn';
import { HumanRanger } from '../heroes/HumanRanger';
import { Spider } from '../monsters/Spider';
import { Wolf } from '../monsters/Wolf';
import { Wraith } from '../monsters/Wraith';
import { Ghoul } from '../monsters/Ghoul';
import { Zombie } from '../monsters/Zombie';
import { BlazingSkeleton } from '../monsters/BlazingSkeleton';
import { Gargoyle } from '../monsters/Gargoyle';

const keyboard = prompt();

let heroes: Character[] = [];
let enemies: Npc[] = [];

heroes.push(new Dragonborn("Arjhan"));
heroes.push(new HumanRouge("Kat"))
heroes.push(new Wizard("Immeril"));
heroes.push(new HumanRanger("Allisa"));

enemies.push(new Kobold("Kobold"));
enemies.push(new Spider("Spider"));
enemies.push(new Wolf("Wolf"));
enemies.push(new Wraith("Wraith"));
enemies.push(new Ghoul("Ghoul"));
enemies.push(new Zombie("Zombie"));
enemies.push(new BlazingSkeleton("Blazing Skeleton"));
enemies.push(new Gargoyle("Gargoyle"));

console.log("Escolha seu Herói:");
heroes.forEach(hero => { 
    console.log(`\n${heroes.indexOf(hero)+1} - ${hero.name}`);
    console.log(`CA: ${hero.ac} HP: ${hero.hp} Dano: ${hero.damage} Ataque: +${hero.attack} Poder de cura: ${hero.cureValue}`);
});

let heroSelected : number = +keyboard("Escolha um número: ");
let player: Character = heroes[heroSelected-1];

do{   
    console.log("\nO que você quer fazer?");
    console.log("\n1. Caçar");
    console.log("2. Usar Poção");
    console.log("3. Abandonar a Quest");
    let choice: number = +keyboard("> ");

    if(choice === 1) {
        let enemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log(`\n${player.name} encontrou um ${enemy.name}`);
        
        while(player.hp > 0 && enemy.hp > 0 && enemies.length > 0) {
            console.log("\n1. Atacar");
            console.log("2. Fugir");
            let choice: number = +keyboard("> ");

            if(choice === 1) {
                player.makeAttack(enemy);
                if(enemy.hp > 0) {
                enemy.counterAttack(player);
                console.log(`\n${player.status()}`);
                console.log(enemy.status());
                }
            } else if(choice === 2) {
                console.log("\nVocê fugiu da batalha!");
                break;
            }
        }

        if(enemy.hp <= 0) {
            console.log(`\n${enemy.name} foi derrotado!`);
            enemies.splice(enemies.indexOf(enemy), 1);
            }else if (player.hp <= 0) {
            console.log(`\n${player.name} foi derrotado!`);
            }     

    }else if(choice === 2) {
        player.usePotion(player)
    }else if(choice === 3) {
        console.log("Você saiu correndo!");
        break;
    }else{
        console.log("Eita! Te liga, formiga!");
    }
}while(enemies.length > 0 && player.hp > 0);

if (player.hp > 0 && enemies.length === 0) {
    console.log("\nVocê foi vitorioso!\nTodos os seus inimigos foram derrotados!");
}