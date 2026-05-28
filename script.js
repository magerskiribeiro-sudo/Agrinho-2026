@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}

.hero-bg {
    background: linear-gradient(rgba(22, 101, 52, 0.8), rgba(22, 101, 52, 0.85)),
                url('https://picsum.photos/id/1015/2000/1200') center/cover no-repeat;
    background-attachment: fixed;
}

.card {
    transition: all 0.4s ease;
}

.card:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px -12px rgb(16 185 129 / 0.3);
}

/* Responsividade extra */
@media (max-width: 640px) {
    h1 {
        font-size: 2.8rem;
    }
}
