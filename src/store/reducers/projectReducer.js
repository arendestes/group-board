
const initState = {
    projects: [
        {id: 1, projectName: "Morning meeting", projectDetails: "Get together and plan day and goals for week." },
        {id: 2, projectName: "Start Build", projectDetails: "Set up project files begin ui" },
        {id: 3, projectName: "Meeting with Customer", projectDetails: "Go present to customer for feedback." }
    ]
};

const projectReducer = (state = initState , action) =>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log(action.project, "project created");
            break;
        default:
            break;
    }
    return state
}

export default projectReducer;
