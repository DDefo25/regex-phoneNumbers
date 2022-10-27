import Character from "./Character";

export default class Undead extends Character {
    constructor(params) {
        params.attack = 25;
        params.defence = 25;
        params.type = "Undead";
        super(params);
    }
}
