import React from 'react';
import styled from 'styled-components';

const Search = () => {
  const SearchStyle = styled.div`
    width: 430px;
    height: 500px;
    /* block면 div가 줄 끝까지 감 */
    display: inline-block;
    background-color: white;
    /* position 속성
        박스와 박스가 연결될 때 물흐르듯 연결 시킴 (static)
        박스와 상하좌우와 연결되게 함.(relative)
    */
    position: relative;
    top: 10px;
    left: 50px;

    padding: 20px 30px;
  `;

  const SearchTitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(70, 70, 70);
  `;

  const SearchSubTitleStyle = styled.td`
    padding: 10px 0px;
    font-size: 12px;
    font-weight: 600;
  `;
  const SearchInputStyle = styled.input`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;
  const SearchSelectStyle = styled.select`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;
  const SearchButtonBoxStyle = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: end;
    padding: 20px 0px;
  `;
  const SearchButtonStyle = styled.button`
    background-color: rgb(255, 90, 95);
    color: white;
    width: 70px;
    height: 45px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: 0px;
    cursor: pointer;
  `;

  return (
    <SearchStyle>
      <SearchTitleStyle>
        특색 있는 숙소와 즐길<br></br>거리를 예약하세요
      </SearchTitleStyle>
      <table style={{ width: '100%' }}>
        <tr>
          <SearchSubTitleStyle colSpan="2">목적지</SearchSubTitleStyle>
        </tr>
        <tr>
          <td colSpna="2">
            <SearchInputStyle type="text" placeholder="모든 위치" />
          </td>
        </tr>
        <tr>
          <SearchSubTitleStyle>체크인</SearchSubTitleStyle>
          <SearchSubTitleStyle>체크아웃</SearchSubTitleStyle>
        </tr>
        <tr>
          <td>
            <SearchInputStyle type="date" />
          </td>
          <td>
            <SearchInputStyle type="date" />
          </td>
        </tr>
        <tr>
          <SearchSubTitleStyle colSpan="2">인원</SearchSubTitleStyle>
        </tr>
        <tr>
          <td colSpan="2">
            <SearchSelectStyle>
              <option>인원</option>
            </SearchSelectStyle>
          </td>
        </tr>
      </table>
      <SearchButtonBoxStyle>
        <SearchButtonStyle>검색</SearchButtonStyle>
      </SearchButtonBoxStyle>
    </SearchStyle>
  );
};

export default Search;
