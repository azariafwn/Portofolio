import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
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
      Places i’ve worked.
    </Heading>
    <Text variant="description">
      Since starting my journey in Computer Engineering, I've had the privilege of collaborating 
      with various teams that helped me sharpen my technical edge, from optimizing government systems 
      to ensuring the quality of IoT platforms. I'm always excited to bring value through clean code 
      and strict testing. Recently, I've been focusing on my role at{' '}
      <Link href="https://zerotech.id/" target="_blank" rel="noreferrer">
        Zero Tech
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
