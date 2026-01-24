import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'

const Education = () => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.100')

  const educationList = [
    {
      school: 'Institut Teknologi Sepuluh Nopember (ITS)',
      degree: 'Bachelor of Computer Engineering',
      duration: '2022 - Present',
      details: 'GPA: 3.73 / 4.00. Focus on Embedded Systems, Cloud Computing, and Software Quality.',
    },
    {
      school: 'MAI Amanatul Ummah Surabaya',
      degree: 'Science Major',
      duration: '2020 - 2022',
      details: 'Completed 3-year high school curriculum in 2 years (Accelerated Program).',
    },
  ]

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Education.
      </Heading>
      <Text variant="description">
        My academic journey and milestones.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
        {educationList.map((edu, idx) => (
          <Box
            key={idx}
            spacing={3}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="1em"
            padding={{ base: '1.5em', '2xl': '2em' }}
            height="100%"
            backgroundColor={bg}
          >
            <Stack spacing={2}>
              <Heading fontSize="larger" variant="emphasis">
                {edu.school}
              </Heading>
              <Heading fontSize="md" fontWeight="bold">
                {edu.degree}
              </Heading>
              <Text fontSize="smaller" variant="accentAlternative" fontWeight="bold">
                {edu.duration}
              </Text>
              <Divider my={2} />
              <Text fontSize="small" variant="description">
                {edu.details}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

// Tambahkan import Divider dari chakra jika belum ada
import { Divider } from '@chakra-ui/react'

export default memo(Education)