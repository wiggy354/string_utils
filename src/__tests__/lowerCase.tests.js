//const StringChecks = require("../../main/src/stringchecks");
import StringChecks from "../business/stringChecks";

describe("toLower", () => {
    let stringChecks

    beforeAll(() => {
        stringChecks = new StringChecks()
    })

    test("All chars are upper case", () => {
        const inputs = ["THIS IS A STRING", "THIS IS ALSO A STRING"]
        const outputs = ["this is a string", "this is also a string"]

        for (let n = 0; n < inputs.length; n++) {
            expect(stringChecks.toLower(inputs[n])).toEqual(outputs[n])
        }
    })

    test("Mixed upper and lower case", () => {
        const  inputs = ["ThIs Is A StRiNg", "THIS is ALSO a STRING"]
        const outputs = ["this is a string", "this is also a string"]

        for (let n = 0; n < inputs.length; n++) {
            expect(stringChecks.toLower(inputs[n])).toEqual(outputs[n])
        }
    })

    test("Empty String", () => {
        expect(stringChecks.toLower("")).toEqual("")
    })

    test("Null String", () => {
        expect(() => {
            stringChecks.toLower(null)
        }).toThrow(new TypeError('String is Null!'))
    })

    test("Not a string", () => {
        expect(() => {
            stringChecks.toLower(1)
        }).toThrow(new TypeError('Not a String Type!'))
    })
})