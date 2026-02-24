* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f4f6f9;
    scroll-behavior: smooth;
}

/* HEADER */
header {
    height: 100vh;
    background: linear-gradient(rgba(0,0,50,0.7), rgba(0,0,80,0.7)),
                url("https://images.unsplash.com/photo-1507692049790-de58290a4334");
    background-size: cover;
    background-position: center;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.overlay {
    max-width: 800px;
}

header h1 {
    font-size: 45px;
}

header p {
    margin: 15px 0;
    font-size: 18px;
}

#countdown {
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
    color: gold;
}

/* NAVIGATION */
nav {
    background: #001f3f;
    padding: 15px;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 15px;
    font-weight: bold;
    transition: 0.3s;
}

nav a:hover {
    color: gold;
}

/* SECTIONS */
section {
    padding: 70px 20px;
    max-width: 1000px;
    margin: auto;
}

h2 {
    margin-bottom: 20px;
    color: #003366;
}

/* CARDS */
.card {
    background: white;
    padding: 25px;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.center {
    text-align: center;
}

/* BUTTON */
.button {
    display: inline-block;
    background: #003366;
    color: white;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    transition: 0.3s;
}

.button:hover {
    background: #001f3f;
}

/* FOOTER */
footer {
    background: #001f3f;
    color: white;
    text-align: center;
    padding: 20px;
}

/* FADE IN */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: 1s ease;
}

.fade-in.show {
    opacity: 1;
    transform: translateY(0);
}

/* MOBILE */
@media(max-width: 768px) {
    header h1 {
        font-size: 30px;
    }

    nav a {
        display: block;
        margin: 10px 0;
    }
}
