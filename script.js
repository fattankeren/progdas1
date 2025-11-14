// Use more compatible declarations (var) to avoid older-browser syntax errors
var learnbtn = document.querySelector('.btn[href="#testimoni"]');
if (learnbtn) {
    learnbtn.addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector("#testimoni");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }); 
}

var form = document.querySelector(".contact-form");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Pesan Berhasil Terkirim!");

        try {
            form.reset();   
        } catch (err) {
            
            console.error('Form reset gagal:', err);
        }
    });
}

const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
    if(document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
