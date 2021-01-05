import {defineFeature, loadFeature} from "jest-cucumber";
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../app';

const feature = loadFeature('./src/features/testIsPalindrome.test.feature');

defineFeature(feature, test => {
    test('Show text is a palindrome or not', ({given, when, then}) => {
        let isPalindromeField;

        given('main page is displayed', () => {
            // Render the page under test
            render(<App/>);
        });

        when(/^user enters (.*)$/, (actualTxt) => {
            // Find the field to insert the test data.
            isPalindromeField = screen.getByLabelText('isPalindromeField');

            // Simulate the typing of the input string actualTxt
            userEvent.type(isPalindromeField, actualTxt);
        });

        then(/^the description string is (.*)$/, (expectedTxt) => {
            // Get the screen element containing the resulting text.
            const isPalindromeText = screen.getByLabelText('isPalindromeText');

            // Check the expected text against the actual text.
            expect(isPalindromeText.innerHTML).toEqual(expectedTxt);
        });
    });

    test('show the value for an empty string after deletion', ({given, when, then}) => {
        let isPalindromeField;

        given('main page is displayed', () => {
            // Render the page under test
            render(<App/>);
        });

        when(/^user enters (.*) and then deletes it$/, (actualTxt) => {
            // Find the field to insert the test data.
            isPalindromeField = screen.getByLabelText('isPalindromeField');

            // Simulate the typing of the input string actualTxt
            userEvent.type(isPalindromeField, actualTxt + '{selectall}{backspace}');
        });

        then(/^the description string is (.*)$/, (expectedTxt) => {
            // Get the screen element containing the resulting text.
            const isPalindromeText = screen.getByLabelText('isPalindromeText');

            // Check the expected text against the actual text.
            expect(isPalindromeText.innerHTML).toEqual(expectedTxt);
        });
    })
})


