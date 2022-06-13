import projectIcon from '../images/industrial/project-icon.svg';
import infrastructureIcon from '../images/industrial/infrastructure-icon.svg';
import calculationsIcon from '../images/industrial/calculations-icon.svg';
import qaIcon from '../images/industrial/qa-icon.svg';
import ProjectBG from '../images/industrial/project.png';
import MachineLearningBg from '../images/industrial/machine-learning.png';
import DataBg from '../images/industrial/data.png';
import RobotBg from '../images/industrial/robot.png';

const industrialData = [
  {
    id: 1,
    title: 'Анализ социальных данных',
    icon: projectIcon,
    content:
      'Направление включает в себя исследования и разработки технологий МО и КТ',
    bg: ProjectBG,
  },
  {
    id: 2,
    title: 'Инфраструктура больших данных',
    icon: infrastructureIcon,
    content:
      'Направление включает в себя исследования и разработки технологий МО и КТ',
    bg: MachineLearningBg,
  },
  {
    id: 3,
    title: 'Облачные вычисления',
    icon: calculationsIcon,
    content:
      'Направление включает в себя исследования и разработки технологий МО и КТ',
    bg: DataBg,
  },
  {
    id: 4,
    title: 'QA системы',
    icon: qaIcon,
    content:
      'Направление включает в себя исследования и разработки технологий МО и КТ',
    bg: RobotBg,
  },
];

export default industrialData;
