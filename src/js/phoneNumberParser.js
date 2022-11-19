export default function phoneNumberParser(number) {
    // удаляем лишние скобки, пробелы, тире
    const rule1 = /[()\s-]/g;
    let result = number.replace(rule1, "");
    // заменяем 8 на +7
    const rule2 = /^8/;
    result = result.replace(rule2, "+7");
    return result;
}
