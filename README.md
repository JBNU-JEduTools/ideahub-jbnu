# cmanager

cmanager is competition management service, made with React, Koa.js and MongoDB.

on progress😔

---

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
