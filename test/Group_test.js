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

  test('012345679 = ["012345679"]', function(){
    expect(1);
    deepEqual(new Group("012345679"), ["012345679"]);
  });

  test('666666666 = ["666666666"]', function(){
    expect(1);
    deepEqual(new Group(666666666), ["666666666"]);
  });

  test('166666666 = ["1","66666666"]', function(){
    expect(1);
    deepEqual(new Group(166666666), ["1","66666666"]);
  });

  test('025323232 = ["025","323232"]', function(){
    expect(1);
    deepEqual(new Group("025323232"), ["025","323232"]);
  });

  test('125252525 = ["1","25252525"]', function(){
    expect(1);
    deepEqual(new Group("125252525"), ["1","25252525"]);
  });

  test('047777777 = ["04","7777777"]', function(){
    expect(1);
    deepEqual(new Group("047777777"), ["04","7777777"]);
  });

  test('58123123 = ["58","123123"]', function(){
    expect(1);
    deepEqual(new Group(58123123), ["58","123123"]);
  });

  test('aaabbb = ["aaa","bbb"]', function(){
    expect(1);
    deepEqual(new Group("aaabbb"), ["aaa","bbb"]);
  });

  test('123123123 = ["123123123"]', function(){
    expect(1);
    deepEqual(new Group(123123123), ["123123123"]);
  });

  test('101230123 = ["1","01230123"]', function(){
    expect(1);
    deepEqual(new Group(101230123), ["1","01230123"]);
  });

  test('225252525 = ["2","25252525"]', function(){
    expect(1);
    deepEqual(new Group(225252525), ["2","25252525"]);
  });

  test('225252525 divide = ["2","25","25","25","25"]', function(){
    expect(1);
    deepEqual(new Group(225252525, true), ["2","25","25","25","25"]);
  });

  test('123123123 divide = ["123","123","123"]', function(){
    expect(1);
    deepEqual(new Group(123123123, true), ["123","123","123"]);
  });

}(jQuery));
