//const { name } = require("ejs");

//'use strict'; // this trong function se mac dinh la undefine


// this.lastName = "ttttt";
// this.firstName ="4444";

var person = {
    firstName: "Anh",
    lastName: "Tranngoc",
    fullName: function() {
        // Việc sử dụng "this" cũng tương tự như việc sử dụng "he"
        // trong câu tiếng Anh ở trên.
        console.log(this.firstName + " " + this.lastName);
       
        //console.log(this);
        //name();
        //b = person;
        //name.bind(b)();/*  */
        // Chúng ta cũng có thể viết thế này.
        //console.log(person.firstName + " " + person.lastName);
        //this hay sử udngj tỏng object
        // let a = this;
        // function name(){
        //    // let a = 3;
        //     console.log(this, 'name2');
        // }
        // name();

        // bind 1
        // apply or call 2
        //object method 3 (nhu fullName)
        // global scope 4
    },
    nameFull: ()=> {
        console.log(this.lastName + " " + this.firstName );
    }
}
// person.fullName.bind({firstName : "111111"}).bind({firstName : "22222"})();
// person.fullName.call({firstName : "lllll"});
// let a = 123;
// var oldName = person.fullName;
// //person.fullName();
// person.fullName = function (){
//     console.log("truoc khi hien thi name");
//     oldName.call(person);
//     console.log("sau khi hien thi name");
// }
person.fullName();
person.nameFull();
console.log(arguments.callee.toString());
// function name1(){
//     console.log(this.lastName, 'name');
// }

// let student = name1.bind({lastName : "Thanh123"}); 
// console.log(student, 'student');
// student();
// name1.bind({lastName : "Thanh"}).apply({lastName : "hhhhh"});
//name1();
// function name(){
//     console.log(a, 'name3');
// }
//person.fullName();