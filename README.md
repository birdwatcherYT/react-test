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
- [非同期処理](https://jsprimer.net/basic/async/)
- jsはすべてシングルスレッド
	- 重い処理を投げるとブラウザが固まり操作不能に
	- 見た目並列にする: 明示的に重い処理の途中にsleepを挟む
	- 途中でキャンセルしたい: 明示的に重い処理の途中でキャンセルフラグを見る

## React
- [チュートリアル](https://ja.reactjs.org/tutorial/tutorial.html)
- [material ui](https://v4.mui.com/)
- [React hooksを基礎から理解する](https://qiita.com/seira/items/f063e262b1d57d7e78b4)
- [具体例で理解するuseMemoとuseCallbackの使い方。Reactパフォーマンスチューニング](https://nishinatoshiharu.com/react-hooks-memo-callback/)

- useState: 状態管理
	- `const [値, set関数] = useState(初期値);`
- useRef: getElementByIdの代わりに事前に取得したいタグにつけておける
- useMemo: 再計算しないようにするキャッシュのような機能
- useCallback: 関数をメモ化する`useCallback(fn, deps)`は`useMemo(() => fn, deps)`と等価

- 図の描画はcanvasよりsvgの方がやりやすい: クリックされたオブジェクトを取得できる
	- [svgタグ](https://www.webdesignleaves.com/pr/html/svg_basic.html)
