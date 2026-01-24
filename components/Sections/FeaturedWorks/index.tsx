import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'

// Import icon-icon teknologi (Pastikan react-icons sudah terinstall)
import { 
  SiDotNet, SiFlutter, SiPostgresql, SiMysql, SiMicrosoftazure, 
  SiPython, SiTensorflow, SiArduino, SiDocker, SiNodeDotJs, 
  SiPhp, SiCplusplus,
  SiPostman,
  SiGooglesheets,
} from 'react-icons/si'
import { FaPhp } from 'react-icons/fa'

const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  
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
        Featured Projects.
      </Heading>
      <Text variant="description">
        A collection of my works ranging from Full-stack development, AI/Machine Learning, to IoT Hardware.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        {/* 1. SAPPY - Smart Dairy Farm */}
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="SAPPY: Smart Dairy Farm"
            description="Integrated mobile solution with AI (LSTM) for milk production prediction & feed optimization. Features NFC for cattle tagging."
            src="/works/sappy.png"
            stack={[SiFlutter, SiNodeDotJs, SiPython, SiPostgresql, SiTensorflow]}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/azariafwn/Ternaknesia_SappyApp"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* 2. Winnicode News Portal */}
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Winnicode News Portal"
            description="Professional News CMS with RBAC system (Reader, Author, Editor). Managed full content lifecycle and deployed to Microsoft Azure."
            src="/works/winnicode.png"
            stack={[SiDotNet, SiMysql, SiMicrosoftazure]}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/azariafwn/Winnicode-News-Portal"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* 3. Forex Forecasting */}
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Forex Analysis & Forecasting"
            description="Big data pipeline for real-time scraping & market analysis. Predicts currency movement using Deep Learning (LSTM)."
            src="/works/forex.jpg"
            stack={[SiPython, SiTensorflow, SiDocker, SiMysql]}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/azariafwn/ProjectBigData"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* 4. Interactive IoT Ping Pong */}
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="IoT Ping Pong Arcade"
            description="A physical arcade game built with ESP32 and Dot Matrix. Features real-time paddle control via hardware potentiometers."
            src="/works/pingpong.jpg"
            stack={[SiArduino, SiCplusplus]} // C++ / Arduino
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/azariafwn/PingPong_IoT"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* 5. GEBOOKS NFC Library */}
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="GEBOOKS: NFC Library"
            description="Smart library system bridging hardware (Arduino) and web. Automates book lending and returns using NFC technology."
            src="/works/gebooks.png"
            stack={[SiArduino, SiMysql, SiPhp]}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/azariafwn/GEBOOKS-Desiot"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* 6. Applicant Management Web */}
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={6}
            title="Quality Assurance - SaaS IoT Platform"
            description="Led the end-to-end manual testing process for a professional SaaS IoT ecosystem. Managed over 110+ comprehensive test cases, including functional, regression, and black-box testing to ensure high-standard system reliability and seamless user experience."
            src="/works/qa-saas.png"
            stack={[SiPostman, SiGooglesheets]}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="#"
            isMobile={isMobile}
          />
        </MotionGridItem>

      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)