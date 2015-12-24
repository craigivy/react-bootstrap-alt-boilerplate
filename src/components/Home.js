import React, { PropTypes } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';


export default class Home extends React.Component {
    static propTypes = {children: PropTypes.object};

    render() {
        return (
            <Grid fluid>
                <Jumbotron>
                    <h1>Hello, App!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>

            </Grid>

        );
    }
}