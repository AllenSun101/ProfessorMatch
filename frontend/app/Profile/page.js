import Slider from "./slider";
import axios from "axios";

// get sqlite stuff
async function fetchPreferences(){
    const user = "test"
    //const data = axios.get()
}

export default async function Profile(){

    const data = await fetchPreferences();


    // retrieve
    var feedback = "N/A";
    var learnObjectives = "N/A";
    var clearExpectations = "N/A";
    var criticalThinking = "N/A";
    var diverseIdeas = "N/A";
    var courseOrganization = "N/A";
    var gradeDistribution = "N/A";

    return(
        <div>
            <p>profile stuff</p>
            <p>sliders</p>
            <Slider />
        </div>
    )
}