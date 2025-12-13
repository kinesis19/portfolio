---
title: "Choosing Rainbow Color (3D Hyper-casual Game)"
description: "JavaScript와 RedBrick 엔진을 활용한 3D 서바이벌 게임. setInterval 기반의 게임 루프 및 랜덤 스폰 알고리즘 구현."
date: "2023-04-30"
tags: ["JavaScript", "Game Logic", "Algorithm", "Solo Dev", "Award"]
image: "/portfolio/images/thumb-rainbow-color.webp"
---

## 1. 프로젝트 개요
레드브릭(RedBrick)과 한국인디게임협회가 주관한 **인디 개발자 상생 프로젝트**에 선정된 3D 하이퍼 캐주얼 게임입니다.
제한 시간 내에 열쇠를 찾아내고, 무작위로 파괴되는 발판 위에서 살아남아야 하는 서바이벌 게임입니다. **'REDBRICK 23\' INDI CHALLENGERS'** 인증을 획득했습니다.

- **진행 기간:** 2023.02.27 ~ 2023.04.30
- **역할:** 1인 개발 (World Director) - 기획, 3D 월드 제작, 스크립팅
- **성과:** 2023 레드브릭 x 한국인디게임협회 **인디 개발자 상생 프로젝트 선정**

## 2. 핵심 로직 및 알고리즘 (Core Logic)
`script.js`에 구현된 주요 알고리즘과 엔지니어링 포인트입니다.

### 비동기 게임 루프 (Asynchronous Game Loop)
`setInterval` 함수를 활용하여 1초 단위로 게임 상태를 체크하는 코어 루프를 설계했습니다.
- **Timer & State Check:** 매초 타이머(`timerCount`)를 갱신하며, 제한 시간 종료 시 `clearInterval`로 루프를 제어합니다.
- **Win/Loss Condition:** 타이머 종료 시점에 `isKeyHave`(열쇠 보유 여부)와 `isPlayerTouchingFoothold`(발판 생존 여부)를 논리 연산자(`&&`)로 판단하여 라운드 승패를 결정합니다.

### 랜덤 스폰 알고리즘 (Randomized Spawning)
매 라운드마다 플레이어에게 새로운 경험을 제공하기 위해 위치 값을 난수화했습니다.
- **Key Spawning:** `getRandom(1, 7)`로 구역을 정하고, 2차 `getRandom(1, 3)`으로 세부 좌표(x, y, z)를 결정하여 예측 불가능한 위치에 열쇠를 생성합니다.
- **Map Destruction:** `aryFoothold` 배열에 난수 값을 할당하고, 특정 임계값(`> 7`)을 넘는 발판 객체(`objFoothold[i]`)를 `kill()` 메서드로 파괴하여 동적인 맵 변화를 구현했습니다.

### 객체 상호작용 및 이벤트 처리
- **Collision Detection:** `onCollide` 이벤트를 통해 플레이어와 발판/아이템 간의 접촉을 감지하고, `selectHoldNum` 변수로 현재 위치 상태를 실시간으로 관리했습니다.
- **Trap Mechanics:** 움직이는 장애물(`moveY`)과 회전하는 트랩(`rotateY`)의 좌표 연산을 통해 방해 요소를 구현했습니다.

## 3. 개발 경험
- **Project Lifecycle:** 기획부터 알고리즘 설계, 구현, QA, 공모전 출품까지 1인 개발의 전 과정을 완주했습니다.
- **JavaScript 활용:** 변수 스코프 관리, 배열 처리, 비동기 타이머 등 ES6 문법을 실제 게임 로직에 적용하며 언어 이해도를 높였습니다.

---

## 4. 플레이 영상
Choosing Rainbow Color 플레이 데모

<div class="aspect-video w-full mt-4">
  <iframe 
    class="w-full h-full rounded-xl border border-neutral-800"
    src="https://www.youtube.com/embed/9_hgpJxI2AE?si=xcCbtei_k81k_tJp" 
    title="Choosing Rainbow Color Gameplay" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<a href="https://github.com/kinesis19/Choosing_Rainbow_Color" target="_blank" class="group flex items-center justify-between w-full p-4 mt-6 border border-neutral-800 rounded-xl hover:border-neutral-600 hover:bg-neutral-900/50 transition-all duration-300 no-underline text-inherit">
  <span class="flex items-center gap-4">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" class="p-2 bg-white text-black rounded-full transition-transform duration-300 group-hover:scale-110">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
    <span class="flex flex-col">
      <strong class="text-base font-bold text-neutral-200 group-hover:text-white transition-colors">GitHub Repository</strong>
      <span class="text-sm text-neutral-500 group-hover:text-neutral-400">소스 코드 및 상세 로직 확인하기</span>
    </span>
  </span>
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
  </svg>
</a>

## 5. 수상 및 인증
![인디 챌린저스 인증서](/portfolio/images/rainbow-color-cert.webp)
*2023 REDBRICK INDI CHALLENGERS 인증서 (한국인디게임협회)*

