/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import App from "../src/App";

test('My first test', () => {
    expect(1).toBe(1);
    expect(App.count).toBe(3);
});

test("Renders the main page", () => {
    render(<App />);
    expect(true).toBeTruthy();
});