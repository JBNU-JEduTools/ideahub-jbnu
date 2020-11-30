# cmanager

cmanager is competition management service, made with React, Koa.js and MongoDB.

used...

```
nodejs v12.13.0
npm 6.12.0
yarn 1.19.1
```

---

on progress😔

## get started!

you should run backend and frontend server respectively.

1. make .env file containing DB informations in backend directory.

```
//YOURDIRECTORY\cmanager\backend\.env

PORT=YOUR_PORT
MONGO_URI=YOUR_DB_URL
JWT_SECRET=YOUR_SECRET_KEY
```

2. move into frontend directory then run the following code.

```
cd YOURDIRECTORY\cmanager\frontend
yarn start
or
npm install
npm start
```

3. move into backend directory then run the following code.

```
cd YOURDIRECTORY\cmanager\backend
yarn start:dev
```

example website will be presented on browser. or visit localhost:3000

4. trouble shotting

   [react-scrpts: Permission denied](https://github.com/facebook/create-react-app/issues/5773)

   [ENOENT ERROR](https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle)

## 🎨Style

this project uses [styled-components](https://github.com/styled-components/styled-components).

if you want change style or theme, check out styled-components in each file in

```
YOUR_DIRECTORY\cmanager\frontend\src\components
```

## ⚙Structure - frontend

```
src
├── components // each components styled with 'styled-components'
│   ├── auth //components used when authorization happened
│   ├── base
│   └── common // components used globally
├── containers // manages redux-linked components.
│   ├── auth
│   └── common
├── lib
│   ├── api // connects frontend and backend.
│   └── styles // to use basic colors easily, defined color codes as object.
├── pages // page components
└── modules // manages reducers.

```

## ⚙Structure - backend

```
backend
│
src
├── api // Schema verifications and http methods.
│   ├── auth
│   └── posts
├── lib // middlewares that verificate tokens.
└── models // Schema, methods...

```

## contributing

WE NEED YOUR HELP!
wanna contribute on this project?
check out [contributing guidline](https://github.com/repusjh/cmanager-public/blob/master/CONTRIBUTING.md).
