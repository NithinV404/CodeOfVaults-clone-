import img from '/logo.png';
import search from '/search.svg';
import cart from '/cart.svg';   
export default function Navbar() {
    return(`<div class="navbar">
    <div class="navbar-menu">
    <span>Home</span>
    <span>Catalog</span>
    <span>Contact</span>
    <span class="active-nav">Internships</span>
    </div>
    <div class="navbar-logo">
    <img src=${img}/>
    </div>
    <div class="navbar-items">
    <img src=${search} alt="search">
    <img src=${cart} alt="cart">
    </div>
    </div>
    `);
}