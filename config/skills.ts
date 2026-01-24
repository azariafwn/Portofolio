import { IconType } from 'react-icons'
import {
  SiDotNet,
  SiNodeDotJs,
  SiPhp,
  SiReact,
  SiNextDotJs,
  SiDocker,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiGit,
  SiVisualstudiocode,
  SiArduino,
  SiRaspberrypi,
  SiCplusplus,
  SiFigma,
  SiFlutter,
  SiBootstrap,
  SiJquery,
  SiMicrosoftazure,
  SiVisualstudio,
  SiAzuredevops,
  SiCheckmarx,
  SiPostman,
  SiPython,
  SiTensorflow,
  SiAutodesk,  
} from 'react-icons/si'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'iot_hardware'
  | 'qa_testing'
  | 'ai_data'
  | 'productivity'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {name: 'C# - .NET.Core', icon: SiDotNet},
    {name: 'Node.js', icon: SiNodeDotJs},
    {name: 'PHP', icon: SiPhp},    
  ],
  frontend: [
    {name: 'React', icon: SiReact},
    {name: 'NextJS', icon: SiNextDotJs},
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'jQuery', icon: SiJquery },
  ],
  database: [
    {name: 'PostgreSQL', icon: SiPostgresql},
    {name: 'SQL Server', icon: SiMicrosoftsqlserver},
    {name: 'MySQL', icon: SiMysql},
    {name: 'Azure SQL', icon: SiMicrosoftazure },
  ],
  cicd: [
    {name: 'Docker', icon: SiDocker},
  ],
  'iot_hardware': [
    { name: 'Arduino', icon: SiArduino },
    { name: 'Raspberry Pi', icon: SiRaspberrypi },
    { name: 'ESP32/ESP8266', icon: SiArduino },
    { name: 'C/C++', icon: SiCplusplus },
    { name: 'Autodesk Fusion 360', icon: SiAutodesk },
  ],
  qa_testing: [
    { name: 'Manual Testing', icon: SiCheckmarx },
    { name: 'Postman', icon: SiPostman },
  ],
  ai_data: [
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'Scikit-Learn', icon: SiPython },
    { name: 'Pandas', icon: SiPython },
    { name: 'NumPy', icon: SiPython },
  ],
  'productivity': [
    {name: 'VSCode', icon: SiVisualstudiocode, },
    {name: 'Visual Studio', icon: SiVisualstudio, },
    {name: 'Git', icon: SiGit, },
    {name: 'Figma', icon: SiFigma, },
    {name: 'Azure DevOps', icon: SiAzuredevops },
  ],  
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
