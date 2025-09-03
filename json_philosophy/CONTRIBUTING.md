# Contributing

## 投稿規則
- 1ファイル1命題。
- 同一命題の他言語版は `links` で `rel: "mirror"` を張る。
- 文章ライセンス: CC BY 4.0 / コード: MIT。

## 命名
- `entries/<lang>/YYYY-MM-DD-<slug>.json`

## 検証
- Node >= 18 を推奨。
- `npm ci` 後、`node scripts/validate.js` で全ファイルを検証。

## スタイル
- 短く、強く、余白を残す。
- 比喩・反証・補助線を最小限で。
