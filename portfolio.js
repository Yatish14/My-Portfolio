const navBarEl = document.querySelector(".navbar");
const aboutEl  = document.querySelector(".About");

window.addEventListener("scroll",() =>{
    if(window.scrollY > aboutEl.offsetTop - navBarEl.offsetHeight)
    {
        navBarEl.classList.add("scroll");
    }
    else
    {
        navBarEl.classList.remove("scroll");
    }
});


const about_heading = document.querySelector(".aboutH1");
const description = ['Student','Web Developer','Engineer','Programmer'];

let i = 0
let j = 0
updateDescription();

function updateDescription()
{
    j++
    about_heading.innerHTML = `<h1>About Me - I am ${description[i].slice(0,1) === 'E' ? 'an' : 'a'} <span style = "color: #ff7200;">${description[i].slice(0,j)}</span></h1>`;
    if(j === description[i].length)
    {
        i++
        j = 0
    }
    if(i === description.length)
    {
        i = 0
    }
    setTimeout(updateDescription,300);
}

const home_heading = document.querySelector(".homeH1");
const heading_h1 = ['Welcome to My Website!'];

let k = 0
let l = 0

updateHeading();

function updateHeading()
{
    l++
    home_heading.innerHTML = `<h1>${heading_h1[k].slice(0,l)}</h1>`;
    // if(l === heading_h1[k].length)
    // {
    //     k++
    //     l = 0
    // }
    // if(k === heading_h1.length)
    // {
    //     k = 0
    // }
    setTimeout(updateHeading,200);
}

const home      = document.querySelector(".Home");
const form      = document.querySelector(".form");
const times     = document.querySelector(".timesIcon");
const submit    = document.querySelector(".submitbtn");

contactAnchor.addEventListener("click",()=>
{
    home.classList.add("popup");
    form.classList.remove("popup");
    document.body.classList.add("disableScroll");
});
times.addEventListener("click",()=>
{
    home.classList.remove("popup");
    form.classList.add("popup");
    document.body.classList.remove("disableScroll");
});
submit.addEventListener("click",()=>
{
    alert("Message Sent Successfully!");
});