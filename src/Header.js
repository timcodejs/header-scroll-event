import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';

const Header = () => {
  const headerRef = useRef(); // header DOM
  const [visible, setVisible] = useState(false); // 스크롤을 위로 올리면 true, 내리면 false
  const [scrollY, setScrollY] = useState(window.pageYOffset); // 초기 수직 스크롤 값 = 0

  const handleScroll = useCallback(() => {
    const moving = window.pageYOffset; // 스크롤 시 수직 스크롤 값 moving에 담기
    setVisible(scrollY > moving); // 초기 스크롤 값이 스크롤 후 값보다 크면 true를 담고, 작으면 false를 담는다
    setScrollY(moving); // 초기 스크롤 상태에 스크롤된 값 담기

    // 스크롤에 따른 스타일 지정
    if (visible) {
      headerRef.current.style.position = 'fixed';
      headerRef.current.style.backgroundColor = 'red';
    } else {
      headerRef.current.style.position = 'absolute';
      headerRef.current.style.backgroundColor = 'green';
    }

    // 스크롤 값이 0이 될 때 스타일 지정
    if (moving === 0 || scrollY === 0) {
      headerRef.current.style.position = 'absolute';
      headerRef.current.style.backgroundColor = 'green';
    }
  }, [scrollY, visible]);

  // 스크롤 감지
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 등록

    return () => {
      window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 제거
    } 
  }, [handleScroll]);

  return (
    <HeaderWrap ref={headerRef}>
      <div>
        <div>logo</div>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    </HeaderWrap>
  )
};

export default Header;

const HeaderWrap = styled.div`
position: absolute;
  border: 1px solid red;
  background-color: green;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 100px;
    margin: 0 auto;

    &:hover {
      background-color: yellow;
    }
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    width: 200px;
  }
`;