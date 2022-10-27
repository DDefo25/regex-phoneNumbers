import Character from "./Character";

export default class Zombie extends Character {
    constructor(params) {
        params.attack = 40;
        params.defence = 10;
        params.type = "Zombie";
        super(params);
    }
}
