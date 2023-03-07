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
- [varは使わない](https://typescriptbook.jp/reference/values-types-variables/vars-problems)
	- let, constを使う
- [配列でfor-inはNG](https://typescriptbook.jp/reference/values-types-variables/array/how-to-loop-an-array)


## React
- [チュートリアル](https://ja.reactjs.org/tutorial/tutorial.html)
- `const [値, set関数] = useState(初期値);`
- [material ui](https://v4.mui.com/)
- [React hooksを基礎から理解する](https://qiita.com/seira/items/f063e262b1d57d7e78b4)
- [CreateReactAppの中身できるだけ消したい。](https://qiita.com/Yuma-Satake/items/8940e4eb5c90e134e945)
- [propsとstateのイメージをつかむ【はじめてのReact】](https://qiita.com/rio_threehouse/items/7632f5a593cf218b9504)

## TODO
- 読む: [React hooksを基礎から理解する](https://qiita.com/seira/items/f063e262b1d57d7e78b4)
- 読む: [propsとstateのイメージをつかむ【はじめてのReact】](https://qiita.com/rio_threehouse/items/7632f5a593cf218b9504)
- 読む: [propsとは?](https://ja.reactjs.org/docs/components-and-props.html)
- 読む: [非同期処理](https://typescriptbook.jp/reference/asynchronous)
	- ジョブを投げて中断してみる
- グローバル変数の代わりに正しい扱い方調査
