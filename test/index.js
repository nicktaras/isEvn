const tap = require('tap');
const isEvn = require("./../index");

tap.equal(isEvn(1), false)
tap.equal(isEvn(2), true)
tap.equal(isEvn('foo'), false)
tap.equal(isEvn('/'), false)
