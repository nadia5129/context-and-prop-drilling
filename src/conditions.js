const icons = {
  Sunny: "☀️",
  "Partly cloudy": "⛅",
  Cloudy: "☁️",
  Showers: "🌦️",
  Rain: "🌧️",
  Snow: "🌨️",
};

export function conditionIcon(condition) {
  return icons[condition] ?? "🌡️";
}

export function hourLabel(hour) {
  const suffix = hour < 12 ? "AM" : "PM";
  const twelve = hour % 12 === 0 ? 12 : hour % 12;
  return `${twelve} ${suffix}`;
}
