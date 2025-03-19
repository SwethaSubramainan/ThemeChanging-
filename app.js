// var on_btn = document.getElementById("dark");
// var off_btn = document.getElementById("light");
var body = document.querySelector("body");

function dark()
{
    body.className=""; // this is for empty
    body.classList.add("dark");
}

function light()
{
    body.className="";
    body.classList.add("light");
}