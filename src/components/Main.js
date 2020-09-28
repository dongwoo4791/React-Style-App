import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const MainTitleStyle = styled.td`
    padding: 10px 0px;
    font-size: 25px;
    font-weight: 500;
  `;

  const MainStyle = styled.div`
    margin: 30px 80px;
  `;

  const CardBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;
  const CardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 1px;
    border-radius: 10px;
    border: 1px solid gray;
    box-shadow: 0 0 3px 0 black;
  `;
  const CardImage1 = styled.image`
    background-image: url(images/card1.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const CardImage2 = styled.image`
    background-image: url(images/card2.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const CardImage3 = styled.image`
    background-image: url(images/card3.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const CardImage4 = styled.image`
    background-image: url(images/card4.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const CardText = styled.div`
    display: grid;
    align-items: center;
    font-weight: 600;
    margin: 0px 0px 0px 10px;
  `;
  const MainAdd = styled.div`
    border-radius: 20px;
    margin: 40px;
    background-image: url(images/ad1.jpg);
    height: 350px;
    background-size: 100% 100%;
  `;
  const ChooBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;
  const ChooImage1 = styled.div`
    background-image: url(images/choo1.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImage2 = styled.div`
    background-image: url(images/choo2.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImage3 = styled.div`
    background-image: url(images/choo3.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImage4 = styled.div`
    background-image: url(images/choo4.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImage5 = styled.div`
    background-image: url(images/choo5.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const MainAdd2 = styled.div`
    background-image: url(images/ad2.png);
    height: 300px;
    background-size: 100% 100%;
  `;
  const HomeBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;
  const HomeImage1 = styled.div`
    background-image: url(images/home1.png);
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImage2 = styled.div`
    background-image: url(images/home2.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage3 = styled.div`
    background-image: url(images/home3.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage4 = styled.div`
    background-image: url(images/home4.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage5 = styled.div`
    background-image: url(images/home5.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage6 = styled.div`
    background-image: url(images/home6.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage7 = styled.div`
    background-image: url(images/home7.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage8 = styled.div`
    background-image: url(images/home8.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeInfo = styled.div``;
  const Info1 = styled.div`
    margin: 5px;
    font-size: 13px;
    color: gray;
  `;
  const Info2 = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: rgb(61, 60, 60);
  `;
  const Info3 = styled.div``;
  const Star = styled.span`
    font-size: 12px;
    color: rgb(30, 119, 115);
    font-weight: 800;
  `;
  const Count = styled.span`
    font-size: 12px;
  `;
  const Type = styled.span`
    font-size: 12px;
  `;
  return (
    <MainStyle>
      <div>
        <MainTitleStyle>에어비엔비 둘러보기</MainTitleStyle>
      </div>
      <CardBox>
        <CardStyle>
          <CardImage1 />
          <CardText>숙소 및 부티크 호텔</CardText>
        </CardStyle>
        <CardStyle>
          <CardImage2 />
          <CardText>트립</CardText>
        </CardStyle>
        <CardStyle>
          <CardImage3 />
          <CardText>어드벤쳐</CardText>
        </CardStyle>
        <CardStyle>
          <CardImage4 />
          <CardText>레스토랑</CardText>
        </CardStyle>
      </CardBox>
      <MainAdd />
      <div>
        <MainTitleStyle>추천 여행지</MainTitleStyle>
      </div>
      <ChooBox>
        <ChooImage1 />
        <ChooImage2 />
        <ChooImage3 />
        <ChooImage4 />
        <ChooImage5 />
      </ChooBox>
      <div>
        <MainTitleStyle>에어비엔비 플러스를 만나보세요!</MainTitleStyle>
      </div>
      <div>
        <td>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</td>
      </div>
      <MainAdd2 />
      <div>
        <MainTitleStyle>전 세계 숙소</MainTitleStyle>
      </div>
      <HomeBox>
        <div>
          <HomeImage1 />
          <HomeInfo>
            <Info1>오두막</Info1>
            <Info2>BALAIN</Info2>
            <Info3>
              <Star>★★★★★</Star>
              <Count>185</Count>
              <Type>슈퍼호스트</Type>
            </Info3>
          </HomeInfo>
        </div>
        <div>
          <HomeImage2 />
          <HomeInfo>
            <div></div>
            <div></div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </HomeInfo>
        </div>
        <div>
          <HomeImage3 />
          <div>글자</div>
        </div>
        <div>
          <HomeImage4 />
          <div>글자</div>
        </div>
        <div>
          <HomeImage5 />
          <div>글자</div>
        </div>
        <div>
          <HomeImage6 />
          <div>글자</div>
        </div>
        <div>
          <HomeImage7 />
          <div>글자</div>
        </div>
        <div>
          <HomeImage8 />
          <div>글자</div>
        </div>
      </HomeBox>
    </MainStyle>
  );
};

export default Main;
