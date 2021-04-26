//Images for Projects
import ProjectPlanner from '../../assets/images/projects/ProjectPlanner.PNG';
import QuizApp from '../../assets/images/projects/QuizApp.PNG';
import WeatherApp from '../../assets/images/projects/WeatherApp.PNG';
import TicTacToe from '../../assets/images/projects/TicTacToe.PNG';
export const projects=[
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
        date:"29/06/2020",
        title:"TicTacToe",
        description:"This is a basic React implementation of TicTacToe where user can reverse their movements and also see the next player and the winner.",
        technology: "React,TypeScript, React Hooks, PublicAPIs",
        image: TicTacToe,
        sourcecode:"https://github.com/sailakshmy/reactProjects/tree/master/tictactoe/tictactoe",  
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