export default class Character {
    constructor(name, type) {
        const possibleTypes = [
            "Bowman",
            "Swordsman",
            "Magician",
            "Daemon",
            "Undead",
            "Zombie",
        ];

        if (!typeof name === "string" || name.length < 2 || name.length > 10) {
            throw new Error("Имя персонажа не соответствует требованиям: строка, min - 2 символа, max - 10");
        }

        if (!possibleTypes.includes(type) && type !== "undefined") {
            throw new Error("Тип персонажа не соответствует существующим");
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error("Нельзя повысить левел умершего");
        }

        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        } else {
            throw new Error("Персонаж умер");
        }
    }
}
