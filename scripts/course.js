const courses =[
    {
        name: "CSE 110",
        type: "cse",
        credits: 2,
        complete: true,
    },
    {
        name: "WDD 130",
        type: "wdd",
        credits: 2,
        complete: true,
    },
    {
        name: "CSE 111",
        type: "cse",
        credits: 2,
        complete: true,
    },
    {
        name: "CSE 210",
        type: "cse",
        credits: 2,
        complete: true,
    },
    {
        name: "WDD 131",
        type: "wdd",
        credits: 2,
        complete: true,
    },
    {
        name: "WDD 231",
        type: "wdd",
        credits: 2,
        complete: false,
    },
];

showCourses(courses);

const all = document.querySelector(".all");
const cse = document.querySelector(".cse");
const wdd = document.querySelector(".wdd");

all.addEventListener("click", ()=> {
    showCourses(courses);
});

cse.addEventListener("click", ()=>{
    showCourses(courses.filter(course => course.type === "cse"))
})

wdd.addEventListener("click", ()=>{
    showCourses(courses.filter(course => course.type === "wdd"))
})

function showCourses(filteredCourses) {
    const classes = document.querySelector(".classes");
    const numberCredits = document.querySelector(".numberCredits");
    numberCredits.value = 0;
    while (classes.firstChild){
        classes.firstChild.remove();
    }

    filteredCourses.forEach(course => {
        let p = document.createElement("p");
        if (course.complete){
            p.classList.add("complete");
        }

        p.innerHTML = `${course.name}`

        classes.appendChild(p);

        numberCredits.value += course.credits;
    });

    numberCredits.innerHTML = `${numberCredits.value}`;
}