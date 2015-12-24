import React, { PropTypes } from 'react';
import { Grid, PageHeader, Row, Col, Well } from 'react-bootstrap';
var Spinner = require('react-spin');
var ProjectStore = require('../stores/ProjectStore');
var ProjectActions = require('../actions/ProjectActions');

export default class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = ProjectStore.getState();
        console.log('constructor state ' + JSON.stringify(this.state));
    }

    componentDidMount() {
        console.log('componentDidMount');

        ProjectStore.listen(this.onChange)
        ProjectActions.fetchProjects();
    }

    componentWillUnmount() {
        ProjectStore.unlisten(this.onChange)
    }


    onChange(state) {
        this.setState(state);
        console.log('onChange ' + JSON.stringify(this.state));
    }


    // if error we should
    render() {
        console.log('render ' + JSON.stringify(this.state));
        var spinCfg = {
            width: 4,
            left: 0
        };

        return (

            <Grid fluid>
                <PageHeader>Projects</PageHeader>

                { this.state.errorMessage &&
                    <div>Something is wrong</div>
                }

                { !this.state.projects.length &&
                        <Row style = {{"marginTop":'45px'}}>
                            <Col lg = {1} md = {1} sm={1} xs={1} lgOffset={1} mdOffset={1} smOffset={1} xsOffset={3} >
                                <Spinner config={spinCfg} />
                            </Col>
                        </Row>

                }

                <ul>
                    {this.state.projects.map((project) => {
                        return (
                            <li>{project.name}</li>
                        );
                    })}
                </ul>
            </Grid>

        );
    }
}