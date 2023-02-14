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
    if(l === heading_h1[k].length)
    {
        k++
        l = 0
    }
    if(k === heading_h1.length)
    {
        k = 0
    }
    setTimeout(updateHeading,300);
}
