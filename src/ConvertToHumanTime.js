export default function convertToHumanTime(durantion) {
  let s = parseInt((durantion / 1000) % 60, 10);
  const m = parseInt((durantion / (1000 * 60)) % 60, 10);

  s = (s < 10) ? `0${s}` : s;

  return `${m}:${s}`;
}
