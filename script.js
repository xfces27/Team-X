let div = document.querySelectorAll('div');
let navbar = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    div.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height) {
            navbar.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navbar a [href*=' + id + ']').classList.add('active');
            });
        };
    });
};