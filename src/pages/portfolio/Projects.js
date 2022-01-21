//Images for Projects
import ProjectPlanner from '../../assets/images/projects/ProjectPlanner.PNG';
import QuizApp from '../../assets/images/projects/QuizApp.PNG';
import WeatherApp from '../../assets/images/projects/WeatherApp.PNG';
import TaskOrganizer from '../../assets/images/projects/TaskOrganizer.PNG';
import DictionaryApp from '../../assets/images/projects/DictionaryApp.PNG';
import ImageIdentifier from '../../assets/images/projects/ImageIdentifier.png';
import EDITH from '../../assets/images/projects/E.D.I.T.H.png';
export const projects=[
    {
        date:"19/01/2022",
        title:"E.D.I.T.H",
        description:"This is a basic voice assistant web application. The user can use speech recognition and request EDITH to open certain applications such as Google, YouTube, Amazon, Netflix etc, search on Google and Youtube, closed the tabs opened by the same, give weather details, time, battery and network status.",
        technology: "HTML, CSS, JavaScript, openWeatherAPI, SpeechRecognition",
        image: EDITH,
        demo:"https://edith-4947a.web.app/",
        sourcecode:"https://github.com/sailakshmy/edith",  
    },
    {
        date:"12/12/2021",
        title:"Image Identifier",
        description:"This is a basic image identifier web application that allows users to upload images from their system. The user can then use Tensor flow models to identify their images.",
        technology: "React, React Hooks, Tensorflow",
        image: ImageIdentifier,
        sourcecode:"https://github.com/sailakshmy/reactImageIdentifier",  
    },
    {
        date:"27/08/2021",
        title:"Groot's Word Search",
        description:"This is a progressive web application that allows users to search for a word in a predefined list of languages. The app fetches the results from a Google API.",
        technology: "React, React Hooks, Material UI, Google API, Axios",
        image: DictionaryApp,
        demo:"https://groot-word-searcher.netlify.app/",
        sourcecode:" https://github.com/sailakshmy/dictionary",  
    },
    {
        date:"27/06/2021",
        title:"Sheldon's Task Organizer",
        description:"This is a web application that helps users track their tasks and organize them. The user will be able to  edit, delete and reorganize their tasks using drag and drop",
        technology: "React, React Hooks, Firebase, Bootstrap",
        image: TaskOrganizer,
        demo:"https://sheldon-s-task-organizer.web.app/",
        sourcecode:" https://github.com/sailakshmy/taskOrganizerTool",  
    },
    {
        date:"10/12/2020",
        title:"Groot Quiz App",
        description:"This is a basic quiz app hosted on Heroku.",
        technology: "React,TypeScript, React Hooks, PublicAPIs, Google Fonts",
        image: QuizApp,
        demo:"https://groot-quiz-app.herokuapp.com/",
        sourcecode:"https://github.com/sailakshmy/grootQuizApp",  
    },
    {
        date:"11/12/2020",
        title:"Thor Weather App",
        description:"This is a weather app that displays weather forecasts based on city name hosted on Heroku.",
        technology: "React,TypeScript, React Hooks, PublicAPIs",
        image: WeatherApp,
        demo:"https://thorsweatherapp.herokuapp.com/",
        sourcecode:"https://github.com/sailakshmy/thorWeatherApp",  
    },
    {
        date:"26/04/2020",
        title:"Project Planner",
        description:"This is a basic project planner application that can be used by a team, with live notification system that notifies the members whenever a project information is added/updated and when a new team member joins hosted on Firebase.",
        technology: "ReactJs, Redux, Firebase, MaterializeCSS",
        image: ProjectPlanner,
        demo:"https://marioplan-6cbb1.web.app/",
        sourcecode:"https://github.com/sailakshmy/marioplan",  
    },
]