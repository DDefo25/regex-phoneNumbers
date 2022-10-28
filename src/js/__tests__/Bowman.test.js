import Bowman from "../Bowman";

test("creating new Bowman", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Bowman", attack: 25, defence: 25,
    };
    const result = new Bowman("Ivan");
    expect(result).toEqual(expectings);
});

test("error of wrong type", () => {
    const expecting = new Error("Тип персонажа не соответствует существующим");
    function createBowman() {
        const result = new Bowman("Ivan", "Tank");
        return result;
    }
    expect(createBowman).toThrow(expecting);
});

test("level up", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 2, type: "Bowman", attack: 30, defence: 30,
    };
    const bowman = new Bowman("Ivan", "Bowman");
    bowman.health = 10;
    bowman.levelUp();
    expect(bowman).toEqual(expectings);
});

test("throw error of level up", () => {
    const expectings = new Error("Нельзя повысить левел умершего");
    const bowman = new Bowman("Ivan", "Bowman");
    bowman.health = 0;
    function bowmanLevelUp() {
        bowman.levelUp();
    }
    expect(bowmanLevelUp).toThrow(expectings);
});

test("damaging 10 points", () => {
    const expectings = {
        name: "Ivan", health: 92.5, level: 1, type: "Bowman", attack: 25, defence: 25,
    };
    const bowman = new Bowman("Ivan", "Bowman");
    bowman.damage(10);
    expect(bowman).toEqual(expectings);
});

test("throw error of level up", () => {
    const expectings = new Error("Персонаж умер");
    const bowman = new Bowman("Ivan", "Bowman");
    bowman.health = 0;
    function bowmanDamaging() {
        bowman.damage(10);
    }
    expect(bowmanDamaging).toThrow(expectings);
});
