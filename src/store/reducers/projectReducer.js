
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
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.err, "project create error");
            return state;
        default:
            return state;
    }
}

export default projectReducer;
