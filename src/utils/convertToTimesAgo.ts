import moment from "moment"

/**
 * Function to display published time in a text format
 */
export function convertToTimesAgo(timestamp: number): string {

  const currentTime = moment()
  const targetTime = moment.unix(timestamp)
  const timeDiff = currentTime.diff(targetTime, 'minutes')

  const timeUnits = [
    { unit: 'year', divisor: 525600 }, // number of minutes in a unit
    { unit: 'month', divisor: 43800 },
    { unit: 'week', divisor: 10080},
    { unit: 'day', divisor: 1440 },
    { unit: 'hour', divisor: 60 },
    { unit: 'minute', divisor: 1 }
  ]

  for (const unit of timeUnits) {
    if (timeDiff >= unit.divisor) {
      const count = Math.floor(timeDiff / unit.divisor);
      return `${count} ${unit.unit}${count !== 1 ? 's' : ''} ago`;
    }
  }
  
  return 'Just now';
}