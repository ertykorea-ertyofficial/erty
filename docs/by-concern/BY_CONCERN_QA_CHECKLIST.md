# ERTY BY CONCERN QA CHECKLIST

문서 상태: v1.0
문서 역할: `/by-concern` 페이지 QA 체크리스트
목표: 누락 없는 검수와 최종 승인 기준 정리

---

## 0. QA 원칙

- 이 체크리스트는 구현 완료 후 반드시 순서대로 확인한다.
- 한 항목이라도 fail이면 finalize 금지.
- screenshot regression은 desktop / tablet / mobile 3단계로 남긴다.

---

## 1. 구조 QA

### 1.1 페이지 구조
- [ ] Hero → Concern Selector → Active Concern Board → Why It Happens / What Not To Do → Proof Snapshot → ERTY Guide Cluster → Shop Bridge → FAQ 순서가 유지된다.
- [ ] 어떤 섹션도 shopping-first layout처럼 보이지 않는다.
- [ ] concern taxonomy 6개가 모두 보인다.
- [ ] 01 / 02 / 03 protocol layer가 화면에 명확히 존재한다.

### 1.2 concern 매핑
- [ ] 유분·트러블·모공 → 11 / 13 / 15
- [ ] 수분 부족·속당김 → 23 / 25 / 27
- [ ] 장벽 약화·붉은기 → 37 / 35
- [ ] 칙칙함·잡티·톤 저하 → 55 / 57 / 50
- [ ] 거친 결·각질·밀림 → 01 / 23 / 37
- [ ] 회복 저하·탄력 저하 → 35 / 37 / 02

---

## 2. Hero QA

- [ ] H1은 첫 시선을 가져간다.
- [ ] Hero가 탁하게 보이지 않는다.
- [ ] background still life가 흐린 배경처럼 보이지 않는다.
- [ ] CTA 2개가 명확하게 보인다.
- [ ] 작은 metadata가 H1을 방해하지 않는다.
- [ ] Home과 같은 브랜드 무드가 유지된다.

---

## 3. Concern Selector QA

- [ ] 6개 concern이 3초 안에 스캔 가능하다.
- [ ] active / preview / default state가 구분된다.
- [ ] concern 선택 위치가 직관적이다.
- [ ] 모바일에서도 touch target 44px 이상이다.
- [ ] selector가 self-test/quiz처럼 보이지 않는다.

---

## 4. Active Concern Board QA

- [ ] selected panel, route, supporting logic가 함께 읽힌다.
- [ ] selected / preview / related state가 시각적으로 구분된다.
- [ ] concern 변경 시 board / route / proof / guide / shop bridge가 함께 갱신된다.
- [ ] 01 / 02 / 03 protocol relation이 같은 시스템 레이어로 보인다.
- [ ] dead space가 과하지 않다.
- [ ] 정적 표나 정보판처럼 보이지 않는다.
- [ ] 사용자에게 “무엇을 눌러야 하는지”가 분명하다.

---

## 5. Proof Snapshot QA

- [ ] primary proof 1개 + secondary proof 2~3개 위계가 즉시 읽힌다.
- [ ] 숫자만 크고 의미가 불분명한 카드가 없다.
- [ ] 각 tile에 line / metric / what changed / interpretation / trust qualifier / CTA가 있다.
- [ ] fully repeated card template처럼 보이지 않는다.
- [ ] source-visible 수치만 사용한다.
- [ ] 서로 다른 의미의 metric을 동일 단위처럼 비교하지 않는다.

---

## 6. Guide Cluster QA

- [ ] Results / Guide / Journal의 역할 차이가 분명하다.
- [ ] “무엇을 보나”보다 “무엇을 얻나”가 먼저 읽힌다.
- [ ] 메인 콘텐츠보다 더 커 보이지 않는다.

---

## 7. Shop Bridge QA

- [ ] 쇼핑몰 메인처럼 보이지 않는다.
- [ ] concern에 맞는 SKU만 좁혀 보여준다.
- [ ] official store로 가는 bridge라는 게 분명하다.

---

## 8. FAQ QA

- [ ] 실제 사용자 질문처럼 읽힌다.
- [ ] open state가 thin divider + active dot + accent로 분명하다.
- [ ] generic help center처럼 보이지 않는다.
- [ ] FAQ 텍스트는 crawlable하게 남아 있다.

---

## 9. 카피 QA

- [ ] 번역투가 없다.
- [ ] 프로젝트 설명문 톤이 없다.
- [ ] 추상어 남용이 없다.
- [ ] selection-agnostic copy와 concern-specific copy가 분리돼 있다.
- [ ] 실제 제품 언어가 적절히 반영돼 있다.
- [ ] forbidden phrases가 없다.

---

## 10. 접근성 QA

- [ ] keyboard only로 주요 인터랙션 사용 가능
- [ ] focus ring이 명확함
- [ ] color만으로 state를 전달하지 않음
- [ ] FAQ accordion semantics 적용
- [ ] aria-selected / aria-expanded / aria-controls 적절히 적용
- [ ] prefers-reduced-motion 대응

---

## 11. 반응형 QA

### desktop
- [ ] layout balance 좋음
- [ ] board / proof / faq가 너무 비어 보이지 않음

### tablet
- [ ] row break가 이상하지 않음
- [ ] board가 깨지지 않음

### mobile
- [ ] selector chips 탐색 가능
- [ ] board stack이 읽기 쉬움
- [ ] proof primary가 먼저 보임
- [ ] protocol band가 미세 strip처럼 깨지지 않음

---

## 12. 성능 QA

- [ ] Hero image preload 1장만 적용
- [ ] 나머지 images lazy loading
- [ ] blur/filter 남용 없음
- [ ] layout jump 없음
- [ ] LCP / CLS 목표 범위 내

---

## 13. 분석 QA

- [ ] concern selector hover dwell 이벤트
- [ ] concern selector commit 이벤트
- [ ] proof CTA click 이벤트
- [ ] guide cluster click 이벤트
- [ ] faq open 이벤트
- [ ] shop bridge click 이벤트

---

## 14. 최종 승인 기준

- [ ] 페이지가 shopping-first처럼 보이지 않는다.
- [ ] 사용자는 “내 고민에는 어떤 번호가 먼저 붙는가”를 즉시 이해한다.
- [ ] Home과 같은 브랜드 무드가 유지된다.
- [ ] concern → number → proof → guide → shop 흐름이 자연스럽다.
- [ ] 구조가 아니라 브랜드처럼 보인다.
