import Chat from "../../assets/react-firebase-chat-interface.png";
import Scrabble from "../../assets/scrabble-desktop-game-dark.png";
import Inventory from "../../assets/inventory_manager page.png";
import PolyBM from "../../assets/polybm visualization page.png";
import Portfolio from "../../assets/portfolio screenshot.png";

export const projectsData = [
  {
    id: 1,
    image: Portfolio,
    title: "Personal portfolio",
    description:
      "This is the project I work on the most, as I continuously update it. I am quite fond of my portfolio as it is both a digital creative playground and time capsule. Enjoy!",
    tags: "React | CSS | Javascript",
    link: "https://github.com/lt101/web-portfolio",
  },
  {
    id: 2,
    image: Chat,
    title: "Real-time chat app",
    description:
      "Early in my software development journey, I was fascinated by real-time communication. This application pays homage to my fascination, showcasing the interaction between React and the Firebase API.",
    tags: "React | Javascript | Firebase",
    link: "https://github.com/lt101/react-firebase-chat",
  },
  {
    id: 3,
    image: Inventory,
    title: "Inventory Manager",
    description:
      "An application that allows you to manage an inventory of anything you want. Add, edit and delete items. Simple.",
    tags: "C# | .NET | MVC | CRUD",
    link: "https://github.com/lt101/.net-inventory-manager",
  },
  {
    id: 4,
    image: Scrabble,
    title: "Scrabble game app",
    description:
      "This is a fancy version of the popular and timeless game of Scrabble. Play the original game, or try completing objectives for extra points. The game can be generated as a desktop app, a mobile app, or simply played on a web browser.",
    tags: "Angular | Typescript | CSS",
    link: "https://github.com/lt101/scrabble-v2-desktop-mobile-app",
  },

  {
    id: 5,
    image: PolyBM,
    title: "Data analysis tool",
    description:
      "For my final university project, I developed a data protection app in partnership with LGS, an IBM company. The application allows you to clean, format, analyze and anonymize datasets. You can also train a machine learning model with the brute and anonymized datasets and compare their performances.",
    tags: "Python | Pandas | Streamlit",
    link: "https://github.com/lt101/IBM-data-privacy-protection",
  },
];
