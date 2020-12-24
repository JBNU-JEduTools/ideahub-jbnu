# Contribute

이 웹서비스는 작품에 대해 전시와 정보전공에 대한 기능, 대회의 정보전달에 대한 기능 을 수행하는 서비스입니다.

## making/resolving issues

현재 존재하고 있는 이슈들 중 해결하고 싶은 이슈에 참여 의사를 밝히고 시작합니다.
혹은 본인이 만들고 싶은 이슈들을 make하여 거기에 참여 의사를 보냅니다.

## Getting start

프론트앤드와 백앤드를 모두 clone 후 run 해주어야합니다.

1. repo를 fork하여 가져간 후 git clone을 통해 본인의 로컬로 가져옵니다.


1. 처음에 설정하기전 backend의 .env파일을 설정해주어야 합니다.

```
//YOURDIRECTORY\ideahub-jbnu\backend\.env

PORT=YOUR_PORT
MONGO_URI=YOUR_DB_URL
JWT_SECRET=YOUR_SECRET_KEY
```

2. 프론트앤드 디렉토리로 가서 다음 코드들을 실행해줍니다.

```
cd YOURDIRECTORY\ideahub-jbnu\frontend
yarn start
or
npm install
npm start
```

3. 백앤드에 가서 다음 코드들을 실행 후 'localhost:3000'으로 들어가 확인합니다.

```
cd YOURDIRECTORY\ideahub-jbnu\backend
yarn start:dev
```

4. jcloud에 개발 테스트 환경 구축하고 테스트합니다.

5. 테스트 후 PR을 보냅니다.

6. trouble shotting

   [react-scrpts: Permission denied](https://github.com/facebook/create-react-app/issues/5773)

   [ENOENT ERROR](https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle)

자세한 사항은 [개발가이드](https://github.com/khoon-git/ideahub-jbnu/wiki/%EA%B0%9C%EB%B0%9C%EA%B0%80%EC%9D%B4%EB%93%9C)에서 확인 할 수 있습니다.

## documentation

영어번역본과 현재 작성돼있는 document들의 대한 보충도 필요합니다.
코드의 전체적인 `리팩토링`도 필요합니다.

## style guidlines

코드 style guidlines

- string 을 wrap할때 '작은따옴표' 사용
- tab width : 2 space

Vscode사용시 플러그인 [prettier](https://github.com/prettier/prettier) 사용을 추천합니다.

 .prettierrc 파일을 프론트엔드 디렉토리에 만들어주세요.

```
//YOUR_DIRECTORY\ideahub-jbnu\frontend\.prettierrc
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```
