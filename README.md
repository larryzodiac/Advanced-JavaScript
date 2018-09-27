# Advanced-JavaScript
Year 4 Advanced JavaScript Module

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
