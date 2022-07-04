export interface Test {
    testId: string;
    title? : string;
    autograded? : boolean;
    pageIds : string[];
}

export interface TestResult {
    grade : number;
}