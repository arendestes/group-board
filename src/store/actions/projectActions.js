export const createProject = (project, { getFirebase, getFirestore }) => {
    return (
        (dispatch, getState) => {
            //async call to database
            dispatch({ type: 'CREATE_PROJECT', project })
        }
    )
};