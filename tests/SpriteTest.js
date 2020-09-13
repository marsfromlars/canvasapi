// a test run compiles some tests for one unit of code to be testet
var testRun = new TestRun("test Sprite");
var s;
// setup code will be performed before every test
testRun.setup(function () {
    s = new Sprite(8, 8);
});
// cleanup code will be performed after every test
testRun.cleanup(function () {
    // nop
});
// a test has a name and may contain a number of assertions
testRun.test("test initialization", function () {
    s.set(5, 3, 'green');
    testRun.assertEqual('Pixel should be green', 'green', s.get(5, 3));
    // testRun.assertTrue( "s should be empty", s.isEmpty() );
    // testRun.assertEquals( "size is 0 initially", 0, s.size() );
    // testRun.assertNull( "result should be null", s.getResult() );
    // testRun.assertNotNull( "name should not be null", s.getName() );
});
// ... add more tests here
// finally print some summary information about the tests
testRun.logSummary();
//# sourceMappingURL=SpriteTest.js.map