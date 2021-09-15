import { writeInFileSync, getChartContent } from "../helper/fileAction";
import { Measure } from "./measure";
import { perf } from "./perf";

class Perfom {

    static measures:Array<Measure> = [];
    static perfoms:Array<any>= [];
    static xValues:Array<any>= [];
    static args:Array<any>= [];
    static labels:Array<string>=[]

    static setfuncsToCompare(fncs,args) {
        console.log("Setup Algorithms ...")
        Perfom.prepareFunctions(fncs,args);
        
        Perfom.xValues = args;
        console.log("...Done...")
    }

    static prepareFunctions(fncs,args) {
        // Check If fcns parameter is Array of Function 
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