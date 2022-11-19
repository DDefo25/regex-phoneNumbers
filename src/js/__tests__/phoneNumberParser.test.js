import phoneNumberParser from "../phoneNumberParser";

test.each([
    ["phone number with hooks and eight", "8 (927) 000-00-00", "+79270000000"],
    ["phone number with spaces", "+7 960 000 00 00", "+79600000000"],
    ["international phone number with spaces", "+86 000 000 0000", "+860000000000"],
])(
    ("test %s with %s"),
    (_, params, expecting) => {
        expect(phoneNumberParser(params)).toEqual(expecting);
    },
);
