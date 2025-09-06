
       

        // Event listeners para las tarjetas de fotos
        document.addEventListener('DOMContentLoaded', function() {
            const photoCards = document.querySelectorAll('.photo-card');
            
            photoCards.forEach(card => {
                const dateElement = card.querySelector('.photo-date');
                const index = parseInt(card.getAttribute('data-index'));
                const date = dateElement.textContent;
                
                dateElement.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showPopup(index, date);
                });
                
                card.addEventListener('click', function() {
                    showPopup(index, date);
                });
            });

            // Cerrar popup con ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closePopup();
                }
            });

            // Cerrar popup al hacer clic fuera
            document.getElementById('photoPopup').addEventListener('click', function(e) {
                if (e.target === this) {
                    closePopup();
                }
            });
        });

    

        // Frases románticas
        const frases = [
            "Sos mi lugarcito favorito Lourdes.",
            "El amor que siento por vos, es inexplicable al igual que lo mucho que amo tus ojitos",
            "Te amo muchísimo más de lo que pensás o demuestro.",
            "Mi vida es más linda desde que estás en ella.",
            "Tu perfume es mi favorito, y eso que tuve bastantes.",
            "Mi corazoncito tiene escrito tu nombre.",
            "Siempre podes contar conmigo, pase lo que pase.",
            "Estaría enamorado de vos, en esta vida y en cualquiera.",
            "Me haces el hombre mas feliz del mundo con tus besos y",
            "Cada risa, cada enojo, y cada momento que se te ocurra, no me lo olvido nunca.",
            "Sos lo mejor que una persona puede tener en su vida."
        ];
        
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        document.querySelector(".frase").textContent = frases[indiceAleatorio];

        // Animaciones de entrada progresiva
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) rotate(' + (Math.random() * 2 - 1) + 'deg)';
                    }, index * 100);
                }
            });
        }, observerOptions);

        // Aplicar animaciones a las tarjetas de fotos
        window.addEventListener('load', () => {
            const photoCards = document.querySelectorAll('.photo-card');
            photoCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px) rotate(-2deg)';
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                observer.observe(card);
            });
        });
  