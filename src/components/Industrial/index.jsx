import store from '../../store/store';
import {
  ClabContent,
  ClabPhotos,
  Container,
  LabContent,
  Note,
  NoteContaner,
  NoteShare,
  Section,
  Title,
  Image,
  LinesCard,
} from './styles';
import Researcher from '../../images/industrial/researcher.jpg';
import Researchers from '../../images/industrial/researchers.jpg';
import Card from '../IndustrialCard';
import ShareIcon from '../Ui/ShareIcon';

const Industrial = () => {
  const { data } = store.industrials;

  return (
    <Section>
      <Container>
        <Title>Industrial AI Research Lab</Title>
        <ClabContent>
          <LabContent>
            <ShareIcon />
            <Note>
              Центр национальной технологической инициативы (НТИ), получивший
              государственную поддержку по направлению «Технологии машинного
              обучения и когнитивные технологии».
            </Note>
            <NoteContaner>
              <NoteShare>
                Мы изучаем проблемы и выявляем, когда мы работаем вместе с
                нашими клиентами, новые решения находят, не задумываясь. Работая
                таким образом и проявляя гибкость, мы можем поддерживать новый
                подход для удовлетворения потребностей наших клиентов.
              </NoteShare>
            </NoteContaner>
          </LabContent>
          <ClabPhotos>
            <Image alt="Researcher" src={Researcher} />
            <Image alt="Researchers" src={Researchers} />
          </ClabPhotos>
        </ClabContent>
        <LinesCard>
          {data.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </LinesCard>
      </Container>
    </Section>
  );
};

export default Industrial;
