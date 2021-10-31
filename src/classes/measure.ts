import { ERR } from "../helper/consts";

export class Measure {

    startTime:bigint;
    endTime:bigint;
    name:string;
    
    constructor(name){
        this.name = name ;
    }

    start() : void {
      this.startTime = process.hrtime.bigint();
    }

    end() : void {
       this.endTime = process.hrtime.bigint();
    }

    result(parser=true) : bigint | string {
        if(!this.startTime) throw Error(ERR.START_NOT_DECLANCHED);
        if(!this.endTime) throw Error(ERR.END_NOT_DECLANCHED);
        
        let resultTime =  this.endTime - this.startTime;
        return  parser ?  Measure.convertHrtime(resultTime) : resultTime;
    }

   static convertHrtime(hrtime) : string {
        const nanoseconds = hrtime;
        const number = Number(nanoseconds);
        const milliseconds = number / 1000000;
        const seconds = number / 1000000000;
        if(seconds > 1) return `${seconds} seconds`;
        if(milliseconds > 1) return `${milliseconds} ms`;
        if(nanoseconds > 1) return `${nanoseconds} ns`;
        
    }
}
