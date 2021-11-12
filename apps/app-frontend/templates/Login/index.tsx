import LoginForm from "../../components/Forms/LoginForm"
import { Header, Flex, Typography } from "@gohubly/design-system"
import TemplateLayout from "../../components/TemplateLayout"
import useLoginTemplateLogic from "./logic"
import { Container, ContentWrapper, FooterWrapper, LoginFormWrapper } from "./style"

const LoginTemplate: React.FC = () => {
  const logic = useLoginTemplateLogic()

  return (
    <TemplateLayout type='PUBLIC'>
      <Container>
        <Header />
        <ContentWrapper fullHeight>

          {/* Title & Subtitle texts */}
          <Flex gap={12} flexDirection="column" alignItems="center" justifyContent="center">
            <Typography color='grayscale900' as='h1'>
              Hello!
            </Typography>
            <Typography as='p' size='large' color='grayscale700'>
              Enter your details below to sign in
            </Typography>
          </Flex>

          {/* Login Form */}
          <LoginFormWrapper>
            <LoginForm />
          </LoginFormWrapper>
          
        </ContentWrapper>
        
        {/* Footer texts */}
        <FooterWrapper>
          <Typography textAlign="center" color="grayscale700">
            All Rights Reserved to B8One Consultoria Tecnica Em Ti Ltda
          </Typography>
        </FooterWrapper>
      </Container>
    </TemplateLayout>
  )
}

export default LoginTemplate