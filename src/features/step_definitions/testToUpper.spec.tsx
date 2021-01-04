import {defineFeature, loadFeature} from "jest-cucumber";
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from '../../Main/main';

const feature = loadFeature('./src/features/testToUpper.test.feature');

defineFeature(feature, test => {
    test('shows the value in UPPERCASE', ({given, when, then}) => {
        let toUpperField;

        given('main page is displayed', () => {
            // Render the page under test
            render(<Main/>);
        });

        when(/^user enters (.*)$/, (actualTxt) => {
            // Find the field to insert the test data.
            toUpperField = screen.getByLabelText('toUpperField');

            // Simulate the typing of the input string actualTxt
            userEvent.type(toUpperField, actualTxt);
        });


        then(/^resulting uppercase string is displayed as (.*)$/, (expectedTxt) => {
            // Get the screen element containing the resulting text.
            const toUpperText = screen.getByLabelText('toUpperText');

            // Check the expected text against the actual text.
            expect(toUpperText.innerHTML).toEqual(expectedTxt);
        });
    })
})


