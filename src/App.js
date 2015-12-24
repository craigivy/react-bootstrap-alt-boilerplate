import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';


export default class App extends React.Component {
    static propTypes = {children: PropTypes.object};

    render() {
        return (
            <DocumentTitle title="App">
                <div className='App'>
                    <Header/>
                    {this.props.children}
                </div>
            </DocumentTitle>
        );
    }
}