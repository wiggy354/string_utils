//const StringChecks = require("../../main/src/stringchecks");
import StringChecks from "../business/stringChecks";

describe("toUpper", () => {
    let stringChecks

    beforeAll(() => {
        stringChecks = new StringChecks()
    })

    test("All chars are lower case", () => {
        const  inputs = ["this is a lower case string", "this is also a lower case string"]
        const outputs = ["THIS IS A LOWER CASE STRING", "THIS IS ALSO A LOWER CASE STRING"]

        for (let n = 0; n < inputs.length; n++) {
            expect(stringChecks.toUpper(inputs[n])).toEqual(outputs[n])
        }
    })

    test("Mixed upper and lower case", () => {
        const  inputs = ["ThIs Is A LoWeR CaSe StRiNg", "THIS is ALSO a LOWER case STRING"]
        const outputs = ["THIS IS A LOWER CASE STRING", "THIS IS ALSO A LOWER CASE STRING"]

        for (let n = 0; n < inputs.length; n++) {
            expect(stringChecks.toUpper(inputs[n])).toEqual(outputs[n])
        }
    })

    test("Empty String", () => {
        expect(stringChecks.toUpper("")).toEqual("")
    })

    test("Null String", () => {
        expect(() => {
            stringChecks.toUpper(null)
        }).toThrow(new TypeError('String is Null!'))
    })

    test("Not a string", () => {
        expect(() => {
            stringChecks.toUpper(1)
        }).toThrow(new TypeError('Not a String Type!'))
    })
})