var Git = require("nodegit");

Git.Repository.open(__dirname)
.then((repo) => {
  return repo.getCurrentBranch();
})
.then((branch) => {
  console.log('current branch is',branch.shorthand());
})
.catch((error) => {
  console.error(error, error.message);
})