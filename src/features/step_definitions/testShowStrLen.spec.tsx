import {defineFeature, loadFeature} from "jest-cucumber";
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from '../../Main/main';

const feature = loadFeature('./src/features/testShowStrLen.test.feature');

defineFeature(feature, test => {
    test('Shows empty when no string has been entered', ({given, when, then}) => {
        let showStrLenField;

        given('main page is displayed', () => {
            // Render the page under test
            render(<Main/>);
        });

        when('no string has been entered', () => {
            // Find the field to insert the test data.
            showStrLenField = screen.getByLabelText('showStrLenField');

            // Simulate the typing of the input string actualTxt
            userEvent.type(showStrLenField, '');
        });

        then(/^the resulting length description is set to (.*)$/, (expectedTxt) => {
            // Get the screen element containing the resulting text.
            const showStrLenText = screen.getByLabelText('showStrLenText');

            // Check the expected text against the actual text.
            expect(showStrLenText.innerHTML).toEqual(expectedTxt);
        });
    });

    test('Shows length as a single char when just one char entered', ({given, when, then}) => {
        let showStrLenField;

        given('main page is displayed', () => {
            // Render the page under test
            render(<Main/>);
        });

        when('a single character has been entered', () => {
            // Find the field to insert the test data.
            showStrLenField = screen.getByLabelText('showStrLenField');

            // Simulate the typing of the input string actualTxt
            userEvent.type(showStrLenField, 'a');
        });

        then(/^the resulting length description is set to (.*)$/, (expectedTxt) => {
            // Get the screen element containing the resulting text.
            const showStrLenText = screen.getByLabelText('showStrLenText');

            // Check the expected text against the actual text.
            expect(showStrLenText.innerHTML).toEqual(expectedTxt);
        });
    });

    test('Shows lengths greater than 1', ({given, when, then}) => {
        let showStrLenField;

        given('main page is displayed', () => {
            // Render the page under test
            render(<Main/>);
        });

        when(/^the text (.*) is entered$/, (actualTxt) => {
            // Find the field to insert the test data.
            showStrLenField = screen.getByLabelText('showStrLenField');

            // Simulate the typing of the input string actualTxt
            userEvent.type(showStrLenField, actualTxt);
        });

        then(/^the resulting length description is set to (.*)$/, (expectedTxt) => {
            // Get the screen element containing the resulting text.
            const showStrLenText = screen.getByLabelText('showStrLenText');

            // Check the expected text against the actual text.
            expect(showStrLenText.innerHTML).toEqual(expectedTxt);
        });
    })

})


