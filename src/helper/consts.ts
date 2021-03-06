export const COLORS:Array<any> = [     
'rgba(255, 99, 132, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)'];

export const enum ERR {
    NAME_NOT_FOUND = "Should set the perfom's name ", 
    NAME_NOT_EXIST = "there's no perfom with this name",
    START_NOT_DECLANCHED = "the perfom doesn't start yet",
    END_NOT_DECLANCHED = "the perfom doesn't end yet",
    DOESNT_PASS_ARRAY_OF_FUNCS = "Should pass an Array of functions",
}

export const PATH_DATA_FILE = `${process.cwd()}/perf/data.js`;
export const PATH_FOLDER_ROOT_PROJECT = `${process.cwd()}/perf`;
export const PATH_FOLDER_CHART_GENERATED=  `${__dirname}/../../perf`;