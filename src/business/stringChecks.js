import ReadFromFiles from './readFromFiles'
//const ReadFromFiles = require('./readfromfiles')

class StringChecks {
    toUpper(str) {
        if (str == null) {
            throw new TypeError('String is Null!')
        } else if (typeof str != 'string') {
            throw new TypeError('Not a String Type!')
        }

        return str.toUpperCase()
    }

    toLower(str) {
        if (str == null) {
            throw new TypeError('String is Null!')
        } else if (typeof str != 'string') {
            throw new TypeError('Not a String Type!')
        }

        return str.toLowerCase()
    }

    len(str) {
        if (str == null) {
            throw new TypeError('String is Null!')
        } else if (typeof str != 'string') {
            throw new TypeError('Not a String Type!')
        }

        return str.length
    }

    isPalindrome(str) {
        if (str == null) {
            throw new TypeError('String is Null!')
        } else if (typeof str != 'string') {
            throw new TypeError('Not a String Type!')
        } else if (str.length === 0) {
            return false
        }

        let result = true;
        let lc_str = str.toLowerCase()
        for (let n = 0; (n <= lc_str.length / 2) && result; n++) {
            result = (lc_str[n] === lc_str[lc_str.length - n - 1])
        }

        return result;
    }

    isEmpty(str) {
        return (str != null ? str.length === 0 : true)
    }

    equals(str1, str2) {
        if (str1 == null && str2 == null) {
            return true;
        } else {
            return (str1 != null && str1.equal(str2))
        }
    }

    concatFromFiles() {
        const readFromFiles = new ReadFromFiles();
        return readFromFiles.readFromFile1() + ', '
            + readFromFiles.readFromFile2() + ', '
            + readFromFiles.readFromFile3() + '.'
    }
}

//module.exports = StringChecks
export default StringChecks
