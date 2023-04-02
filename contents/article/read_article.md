---
date: '2023-02-07'
title: '꾸준한 아티클 읽기'
categories: ['아티클']
summary: '읽은 아티클 목록 및 간단한 느낀점'
thumbnail: './article_thm1.jpg'
---

> 매일 한개씩 찾는 데 시간도 소요되고 갈수록 점점 급하게 훑어보는 것 같았다.<br />
> 찬찬히 보고 싶어서 주 2회 아티클 읽기로 바꾸기로 했다.

## 읽은 아티클 목록 📰

#### 23/2/7 [You don't know JS module](https://ui.toast.com/posts/ko_20190418)

다양한 모듈이 있는 것도 안지 오래 되진 않았는데, 웹팩을 통해 `CommonJS` 와 `ES Module` 두 모듈을 함께 사용할 수 있다는 것을 처음 봤다. 번들되어있는 코드도 서로 많이 다르다는 것을 확인할 수 있었고, 서로 내보내고 가져오는 방법도 많이 다른 것을 알 수 있었다.</br>

#### 23/2/9 [웹 퍼포먼스 개선을 위한 Lighthouse CI 도입기](https://blog.dramancompany.com/2021/04/%ec%9b%b9-%ed%8d%bc%ed%8f%ac%eb%a8%bc%ec%8a%a4-%ea%b0%9c%ec%84%a0%ec%9d%84-%ec%9c%84%ed%95%9c-lighthouse-ci-%eb%8f%84%ec%9e%85%ea%b8%b0/)

웹 페이지의 성능을 측정할 수 있는 `Lighthouse`에 대해서 알게 됐다. 지나가다 이름은 봤는 데 이게 크롬에 있는지 몰랐다.. 글을 읽고 직접 아무 페이지를 검사해봤는데 여러 기준의 점수들과 추천 행동과 진단을 볼 수 있는 것을 확인할 수 있었다. 성능 개션할 때 꼭 사용해서 작업을 진행해볼 것이다.</br>

#### 23/2/14 [나를 매일 성장시키는 셀프 피드백의 힘](https://yozm.wishket.com/magazine/detail/1894/)

더 효과적으로 좋은 셀프 피드백을 할 수 있지 않을까 해서 읽어보았다. 셀프 피드백은 장소와 시간을 가리지 않고 더 빠른 성장을 이뤄낼 수 있는 방법이라는 것을 알 수 있었다. 요즘 주기적으로 예전에 있었던 일을 회고(회고 글)이나 지금 일어나고 있는 일에 대한 것(TIL)을 통해 나도 모르게 셀프 피드백을 하고 있었던 것이다..!</br>
외부 피드백과 셀프 피드백을 병행하는 것이 가장 좋다고 하는데.. 외부 피드백은 다음 달부터 받을 수 있을 것 같다. </br>
우선은 지금처럼 자주 하고! 문제 상황에 초점을 맞추고, 더 솔직하게 셀프 피드백을 하자 </br>

#### 23/2/16 [The truth about CSS selector performance](https://blogs.windows.com/msedgedev/2023/01/17/the-truth-about-css-selector-performance/?ref=sidebar)

최근에 브라우저의 동작에 대한 학습을 했었는데, 내용이 그중 렌더링 단계에서의 css의 이야기인 것 같아서 읽어봤다. </br> 스타일을 DOM 노드에 적용하는 작업을 스타일 재계산이라고 한다고 한다. 일반적으로 오른쪽에서 왼쪽으로 체크하기 때문에 `.wrapper .section .title .link` 이 선택자가 `.link`보다 브라우저 엔진에게 더 빠르다고 한다. 선택자가 너무 길어져도 가독성이 별로인 것 같아서 일부로 구체적이게 안 쓰는 편이였는데 꼭 그것만이 좋은 것은 아니라는 것을 알게 됐다. 또 선택자 여러 개를 띄어 쓰냐 마냐도 영향이 있다는 것도 알게 되었고, li 엘리먼트 셀렉터를 사용하면 확인할 항목이 늘어난다는 것도 알게 됐다.</br>
특정 CSS 선택자를 개선하는 것만으로도 성능 향상을 이끌어낼 수 있다는 것이 신기했다. Edge 블로그 글이라 검사하는 법이 Edge로만 나와있었는데 크롬에도 같은 기능이 있는지 확인해 봐야겠다.

#### 23/2/21 [JavaScript Memory Management: How to Avoid Common Memory Leaks and Improve Performance](https://medium.com/itnext/javascript-memory-management-how-to-avoid-common-memory-leaks-and-improve-performance-c018dbbca954)

두달 전만에도 메모리에 대해서 잘 몰랐다. 지금은 메모리 관리를 신경 쓰는 것도 중요하다는 것을 알게 됐다. 항상 그런 부분을 생각하고 만들어야겠다는 생각하게 되었고, 여러가지 방법에 대해서 알 수 있었다. ~~가비지 컬렉터 고마워~~

#### 23/2/23 [방향성이 명확한 노력으로 나만의 색깔을 가진 사람이 되기](https://evan-moon.github.io/2021/09/10/developer-direction-of-effort/)

실천하고 있는 여러 활동들을 왜 하는지 나이게 어떤 의미가 있는지 항상 생각하면서 더 가치 있게 만들기 👍

#### 23/3/7 [문제 원인의 원인을 찾아서](https://toss.tech/article/real-reason)

좋은 해결책을 내기 위해서 해결해야 하는 문제를 한문장으로 적고, 문제에 계속 질문하고 답해보기 🦓

#### 23/3/18 [깊은 복사와 얕은 복사에 대한 심도있는 이야기](https://medium.com/watcha/%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%99%80-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EC%8B%AC%EB%8F%84%EC%9E%88%EB%8A%94-%EC%9D%B4%EC%95%BC%EA%B8%B0-2f7d797e008a)

`JSON.parse & JSON.stringify`부터 알고 있던 복사의 내용에서 더 새로운 내용을 만날 수 있었던 글. 왜 자바스크립트에 깊은 복사가 없는 지에 대해서도 아래의 답변 링크에서 생각을 알 수 있었고, 깊은 복사를 하기 전에 꼭 필요한 깊은 복사인지 생각해봐야겠다.

#### 23/4/2 [ChatGPT는 FE개발자를 대체할 수 있을까? (AI로 개발하기)](https://fe-developers.kakaoent.com/2023/230323-chatgpt-and-fe-developer/)

#### 23/4/2 [ChatGPT와 함께 춤을](https://jojoldu.tistory.com/709)

ChatGPT 정말 핫하다. 검색해도 잘 나오지 않는 경우에 자주 사용하게 되는 것 같다.</br>
생산성이 많이 올라가는 것도 당연하다고 생각하지만.. 아직 취준 중인 나의 입장에서는 조금만 지나면 정말 주니어의 자리가 많이 줄어들지 않을까? 생각이 많이 드는 글들이었다.😲</br>
지피티에 대체 불가능한 사람이 되도록 노력하자!
