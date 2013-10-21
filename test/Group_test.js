(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('Group', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
      this.group = new Group();
    }
  });

  test('instance', function() {
    expect(1);
    ok(this.group, 'instance');
  })

  test('1 group', function(){
    expect(1);
    deepEqual(new Group(666666666), [{"caracter": "6", "group":  "666666666"}]);
  });

  test('2 group', function(){
    expect(1);
    deepEqual(new Group(166666666), [{"caracter": "1", "group":  "1"}, {"caracter": "6", "group":  "66666666"}]);
  });

  test('3 group', function(){
    expect(1);
    deepEqual(new Group(123123123), [{"caracter": "1", "group":  "111"}, {"caracter": "2", "group":  "222"}, {"caracter": "3", "group":  "333"}]);
  });

  /*
  module('jQuery#awesome', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.awesome(), this.elems, 'should be chainable');
  });

  test('is awesome', function() {
    expect(1);
    strictEqual(this.elems.awesome().text(), 'awesome0awesome1awesome2', 'should be awesome');
  });

  module('jQuery.awesome');

  test('is awesome', function() {
    expect(2);
    strictEqual($.awesome(), 'awesome.', 'should be awesome');
    strictEqual($.awesome({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  });

  module(':awesome selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':awesome').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });
  */

}(jQuery));
