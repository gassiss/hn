function formatString(value, unit) {
  return `${Math.round(value)} ${unit}${value > 1 ? "s" : ""} ago`;
}

export default function timeSince(timestamp) {
  const then = timestamp * 1000;
  const now = new Date().getTime();

  const seconds = (now - then) / 1000;
  if (seconds < 60) return formatString(seconds, "second");

  const minutes = seconds / 60;
  if (minutes < 60) return formatString(minutes, "minute");

  const hours = minutes / 60;
  if (hours < 24) return formatString(hours, "hour");

  const days = hours / 24;
  if (days < 30) return formatString(days, "day");

  const months = days / 30;
  if (months < 12) return formatString(months, "month");

  const years = months / 12;
  return formatString(years, "year");
}
