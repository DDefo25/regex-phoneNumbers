import Daemon from "../Daemon";

test("creating new Daemon", () => {
    const expectings = {
        name: "Ivan", health: 100, level: 1, type: "Daemon", attack: 10, defence: 40,
    };
    const result = new Daemon("Ivan");
    expect(result).toEqual(expectings);
});
