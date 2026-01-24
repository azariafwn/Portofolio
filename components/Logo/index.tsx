import { memo } from 'react'
import { useColorMode, Text, useBreakpointValue, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { simpleOpacity } from 'config/animations'

const Logo = () => {
  const { colorMode } = useColorMode()
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const MotionBox = motion(Box)

  return (
    <AnimatePresence>
      <Link href="/" passHref>
        <MotionBox
          variants={simpleOpacity}
          initial="initial"
          animate="animate"
          zIndex={2}
          cursor="pointer"
        >
          <Text
            fontSize={isMobile ? 'xl' : '2xl'}
            fontWeight="bold"
            letterSpacing="tighter"
            fontFamily="monospace" // Memberikan kesan teknikal/coding
            color={colorMode === ThemeMode.Dark ? 'cyan.200' : 'teal.500'}
            _hover={{
              transform: 'scale(1.1)',
              transition: '0.2s'
            }}
          >
            ZAF<Text as="span" color={colorMode === ThemeMode.Dark ? 'white' : 'black'}>.</Text>
          </Text>
        </MotionBox>
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)