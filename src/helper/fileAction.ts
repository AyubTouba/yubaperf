import { COLORS, PATH_FOLDER_CHART_GENERATED, PATH_FOLDER_ROOT_PROJECT } from "./consts";
import {writeFileSync,existsSync} from "fs";
import {copySync} from 'fs-extra';


export function writeInFileSync(pathFile: string, dataText: string): string | false {
    try {

      if (!existsSync(PATH_FOLDER_ROOT_PROJECT)) {
           copySync(PATH_FOLDER_CHART_GENERATED, PATH_FOLDER_ROOT_PROJECT)
        }
      writeFileSync(pathFile, dataText);
      return pathFile;
    } catch (err) {
      console.log(`Error : ${err}`)
      return false;
    }
  }
 
  function toJson(data) : string {
    if (data !== undefined) {
        return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? `${v}#bigint` : v)
            .replace(/"(-?\d+)#bigint"/g, (_, a) => a);
    }
}
export function getChartContent(dataPerf:Array<any>,xValues:Array<any>,labels:Array<string>) : string {
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



