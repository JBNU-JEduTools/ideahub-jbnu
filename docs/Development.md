## J-Cloud 를 활용한 IdeaHub 개발 환경 구축
### 0. 요구 사항
* J-Cloud 계정 (전북대 컴공 학생들은 이미 계정이 만들어져있음. 학과 홈페이지 참고)


### 1. J-Cloud 인스턴스 생성 및 Fixed IP 요청
1. J-Cloud 계정으로 로그인하여, 이미지 소스 ideahub-image 를 이용하여 인스턴스 생성 (flavor: ideahub.temp.flavor)
2. J-Cloud 관리팀에 연락하여 Fixed IP 할당 요청 (mailto: jcloud@jbnu.ac.kr)
2. Fixed IP 확인 (예. 203.254.143.194)
3. SSH 접속: 포트번호는 7777
4. ID는 ubuntu 인스턴스 생성 시 등록한 키페어 사용해서 접속

### 2. Idea Hub 수행 및 확인
1. Frontend

`cd ~/ideaHub/cmanager-public/frontend; yarn start &`

2. Backend

`cd ~/ideaHub/cmanager-public/backend; yarn start:dev &`

3. 브라우저로 확인

http://fixedIP:3000 로 접속 


