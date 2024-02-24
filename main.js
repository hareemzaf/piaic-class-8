var person = {
    name: "usama",
    age: 23,
    email: "usama@gmail.com"
};
var person2 = {
    name: "tayyab",
    age: 44,
    email: "tayyab@gamil.com"
};
var father = {
    name: "usama",
    age: 23,
    email: "usama@gmail.com",
    children: {
        name: "ariyan",
        age: 15
    }
};
console.log(father);
var boy = {
    name: "tayyab",
    age: 44,
    email: "tayyab@gamil.com"
};
console.log(boy);
// if someone is student but at the same time she is also a teacher
var both = {
    experience: 22,
    name: "hafiza",
    rollNumber: 12344
};
//        Any 
// we can put anything in any 
var a = 10;
var b = true;
a = b;
//   unknown
// if you are not aware of data type you can put unknown but you can't asign this unknown to any datatype like string, boolean ,array etc 
var f = "hello";
var j = true;
f = j;
// j=f
var myname = "zia ";
console.log(myname.toLowerCase());
myname;
var y = "hania";
var u = 22;
y = u;
//    never
var h = "hi";
if (typeof h === "string") {
    console.log(h);
}
else {
    console.log(h);
}
// in this situation else is not able to run 
var meetingDay = "monday";
if (meetingDay === "sunday ") {
    console.log("no meeting ");
}
else if (meetingDay === "monday ") {
    console.log("meeting at 10 :00 am ");
}
// enum
var days;
(function (days) {
    days[days["sunday"] = 0] = "sunday";
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
    days[days["wednsesday"] = 3] = "wednsesday";
    days[days["thursday"] = 4] = "thursday";
    days[days["friday"] = 5] = "friday";
    days[days["saturday"] = 6] = "saturday";
})(days || (days = {}));
console.log(days.sunday);
// it give us index number in the console
var meetingDy = days.monday;
if (meetingDy === days.monday) {
    console.log("meeting at  10:00 am ");
}
else if (meetingDy === days.sunday) {
    console.log("no meeting ");
}
// array
var fruits = ["apple", "orange", "banana"];
var o = [
    {
        name: "haleema "
    },
    {
        name: "hiba"
    },
    {
        name: "hareem"
    }
];
console.log(o[1].name);
