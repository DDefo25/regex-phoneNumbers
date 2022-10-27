import Undead from "../Undead";

test("creating new Undead", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Undead", attack: 25, defence: 25,
    };
    const result = new Undead({ name: "Ivan" });
    expect(result).toEqual(expectings);
});
