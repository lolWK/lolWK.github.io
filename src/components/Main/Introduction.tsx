import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  background-color: #333;

  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  @font-face {
    font-family: 'KyoboHand';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'KyoboHand';
  font-size: 22px;
  font-weight: 400;
  padding-left: 1px;
  letter-spacing: 0.08rem;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`

const Title = styled.div`
  @font-face {
    font-family: 'Humanbumsuk';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Humanbumsuk.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Humanbumsuk';
  letter-spacing: 0.18rem;
  margin-top: 12px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <SubTitle>만들어버렸다,</SubTitle>
          <Title>Ati's devlog</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
