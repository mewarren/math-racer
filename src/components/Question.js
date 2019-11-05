import React from 'react';

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subject : null,
            question : null,
            answer : null
        };
    }

    render() {
        return(
            <div>
                 <p>questions go here</p>
            </div>
        );
    }
}