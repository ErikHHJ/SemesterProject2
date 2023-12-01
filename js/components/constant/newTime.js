export function calculateMinutesAgo(higherDate, lowerDate) {
  const postDate = lowerDate;
  const currentDate = higherDate;
  const timeDifferenceMillis = currentDate - postDate;
  const minutesDifference = Math.floor(timeDifferenceMillis / (1000 * 60));
  let newTime = 0;
  if (minutesDifference > 1440) {
    newTime = Math.round(minutesDifference / 60 / 24) + " days ";
  } else if (minutesDifference > 60) {
    newTime = Math.round(minutesDifference / 60) + " hours ";
  } else if (minutesDifference < 60) {
    newTime = minutesDifference + " minutes";
  } else if (minutesDifference < 1) {
    newTime = "less than a minute";
  }
  return newTime;
}
