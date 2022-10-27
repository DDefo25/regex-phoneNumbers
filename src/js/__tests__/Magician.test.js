import Magician from "../Magician";

test("creating new Magician", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Magician", attack: 10, defence: 40,
    };
    const result = new Magician({ name: "Ivan" });
    expect(result).toEqual(expectings);
});
