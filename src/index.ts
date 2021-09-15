import { perf } from "./classes/perf";
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
let n = [1,100,1000,10000,100000,1000000,10000000,100000000,1000000000];


perfom.setfuncsToCompare([addUpToFirst,addUpToSecond],n);
perfom.generateChart();

perf.start("Algorithm1");
addUpToFirst(17777)

perf.end("Algorithm1");
console.log(perf.result("Algorithm1"))
