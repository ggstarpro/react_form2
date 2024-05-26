# 概要
[github](https://github.com/Shin-sibainu/auth-form-with-nextjs)

# 環境構築
* `$ npx create-next-app@latest`
```
✔ What is your project named? … react_form2
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /Users/gm/Desktop/PG/react_adwform2.
Using npm.
```

* `$ npm i react-hook-form zod`
* `$ npm install @hookform/resolvers`

# Supabase(https://supabase.com/)
* `$ npm i @supabase/supabase-js`
```
# new Project
## Name
form-auth-tutorial
## DatabasePassword
LdmrkDiduBtQkvzY
## Region
Northeast Asia

# ユーザテーブル作成
## Table Editor > Create a new table
name: User
Enable Row Level Security (RLS): チェック

id | uuid
username | text
email | text
created_at | timestamp

> Saveを押下

# RLS policy
Add RLS policyを押下
create policyを押下

PolicyName: Insert to User Table(Access)
PolicyCommand: Insert
with check expression: true

> Saveを押下
```
# メール内容変更
* Authentication > Email Templates > Source
```
<h2>新規登録の確認</h2>

<p>下記のリンクをクリックして登録を完了させてください</p>
<p><a href="{{ .ConfirmationURL }}">このメールアドレスは正しいです</a></p>

```