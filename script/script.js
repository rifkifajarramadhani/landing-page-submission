const home = document.getElementsByClassName('home-link');
const skills = document.getElementsByClassName('skills-link');
const aboutMe = document.getElementsByClassName('about-me-link');
const projects = document.getElementsByClassName('projects-link');

for(const homeLink in home) {
    let idx = parseInt(homeLink);
    console.log(idx)
    // if(typeof idx === 'number' && idx !== NaN) {
    //     home[idx].addEventListener('click', function(){
    //         const element = document.querySelector('#hero');
    //         element.scrollIntoView();console.log(home)
    //     })
    // }
}