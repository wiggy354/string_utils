Feature: Determine length of given string

  Scenario: Shows empty when no string has been entered
    Given main page is displayed
    When no string has been entered
    Then the resulting length description is set to is empty

  Scenario: show the value for an empty string after deletion
    Given main page is displayed
    When user enters qwerty and then deletes it
    Then the resulting length description is set to is empty

  Scenario: Shows length as a single char when just one char entered
    Given main page is displayed
    When a single character has been entered
    Then the resulting length description is set to is 1 character long

  Scenario Outline: Shows lengths greater than 1
    Given main page is displayed
    When the text <strInput> is entered
    Then the resulting length description is set to <strOutput>

    Examples:
      | strInput       | strOutput             |
      | qw             | is 2 characters long  |
      | qwe            | is 3 characters long  |
      | qwer           | is 4 characters long  |
      | qwertyqwer     | is 10 characters long |
      | qwertyqwert    | is 11 characters long |
      | qwertyqwerty   | is 12 characters long |
      | qwertyqwertyq  | is 13 characters long |
      | qwertyqwertyqw | is 14 characters long |