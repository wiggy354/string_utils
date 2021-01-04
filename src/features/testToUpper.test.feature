Feature: Convert to uppercase

  Scenario Outline: shows the value in UPPERCASE
    Given main page is displayed
    When user enters <strInput>
    Then resulting uppercase string is displayed as <strOutput>

  Examples:
    | strInput | strOutput   |
    |          | is empty    |
    | qwerty   | is "QWERTY" |
    | QwErTy   | is "QWERTY" |
    | QWERTY   | is "QWERTY" |