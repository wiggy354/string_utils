//const StringChecks = require("../../main/src/stringchecks");
import StringChecks from "../business/stringChecks";

describe("isEmpty", () => {
    let stringChecks

    beforeAll(() => {
        stringChecks = new StringChecks()
    })

    test("Not Empty String", () => {
        expect(stringChecks.isEmpty("I am not empty!")).toBeFalsy();
    })

    test("Empty String", () => {
        expect(stringChecks.isEmpty("")).toBeTruthy();
    })

    test("Null String", () => {
        expect(stringChecks.isEmpty(null)).toBeTruthy();
    })

    test("Not a string", () => {
        expect(() => {
            stringChecks.len(1)
        }).toThrow(new TypeError('Not a String Type!'))
    })
})