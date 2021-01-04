//const StringChecks = require("../../main/src/stringchecks");
import StringChecks from "../business/stringChecks";

describe("isPalindrome", () => {
    let stringChecks

    beforeAll(() => {
        stringChecks = new StringChecks()
    })

    test("Various strings", () => {
        const inputs = [
            "madam", "qwertyytrewq",
            "qwerty", "asda",
            "MaDaM", "MADam", "QWERTYytrewq", "QwErTyYtReWq"
        ]
        const outputs = [
            true, true,
            false, false,
            true, true, true, true
        ]

        for (let n = 0; n < inputs.length; n++) {
            expect(stringChecks.isPalindrome(inputs[n])).toEqual(outputs[n])
        }
    })

    test("Empty String", () => {
        expect(stringChecks.isPalindrome("")).toEqual(false)
    })

    test("Null String", () => {
        expect(() => {
            stringChecks.isPalindrome(null)
        }).toThrow(new TypeError('String is Null!'))
    })

    test("Not a string", () => {
        expect(() => {
            stringChecks.isPalindrome(1)
        }).toThrow(new TypeError('Not a String Type!'))
    })
})