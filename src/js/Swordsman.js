import Character from "./Character";

export default class Swordsman extends Character {
    constructor(params) {
        params.attack = 40;
        params.defence = 10;
        params.type = "Swordsman";
        super(params);
    }
}
