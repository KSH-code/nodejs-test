# 클러스터 환경 (쿼드코어)
```js
{ '0': null,
  '1': 
   { totalRequests: 654,
     totalErrors: 0,
     totalTimeSeconds: 20.003308540000003,
     rps: 33,
     meanLatencyMs: 9009,
     maxLatencyMs: 18212,
     minLatencyMs: 150,
     percentiles: { '50': 9013, '90': 16375, '95': 17320, '99': 18046 },
     errorCodes: {},
     instanceIndex: 0 } }
```
```js
{ '0': null,
  '1': 
   { totalRequests: 557,
     totalErrors: 0,
     totalTimeSeconds: 20.004057701999997,
     rps: 28,
     meanLatencyMs: 8351.4,
     maxLatencyMs: 18387,
     minLatencyMs: 165,
     percentiles: { '50': 7865, '90': 15983, '95': 17162, '99': 18095 },
     errorCodes: {},
     instanceIndex: 0 } }
```
# Non-Cluster 환경 (쿼드코어)
```js
{ '0': null,
  '1': 
   { totalRequests: 382,
     totalErrors: 35,
     totalTimeSeconds: 20.003942905,
     rps: 19,
     meanLatencyMs: 7666.2,
     maxLatencyMs: 17982,
     minLatencyMs: 5,
     percentiles: { '50': 8083, '90': 14983, '95': 15676, '99': 17181 },
     errorCodes: { '-1': 35 },
     instanceIndex: 0 } }
```
```js
{ '0': null,
  '1': 
   { totalRequests: 345,
     totalErrors: 27,
     totalTimeSeconds: 20.003092334,
     rps: 17,
     meanLatencyMs: 8298.5,
     maxLatencyMs: 18791,
     minLatencyMs: 97,
     percentiles: { '50': 7810, '90': 16664, '95': 17919, '99': 18673 },
     errorCodes: { '-1': 27 },
     instanceIndex: 0 } }
```
## 실험 결과
일부로 CPU 연산하는 작업을 넣어놓고 테스트를 진행했다.

테스트하는 환경이 여러 프로세스가 돌아가고 있는 환경이라 정확하지는 않은거같다.

멀티 코어의 경우 클러스터 환경을 구성하는게 무조건 이득인거 같다.