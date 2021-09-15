**YubaPerf is for measuring code execution performance,comparing bettween code and generating .**

---

## Usage

* Comparing two functions and generating the chart to visualize the result

```typescript
import { perfom } from "./classes/perfom";

function addUpToFirst(n) {
    var total = 0;
    for (var i = 0; i <= n; i++) {
      total += i;
    }
    return total;
  }

  function addUpToSecond(n) {
    return n * (n + 1) / 2;
  }
let args = [1,100,1000,10000,100000,1000000,10000000,100000000,1000000000];
perfom.setfuncsToCompare([addUpToFirst,addUpToSecond],args);
perfom.generateChart();  // check the file  charts/index.html
```


* Measure a function and return the result 

```typescript

perf.start("Algorithm1");
addUpToFirst(17777)
perf.end("Algorithm1");
console.log(perf.result("Algorithm1"))


```

### Functions

| name | parameters |  Description | 
| --- | --- | --- |
| perfom.setfuncsToCompare | (arr: Array<any>, args: any) | arr: is array of functions to compare,args : args to use on the functions  |
| perfom.generateChart() | NONE | generate chart to visualize the result the chart publish in the file chartjs/index.html  | 
| perf.start() | (name: string) | name: the name of the performance instance to be started.|
| perf.end() | (name: string) | name: the name of the performance to stop |
| perf.result() | (name: string,parsed?: boolean) | name: the name of the performance to return the result,parsed (default=true): return a readable result on (nano,mils,second time) or returning a bigint resutl  |
