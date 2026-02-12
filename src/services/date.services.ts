export function getDateRange(start: Date, end: Date) {
  const startUTC = new Date(
    Date.UTC(
      start.getUTCFullYear(),
      start.getUTCMonth(),
      start.getUTCDate(),
      0,
      0,
      0,
      0,
    ),
  );

  const endUTC = new Date(
    Date.UTC(
      end.getUTCFullYear(),
      end.getUTCMonth(),
      end.getUTCDate(),
      23,
      59,
      59,
      999,
    ),
  );

  return { startUTC, endUTC };
}
