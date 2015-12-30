import alt from '../alt';
import ProjectSource from '../sources/ProjectSource'

class ProjectActions {

    updateProjects(projects) {
        console.log('update');
        return projects;
    }

    fetchProjects() {
        console.log('fetch');
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();
            ProjectSource.fetch()
                .then((projects) => {
                    // we can access other actions within our action through `this.actions`
                    this.updateProjects(projects);
                })
                .catch((errorMessage) => {
                    this.projectsFailed(errorMessage);
                });
        }
    }

    projectsFailed(errorMessage) {
        return errorMessage;
    }

}
export default alt.createActions(ProjectActions);