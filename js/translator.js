



document.addEventListener("DOMContentLoaded", function() {
    if(!localStorage.getItem('lang')){
        localStorage.setItem('lang','en')
    }
    console.log("dom loaded")
    // Call your function when the target div is ready
    var gtx = document.getElementsByClassName("goog-te-combo");
    setTimeout(()=>{
            gtx.value = localStorage.getItem('lang')
            console.log("target div is ready")
            gtx[0].addEventListener('change',(event)=>{
                console.log(event.target.value)
                localStorage.setItem('lang', event.target.value);
            })
        },3000)
});

