import Buddy0 from "./pictures/buddysteps/buddy0.png";
import Buddy1 from "./pictures/buddysteps/buddy1.png";
import Buddy2 from "./pictures/buddysteps/buddy2.png";
import Buddy3 from "./pictures/buddysteps/buddy3.png";
import Buddy4 from "./pictures/buddysteps/buddy4.png";
import Buddy5 from "./pictures/buddysteps/buddy5.png";
import Buddy6 from "./pictures/buddysteps/buddy6.png";

import MeuCaixa0 from "./pictures/meucaixa/meucaixa0.png";
import MeuCaixa1 from "./pictures/meucaixa/meucaixa1.png";
import MeuCaixa2 from "./pictures/meucaixa/meucaixa2.png";
import MeuCaixa3 from "./pictures/meucaixa/meucaixa3.png";

import Vanilla0 from "./pictures/vanilla/vanilla0.png";
import Vanilla1 from "./pictures/vanilla/vanilla1.png";
import Vanilla2 from "./pictures/vanilla/vanilla2.png";

import CadeDoutor0 from "./pictures/cadedoutor/cadedoutor0.png";
import CadeDoutor1 from "./pictures/cadedoutor/cadedoutor1.png";
import CadeDoutor2 from "./pictures/cadedoutor/cadedoutor2.png";
import CadeDoutor3 from "./pictures/cadedoutor/cadedoutor3.png";
import CadeDoutor4 from "./pictures/cadedoutor/cadedoutor4.png";
import CadeDoutor5 from "./pictures/cadedoutor/cadedoutor5.png";

import Cavani0 from "./pictures/cavani/cavani0.png";
import Cavani1 from "./pictures/cavani/cavani1.png";
import Cavani2 from "./pictures/cavani/cavani2.png";

const tags = [
  "Fullstack",
  "Frontend",
  "Ruby on Rails",
  "Javascript",
  "PostgresSQL",
  "HTML",
  "CSS",
  "Git"
];

const projectsList = {
  buddysteps: {
    title: "Buddysteps",
    url: "https://buddysteps.com/",
    tags: [
      "Fullstack",
      "Ruby on Rails",
      "Javascript",
      "PostgresSQL",
      "HTML",
      "CSS",
      "Git"
    ],
    description: `Final project for Le Wagon's Fullstack Bootcamp, done in 10 days with
     three other students. Buddysteps is a platform for people going through
     recovery from an illness or accident.It allows patients to keep record
     of their daily mood, see this record plotted on a graph, set new goals,
     get help from another community member (a buddy) for achieving her
     goals, keep a diary with her achievements and frustrations, join a
     community with people with the same illness and chat with other users.`,
    challenges: `This project's main challenges were creating the mood graph and making the
      chat work instantly. We also take great care in making everything
      mobile-friendly.`,
    gallery: [Buddy0, Buddy1, Buddy2, Buddy3, Buddy4, Buddy5, Buddy6]
  },
  meucaixa: {
    title: "MeuCaixa",
    url: "https://teste-caixa-eletronico.herokuapp.com/",
    tags: [
      "Frontend",
      "React",
      "Ruby on Rails",
      "Javascript",
      "PostgresSQL",
      "HTML",
      "CSS",
      "Git"
    ],
    description: `Simple exercise for praticing React and its integration with an API(made with Ruby on Rails).
      This projects emulates the functioning of an ATM. Once a new account is created it's possible to draw,
      deposit and tranfer money, besides checking the bank statement.`,
    challenges: `The main challenge here was making a One Page App with a good user interface and that worked well 
      with the API, also making validations of user input.`,
    gallery: [MeuCaixa0, MeuCaixa1, MeuCaixa2, MeuCaixa3]
  },
  cadedoutor: {
    title: "Cade Doutor",
    url: "http://cade-doutor.herokuapp.com/",
    tags: [
      "Fullstack",
      "Ruby on Rails",
      "Javascript",
      "PostgresSQL",
      "HTML",
      "CSS",
      "Git"
    ],
    description: `Project made as part of Le Wagon's Fullstack Bootcamp, done in 4 days with 3 other students. This 
      platform allows the user to look for doctors according to specialty, schedule consultations and review doctors. Users 
      can also register as doctors and manage their scheduled consultations. The offered consultations time slots can be 
      managed by means of a calendar with a drag and drop feature`,
    challenges: `This project's main challenges were adding the drag and drop feature to the calendar and making a nice 
      UI on the page for searching doctors. Due to time constraints, we didn't manage to make the app responsive for mobiles.`,
    gallery: [
      CadeDoutor0,
      CadeDoutor1,
      CadeDoutor2,
      CadeDoutor3,
      CadeDoutor4,
      CadeDoutor5
    ]
  },
  vanilla: {
    title: "Vanilla One-Page-App Study",
    url: "https://vanilla-opa.herokuapp.com",
    tags: [
      "Fullstack",
      "Javascript",
      "Node.js",
      "Express",
      "HTML",
      "CSS",
      "Git"
    ],
    description: `A short exercise for practicing node.js + express and also taking the challenge of creating 
    an One Page App without using any framework like React or Vue. In this project, the user can set the quantity
     of items being displayed and set options for naming the items as  A or B.`,
    challenges: `This projects's challenge was mainly reproducing React's behavior with pure Vanilla Javascript.`,
    gallery: [Vanilla0, Vanilla1, Vanilla2]
  },
  cavani: {
    title: "Cavani Arquitetos",
    url: "http://www.cavaniarquitetos.com.br/",
    tags: ["Frontend", "Squarespace", "CSS"],
    description: `The architecture studio where I worked had a very unpleasant website with terrible user experience. I 
      was assigned to fix it, even though I didn't have any experience with web design or web development. The project was 
      very simple, just using a Squarespace template and customising its CSS, but this is the project that got me 
      interested in web development so it has special meaning for me.`,
    challenges: `The main challenges were understanding how Squarespace works and learning enough HTML and CSS to get the
      the job done. Looks simple now, but at the time it was enough of a challenge.`,
    gallery: [Cavani0, Cavani1, Cavani2]
  }
};

export default projectsList;
