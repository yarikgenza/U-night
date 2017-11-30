import moment from 'moment';

export const getDayNumber = (date) => {
  const dow = moment(date);
  return dow.format('D')
}

export const getMonthText = (date) => {
  const dow = moment(date);
  return dow.format('MMM');
}

export const getWeekDayText = (date) => {
  const dow = moment(date);
  return dow.format('dddd');
}

export const getDateHour = (date) => {
  const dow = moment(date);
  return dow.format('H');
}

export const getDateMinute = (date) => {
  const dow = moment(date);
  return dow.format('m');
}