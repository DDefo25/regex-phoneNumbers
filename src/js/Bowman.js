import Character from "./Character";

export default class Bowman extends Character {
    constructor(params) {
        params.attack = 25;
        params.defence = 25;
        params.type = "Bowman";
        super(params);
    }
}
