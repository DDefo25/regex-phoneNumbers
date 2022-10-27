import Character from "./Character";

export default class Magician extends Character {
    constructor(params) {
        params.attack = 10;
        params.defence = 40;
        params.type = "Magician";
        super(params);
    }
}
