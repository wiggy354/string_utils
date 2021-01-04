Feature: Convert to lowercase

  Scenario Outline: shows the value in LOWERCASE
    Given main page is displayed
    When user enters <strInput>
    Then resulting lowercase string is displayed as <strOutput>

  Examples:
    | strInput | strOutput   |
    |          | is empty    |
    | qwerty   | is "qwerty" |
    | QwErTy   | is "qwerty" |
    | QWERTY   | is "qwerty" |