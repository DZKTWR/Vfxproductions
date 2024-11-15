import { useRef, useState, ReactNode, MouseEvent } from 'react'
import { motion } from 'framer-motion'

interface FramerProps {
  children: ReactNode
}

interface Position {
  x: number
  y: number
}

export default function Framer({ children }: FramerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current?.getBoundingClientRect() ?? {
      height: 0,
      width: 0,
      left: 0,
      top: 0,
    }
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX, y: middleY })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.12 }}
    >
      {children}
    </motion.div>
  )
}