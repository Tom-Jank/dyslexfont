const par = document.getElementsByClassName('pw-post-body-paragraph');

if(par) {
    for (const value of Object.entries(par)) {
        console.log(value);
    }
}