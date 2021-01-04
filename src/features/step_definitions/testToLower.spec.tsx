import {defineFeature, loadFeature} from "jest-cucumber";
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from '../../Main/main';

const feature = loadFeature('./src/features/testToLower.test.feature');

defineFeature(feature, test => {
    test('shows the value in LOWERCASE', ({given, when, then}) => {
        let toLowerField;

        given('main page is displayed', () => {
            // Render the page under test
            render(<Main/>);
        });

        when(/^user enters (.*)$/, (actualTxt) => {
            // Find the field to insert the test data.
            toLowerField = screen.getByLabelText('toLowerField');

            // Simulate the typing of the input string actualTxt
            userEvent.type(toLowerField, actualTxt);
        });

        then(/^resulting lowercase string is displayed as (.*)$/, (expectedTxt) => {
            // Get the screen element containing the resulting text.
            const toLowerText = screen.getByLabelText('toLowerText');

            // Check the expected text against the actual text.
            expect(toLowerText.innerHTML).toEqual(expectedTxt);
        });
    })
})


