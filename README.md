# react-brother-bothering-update-example

兄弟コンポーネントの更新は面倒臭いんだぞ example

| contents | url                                                                     |
| -------- | ----------------------------------------------------------------------- |
| app      | https://vigorous-swanson-f2b839.netlify.com/                            |
| code     | https://github.com/sadnessOjisan/react-brother-bothering-update-example |

入力中にログアウトしようとして、怒られてみよう。(入力後、送信前にログアウトしようとすると警告される）

## どうしてこの実装がめんどくさいか

root から見た header, contents は兄弟関係である。それぞれ state を持っている。header は contents が入力状態かどうかを監視している。
