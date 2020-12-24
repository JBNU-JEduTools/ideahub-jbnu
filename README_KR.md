# IdeaHub

각종 대회에 나왔던 작품들에 대한 정보, 열리는 대회에 대한 정보를 등록하고 다른사람과 공유할 수 있도록 만든 웹서비스입니다.

작품정보, 대회정보, 작품등록하기 등의 기능을 제공합니다.


used...

```
nodejs v12.13.0
npm 6.12.0
yarn 1.19.1
```

---

## 🎨Style

이 프로젝트는 [styled-components](https://github.com/styled-components/styled-components)을 사용합니다. 참고해서 작성해주세요.

만약 스타일이나 테마를 바꾸고 싶다면 각 파일안에 있는 styled-components를 확인하세요.

```
YOUR_DIRECTORY\cmanager\frontend\src\components
```

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

## contributing
 - 누구든지 이 프로젝트에 참여할 수 있습니다.
 - 이 프로젝트의 이슈는 [이슈](https://github.com/hyunchan-park/ideahub-jbnu/issues)에 남겨주세요.
 - 작업 방식은 다음과 같습니다.
   1. 원하는 issue에 작업을 진행하겠다는 의사를 표시합니다.
   2. 해당 repo를 fork하고 작업을 진행합니다.
   3. 작업이 완료되었으면 `develop` 브랜치를 base로 pull request를 보내주세요.

자세한 내용은 [contributing guidline_KR](https://github.com/repusjh/cmanager-public/blob/master/CONTRIBUTING_KR.md)에서 확인해주세요.
