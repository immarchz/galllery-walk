function THTime(dt: Date) {}

export function AppTime(dt1: Date, dt2: Date) {
  return `${dt1.toISOString()} ${dt2.toISOString()}`;
}
