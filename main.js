import Navbar from "./components/navbar"
import Internships from "./components/internships"
document.querySelector('#app').innerHTML = `
  <div class="container">
  ${Navbar()}
  ${Internships()}
  </div>
`;


