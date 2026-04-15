# Cafe24 Support Brief (Historical)

## 목적

이 문서는 이전 전략인 `shop.ertyofficial.com`의 Cafe24 연결 문제를 기록한 과거 근거 문서다.
현재 canonical shopping domain은 `ertyofficial.shop`으로 변경되었으므로, 이 문서는 참고 이력으로만 유지한다.

## 현재 상태

- 이 문서는 historical note다.
- 현재 쇼핑 도메인 전략은 `ertyofficial.shop`
- 아래 내용은 `shop.ertyofficial.com` 전략 검토 이력이다.

## 프로젝트 구조

- 메인 브랜드 도메인: `ertyofficial.com`
- 쇼핑 서브도메인: `shop.ertyofficial.com`
- 정책:
  - `ertyofficial.com`은 브랜드 메인 프론트로 유지
  - Cafe24 대표 쇼핑 도메인으로 `ertyofficial.com`을 연결 전환하면 안 됨
  - 가능하면 `shop.ertyofficial.com`만 쇼핑몰 연결 도메인으로 사용해야 함

## 상담사에게 확인할 핵심 질문

1. `ertyofficial.com`을 실제 쇼핑 도메인으로 연결하지 않은 상태에서도 `shop.ertyofficial.com`만 수동 등록 가능한지
2. 현재 도메인 관리 목록에 있는 `ertyofficial.com` 항목을 부모 도메인으로 인식하여 `shop.ertyofficial.com`을 추가 연결 처리할 수 있는지
3. 불가능하다면 Cafe24 정책상 서브도메인 연결의 정확한 필수 조건이 무엇인지
4. 가능한 경우 필요한 DNS 타입이 `CNAME`인지 `A`인지, 그리고 SSL 발급 절차와 예상 반영 시간이 무엇인지

## 확인된 사실

### Cafe24 관리자 상태

- `ertyofficial.com`은 Cafe24 도메인 목록에 존재하나 `미연결` 상태
- `shop.ertyofficial.com`을 self-service UI에서 직접 추가하려고 하면 오류 발생
- 오류 문구: `도메인 정보 호출에 실패하였습니다`

### Cafe24 챗봇 안내의 충돌

- 안내 1: 루트 도메인을 먼저 연결해야 서브도메인 연결 가능
- 안내 2: `shop.ertyofficial.com`을 직접 입력해 연결 가능
- 실제 UI 동작은 위 두 안내와 일치하지 않음

## DNS 검증 이력

### 2026-04-13 확인 결과

- Cloudflare에서 `shop.ertyofficial.com` DNS 생성 완료
- 설정값:
  - type: `CNAME`
  - target: `ertykorea01.cafe24.com`
  - proxy: `DNS only`
- 공개 DNS에서도 정상 해석 확인

### 2026-04-14 재확인 결과

- 공개 DNS 기준 `shop.ertyofficial.com`은 현재 해석되지 않음
- Cloudflare persisted state 조회 결과도 `shop.ertyofficial.com` 레코드 없음
- 따라서 현재 상태 기준으로는 DNS record가 live zone에서 제거된 상태

## 현재 블로커

1. Cafe24 self-service UI로는 `shop.ertyofficial.com` 연결 불가
2. 챗봇 안내가 상충되어 정책을 신뢰 근거로 사용하기 어려움
3. 현재 DNS record가 제거된 상태라, 상담 전 다시 생성할지 여부도 확인 필요

## 권장 상담 문안

```text
현재 프로젝트 구조상 메인 브랜드 도메인 ertyofficial.com 은 Cafe24 쇼핑 대표도메인으로 사용하면 안 되고,
shop.ertyofficial.com 만 쇼핑몰 연결 도메인으로 사용해야 합니다.

현재 상태:
- Cafe24 도메인 관리 화면에 ertyofficial.com 은 등록되어 있으나 미연결
- shop.ertyofficial.com 은 self-service UI에서 직접 추가 시 “도메인 정보 호출에 실패하였습니다” 발생
- 챗봇 답변은 상충됨
  1) 루트 도메인을 먼저 연결해야 한다는 안내
  2) 서브도메인을 직접 입력해 연결 가능하다는 안내

확인 요청:
1. ertyofficial.com 을 실제 쇼핑 도메인으로 연결하지 않은 상태에서도
   shop.ertyofficial.com 만 수동 등록 가능한지
2. 가능하다면 카페24 측에서 직접 연결 처리 가능한지
3. 불가능하다면 정책상 정확한 필수 조건이 무엇인지
4. 가능한 경우 필요한 DNS 타입과 SSL 반영 절차가 무엇인지
```

## 다음 액션

1. 인간 상담사 답변 확보
2. 답변 기준으로 DNS 재생성 또는 구조 유지 결정
3. 구조 확정 후 `shop.ertyofficial.com` live 검증 재실행
