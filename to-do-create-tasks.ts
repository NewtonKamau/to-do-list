// ///  <reference path="to-do-classes-interfaces.ts" />
// ///  <reference path="to-do-people.ts" />
// var people = ToDoList.people;
// var tasks =[];
// tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
// tasks.push(new ToDolist.HomeTask("Buy chocolates.", "Low", people.diane));
// tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
//
// tasks.push (new ToDoList.HobbyTask("Pratices origami."));
// tasks.push(new ToDoList.HobbyTask("Bake a pie."));
//
// var today =new Date();
// var tomorrow =new Date();
// tomorrow.setDate(today.getDate()+1);
// var nextDay = new Date();
// nextDay.setDate(today.getDate() +2);
//
// tasks.push(new ToDoList.WorkTask("Update blog.", "High", people.diane));
// tasks.push(new ToDolist.WorkTask("Go to meeting.","Medium", people.thor));
// tasks.push(new ToDoList.WorkTask("Clean ceiling.", "low", people.loki));
// console.log(tasks);

/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

console.log(tasks);
