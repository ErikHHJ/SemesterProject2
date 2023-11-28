export function calculateMinutesAgo(obj) {
  const postDate = new Date(obj);
  const currentDate = new Date();
  const timeDifferenceMillis = currentDate - postDate;
  const minutesDifference = Math.floor(timeDifferenceMillis / (1000 * 60));
  let newTime = 0;
  if (minutesDifference > 60) {
    newTime = Math.round(minutesDifference / 60) + " hours ago";
  } else if (Math.round(newTime / 60) > 24) {
    newTime = Math.round(minutesDifference / 60 / 24) + " days ago";
  } else if (minutesDifference < 60) {
    newTime = minutesDifference + " minutes ago";
  }
  return newTime;
}
