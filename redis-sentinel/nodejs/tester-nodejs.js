const Redis = require('ioredis');

const REDIS_SENTINEL_SERVICE_HOST = 'redis.sillycat.net';
const REDIS_SENTINEL_SERVICE_PORT = 26379;

console.log('REDIS_SENTINEL_SERVICE_HOST:' + REDIS_SENTINEL_SERVICE_HOST);
console.log('REDIS_SENTINEL_SERVICE_PORT:' + REDIS_SENTINEL_SERVICE_PORT);

const redis = new Redis({
    sentinels: [{ host: REDIS_SENTINEL_SERVICE_HOST, port: REDIS_SENTINEL_SERVICE_PORT }],
    name: 'mymaster'
});

redis.set('foo', 'bar');

redis.get('foo', function (err, res) {
    if (!err) {
        console.log(res);
    } else {
        console.log(err);
    }
});

