import AboutUs from "../pages/AboutUs.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";
import SecretData from "../pages/SecretData.jsx";
import Item from "../pages/Item.jsx";
import NotFound from "../pages/NotFound.jsx";

export const routeComponent = [

    { "path": "/", "component": <Home /> },
    { "path": "/AboutUs/*", "component": <AboutUs /> },
    { "path": "/Contact", "component": <Contact /> },
    { "path": "/SecretData", "component": <SecretData /> },
    { "path": "/item/:id", "component": <Item /> },
    { "path": "*", "component": <NotFound /> },

];

export const routingNav = [

    { "path": "/", "name": "home" },
    { "path": "/AboutUs", "name": "about us" },
    { "path": "/Contact", "name": "contact" },
    { "path": "/SecretData", "name": "secret data" },

];