import {getCalendar as getCalendarApi} from "@skolacode/calendar-js";

var today = new Date();
var startDate;
var calendar;
var currentWeek;
var en = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

var _setupCalendar = function setupCalendar(startingDate) {
  startDate = startingDate;
  calendar = getCalendarApi(today.getMonth(), today.getFullYear(), 0);
  _setCurrentWeek();
}

var _setCurrentWeek = function findCurrentWeekIndex() {
  calendar.calendar.forEach(function getWeeks(weeks, i) {
    weeks.forEach(function setCurrentWeek(day) {
      if (day.date.toDateString() == today.toDateString()) {
        currentWeek = i;
      }
    })
  });
  return currentWeek;
}

var getMonthCalendar = function getCalendar() {
  return calendar.calendar;
}

var getWeekCalendar = function setupWeekCalendar() {
  var weekCalendar = calendar.calendar[currentWeek];
  return weekCalendar.map(function addAbbreviation(day) {
    day.isToday = day.date.toDateString() == today.toDateString();
    day.weekday = day.weekday.substring(0, 2);
    return day;
  });
}

var getNextWeekCalendar = function calculateNextWeek() {
  function isLastWeekSameAsNextWeek() {
    return currWeek[0].date.toDateString() == nextWeek[0].date.toDateString();
  }

  function isItThe4thWeek() {
    return currentWeek == 4;
  }

  if (!isItThe4thWeek()) {
    currentWeek = currentWeek + 1;
  } else {
    var currWeek = getWeekCalendar();
    calendar = getCalendarApi(calendar.next.month, calendar.next.year, 0);
    currentWeek = 0;
    var nextWeek = getWeekCalendar();
    currentWeek = isLastWeekSameAsNextWeek() ? 1 : 0;
  }
  return getWeekCalendar();
}

var getMonth = function getCurrentMonth() {
  var month = calendar.month;
  return {
    long: en.monthNames[month],
    short: en.monthNamesShort[month],
  }
}
var getYear = function getCurrentYear() {
  return calendar.year;
}

export function Calendar(startingDate) {
  _setupCalendar(startingDate);
  return {
    getMonthCalendar,
    getWeekCalendar,
    getNextWeekCalendar,
    getMonth,
    getYear,
  }
}