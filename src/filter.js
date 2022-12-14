import { isToday, isTomorrow, isThisWeek, isThisMonth, isPast, isThisYear, addHours } from 'date-fns'

const all = (tasks) => {
  return tasks;
}

const today = (tasks) => {
  return tasks.filter((task) => isToday(task.due));
}
const tomorrow = (tasks) => {
  return tasks.filter((task) => isTomorrow(task.due));
}
const week = (tasks) => {
  return tasks.filter((task) => isThisWeek(task.due));
}
const month = (tasks) => {
  return tasks.filter((task) => isThisMonth(task.due));
}

const year = (tasks) => {
  return tasks.filter((task) => isThisYear(task.due));
}

const project = (tasks, projName) => {
  if (projName == "Default") {return tasks;}
  return tasks.filter((task) => task.project == projName);
}
const overdue = (tasks) => {
  let overdueBy = 16; //h
  return tasks.filter((task) =>{
    let date = addHours(task.due, overdueBy);
    return isPast(date);
  });
}

const unfinished = (tasks) => {
  return tasks.filtr((task) => !task.done);
}

const done = (tasks) => {
  return tasks.filter((task) => task.done);
}


const filter = {all, today, tomorrow, week, month, project, overdue, done, unfinished, year}

export {filter}
