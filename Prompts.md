1. here is the project instructions, explain briefly all the level 3 requirements:
Theme: Unit & Component Testing (QA Automation). Engineering Objective: Architect an automated testing suite utilizing Jest and React Testing Library (RTL).

Engineering Context: In enterprise environments, code cannot be merged to production without "Test Coverage." If you refactor a UI component, automated tests are the only safeguard preventing regressions across the broader application.

Phase 1: Environment Configuration & Unit Testing (P0 - Mandatory)

Environment Setup: Install and configure Jest and RTL within your Next.js application. (Note: Configure jsdom to simulate the browser environment).

Unit Tests: Architect isolated tests for a minimum of 3 UI components (e.g., Button, Card, Input).

Execution Criteria: Verify the component mounts without crashing and accurately renders text payloads passed via props.

Phase 2: Interaction & Event Testing (P1 - Priority)

Event Simulation: Architect tests simulating user interactions utilizing userEvent or fireEvent.

Execution Criteria: Audit your form states. If a simulated user clicks an "Increment" action, does the DOM correctly render the mutated integer? Does input field state update upon simulated keystrokes?

Phase 3: Network Mocking & Coverage Reports (P2 - Advanced)

API Mocking: Audit a component executing an asynchronous fetch. You must explicitly mock the network layer (e.g., mocking fetch or axios) to ensure the test suite executes without requiring active internet connectivity.

Coverage Threshold: Execute npm test -- --coverage. Your pipeline must generate a report achieving a minimum of 70% coverage across your audited components.

new assignment, analyze and consider all the requirements and prepare me a file structure for explaining this


2. create a file structure as of for level 3 

3. explain the jest

4. how to test the components

5. how to achieve that 100% statement performance in test

6. write the files of services, test-utils, mocks, components

7. write down the readme file for this project