import { DateTime } from "luxon";

export const getUtcIsoTime = ({ plusHours = 0 }: { plusHours?: number }) =>
  new Date(DateTime.now().plus({ hour: plusHours }).toUTC().toISO());
