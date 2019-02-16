const Git = require("nodegit");
const webpack = require("webpack");
const wpConfig = require('./webpack.prod.config');
const path = require('path');

Git.Repository.open(__dirname)
.then((repo) => {
  return repo.getCurrentBranch();
})
.then((branch) => {
  console.log('current branch is',branch.shorthand());
  return compile({
    destPath: branch.shorthand()
  });
})
.catch((error) => {
  console.log(error, error.message);
  process.exit(1);
});

function compile({destPath}) {
  return new Promise((resolve, reject) => {
    wpConfig.output.path = path.join(
      wpConfig.output.path, destPath
    );

    const compiler = webpack(wpConfig);
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        reject(
          err ||
          new Error(
            'Stats error\n\n' +
            stats.toString({
              colors: true,
              assets: false,
              hash: false
            })
          )
        );
      }

      console.log(stats.toString({
        colors: true
      }));
      resolve();
    })
  })
}