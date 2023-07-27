function convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    return `${hours}hr ${remainingMinutes}mins`;
  }


export default convertMinutesToHoursAndMinutes;