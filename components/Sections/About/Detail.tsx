import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
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
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2016

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        I am a final-year <b>Computer Engineering</b> student at ITS Surabaya. 
        I love building robust systems with <b>.NET Core</b> and currently keeping my eyes as a{' '}
        <b>QA Engineer</b> that focuses on{' '}
        <b>manual & automation testing</b>, <b>system quality</b>,{' '}
        <Tooltip
          label="Documentation? love-hate relationship here."
          aria-label="Documentation?"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b>100+ test case documentations</b>
          </Text>
        </Tooltip>{' '}
        and even <b>IoT hardware integration</b> stuff.
        <br /> <br />
        Here are few technologies that are cup of my{' '}
        <Tooltip
          label="I prefer coffee for debugging sessions :)"
          aria-label="Coffee over Tea!"
          hasArrow
        >
          <Text as="span" variant="emphasis" textDecorationLine="line-through">
            tea
          </Text>
        </Tooltip>{' '}
        coffee <Icon as={GiCoffeePot} color={emphasis} />:
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <ListIcon as={SiDotNet} color={emphasis} fontSize="2em" />
          .NET Core MVC
        </ListItem>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <ListIcon as={SiNodeDotJs} color={emphasis} fontSize="2em" />
          Node.js / JS
        </ListItem>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <ListIcon as={SiMicrosoftsqlserver} color={emphasis} fontSize="2em" />
          SQL Server / Postgres
        </ListItem>
        <ListItem fontSize="small" display="flex" alignItems="center">
          <ListIcon as={SiDocker} color={emphasis} fontSize="2em" />
          Docker & Cloud
        </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiCheckmarx} color={emphasis} fontSize="2em" />
            QA & Manual Testing
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiPostman} color={emphasis} fontSize="2em" />
            API Testing (Postman)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiArduino} color={emphasis} fontSize="2em" />
            IoT & Embedded System
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiPython} color={emphasis} fontSize="2em" />
            Python (AI/ML)
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full tech stack <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
