document.addEventListener('DOMContentLoaded', function () {
    // Botón Seguir / Siguiendo
    const followButton = document.getElementById('followButton');
    followButton.addEventListener('click', function () {
        if (followButton.textContent === 'Seguir') {
            followButton.textContent = 'Siguiendo';
            followButton.classList.add('following');
            setTimeout(() => {
                followButton.innerHTML = 'Siguiendo';
            }, 200);
        } else {
            followButton.textContent = 'Seguir';
            followButton.classList.remove('following');
            followButton.innerHTML = 'Seguir';
        }
    });

    // Efecto hover para los proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('img').style.transform = 'scale(1.03)';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('img').style.transform = 'scale(1)';
        });
    });

    // Interactividad para las pestañas
    const tabs = document.querySelectorAll('.profile-tabs a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Cambiar clase activa en las pestañas
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Mostrar contenido correspondiente y ocultar los demás
            tabContents.forEach((content, i) => {
                if (i === index) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.profile-tabs a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Cambiar pestaña activa
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Mostrar la sección correspondiente
            tabContents.forEach(content => content.classList.remove('active'));
            const target = this.getAttribute('href').substring(1);
            document.getElementById(target).classList.add('active');
        });
    });
});
