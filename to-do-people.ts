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
module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Diane D",
    email: "[email protected]"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "[email protected]"
  }

  var loki: ToDoList.IPerson = {
    name: "God of mischief",
    email: "loki@geocities.com",
    phone: "555-666-7777"
  }

  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki
  };
}
