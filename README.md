# Minimally reproducible test of the [WDS] Disconnected issue.

This is to provide a reproducible test of the issue encountered in:

https://github.com/webpack/webpack-dev-server/issues/1796

1. run `npm start`, open `https://localhost:9000/`
2. find `sockjs.js` in the sources panel
3. add a breakpoint on line 933 `this._close(1006, 'Server lost session');`
4. add some random code here over and over till the breakpoint hits
