#Directory

## ⚙Structure - frontend

```
src
├── components // 컴포넌트들을 담고있다.
│   ├── administer
│   ├── auth 
│   ├── base
│   ├── common
│   ├── content
│   ├── contents
│   ├── contentWrite
│   ├── main
│   ├── post
│   ├── posts
│   └── write 
├── containers // redux-linked 컴포넌트들을 관리한다.
│   ├── administer
│   ├── auth 
│   ├── base
│   ├── common
│   ├── content
│   ├── contents
│   ├── contentWrite
│   ├── main
│   ├── post
│   ├── posts
│   └── write // components used globally
├── images // page components
├── lib
│   ├── api //프론트앤드와 백앤드를 연결한다.
│   └── styles // 웹의 전체적인 스타일을 정의한다.
├── modules // 모듈을 관리해준다.
└── pages // 보여지는 페이지에 대해 정의한다.
App.js // 라우터 설정.
```

## ⚙Structure - backend

```
backend
│
src
├── api // http 에 대한 설명
│   ├── auth
│   └── posts
├── lib // middleware
└── models //

```