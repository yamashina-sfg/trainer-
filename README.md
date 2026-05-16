# SFG 怪我サポートアプリ

高校生・大学生アスリートが怪我を匿名で相談し、トレーナー回答から接骨院予約相談へ進めるMVPプロトタイプです。

## 技術構成

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase接続を前提にしたリポジトリ層
- 現時点は `data/mock.ts` の仮データで表示

## 主な画面

- `/` トップページ
- `/posts` 投稿一覧
- `/posts/[id]` 投稿詳細
- `/posts/new` 怪我相談投稿
- `/trainer` トレーナーダッシュボード
- `/clinics` 接骨院一覧
- `/clinics/[id]` 接骨院詳細
- `/reservations/new` 予約相談フォーム
- `/reservations/complete` 予約完了
- `/admin` SFG管理画面

## データ差し替え方針

画面は `lib/repositories.ts` 経由でデータを取得しています。
Supabaseへ接続する際は、まず `types/index.ts` の型をテーブル定義に合わせ、`lib/repositories.ts` の各関数をSupabase queryへ差し替えてください。

Supabaseクライアントの入口は `lib/supabase.ts` に用意しています。

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

想定テーブル:

- `users`
- `posts`
- `comments`
- `trainer_profiles`
- `clinics`
- `clinic_trainers`
- `reservations`
- `areas`
- `specialties`

## 開発

```bash
npm install
npm run dev
npm run build
```

医療診断と誤解されないよう、画面上では「診断」ではなく「相談」「おすすめします」を中心に表現しています。
