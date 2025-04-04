let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () =>{
     search.classList.toggle("active");
     menuBtn.classList.remove("active");
}

let menuBtn = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () =>{
     menuBtn.classList.toggle("active");
     search.classList.remove("active");
}

//hide menu and scroll-box on scroll

window.onscroll = () =>{
     menuBtn.classList.remove('active');
     search.classList.remove('active');
}

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
     header.classList.toggle('shadow',window.scrollY > 1)
});

let nav = document.querySelectorAll(".navbar li a")
        
     function removeAct(){
            nav.forEach(list =>{
                list.classList.remove("active")
        })
        }
        nav.forEach(list =>{
            list.addEventListener("click",()=>{
                removeAct()
                list.classList.add("active")
            })
})



function sendMail() {
     let parms = {
          name : document.querySelector('#name').value,
          email : document.querySelector('#email').value,
          message : document.querySelector('#message').value,
     }

     emailjs.send("service_56ay4ru", "template_fr2vuk5", parms).then(alert("Email sent successfully!!"))
}

/* const sendBtn = document.querySelector('#send-btn')
sendBtn.addEventListener('click', (e)=>{
     sendMail()
}) */