Feature: Convert to uppercase

  Scenario: show the value for an empty string after deletion
    Given main page is displayed
    When user enters qwerty and then deletes it
    Then resulting uppercase string is displayed as is empty

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