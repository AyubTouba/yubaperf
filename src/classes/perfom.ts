import { ERR } from "../helper/consts";
import { writeInFileSync, getChartContent } from "../helper/fileAction";
import { Measure } from "./measure";
import { perf } from "./perf";

class Perfom {

    static measures:Array<Measure> = [];
    static perfoms:Array<any>= [];
    static xValues:Array<any>= [];
    static args:Array<any>= [];
    static labels:Array<string>=[]

    /**
     * @param  {Array<function>} fncs Array of function to compare
     * @param  {Array<any>} args Array of args for the functions to compare 
     * @param  {Array<any>} xValues Optional field to set Xvalues for the chart
     * 
     */
    static setfuncsToCompare(fncs,args,xValues=null) {
        console.log("Setup Algorithms ...")
        Perfom.prepareFunctions(fncs,args);
        
        
        Perfom.xValues = xValues ? xValues : Perfom.getXvaluesFromArgs(args);
        console.log("...Done...")
    }

    static getXvaluesFromArgs(args) {
        return Array.isArray(args) ? args[0] : args
    }
    static prepareFunctions(fncs,args) {
        // Check If fcns parameter is Array of Functions 
        if(Array.isArray(fncs)) {
            for(let fnc of fncs) {
                let measuring:Array<any>=[]
                for(let i of args) {
                   let result =  Perfom.execFunction(fnc,i);
                    measuring.push(result);
                }
                Perfom.labels.push(fnc.name);
                Perfom.perfoms.push(measuring);
            }
        }
       throw Error(ERR.DOESNT_PASS_ARRAY_OF_FUNCS);
    }
    static execFunction(fnc,args){
        if(Array.isArray(args)) {
            perf.start(fnc.name);
           fnc(...args);
           perf.end(fnc.name);
        }else {
            perf.start(fnc.name);
            fnc(args);
            perf.end(fnc.name);
        }
        return perf.result(fnc.name,false);
    }

    static generateChart() {
        writeInFileSync(process.cwd()+'/chartjs/data.js',getChartContent(Perfom.perfoms, Perfom.xValues,Perfom.labels))
    }
}

export const perfom = Perfom;