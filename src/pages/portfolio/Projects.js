//Images for Projects
import ProjectPlanner from "../../assets/images/projects/ProjectPlanner.PNG";
import QuizApp from "../../assets/images/projects/QuizApp.PNG";
import WeatherApp from "../../assets/images/projects/WeatherApp.PNG";
import TaskOrganizer from "../../assets/images/projects/TaskOrganizer.PNG";
import DictionaryApp from "../../assets/images/projects/DictionaryApp.PNG";
import ImageIdentifier from "../../assets/images/projects/ImageIdentifier.png";
import EDITH from "../../assets/images/projects/E.D.I.T.H.png";
import IPLDashboardApp from "../../assets/images/projects/IPLDashboardApp.png";
import GuessNumberGameApp from "../../assets/images/projects/GuessNumberGame.png";
import NewsApp from "../../assets/images/projects/NewsApp.png";
import ExpenseTrackerApp from "../../assets/images/projects/ExpenseTracker.png";
export const projects = [
  {
    date: "12/04/2025",
    title: "Expense Tracker",
    description: "Track your expenses",
    technology:
      "React, React Hooks, React Native, Expo, React Native Navigation, Axios",
    image: ExpenseTrackerApp,
    sourcecode: "https://github.com/sailakshmy/expenseTrackerApp",
  },
  {
    date: "12/03/2025",
    title: "Guess The Number",
    description:
      "Choose a number between 1 and 100 and let me guess what the number is.",
    technology: "React, React Hooks, React Native, Expo",
    image: GuessNumberGameApp,
    sourcecode: "https://github.com/sailakshmy/guessNumberGameApp",
  },
  {
    date: "03/01/2025",
    title: "News App",
    description: "Filter your news based on year or month",
    technology: "React, React Hooks, NextJs, SQLLite, NodeJs, ExpressJs",
    image: NewsApp,
    sourcecode: "https://github.com/sailakshmy/nextNewsApp",
  },
  {
    date: "25/05/2022",
    title: "IPL Dashboard",
    description:
      "A dashboard where the user can view the different IPL teams that have played matches between 2008 and 2021. The user can also view the details of all the matches played by a team in a specific year.",
    technology:
      "React, React Hooks, Spring Boot, Java Persistence API, AWS Elastic Beanstalk",
    image: IPLDashboardApp,
    demo: "http://ipldashboard-env.eba-bbijaju7.us-west-2.elasticbeanstalk.com/",
    sourcecode: "https://github.com/sailakshmy/iplJavaReact",
  },
  {
    date: "19/01/2022",
    title: "E.D.I.T.H",
    description:
      "This is a basic voice assistant web application. The user can use speech recognition and request EDITH to open certain applications such as Google, YouTube, Amazon, Netflix etc, search on Google and Youtube, closed the tabs opened by the same, give weather details, time, battery and network status.",
    technology: "HTML, CSS, JavaScript, openWeatherAPI, SpeechRecognition",
    image: EDITH,
    demo: "https://my-javascript-voice-assistant.web.app/",
    sourcecode: "https://github.com/sailakshmy/edith",
  },
  {
    date: "12/12/2021",
    title: "Image Identifier",
    description:
      "This is a basic image identifier web application that allows users to upload images from their system. The user can then use Tensor flow models to identify their images.",
    technology: "React, React Hooks, Tensorflow",
    image: ImageIdentifier,
    sourcecode: "https://github.com/sailakshmy/reactImageIdentifier",
  },
  {
    date: "27/08/2021",
    title: "Groot's Word Search",
    description:
      "This is a progressive web application that allows users to search for a word in a predefined list of languages. The app fetches the results from a Google API.",
    technology: "React, React Hooks, Material UI, Google API, Axios",
    image: DictionaryApp,
    demo: "https://groot-word-searcher.netlify.app/",
    sourcecode: " https://github.com/sailakshmy/dictionary",
  },
  {
    date: "27/06/2021",
    title: "Sheldon's Task Organizer",
    description:
      "This is a web application that helps users track their tasks and organize them. The user will be able to  edit, delete and reorganize their tasks using drag and drop",
    technology: "React, React Hooks, Firebase, Bootstrap",
    image: TaskOrganizer,
    demo: "https://sheldon-s-task-organizer.web.app/",
    sourcecode: " https://github.com/sailakshmy/taskOrganizerTool",
  },
  {
    date: "10/12/2020",
    title: "Groot Quiz App",
    description: "This is a basic quiz app hosted on Heroku.",
    technology: "React,TypeScript, React Hooks, PublicAPIs, Google Fonts",
    image: QuizApp,
    // demo:"https://groot-quiz-app.herokuapp.com/",
    sourcecode: "https://github.com/sailakshmy/grootQuizApp",
  },
  {
    date: "11/12/2020",
    title: "Thor Weather App",
    description:
      "This is a weather app that displays weather forecasts based on city name hosted on Heroku.",
    technology: "React,TypeScript, React Hooks, PublicAPIs",
    image: WeatherApp,
    // demo:"https://thorsweatherapp.herokuapp.com/",
    sourcecode: "https://github.com/sailakshmy/thorWeatherApp",
  },
  {
    date: "26/04/2020",
    title: "Project Planner",
    description:
      "This is a basic project planner application that can be used by a team, with live notification system that notifies the members whenever a project information is added/updated and when a new team member joins hosted on Firebase.",
    technology: "ReactJs, Redux, Firebase, MaterializeCSS",
    image: ProjectPlanner,
    demo: "https://marioplan-6cbb1.web.app/",
    sourcecode: "https://github.com/sailakshmy/marioplan",
  },
];
