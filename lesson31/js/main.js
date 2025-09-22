for(i = 0; 1<5; i++){console.log(1);}
    


var x = 0;

do{x++;
    console.log(x);}
    

while (x<=4);

var j = 0;
while(j<5){
    j = j + 1;
    console.log(j);
}

let n=0;
let m=0;
while(n < 3) {
    n++;
    m+= n;
    console.log(n)
    console.log(m);
}

var person = {
    firstname: "John",
    lastname: "Doe",
    age: 25
};
var text = '';
var z;
for (z in person) {
    text += person[z];
}

console.log(text + ' ');

var names = ['Steve', 'Bill', 'Mark'];
var y;
for(y of names) {
    console.log(y);
}

var students=['Nil', 'Olisa'];
for(i=0; i<students.length; i++) {
    document.write(students[i]+ '<br>');
}