**YubaPerf is for measuring code execution performance,comparing between functions code and generating chart to visualize the result .**

---

## Installation

```sh
npm i @youba/yubaperf
# OR
yarn add @youba/yubaperf
```


## Usage

- Comparing two functions and generating the chart to visualize the result, the result located on /perf/index.html file
- Ps: You can pass one function with multipel args to measure the performance that function as well

```typescript
import { Perfom } from "@youba/yubaperf";

function addUpToFirst(n) {
  var total = 0;
  for (var i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToSecond(n) {
  return (n * (n + 1)) / 2;
}
let args = [
  1, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000,
];
Perfom.setfuncsToCompareSync([addUpToFirst, addUpToSecond], args);
Perfom.generateChart();
```

- Measure a function and return the result

```typescript
Perf.start("Algorithm1");
addUpToFirst(17777);
Perf.end("Algorithm1");
console.log(perf.result("Algorithm1"));
```

### Functions

| name | parameters |  Description | 
| --- | --- | --- |
| perfom.setfuncsToCompareSync | (arr: Array<any>, args: any,xValues::Array<any>) | arr: is array of sync functions to compare,args : args to use on the functions,as `args` may be a matrix the xValues parameter came to set bunch or Xvalues for the chart |
| perfom.generateChart()       | NONE                                             | generate chart to visualize the result                                                                                                                                    | the chart publish in the file chartjs/index.html |
| perf.start()                 | (name: string)                                   | name: the name of the performance instance to be started.                                                                                                                 |
| perf.end()                   | (name: string)                                   | name: the name of the performance to stop                                                                                                                                 |
| perf.result()                | (name: string,parsed?: boolean)                  | name: the name of the performance to return the result,parsed (default=true): return a readable result on (nano,mils,second time) or returning a bigint resutl            |
