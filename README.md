# react-test

## Reactをgithubでホスティング
- [node.js](https://nodejs.org/en/) DL and install
- jsの場合: `npx create-react-app app-dir-js`
- tsの場合: `npx create-react-app --template typescript app-dir-ts`
	- `cd app-dir-ts`
	- `npm start`


`package.json`
```json
{
// ...
"homepage": "https://<GitHubアカウント名>.github.io/<GitHubリポジトリ名>/",
  "scripts": {
    // ...
    "rm": "rm -rf ../docs",
    "mv": "mv build ../docs",
    "git": "git add .. && git commit && git push origin main",
    "deploy": "npm run rm && npm run build && npm run mv && npm run git"
  },
}
```

- `npm run deploy`
	- Please supply the message using either -m or -F option.
		- `git config --global core.editor emacs`
	- `#Please enter the commit message for your changes. ...`
		- コミットメーセージを一番上に書いて保存して終了
- ホスティング: settings → Pages → Branch
	- main/docs


## typescript
- [サバイバルTypeScript](https://typescriptbook.jp/)
- npm install -g typescript
	- tsc -v
- tsのコンパイル: tsc hogehoge.ts
- jsの実行: node hogehoge.js
- yarnのインストール: npm install -g yarn
	- パッケージ管理ツール
- yarn start
	- npmもパッケージマネージャーだがyarnのほうが優れているらしい
- 拡張子
	- .ts: 普通のtypescript
	- .tsx: 中にXMLタグが書ける
- `import`の`{ xxx }`: [export か export default かの違いらしい](https://blog.bgbgbg.net/archives/4356)
	- `{ xxx as yyy }`で任意の名前に変更できる

## React
- [チュートリアル](https://ja.reactjs.org/tutorial/tutorial.html)
- `const [値, set関数] = useState(初期値);`
