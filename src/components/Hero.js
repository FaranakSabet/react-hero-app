import React from "react";
import styled from "styled-components";
import Background from "../assets/background.jpg";

const Section = styled.section`
  background-image: url(${Background});
  height: 100vh;
  width: auto;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;

const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: black;
  line-height: 30px;
  margin-top: 58px;
`;

const Button = styled.a`
  background: transparent;
  border-radius: 3px;
  color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177/12%);
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            This is my first project <br />
          </Title>

          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </Desc>
          <Button>Button</Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
