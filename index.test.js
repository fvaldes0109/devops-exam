const test = require('node:test');
const assert = require('assert/strict');
const { Sample, server } = require('./index');
test('Sample test',
     () => assert.equal(Sample("localhost").url,
                       "localhost"));
server.close();
