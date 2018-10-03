# Advanced-JavaScript
Year 4 Advanced JavaScript Module

2. [Variables & Control Flow](Lectures/L2-26.09.18)
3. [Functions](Lectures/L3-03.10.18)

[*This readMe.md was written using Github's markdown*](https://help.github.com/articles/basic-writing-and-formatting-syntax/)

## Cloning a Repository

Copy the Github repository address from the green 'clone or download' button.

Open your command prompt and navigate to where you wish to place the repository.

Type 'git clone' and paste the address after.

Create a new '.gitignore' file and paste in the following code:

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Dependency directories
node_modules/
```

Make sure to push to your repository after this step.

In your command line, initialise a new NPM package.

`npm init`

You will be prompted by an install.

Create a node modules folder by installing the nodemon package.

`npm install --save-dev nodemon`

Open a Node.js terminal and run nodemon with your entry point (main) file.

`nodemon index.js`

Note:

```
npm config set proxy http://merlin:8000
npm config set https-proxy http://merlin:8000
```

## Proxy on College machines

During lecture 3 on 03/10/18, I got an error again while pushing to Github even though it was working the previous week.

The proxy may have reset.

To fix, I reset the global proxy using this [source](https://gist.github.com/evantoli/f8c23a37eb3558ab8765).

`git config --global http.proxy http://merlin:8080`
