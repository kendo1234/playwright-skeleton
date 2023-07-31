# Playwright Example

A simple set of tests using the playwright automation testing tools

## Installation

```bash
npm i
```

## Usage

```bash
npm test
npm run test-playwright
```

## Contents

### Element Interactions - A set of examples to demonstrate standard element manipulation from a playwright perspective 

- Check box
- Dropdown
- Element state
- Alert handling
- iFrames
- Making music - just clicking things
- Typing text

### Test Examples

#### Jest as runner 

- firstTest.test.ts - The test here is very simple, it loads a page and does a rudimentary check. However, the test uses a more standard structure, with setup and teardown configuration

*Note*: This test demonstrates a failiure to assert on webkit, so when running you will see 1 pass and 1 fail

#### Playwright as runner (with Page Object Pattern)

- pageObjectPattern.test.ts - This is another very simple page render assertion. However, this one does not use jest as a runner and is 'self-contained' within a playwright context. Additionally, the initial page navigation and assertion is abstracted out to a page object. The test itself pulls in that page object to utilise it's functions. This is a standard way to design a large scale test suite





