#Directory

## ⚙Structure - frontend

```
src
├── components // 컴포넌트들을 담고있다.
│   ├── administer //유저들의 정보를 정의
│   ├── auth //유저 정보에 대해 권한 설정
│   ├── base 
│   ├── common //공통으로 사용되는 컴포넌트(ex. Header / Footer 등)
│   ├── content // 작품정보기능에 대한 컴포넌트
│   ├── contents //페이징
│   ├── contentWrite
│   ├── main //메인페이지
│   ├── post //대회 post기능에 대한 컴포넌트
│   ├── posts
│   └── write // components used globally
├── containers // redux-linked 컴포넌트들을 관리한다.(위에 컴포넌트들을 활용하여 관리)
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
├── images // 필요한 이미지파일들.
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
├── api // 스키마의 정의와 https 함수들
│   ├── auth // 유저권한에 대한 스키마
│   ├── contents // 정보권한에 대한 스키마
│   ├── main // 메인화면에 대한 스키마
│   ├── posts // 게시판 스키마
│   └── users // 유저정보 스키마
├── lib // middlewares 
└── models // 각 입력에 대한 값에 대한 스키마
```