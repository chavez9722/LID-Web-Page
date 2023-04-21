/****************************** MENU ******************************/
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", e =>{
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", e =>{
        if (!e.target.matches(".menu a")) return false;
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.remove("is-active");
    });

})(document);

/***************************** CONTACT ****************************/
((d)=>{
    const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

    const url = "https://formsubmit.co/contacto@lidagencia.com";

    $form.addEventListener("submit", e => {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch(url, {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(res => {
            console.log(res)
            res.ok ? res.json() : Promise.reject(res);
        })
        .then(json => {
            console.log(json);
            location.hash = "#gracias";
            $form.reset();
        })
        .catch(err => {
            let message = err.statusText || "Ocurrió un error al enviar. Intente nuevamente"
            console.log(`Error: ${message}`);
            $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`
        })
        .finally(() =>{
            $loader.classList.add("none");
            setTimeout(() => {
                location.hash = "#close";
            }, 3000);
        })
    });

})(document);