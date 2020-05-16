# TestEnv

### Why should some JS projects run their unit tests in Node, but others should use a browser?

- Typically JS test runners will run the tests in a Node.js process
- Runners like Karma run unit tests in an instance of Chome by default
- Other runners can also be configured to do the same

### But why does this matter?

This project is an Angular application, and as such, it will run within a web browser. The website in this project has a single component. When it is created, this component uses the fs library to read in a file.

The fs library is not available to websites running inside of a web browser because websites are 'sandboxed'. The fs library tries to access the local file system of the computer, and this is not something that websites can do.

If you start the application up with `npm run start` you will see that it fails; this is because it tries to use the fs library.

There is a single unit test in this project which tests this functionality. If you run it by using `npm run test:karma` then the test will be run using the test runner, Karma. You will see that this unit test fails. This failure is for the same reason as to why the website cannot start up - Karma tries to run the test within an instance of Chome, which is sandboxed.

If you run the unit test using the command `npm run test:mocha` then the unit test will be run using the unit test framework Mocha. By default, Mocha runs unit tests within a Node.js process, and as such, it can make use of the fs library. When using Mocha with its default configuration, this unit test will pass.

As you can see, the unit test fails with one test runner and passes with the other. This is why it's crucial to pick a unit test framework which can run unit tests in the same environment that the actual project will run in. Mocha can be used to run tests in the browser, but I have chosen to use Karma for one and Mocha for the other in this instance in an attempt to make things clearer.