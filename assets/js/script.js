document.addEventListener('DOMContentLoaded', function() {
    // Produtos
    const products = [
        {
            id: 1,
            name: "Fone Bluetooth Premium",
            price: "R$ 129,90",
            discount: "30% OFF",
            image: "https://source.unsplash.com/random/300x300/?headphones",
            link: "https://exemplo.com/produto1"
        },
        {
            id: 2,
            name: "Smartwatch Inteligente",
            price: "R$ 199,90",
            discount: "25% OFF",
            image: "https://source.unsplash.com/random/300x300/?smartwatch",
            link: "https://exemplo.com/produto2"
        },
        {
            id: 3,
            name: "Caixa de Som Portátil",
            price: "R$ 89,90",
            discount: "40% OFF",
            image: "https://source.unsplash.com/random/300x300/?speaker",
            link: "https://exemplo.com/produto3"
        },
        {
            id: 4,
            name: "Carregador Sem Fio",
            price: "R$ 59,90",
            discount: "20% OFF",
            image: "https://source.unsplash.com/random/300x300/?wireless-charger",
            link: "https://exemplo.com/produto4"
        },
        {
            id: 5,
            name: "Suporte para Notebook",
            price: "R$ 49,90",
            discount: "15% OFF",
            image: "https://source.unsplash.com/random/300x300/?laptop-stand",
            link: "https://exemplo.com/produto5"
        },
        {
            id: 6,
            name: "Kit de Viagem",
            price: "R$ 39,90",
            discount: "10% OFF",
            image: "https://source.unsplash.com/random/300x300/?travel-kit",
            link: "https://exemplo.com/produto6"
        }
    ];

    // Renderizar produtos
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Produto premium com garantia de 1 ano</p>
                <div class="product-price">
                    <span class="price">${product.price}</span>
                    <span class="discount">${product.discount}</span>
                </div>
                <a href="${product.link}" class="btn" target="_blank">Comprar Agora</a>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Testimonials slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Instagram posts click
    const instaPosts = document.querySelectorAll('.insta-post');
    instaPosts.forEach(post => {
        post.addEventListener('click', () => {
            window.open(post.getAttribute('data-link'), '_blank');
        });
    });

    // Form submission
    const messageForm = document.getElementById('messageForm');
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .product-card, .testimonial-slider, .insta-post, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial state for animation
    document.querySelectorAll('.feature-card, .product-card, .testimonial-slider, .insta-post, .contact-info, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});