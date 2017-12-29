# vue2ghp
> An NPM package for deploying VueJS CLI generated apps to GitHub Pages

# Installation and Usage
```
npm install vue2ghp -D
```

Add homepage/repo to package.json:

```
...
"homepage":"https://github.com/[username]/[reponame]"
...
```

Add deploy script to package.json scripts:

```
"scripts": {
    ...
    "deploy": "node ./node_modules/vue2ghp/dist/index.js"
    ...
}
```

Run deploy command in terminal:

```
npm run deploy
```

Your site will now be located in your repo under the docs subfolder. You will then need to go into you repo settings and under the GitHub pages section switch the drop down to "Master branch/docs folder" and click save.
