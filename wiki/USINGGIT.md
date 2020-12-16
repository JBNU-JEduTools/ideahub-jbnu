#Git 사용법

## 1. Git 사용법

Git에 대한 자세한 설명은 [여기](https://github.com/hyunchan-park/osscourse)를 참고한다.

### Fork한 Repository 업데이트

원본 repository를 remote repository로 추가한다.

```
$ git remote add upstream https://github.com/hyunchan-park/ideahub-jbnu.git
```

upstream repository가 제대로 되었는지 확인한다.

```
$ git remote -v origin  
https://github.com/YOUR_USERNAME/ideahub-jbnu.git (fetch)  
https://github.com/YOUR_USERNAME/ideahub-jbnu.git (push)    
http://github.com/alps-jbnu/ideahub-jbnu.git (fecth)    
http://github.com/alps-jbnu/ideahub-jbnu.git (push)  
```

Git의 fetch 명령을 통해 upstream repository의 내용을 불러온다

```
$ git fetch upstream  
remote: Counting objects: 75, done.  
remote: Compressing objects: 100% (53/53), done.  
remote: Total 62 (delta 27), reused 44 (delta 9)  
Unpacking objects: 100% (62/62), done.  
From https://github.com/hyunchan-park/ideahub-jbnu.git
* [new branch]      main     -> upstream/main  
```

upstream repository 의 main branch (혹은 원하는 branch) 로부터 나의 local main branch 로 merge 한다.

```
$ git checkout main  
Switched to branch 'main'  
 
$ git merge upstream/main  
Updating a422352..5fdff0f  
Fast-forward  
  README                    |    9 -------  
  README.md                 |    7 ++++++  
  2 files changed, 7 insertions(+), 9 deletions(-)  
  delete mode 100644 README  
  create mode 100644 README.md  
```

마지막으로 remote repository에도 push 해주면 된다

```
$ git push origin master
```

### Pull Request를 checkout

[github 코드 리뷰를 위해 pull request를 checkout 하는 방법](https://www.slipp.net/questions/554)

## 2. Git rule

### Commit
- 기능에 대한 세부 내용의 변경 사항을 저장한다.
- master 브랜치에 절대로 바로 push하지 않는다.
- 커밋 전, 반드시 pull을 통해 코드를 최신으로 유지하고 충돌을 확인한다.
- IDE가 생성하는 설정 파일은 절대로 올리지 않는다. (주로 숨김파일로 존재한다.)
- 커밋 메시지의 규칙은 다음과 같다.
```
한 문장의 간단한 요약 ex) 00페이지에 대한 버튼 조정
```

내용이 복합적이라면 다음과 같다. (예시)
```
불필요한 주석 제거 및 캘린더 관련 기능 수정 등\n
- 수정 내용 1\n
- 추가 내용 2
```

(Ubuntu 기준)터미널에서는 다음처럼 입력함
```
(main) $ git commit -m "불필요한 주석 제거 및 컴포넌트구성 변경\n
- 수정 내용 1
- 추가 내용 2"
```

### Branch
- main 브랜치에 절대로 바로 push하지 않는다.
- 하나의 기능에 대해 브랜치를 생성한다.
- 브랜치의 이름은 ASCII와 숫자로만 입력하며, 단어 사이에 하이픈(`-`)을 두어 구분한다. `issue-#1`, `issue-#2`

### Pull Request
- 항상 pull-request를 통해 master 브랜치와 작업할 수 있도록 한다.
- 제목과 내용의 형식은 두지 않는다.

### Issues
- 새로 필요한 기능 또는 코드의 변경 사항에 대해서만 작성한다.
- 원격 저장소에 커밋된 내역에 한해서만, 문제 제기 또는 코드의 수정 의견을 작성한다. 그 외에는 작성하지 않는다.
