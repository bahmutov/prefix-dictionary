gt.module('dictionary');

var dictionary = require('..');

gt.test('basic', function () {
  gt.arity(dictionary.isWord, 1, 'isWord');
  gt.arity(dictionary.isWordPrefix, 1, 'isWordPrefix');
});

gt.test('hello', function () {
  gt.ok(dictionary.isWord('hello'), 'hello is a word');
  gt.ok(dictionary.isWordPrefix('hellhol'), 'hellhol is a prefix');
});

gt.test('invalid', function () {
  gt.ok(!dictionary.isWord('aaa'), 'aaa is not a word');
  gt.ok(!dictionary.isWordPrefix('aaa'), 'aaa is not a prefix');
});