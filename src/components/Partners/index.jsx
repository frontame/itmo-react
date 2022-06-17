import {
  Section,
  Container,
  TextContainer,
  Heading,
  Text,
  Flex,
} from './style';
import GazpromLogo from '../../images/partners/GazpromLogo';
import HuaweiLogo from '../../images/partners/HuaweiLogo';
import MailLogo from '../../images/partners/MailLogo';
import SberbankLogo from '../../images/partners/SberbankLogo';
import SiemensLogo from '../../images/partners/SiemensLogo';
import RosneftLogo from '../../images/partners/RosneftLogo';

const Partners = () => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Heading>с кем мы работаем</Heading>
          <Text>
            За время сотрудничества компания показала себя как надежный партнер,
            способный оперативно решать вопросы по внесению необходимых
            изменений.
          </Text>
          <Text>
            Отдельно хочется отметить квалифицированный персонал компании,
            который всегда готов прийти на помощь в решении поставленных задач,
            дать объективную оценку и свои рекомендации по улучшению
            деятельности. Надеемся на дальнейшее и плодотворное сотрудничество.
          </Text>
        </TextContainer>
        <Flex>
          <GazpromLogo />
          <SberbankLogo />
          <MailLogo />
          <SiemensLogo />
          <HuaweiLogo />

          <SberbankLogo />
          <RosneftLogo />
          <GazpromLogo />
          <HuaweiLogo />
          <MailLogo />
        </Flex>
      </Container>
    </Section>
  );
};

export default Partners;
