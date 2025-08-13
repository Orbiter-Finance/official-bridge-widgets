export type Period = {
    period: 'days';
    value: number;
} | {
    period: 'hours';
    value: number;
} | {
    period: 'mins';
    value: number;
} | {
    period: 'secs';
    value: number;
} | null;
export declare const getPeriod: (seconds: number) => Period;
export declare const formatDuration: (start: number, end: number) => string | null;
export declare const formatDurationToNow: (end: number) => string | null;
