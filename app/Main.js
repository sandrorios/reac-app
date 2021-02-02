import React from 'react';
import ReactDOM from 'react-dom';

function MyApp(){
    return(
        <div>
        <h1>The Sky Is Blue!</h1>
        <p>And the grass are green.</p>
        </div>
    )
}

ReactDOM.render(<MyApp />, document.querySelector('#app'));