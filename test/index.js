const tap = require('tap');
const isEvn = require("./../index");

tap.equal(isEvn(1), false)
tap.equal(isEvn(2), true)
tap.equal(isEvn(20190), true)
tap.equal(isEvn(2019111111), false)
tap.equal(isEvn('foo'), false)
tap.equal(isEvn('/'), false)
tap.equal(isEvn({}), false)
tap.equal(isEvn(undefined), false)
tap.equal(isEvn(null), false)
