### Script de teste

```js
yarn autocannon -c 500 -d 30 --workers 10 --renderStatusCodes --latency --warmup [ -c 1 -d 2 ] localhost:3000
```

Running 30s test @ http://localhost:3000
500 connections
10 workers
