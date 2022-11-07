import TimescapeMockup1 from "./../../../images/TimescapeMockup1.png"
import TimescapeMockup2 from "./../../../images/TimescapeMockup2.png"
import CatalogueMockup1 from "./../../../images/CatalogueMockup1.png"
import CatalogueMockup2 from "./../../../images/CatalogueMockup2.png"

export const ProjectsData = [
    {
    id:1,
    images: [TimescapeMockup1, TimescapeMockup2],
    title:'Timescape',
    description:"Timescape aims to be the perfect event planner. By combining the implementation of Google Maps Places and Places Autocomplete APIs, it lets the user create an account and immediately start creating location based events that will take advantage of Google's knowledge to improve the user experience and make the event creation process easier.",
    links: {github: "https://github.com/gastipaz/timescape" , demo: "https://timescape-ep.herokuapp.com/"}
    },
    {
    id:2,
    images: [CatalogueMockup1, CatalogueMockup2],
    title: 'Products Catalog',
    description:"A fully functional e-commerce website built with React.js and a Flask backend that takes advantage of the Flask-SQLAlchemy extension to connect the client to the products and orders databases and thus allowing server-side data storage and retrieval. The test catalog that is used for displaying purposes is hardware store related, but the site is intended to be modular and to adapt to the users needs. At the moment there's not an integrated payment service implemented in the code and no payment information is stored whatsoever.",
    links: {github: "https://github.com/gastipaz/Catalog" , demo: "https://catalogue-ecom.netlify.app"}
    }
]