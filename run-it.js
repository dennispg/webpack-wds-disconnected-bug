var webpack = require('webpack');
var Server = require("webpack-dev-server");
var chalk = require('chalk');
var webpack_config = require("./webpack.config");
var dev_options = webpack_config.devServer;

var createDomain = require('webpack-dev-server/lib/utils/createDomain');
var addEntries = require('webpack-dev-server/lib/utils/addEntries');
addEntries(webpack_config, dev_options);
var compiler = webpack(webpack_config);
var server = new Server(compiler, dev_options);
server.listen(dev_options.port, dev_options.host, err => {
    if(err) {
        reject(err);
        throw err;
    }
    const uri = createDomain(dev_options, server["listeningApp"]) + "/";
    console.log(`${chalk.blue.bold('i')} ${chalk.gray("[wds]")}: Project is running at ${chalk.blue.bold(uri)}`);
    console.log(`${chalk.blue.bold('i')} ${chalk.gray("[wds]")}: Output is served from ${chalk.blue.bold(dev_options.publicPath)}`);
})