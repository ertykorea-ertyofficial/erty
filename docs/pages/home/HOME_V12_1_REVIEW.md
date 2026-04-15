# HOME V12.1 Review

## Scope
- page: `/`
- mode: local preview only
- production impact: none

## Implemented
- Hero
  - H1 lock-up 유지, subcopy를 더 짧고 직접적인 문장으로 교체
  - CTA 존재감 소폭 상향
  - hero index를 `Protocol / Line / Index` 3단 cue로 재정리
  - still life background opacity/blur를 조정해 silhouette를 더 읽히게 보정
- Featured SKU
  - `selected panel + grouped explorer + integrated protocol band` 구조로 재정리
  - `01 / 02 / 03`을 같은 시스템 안의 `Professional / Protocol` 레이어로 고정
  - `selected / preview / related / idle` 상태를 분리
  - 모바일에서는 protocol band를 collapsible strip로 처리
- Evidence
  - `37 primary + 27 / 55 / 57 secondary` 위계로 정리
  - 각 tile에 `line / metric / what changed / interpretation / trust qualifier / next route`를 고정
  - evidence type과 trust qualifier를 같이 노출
- Numbering System
  - row left rail과 active/related 상태를 line color에 연결
  - row click 시 대표 SKU selection과 연결
- Next Layers / FAQ
  - layer copy를 결과 중심으로 재정리
  - FAQ accordion semantics 유지, open state accent 정리
- Footer
  - brand definition을 더 직접적인 문장으로 교체
  - numbering summary와 route cluster 정렬 보정

## Reproduced Issue
- issue
  - Featured explorer에서 hover preview는 보였지만 click/tap committed selection이 바뀌지 않음
- reproduction
  1. local preview `/` 접속
  2. Featured explorer의 다른 SKU 클릭
  3. selected panel과 `data-active-sku`가 기본값 `37`에서 바뀌지 않음
- root cause
  - `components:loaded` 이벤트에서 HOME 섹션을 다시 렌더링하면서 Featured/Evidence/FAQ 내부 DOM이 교체됨
  - 기존 per-item event listener는 사라졌지만 `data-bound="true"` 때문에 재바인딩이 차단됨
- fix
  - `initHomePage()`를 `one-time section render + repeatable footer/copy hydration` 구조로 분리
  - 본문 섹션은 `document.body.dataset.homeInitialized` 이후 재렌더링하지 않게 변경
  - footer copy/artifact만 이후 이벤트에서도 다시 채움
- revalidation
  - click commit: `37 -> 23` 전환 확인
  - keyboard: `focus 21 -> ArrowRight -> preview 23 -> Enter -> active 23` 확인
  - numbering row click: `Professional -> 01` selection 전환 확인
  - protocol select: `02` 선택 시 protocol state 활성, core primary proof strong highlight 해제 확인

## Validation
- local URL
  - `http://127.0.0.1:4173/`
- HTTP
  - `200`
- browser console
  - `0 errors`
- heading
  - `h1 = 1`
- state sync
  - `activeSkuId` 변경 시 selected panel / explorer / route / evidence / protocol relevance 동기화 확인
- keyboard
  - `Arrow / Enter` 탐색 확인
- mobile
  - protocol band 기본 collapsed 확인

## Artifacts
- desktop screenshot
  - `output/playwright/home-v12_1-desktop-final2.png`
- mobile screenshot
  - `output/playwright/home-v12_1-mobile-collapsed.png`

## Notes
- 이번 라운드는 preview/local만 검증했다.
- production, commit, push, deploy는 수행하지 않았다.
