import React, { PropTypes } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem, Grid, PageHeader } from 'react-bootstrap';


export default class Products extends React.Component {

    render() {
        return (
            <Grid fluid>
                <PageHeader>Products List <small>also known as items</small></PageHeader>
                <ButtonGroup>
                    <DropdownButton bsStyle="success" title="Dropdown">
                        <MenuItem key="1">Dropdown link</MenuItem>
                        <MenuItem key="2">Dropdown link</MenuItem>
                    </DropdownButton>
                    <Button bsStyle="info">Middle</Button>
                    <Button bsStyle="info">Right</Button>
                </ButtonGroup>
            </Grid>

        );
    }
}