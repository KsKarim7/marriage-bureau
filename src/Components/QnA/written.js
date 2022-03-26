import React from 'react';

const written = () => {
    return (
        <div>
            <h1>Question-Answer Section:</h1>
            <h2>How React Work? </h2>
            <p>-ReactJS is simply a JavaScript library for building user interfaces. It works in declarative code. For each state in our application, react designed simple views for each state and wit will update and rended the correct component efficiently when our data changes. React creates, update and destroys instances internally to figure out the DOM elements tree that needs to be rendered to the browser.</p>
        
            <h2>How useState works?</h2>
            <p>-useState(hook) allow us to declare a variable in functional components. We pass the initial position to this function and it returns a variable with the present or current state.
                It is written below in points: </p>
                <li>First of all it compares the state value to be changed with the current state value.</li>
                <li>Secondly, if the two state values are the same, do not re-render without changing the state value.</li>
                <li>And then if the two state values are different , it changes the state value by performing re-rendering.</li>
        </div>
    );
};

export default written;