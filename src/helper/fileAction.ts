import { COLORS } from "./consts";

const fs = require("fs");

export function writeInFileSync(pathFile: string, dataText: string): string | false {
    try {
      fs.writeFileSync(pathFile, dataText);
      return pathFile;
    } catch (err) {
      console.log(`Error : ${err}`)
      return false;
    }
  }
 
  function toJson(data) {
    if (data !== undefined) {
        return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? `${v}#bigint` : v)
            .replace(/"(-?\d+)#bigint"/g, (_, a) => a);
    }
}
export function getChartContent(dataPerf:Array<any>,xValues:Array<any>,labels:Array<string>) {
        let dataSet:Array<any>= [];
        for(let i=0; i < dataPerf.length;i++) {
            dataSet.push(
                {
                label: labels[i],
                data: dataPerf[i],
                borderColor: COLORS[i] ,
                fill: false
              })
        }
    var data =  {
        labels:xValues ,
        datasets: dataSet
      }
     return 'var data = ' + toJson(data);
}