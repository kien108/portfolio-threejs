export const textVariant = (delay: number = 0) => {
  return {
    hidden: {
      y: -50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay
      }
    }
  }
}

type Direction = 'left' | 'right' | 'up' | 'down' | ''
type TypeTransition = 'decay' | 'spring' | 'keyframes' | 'tween' | 'inertia' | ''

export const fadeIn = (
  direction: Direction = '',
  type: TypeTransition = '',
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}

export const slideIn = (
  direction: Direction,
  type: TypeTransition,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}

export const staggerContainer = (staggerChildren: number = 0, delayChildren: number = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren
      }
    }
  }
}
