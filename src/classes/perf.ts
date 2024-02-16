import { ERR } from "../helper/consts";
import { Measure } from "./measure";

export class Perf {
  static measures: Array<Measure> = [];

  static start(name: string): Perf {
    if (!name) throw Error(ERR.NAME_NOT_FOUND);

    Perf.measures[name] = new Measure(name);
    Perf.measures[name].start();
    return Perf;
  }

  static end(name: string): void {
    if (!name) throw Error(ERR.NAME_NOT_FOUND);
    if (!Perf.measures[name]) throw Error(ERR.NAME_NOT_EXIST);

    Perf.measures[name].end();
  }

  static result(name: string, parsed: boolean = true): bigint | string {
    if (!name) throw Error(ERR.NAME_NOT_FOUND);
    if (!Perf.measures[name]) throw Error(ERR.NAME_NOT_EXIST);

    return Perf.measures[name].result(parsed);
  }
}

export default Perf;
