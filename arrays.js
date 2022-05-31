//---------ARRAYS-----------
// Q.1
var cities = [];
// Q.3
var stringArray= ["Ali", "Hassan", "Usman"];
// Q.4
var numsArray= [1, 2, 3, 4, 5, 6];
// Q.5
var booleanArray= [true, false];
// Q.6
var mixArray= [1, 2, 3, "Hi", "Hello", true, false];
// Q.7
var pakistanNetworks = [];
pakistanNetworks.push("Zong", "Jazz", "Ufone", "Telenor");
document.write("<b>Mobile networks in Pakistan: </b>"+pakistanNetworks);
// Q.8
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h2>Qualifications :</h2>");
document.write("1)"+" "+qualifications[0]+"</br>");
document.write("2)"+" "+qualifications[1]+"</br>");
document.write("3)"+" "+qualifications[2]+"</br>");
document.write("4)"+" "+qualifications[3]+"</br>");
document.write("5)"+" "+qualifications[4]+"</br>");
document.write("6)"+" "+qualifications[5]+"</br>");
document.write("7)"+" "+qualifications[6]+"</br>");
document.write("8)"+" "+qualifications[7]+"</br>");
// Q.9
var movies = [];
movies[0]= "Avengers: Age of Ultron";
movies[1]= "Spectre";
movies[2]= "Jurassic World";
movies[3]= "Inside out";
document.write("<h2>Top movies of 2015</h2>");
document.write("1)"+" "+movies[0]+"</br>");
document.write("2)"+" "+movies[1]+"</br>");
document.write("3)"+" "+movies[2]+"</br>");
document.write("4)"+" "+movies[3]+"</br>");
document.write("<h4>"+"Length of array: "+ movies.length +"</h4>");
// Q.10
var  favtCar= ["Audi", "Volvo", "Ford", "Lamborghini"];
document.write("<h2> Favorite Cars </h2>");
document.write("<h4>"+favtCar+"</h4>");
document.write("First index of the array: "+"</br>");
document.write("Car at first index of the array: "+favtCar[0]+"</br>");
document.write("Last index of the array: "+"</br>");
document.write("Car at last index of the array: "+favtCar[3]+"</br>");
document.write("</br>");
document.write("</br>");
// Q.11
var students= ["Michael", "John", "Tony"];
var scores= [320, 230, 480];
var totalMarks= 500;

var percentageStd1= (scores[0]*100)/totalMarks;
var percentageStd2= (scores[1]*100)/totalMarks;
var percentageStd3= (scores[2]*100)/totalMarks;
document.write("Score of "+students[0]+" is "+scores[0]+". Percentage is "+percentageStd1+"%"+"</br>");
document.write("Score of "+students[1]+" is "+scores[1]+". Percentage is "+percentageStd2+"%"+"</br>");
document.write("Score of "+students[2]+" is "+scores[2]+". Percentage is "+percentageStd3+"%"+"</br>");
document.write("</br>"); 
// Q.12"
var colors= ["red", "yellow", "green"];
document.write("<b>Colors: </b>"+colors +"</br>");

// Q.12(a)
var addColorStart= prompt("Enter color that you want to add to the beginning.");
var letsAdd= colors.unshift(addColorStart);
document.write("<b> Added color to beginning: </b>"+colors+"</br>");
// Q.12(b)
var addColorEnd= prompt("Enter color that you want to add to the end.");
var letsAdd= colors.push(addColorEnd);
document.write("<b> Added color to End: </b>"+colors+"</br>");
// Q.12(c)
var twoMoreColorStart= prompt("Add two more colors to the beginning.");
var letsAdd= colors.unshift(twoMoreColorStart);
document.write("<b> Added two more colors to beginning: </b>"+colors+"</br>");
// Q.12(d)
var delColorStart= colors.shift();
document.write("<b>Colors after deleted first one: </b>"+colors +"</br>");
// Q.12(e)
var delColorEnd= colors.pop();
document.write("<b>Colors after deleted last one: </b>"+colors +"</br>");
document.write("</br>");
document.write("</br>");
// Q.13
var stdScores = [14,18,13,12,23,50,20];
document.write("Scores of Students :  " + stdScores);
document.write("<br>");
var sortedScores = stdScores.sort()
document.write("Ordered Scores of Students :  " + stdScores);
document.write("</br>");
document.write("</br>");
// Q.15
var cities=["Karachi", "Lahore", "Islamabad","Quetta", "Peshawar"];
document.write("<b>Cities list: </b> <br>"+cities);
document.write("<br>");
var selected=cities.slice(2,4);
document.write("<b>Selected cities: </b> <br>"+selected);
document.write("<br>");document.write("</br>");document.write("</br>");
// Q.16
var arr = ["This", "is", "my", "cat"];
document.write("Array: <br>"+arr +"<br>");
var join= arr.join(" ");
document.write("String: <br>"+join +"<br>");
document.write("<br>")

// Q.17
document.write("<h2>First In-First Out</h2>");
var newArray=["keyboard", "mouse", "printer", "monitor"];
document.write("<b>Device: </b>"+newArray+"<br>");
var firstAdd= newArray.shift();
document.write("<b>Out: </b>"+newArray+"<br>");
var secAdd= newArray.shift();
document.write("<b>Out: </b>"+newArray+"<br>");
var thirdAdd= newArray.shift();
document.write("<b>Out: </b>"+newArray+"<br>");

//Q.18
document.write("<h2>Last In-First Out</h2>");
var newArray=["keyboard", "mouse", "printer", "monitor"];
document.write("<b>Device: </b>"+newArray+"<br>");
var firstDel=newArray.pop();
document.write("<b>Out: </b>"+newArray+"<br>");
var secDel=newArray.pop();
document.write("<b>Out: </b>"+newArray+"<br>");
var thirdDel=newArray.pop();
document.write("<b>Out: </b>"+newArray+"<br>");
document.write("</br>"); 
// Q.19
var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(`
    <select>
        <option>${phones[0]}</option>
        <option>${phones[1]}</option>
        <option>${phones[2]}</option>
        <option>${phones[3]}</option>
        <option>${phones[4]}</option>
        <option>${phones[5]}</option>
    </select>
    
    <style>
        select {
            padding: 10px;
        }
    </style>
`);
