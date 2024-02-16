import { ERR, PATH_DATA_FILE } from "../helper/consts";
import { writeInFileSync, getChartContent } from "../helper/fileAction";
import { Measure } from "./measure";
import Perf from "./perf";

class Perfom {
  static measures: Array<Measure> = [];
  static perfoms: Array<any> = [];
  static xValues: Array<any> = [];
  static args: Array<any> = [];
  static labels: Array<string> = [];

  /**
   * @param  {Array<function>} fncs Array of function to compare
   * @param  {Array<any>} args Array of args for the functions to compare
   * @param  {Array<any>} xValues Optional field to set Xvalues for the chart
   *
   */
  static setfuncsToCompareSync(fncs, args, xValues: Array<any> = null): void {
    // console.log("Setup Algorithms ...")
    Perfom.prepareFunctions(fncs, args);

    Perfom.xValues = xValues ? xValues : Perfom.getXvaluesFromArgs(args);
    // console.log("...Done...")
  }

  static getXvaluesFromArgs(args): Array<any> {
    return args.filter(Array.isArray).length ? args[0] : args;
  }
  static prepareFunctions(fncs, args): boolean | Error {
    // Check If fcns parameter is Array of Functions
    if (Array.isArray(fncs)) {
      for (let fnc of fncs) {
        let measuring: Array<any> = [];
        for (let i of args) {
          let result = Perfom.execFunction(fnc, i);
          measuring.push(result);
        }
        Perfom.labels.push(fnc.name);
        Perfom.perfoms.push(measuring);
      }
      return true;
    }
    throw Error(ERR.DOESNT_PASS_ARRAY_OF_FUNCS);
  }
  static execFunction(fnc, args): string | bigint {
    if (Array.isArray(args)) {
      Perf.start(fnc.name);
      fnc(...args);
      Perf.end(fnc.name);
    } else {
      Perf.start(fnc.name);
      fnc(args);
      Perf.end(fnc.name);
    }
    return Perf.result(fnc.name, false);
  }

  static generateChart(): void {
    writeInFileSync(
      PATH_DATA_FILE,
      getChartContent(Perfom.perfoms, Perfom.xValues, Perfom.labels)
    );
  }
}

export default Perfom;
