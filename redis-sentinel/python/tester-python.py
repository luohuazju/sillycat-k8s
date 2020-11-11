# -*- encoding=utf-8 -*-

import os
import redis

from redis.sentinel import Sentinel

redis_host = 'redis.sillycat.net'
redis_port = 26379

sentinel = Sentinel([(redis_host, int(redis_port))], socket_timeout=0.1)
print(sentinel.discover_master('mymaster'))
print(sentinel.discover_slaves('mymaster'))

master = sentinel.master_for('mymaster', socket_timeout=0.1)
master.set('foo', 'bar')

print(slave.get('foo'))
print(master.get('carl'))
