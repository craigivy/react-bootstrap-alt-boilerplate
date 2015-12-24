var alt = require('../alt');
var ProjectActions = require('../actions/ProjectActions');

class ProjectStore {
    constructor() {
        this.projects = [];
        this.errorMessage = null;

        this.bindListeners({
            handleUpdateProjects: ProjectActions.UPDATE_PROJECTS,
            handleFetchProjects: ProjectActions.FETCH_PROJECTS,
            handleProjectsFailed: ProjectActions.PROJECTS_FAILED
        });
    }

    handleUpdateProjects(projects) {
        this.projects = projects;
        this.errorMessage = null;
    }

    handleFetchProjects() {
        // reset the array while we're fetching new locations so React can
        // be smart and render a spinner for us since the data is empty.
        this.projects = [];
    }

    handleProjectsFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }

}

export default alt.createStore(ProjectStore, 'ProjectStore');