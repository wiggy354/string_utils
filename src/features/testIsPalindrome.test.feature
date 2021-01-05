Feature: Check for Palindrome

  Scenario: show the value for an empty string after deletion
    Given main page is displayed
    When user enters qwerty and then deletes it
    Then the description string is is empty

  Scenario Outline: Show text is a palindrome or not
    Given main page is displayed
    When user enters <strInput>
    Then the description string is <strOutput>

  Examples:
    | strInput     | strOutput           |
    |              | is empty            |
    | qwertytrewq  | is a palindrome!    |
    | qwertyytrewq | is a palindrome!    |
    | QwErTyYtReWq | is a palindrome!    |
    | QWERTYytrewq | is a palindrome!    |
    | QwErTy       | is not a palindrome |
    | qwerty       | is not a palindrome |
    | QWERTY       | is not a palindrome |
    | qwertyQWERTY | is not a palindrome |
    | qwertyqwerty | is not a palindrome |

