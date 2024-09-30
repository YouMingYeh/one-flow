import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';
import * as React from 'react';

interface EmailProps {
  id: string;
  username?: string;
}

const Email = ({ username, id }: EmailProps) => (
  <Html>
    <Head />
    <Preview>🌍 体验 OneFlow Demo 后，邀请您成为我们的内测用户！</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          {/* <Img
            alt="Slack"
            height="36"
            src={`${baseUrl}/favicon.svg`}
            width="120"
          /> */}
          <Text style={brand}>OneFlow</Text>
        </Section>
        <Heading style={h1}>
          🌍 体验 OneFlow Demo 后，邀请您成为我们的内测用户！
        </Heading>
        <Text style={heroText}>亲爱的 {username ? username : '用户'}，</Text>

        <Text style={text}>
          非常感谢您使用 OneFlow 的产品
          Demo！我们希望这次体验能为您带来流畅的跨境收款体验，并帮助您解决在收款端遇到的痛点。市场上的跨境收款工具繁多，很多时候无法在最短时间内选择最适合您的工具。但我们相信，通过
          OneFlow，您可以找到性价比最高、最符合您业务需求的解决方案，节省时间并最大化优化收款支出。
        </Text>
        <Text style={text}>
          如果您对 OneFlow Demo 感到满意并希望进一步参与内测，我们正式邀请您成为
          OneFlow
          的首批内测用户。作为跨境电商领域的重要一员，您的加入将为我们提供宝贵的反馈，帮助我们不断优化产品的同时提升您的用户体验。
          如何成为内测用户？
        </Text>

        <Text style={text}>
          请留意日后的邮件/短信/微信推送。我们将不时为您发送详细的内测用户指南、产品更新信息，并协助您开始体验
          OneFlow 的所有功能。
        </Text>

        <Text style={text}>
          作为内测用户，您将享受：
          <br />
          🎁 免费使用权：在正式发布之前，全面体验 OneFlow
          的所有功能，找到最适合您的收款渠道。
          <br />
          💎 专属优惠：享受特别折扣，优化跨境收款成本，确保最佳性价比。
          <br />
          🚀
          首发体验：优先体验我们即将推出的新功能，包括定制化收款解决方案和强大
          API 支持。
          <br />
          🗣️
          专家咨询：与跨境支付领域专家进行一对一免费咨询，帮助您解决实际挑战。
          <br />
        </Text>
        <Text style={text}>
          我们期待您能为日后的产品更新提供真实可靠的意见，我们期待与您共同推动
          OneFlow， 成为每一位跨境电商卖家的最佳跨境收款伙伴。
        </Text>
        <Row>
          <Column align='center'>
            <Row>
              <td
                align='center'
                colSpan={1}
                style={{ paddingLeft: 16, width: '50%' }}
              >
                <Button
                  href='https://one-flow.cn'
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'rgb(229,231,235)',
                    textAlign: 'center',
                    backgroundColor: 'rgb(255,255,255)',
                    fontWeight: 600,
                    color: 'rgb(17,24,39)',
                  }}
                >
                  目前没有兴趣
                </Button>
              </td>
              <td
                align='center'
                colSpan={1}
                style={{ paddingRight: 16, width: '50%' }}
              >
                <Button
                  href={`https://one-flow.cn/early-access/email/${id}`}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderRadius: 8,
                    backgroundColor: 'rgb(79,70,229)',
                    textAlign: 'center',
                    fontWeight: 600,
                    color: 'rgb(255,255,255)',
                  }}
                >
                  立即成为内测用户
                </Button>
              </td>
            </Row>
          </Column>
        </Row>
        <Text style={text}>
          如果您有任何问题或疑问，请随时联系我们的客服团队，我们将竭诚为您服务。
        </Text>
        <Text style={text}>
          祝生意兴隆，
          <br />
          OneFlow 团队
        </Text>
        <Section>
          <Text style={footerText}>
            ©2024 OneFlow <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const footerText = {
  fontSize: '12px',
  color: '#b7b7b7',
  lineHeight: '15px',
  textAlign: 'left' as const,
  marginBottom: '50px',
};

const main = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: '0 auto',
  padding: '0px 20px',
};

const logoContainer = {
  marginTop: '32px',
};

const brand = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '1',
  lineHeight: '42px',
  fontFamily: 'Georgia, serif',
};

const h1 = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  lineHeight: '42px',
};

const heroText = {
  fontSize: '20px',
  lineHeight: '28px',
  marginBottom: '30px',
};

const text = {
  color: '#000',
  fontSize: '14px',
  lineHeight: '24px',
};

export default Email;
