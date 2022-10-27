import Character from "./Character";

export default class Daemon extends Character {
    constructor(params) {
        params.attack = 10;
        params.defence = 40;
        params.type = "Daemon";
        super(params);
    }
}
