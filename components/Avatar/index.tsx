import { Box } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { avatarAnimation } from 'config/animations'
import dynamic from 'next/dynamic'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
)

const Avatar = () => {
  const MotionBox = motion(Box)

  return (
    <AnimatePresence>
      <MotionBox
        id="zafaLottie"
        // Responsif: Base (HP) ukuran 200px, LG (Laptop) ukuran 350px
        boxSize={{ base: '200px', md: '300px', lg: '350px' }} 
        display="flex"
        alignItems="center"
        justifyContent="center"
        initial="initial"
        animate={'animate'}
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
        margin="auto" // Biar tetap di tengah saat di mobile
      >
        <Player
          autoplay
          loop
          src="/lottie/tech.json"
          // Pakai style 100% agar Player mengikuti ukuran Box (MotionBox) di atas
          style={{ height: '100%', width: '100%' }}
        />
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar