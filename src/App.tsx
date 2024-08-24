import './styles/styles.css'
import IMAGE from './images/image1.png'

export const App = () => {
    return <>
        <h1>Practice Creating a React Typescript Webpack Project from Scratch</h1>
        <p>Environment: {process.env.NODE_ENV}</p>
        <p>Project Name: {process.env.projectName}</p>
        <img src={IMAGE} alt="react image" width="600"/>
    </> 
    
}