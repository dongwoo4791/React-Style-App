import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const Header = () => {
  //재사용 되면 따로 컴포넌트로 빼야함

  //헤더 디자인
  const HeaderStyle = styled.div`
    background: url('images/background.jpg');
    height: 880px;
    background-size: 100% 100%;
  `;

  //메뉴 스타일
  const MenuStyle = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 30px;
    list-style-type: none;
    color: white;
    font-weight: 800;
  `;

  //로고 디자인
  const LogoStyle = styled.div`
    color: white;
    font-size: 25px;
    font-weight: 800;
  `;

  //네비게이션 디자인
  const NavStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding: 10px;
  `;

  //섹션1 디자인
  const Section1Style = styled.div``;

  return (
    <HeaderStyle>
      <NavStyle>
        <LogoStyle>🍺</LogoStyle>
        <MenuStyle>
          <li>호스트가 되어보세요.</li>
          <li>도움말</li>
          <li>회원가입</li>
          <li>로그인</li>
        </MenuStyle>
      </NavStyle>
      <Section1Style>
        <Search />
      </Section1Style>
    </HeaderStyle>
  );
};

export default Header;
