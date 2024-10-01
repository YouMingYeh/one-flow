import {
  Body,
  Column,
  Container,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Button,
  Head,
} from '@react-email/components';
import * as React from 'react';

interface EmailProps {
  id: string;
  username?: string;
}

const Email = ({ username, id }: EmailProps) => (
  <Html>
    <Head/>
    <Preview>🌍 感谢您体验 One-Flow，我们诚挚邀请您成为我们的内测用户！</Preview>
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
          🌍感谢您体验 One-Flow，我们诚挚邀请您成为我们的内测用户！
        </Heading>
        <Text style={heroText}>亲爱的 {username ? username : '用户'}，</Text>

        <Text style={text}>
          在这金秋时节，我们热烈祝贺您国庆节快乐！非常感谢您体验 OneFlow
          的Demo！我们希望这次体验能为您带来流畅的跨境收款解决方案，帮助您解决收款上的痛点。
        </Text>
        <Text style={text}>
          现在，我们诚挚地邀请您成为 OneFlow 的内测用户！
          作为跨境电商领域的重要一员，您的反馈对我们至关重要，将帮助我们不断优化产品，提升您的使用体验。
        </Text>

        <Text style={text}>
          如何成为内测用户？
          <br />
          1️⃣
          留意我们的邮件/短信/微信推送：我们将定期发送详细的内测用户指南和产品更新信息。
          <br />
          2️⃣
          直接参与反馈：回复本邮件或点击下方按钮，告诉我们您有兴趣加入内测团队，您的声音将直接影响产品的发展！
        </Text>

        <Text style={text}>
          成为内测用户的好处：
          <br />
          🎁 免费使用权：在正式发布前，全面体验 OneFlow
          的所有功能，找到最适合您的收款渠道。
          <br />
          💎 专属优惠：享受特别折扣，优化跨境收款成本，确保最佳性价比。
          <br />
          🚀 首发体验：优先体验即将推出的新功能，包括定制化收款解决方案和强大
          API 支持。
          <br />
          🗣️
          专家咨询：有机会与跨境支付领域专家进行一对一免费咨询，帮助您解决实际挑战。
          <br />
        </Text>
        <Text style={text}>
          在这个欢庆的节日里，我们期待您的加入，携手推动
          OneFlow，成为每位跨境电商卖家的最佳收款伙伴。您的真实反馈将直接影响我们的产品发展，帮助我们提升用户体验。再次祝您国庆节快乐，愿您假期愉快！
        </Text>
        <Row>
          <Column align='center'>
            <Row cellSpacing={4}>
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
                  我还没准备好迎接收款革命。。。
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
                  快给我这款收款神器的内测通行证！！
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
