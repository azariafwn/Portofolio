import { memo } from 'react'
import { useColorMode, useBreakpointValue, Box, Image } from '@chakra-ui/react' // Tambah Image di sini
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { mobileBreakpointsMap } from 'config/theme'
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
          <Image
            src="public/logo-ZAF.jpg" 
            alt="ZAF Logo"
            htmlWidth={isMobile ? "40px" : "50px"} 
            htmlHeight={isMobile ? "40px" : "50px"}
            objectFit="cover"
            _hover={{
              transform: 'scale(1.1)',
              transition: '0.2s'
            }}
          />
        </MotionBox>
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)