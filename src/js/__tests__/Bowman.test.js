import Bowman from "../Bowman";

test("creating new Bowman", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Bowman", attack: 25, defence: 25,
    };
    const result = new Bowman({ name: "Ivan" });
    expect(result).toEqual(expectings);
});

test("level up", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 11, type: "Bowman", attack: 30, defence: 30,
    };
    const bowman = new Bowman({
        name: "Ivan", health: 10, level: 10, type: "Bowman",
    });
    bowman.levelUp();
    expect(bowman).toEqual(expectings);
});

test("throw error of level up", () => {
    const expectings = new Error("Нельзя повысить левел умершего");
    const bowman = new Bowman({
        name: "Ivan", health: 0, level: 10, type: "Bowman",
    });
    function bowmanLevelUp() {
        bowman.levelUp();
    }
    expect(bowmanLevelUp).toThrow(expectings);
});

test("damaging 10 points", () => {
    const expectings = {
        name: "Ivan", health: 92.5, level: 10, type: "Bowman", attack: 25, defence: 25,
    };
    const bowman = new Bowman({
        name: "Ivan", health: 100, level: 10, type: "Bowman",
    });
    bowman.damage(10);
    expect(bowman).toEqual(expectings);
});

test("throw error of level up", () => {
    const expectings = new Error("Персонаж умер");
    const bowman = new Bowman({
        name: "Ivan", health: 0, level: 10, type: "Bowman",
    });
    function bowmanDamaging() {
        bowman.damage(10);
    }
    expect(bowmanDamaging).toThrow(expectings);
});
