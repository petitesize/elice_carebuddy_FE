# 프로젝트 : carebuddy
제작 기간 : 2024.04.01 ~ 2024.04.19

## 소개

케어버디와 함께 사랑하는 나의 가족과 건강하고 행복한 시간을 보내세요

<br/>

## 목표

- 회원가입, 커뮤니티, 동물 건강 관리 등의 기본적인 기능 구현
- 보기 좋고 깔끔한 UI
- 클린 코드 구현

<br/>

## 배포 주소

[carebuddy](http://kdt-sw-8-team01.elicecoding.com/)

### 시작 가이드

**installation**

```bash
git clone [주소]
npm install
npm run dev
```

**.env**

```jsx
MONGODB_PASSWORD=carebudddy240401!
KAKAO_REST_API_KEY=fc0445196ca1bc948515866bb1fba56e
PORT=3001
JWT_ALG=HS256
SECRET_KEY=TJ3MdeN2kNqqzK2YC8yFfI8ZpBaAGEMF
JWT_EXP=1d
REDIRECT_URI=http://localhost:3001/auth/kakao/callback
```

<br/>

## 기술 스택

**Front-End**

<div align=center>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white" />
</div>

<br/>

**Back-End**

<div align=center>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=flat&logo=Mongoose&logoColor=white" />
  <img src="https://img.shields.io/badge/jsonwebtokens-000000?style=flat&logo=jsonwebtokens&logoColor=white" />
</div>

<br/>

**Tools**

<div align=center>
  <img src="https://img.shields.io/badge/GitLab-FC6D26?style=flat&logo=GitLab&logoColor=white" />
  <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white" />
  <img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=Discord&logoColor=white" />
  <img src="https://img.shields.io/badge/dotenv-ECD53F?style=flat&logo=dotenv&logoColor=white" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white" />
</div>

<br/>

## 전체 기능
| 종류 | 기능소개 |
| --- | --- |
| 사용자 관련 기능 | 로그인, 회원가입, 회원정보 CRUD |
| 커뮤니티 관련 기능 | 게시글 목록 및 상세 조회, 게시글 작성 및 삭제, 좋아요, 카테고리 CRUD |
| 반려동물 관련 기능 | 반려동물정보 CRUD, 진료기록 CRUD |
| 검색 관련 기능 | 병원 전체 조회 및 검색, 약국 전체 조회 및 검색 |

<br/>

## 기능 예시

- 커뮤니티 그룹
    - 카테고리별 커뮤니티 그룹 조회
    - 내가 원하는 커뮤니티 그룹에 가입/탈퇴
- 게시글
- 회원가입
    - 카카오 로그인 API로 회원가입 가능
- 로그인 및 로그아웃
    - JWT 를 이용한 로그인/ 로그아웃
- 마이페이지
    - 커뮤니티 그룹 가입 및 탈퇴
    - 반려동물 추가 및 수정, 삭제 (CRUD)
    - 본인 정보 조회 및 수정/ 회원 탈퇴 (RUD)
- 반려동물
    - 진료기록 CRUD
    - 반려동물 정보 조회 및 수정/ 회원 탈퇴 (RUD)

<br/>

## 프로젝트 팀원

| 이름 | 역할 | 맡은 업무 |
| --- | --- | --- |
| 박유신 | Frontend / 팀장 | <img src="https://img.shields.io/badge/홈-6D987A"/>  <img src="https://img.shields.io/badge/커뮤니티-6D987A"/>  <img src="https://img.shields.io/badge/포스트%20CRUD-6D987A"/>  <img src="https://img.shields.io/badge/그룹%20페이지-6D987A"/>  <img src="https://img.shields.io/badge/글%20수정%20등록%20모달-6D987A"/> |
| 김지연 | Frontend | <img src="https://img.shields.io/badge/카카오%20로그인%20UI-6D987A"/>  <img src="https://img.shields.io/badge/마이페이지-6D987A"/>  <img src="https://img.shields.io/badge/유저페이지-6D987A"/>  <img src="https://img.shields.io/badge/모달-6D987A"/> |
| 안지영 | Frontend | <img src="https://img.shields.io/badge/회원%20반려동물%20리스트-6D987A"/>  <img src="https://img.shields.io/badge/반려동물%20진료%20기록-6D987A"/>  <img src="https://img.shields.io/badge/동물병원%20및%20약국%20조회-6D987A"/>  <img src="https://img.shields.io/badge/유저%20상태관리-6D987A"/> |
| 홍경진 | Frontend | <img src="https://img.shields.io/badge/반려동물%20등록-6D987A"/>  <img src="https://img.shields.io/badge/수정%20모달-6D987A"/> |
| 주현정 | Backend | <img src="https://img.shields.io/badge/유저%20CRUD-6D987A"/>  <img src="https://img.shields.io/badge/카테고리(그룹)%20CRUD-6D987A"/>  <img src="https://img.shields.io/badge/포스트%20CRUD-6D987A"/>  <img src="https://img.shields.io/badge/백엔드%20배포-6D987A"/>  <img src="https://img.shields.io/badge/카카오%20로그인-6D987A"/>  <img src="https://img.shields.io/badge/미들웨어-6D987A"/>  <img src="https://img.shields.io/badge/폴더%20구조-6D987A"/> |
| 이다연 | Backend | <img src="https://img.shields.io/badge/반려동물%20CRUD-6D987A"/>  <img src="https://img.shields.io/badge/댓글%20CRUD-6D987A"/>  <img src="https://img.shields.io/badge/반려동물%20진료기록%20CRUD-6D987A"/>  <img src="https://img.shields.io/badge/병원%20약국%20조회%20및%20검색-6D987A"/>  <img src="https://img.shields.io/badge/이미지%20업로드-6D987A"/>  <img src="https://img.shields.io/badge/스키마%20설계-6D987A"/> |
