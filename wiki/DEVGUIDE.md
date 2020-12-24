# Windows에서 설치

### 1. jcloud에 테스트플랫폼을 만든다.
자세한 내용은 [여기](https://github.com/hyunchan-park/ideahub-jbnu/blob/master/docs/Development.md)를 참고한다.

### 2. nodejs와 mongoDB를 설치한다.
본인의 환경에 맞는 node.js 와 mongoDB를 설치한다. 
[node.js 설치페이지](https://nodejs.org/ko/download/) , [mongoDB 설치가이드](https://javacpro.tistory.com/64)
설치 후 cmd에서 잘 설치되었는지 확인한다.
```
$ node -v
$ npm -v
```
여기서 확인이 안된다면 환경변수를 설정한다.
 환경변수 설정
 ```
 시스템속성 -> 고급 -> 환경변수 -> 시스템 변수 -> 편집 -> Path에 C:\Progarm Files\nodejs\ 추가 후 확인
자신의 nodejs 폴더에 맞게 고쳐서 사용하면 됩니다.
```
자세한 설명은 [환경변수 설정](http://softzone205.blogspot.com/2017/08/node-npm-nodejs.html)에서 확인하세요.

### 3. repo를 본인의 컴퓨터로 클론한다.

[Git 사용방법](https://github.com/khoon-git/ideahub-jbnu/wiki/Git-%EC%82%AC%EC%9A%A9%EB%B2%95)을 참고하세요.

### 4. .env파일을 만들어서 본인의 backend 디렉토리에 추가시킨다.

```
//YOURDIRECTORY\ideahub-jbnu-master\backend\.env

PORT=YOUR_PORT
MONGO_URI=YOUR_DB_URL
JWT_SECRET=YOUR_SECRET_KEY
```

### 5. 프론트앤드에서 다음의 코드를 실행한다.

```
cd YOURDIRECTORY\ideahub-jbnu-master\frontend
yarn start
or
npm install
npm start
```

### 6. 백앤드에서 다음의 코드를 실행한다.
```
cd YOURDIRECTORY\ideahub-jbnu-master\backend
yarn start:dev
or 
npm start
```

### 7. 로컬에서 작업 후 본인이 만든 jcloud에 올라간 테스트 플랫폼에 올려본다.


### 8. 테스트 후 잘 작동된다면 `develop`브랜치를 base로 PR을 보낸다.

