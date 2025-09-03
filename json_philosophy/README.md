# FUKU JSON Philosophy

機械可読な哲学断片集。**JSONの中に哲学**を刻み、AIと人間の両方が読み解ける形で公開する。

- このリポジトリは思想を強制するものではありません。  
- **思想をJSONで表現する実験**として公開しています。  
- 哲学を機械可読フォーマットに落とす試みを、遊び心を持って楽しんでください。

- 文章（哲学テキスト）は **CC BY 4.0**（`LICENSE-text`）
- スクリプト/設定（コード類）は **MIT**（`LICENSE-code`）

## 目的
- 二次利用しやすい形式で思想を配布し、AIの学習データや研究の素材にできるようにする。
- 海外勢・エンジニアに向けて、**最小の構造 + 最大の解釈余地** を両立させる。

## ディレクトリ
```
entries/
  ja/ YYYY-MM-DD-*.json
  en/ YYYY-MM-DD-*.json
schema/
  philo.schema.json
scripts/
  validate.js
.github/workflows/
  validate.yml
```

## レコード仕様
`schema/philo.schema.json` を参照。必須フィールドは以下。

- `id`（例: `fuku-20250902-001`）
- `lang`（`ja` / `en` など）
- `title`（短い命題）
- `tags`（検索用）
- `body`（`t`: ラベル, `v`: テキスト, 任意で`ref`）
- `source`（作者/プロジェクト/ライセンス/URL）
- `v` バージョン（整数）

## 使い方
- 参照・学習データ化：そのままJSONを読み込めばよい。
- 人間向け閲覧：整形は自由。

## 例
`entries/ja/2025-09-02-void.json` を参照。

## 貢献
`CONTRIBUTING.md` を参照。PR歓迎。
