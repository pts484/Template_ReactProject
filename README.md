# React Project Template

해당 템플릿은 리액트 프로젝트를 시작 또는 리팩토링하기 위해서 사용할 기본 템플릿입니다.
해당 템플릿에는 포함될 내용은 아래와 같습니다.

-   공통으로 사용 가능할 코드 (CSS, SCSS, HTML, React Components, React Hooks, function)
-   그 밖에 공통으로 사용될 디자인 패턴
-   공통 Assets
-   공통 디자인 시스템
-   컴포넌트

---

## Template Project Tree System

> [Figma 링크](https://www.figma.com/file/iqbpI8HG0RUlfrbHNY7uUB/%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8-%ED%94%84%EB%A1%A0%ED%8A%B8-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC?node-id=0%3A1&t=NXLd23HxD2dXzRKQ-1)


## 템플릿의 구성요소 변경 Rules

개발팀 구성원들과의 회의를 거쳐 템플릿을 수정합니다.  
템플릿 수정에 관한 발안 및 아이디어 공유는 자유이며, 회의를 통해서 진행합니다.  
Rules 에 문제가 있을 경우 회의를 통해 변경할 수 있습니다.

 ### 0. 디자인 시스템  ( /src/design_system )
> -- 회의 필요
> 1. 디자인 시스템의 적용 범위
> > 글로벌 컴포넌트, 페이지별 컴포넌트, (또 있을까? 레이아웃이라던지, 모달의 기본형 박스 디자인이라던지?)
> 
> * 다른 스타일 라이브러리와의 호환성은 어떠한가 ? (기존의 스타일 라이브러리 의존성을 확인)
> * 어떠한 형태로 사용 할것인가 ?
>   ex) 태그에  ``` style={{opercity : 0.55}} ``` 형태의 코드를 금지한다.   
>   ex) `<span className='style1, style2, style3, ...style_N' />` 하나의 태그에 스타일 클래스는 최대 몇개까지 쓰는가?
> * -- 그외 사항들을 함께 토론 해봅시다

 ### 1. Component ( Modal 외 다양한 기능의 모달 (dropdown, accodian, collapse 등등)
> > #### Global Component: ( ? )
> > * 생성/수정/삭제 : 개발팀 회의에서 제안자의 컴포넌트를 코드리뷰하고 회의를 거쳐 생성한다. 
> > #### Pages Component: ( /src/modules/{pages}/components )
> 
> 
> -- 회의 필요
> * 컴포넌트 A와 컴포넌트 B 를 사용한 복합 컴포넌트의 기준은 무엇인가?
> * 컴포넌트를 구성할 때 어떤점들이 기본적으로 고려되어야 하는가?
> * 컴포넌트와 복합 컴포넌트의 디자인시스템 사용에 대한 룰이 필요한가? 필요하다면 어떻게 사용해야 하는가?
> * -- 그외 사항들을 함께 토론 해봅시다

 ### 2. Layout
> * 폴더 위치 : /src/modules/Layouts
> -- 회의 필요
> * -- 그동안 개발하면서 불편한점, 개선점을 토론
> * 

### 3. Pages
> * 폴더 위치 : /src/modules/pages/{페이지 이름}
> -- 회의 필요
> * -- 그동안 개발하면서 불편한점, 개선점을 토론
> * 

 ### 4. Assets
> * 폴더 위치 : /src/modules/assets
> -- 회의 필요
> * -- 그동안 개발하면서 불편한점, 개선점을 토론
> * 





---
## Getting Started with Create React App 5

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Use CRACO (Create React App Configuration Override)

Help : [https://craco.js.org/](https://craco.js.org/)