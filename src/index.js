import _ from 'lodash';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

// 1. run `npm start`, open `https://localhost:9000/` in your browser
// 2. find `sockjs.js` in the sources panel
// 3. add a breakpoint on line 933 `this._close(1006, 'Server lost session');`
// 4. add some random code here over and over till the breakpoint hits
// 5. the issue has been reproduced.
