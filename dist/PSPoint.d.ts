declare const fabricjs: any;
declare class PSPoint extends fabricjs.Point {
  type: string;
  pressure: number;
  constructor(x: number, y: number, pressure: number);
  midPointFrom(p: PSPoint): PSPoint;
  clone(): PSPoint;
}
export default PSPoint;
