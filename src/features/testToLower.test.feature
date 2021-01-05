Feature: Convert to lowercase

  Scenario: show the value for an empty string after deletion
    Given main page is displayed
    When user enters qwerty and then deletes it
    Then resulting lowercase string is displayed as is empty

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
