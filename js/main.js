const links = [
    {
        label: "Week 2",
        url: "week2/index.html"
    },
    {
        label: "Week 3",
        url: "week3/index.html"
    },
    {
        label: "Week 4",
        url: "week4/index.html"
    },
    {
        label: "Week 5",
        url: "week5/index.html"
    },
    {
        label: "Week 6",
        url: "week6/index.html"
    },
    {
        label: "Week 7",
        url: "week7/index.html"
    },
    {
        label: "Week 8",
        url: "week8/index.html"
    },
    {
        label: "Week 9",
        url: "week9/index.html"
    },
    {
        label: "Week 10",
        url: "week10/index.html"
    },
   
]

function myFunction(){
    var i, text;
    var ol = document.getElementById("links");
    for(i = 0; notes.length; i++){
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", notes[i].url);
        a.innerHTML = notes[i].label;
        li.appendChild(a);
        ol.appendChild(li);
    }
}

myFunction();