//const StringChecks = require("../../main/src/stringchecks");
import StringChecks from "../business/stringChecks";

describe("len", () => {
    let stringChecks

    beforeAll(() => {
        stringChecks = new StringChecks()
    })

    test("Various length strings", () => {
        const inputs = [
            "THIS IS A",
            "THIS IS A ",
            "THIS IS A S",
            "THIS IS A ST",
            "THIS IS A STR",
            "THIS IS A STRI",
            "THIS IS A STRIN",
            "THIS IS A STRING",
        ]

        const outputs = [
            9, 10, 11, 12, 13, 14, 15, 16
        ]

        for (let n = 0; n < inputs.length; n++) {
            expect(stringChecks.len(inputs[n])).toEqual(outputs[n])
        }
    })

    test("Empty String", () => {
        expect(stringChecks.len("")).toEqual(0)
    })

    test("Null String", () => {
        expect(() => {
            stringChecks.len(null)
        }).toThrow(new TypeError('String is Null!'))
    })

    test("Not a string", () => {
        expect(() => {
            stringChecks.len(1)
        }).toThrow(new TypeError('Not a String Type!'))
    })
})