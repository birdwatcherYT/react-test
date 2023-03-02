# react-test

- [node.js](https://nodejs.org/en/) DL and install
- `npx create-react-app app-dir`
	- `cd app-dir`
	- `npm start`


`package.json`
```json
{
// ...
"homepage": "https://<GitHubアカウント名>.github.io/<GitHubリポジトリ名>/",
  "scripts": {
	// ...
    "rm": "rm -rf docs",
    "mv": "mv build docs",
    "git": "git add . && git commit  && git push origin main",
    "deploy": "npm run rm && npm run build && npm run mv && npm run git"
  },
}
```



- `npm run deploy`
	- Please supply the message using either -m or -F option.
		- `git config --global core.editor emacs`
