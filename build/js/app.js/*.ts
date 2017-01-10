var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// module ToDoList {
//   export interface ITask{
// description:string;
// done:boolean;
// priority:string;
// markDone(): void;
// assignedTo?: IPerson ;
//   }
//   export interface IPerson {
//     name: string;
//     email: string;
//     phone?: string;
//   }
//   export class Task implements ITask{
//     done: boolean = false;
//     constructor(public description: string, public priority: string, public assignedTo?: IPerson){
//       markDone(){
//         this.done = true;
//       }
//     }
//   }
//   export class WorkTask extend Task {
//     constructor(public description: string, public priority: string,public assignedTo?: IPerson){
//       super(description, priority);
//     }
//   }
//   export class WorkTask extends Task {
//     constructor(public dueDate: Date, public description: string, public priority: string, assignedTo: IPerson){
//       super(description, priority, assignedTo);
//     }
//   }
//   export class HobbyTask extends Task{
//     constructor(public description: string)
//     {
//       super(description, "low");
//     }
//   }
// }
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            var _this = _super.call(this, description, priority) || this;
            _this.description = description;
            _this.priority = priority;
            _this.assignedTo = assignedTo;
            return _this;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            var _this = _super.call(this, description, priority, assignedTo) || this;
            _this.dueDate = dueDate;
            _this.description = description;
            _this.priority = priority;
            _this.assignedTo = assignedTo;
            return _this;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            var _this = _super.call(this, description, "low") || this;
            _this.description = description;
            return _this;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
// /// <reference path="to-do-classes-interfaces.ts" />
// module ToDoList {
//   var diane: ToDoList.Iperson = {
//     name:"Diane D",
//     email:"[email protected]"
//   }
//   var thor: ToDoList.Iperson = {
//     name:"Thor son of Odin",
//     email:"[email protected]"
//   }
//   var loki: ToDoList.Iperson = {
//     name:"God of mischief",
//     email:"loki@geocities.com",
//     phone: "555-666-7777"
//   }
//   export var people = {
//     "diane": diane,
//     "thor": thor,
//     "loki":loki
//   };
// }
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "[email protected]"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "[email protected]"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
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
