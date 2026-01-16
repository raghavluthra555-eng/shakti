import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'iframe';
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  bgImageSrc,
  title,
  subtitle,
  scrollToExpand,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: globalThis.WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: globalThis.TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-screen'>
        <div className='relative w-full flex flex-col items-center min-h-screen'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt='Background'
              className='w-screen h-screen object-cover object-center'
            />
            <motion.div
              className='absolute inset-0 bg-black/10'
              animate={{ opacity: 0.1 + scrollProgress * 0.3 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-screen relative'>
              <motion.div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: `0px 0px ${30 + scrollProgress * 50}px rgba(255, 78, 205, ${0.3 + scrollProgress * 0.4})`,
                }}
              >
                {mediaType === 'iframe' ? (
                  <div className='relative w-full h-full pointer-events-none'>
                    <iframe
                      src={mediaSrc}
                      className='w-full h-full rounded-xl'
                      frameBorder='0'
                      allow='autoplay; fullscreen; xr-spatial-tracking'
                      allowFullScreen
                    />
                    <div
                      className='absolute inset-0 z-10'
                      style={{ pointerEvents: 'none' }}
                    ></div>

                    <motion.div
                      className='absolute inset-0 bg-black/30 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className='relative w-full h-full pointer-events-none'>
                    <video
                      src={mediaSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload='auto'
                      className='w-full h-full object-cover rounded-xl'
                      controls={false}
                    />
                    <div
                      className='absolute inset-0 z-10'
                      style={{ pointerEvents: 'none' }}
                    ></div>

                    <motion.div
                      className='absolute inset-0 bg-black/30 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <motion.div
                  className='absolute inset-0 bg-gradient-to-t from-[#FF4ECD]/20 to-transparent rounded-xl pointer-events-none'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: scrollProgress * 0.3 }}
                  transition={{ duration: 0.2 }}
                />

                <div className='flex flex-col items-center text-center relative z-20 mt-4 transition-none'>
                  {subtitle && (
                    <motion.p
                      className='text-lg md:text-xl text-[#2DE2E6] font-medium'
                      style={{
                        transform: `translateX(-${textTranslateX}vw)`,
                        opacity: 1 - scrollProgress * 0.4
                      }}
                    >
                      {subtitle}
                    </motion.p>
                  )}
                  {scrollToExpand && (
                    <motion.p
                      className='text-sm md:text-base text-[#FF4ECD] font-semibold text-center mt-3'
                      style={{
                        transform: `translateX(${textTranslateX}vw) translateY(${scrollProgress * 20}px)`,
                        opacity: Math.max(0, 1 - scrollProgress * 0.8)
                      }}
                      animate={{ y: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      {scrollToExpand}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <div className='flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col mix-blend-normal'>
                <motion.div
                  className='relative'
                  style={{
                    transform: `translateX(-${textTranslateX * 0.5}vw)`,
                    opacity: 1 - scrollProgress * 0.4
                  }}
                >
                  <motion.h2
                    className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] bg-clip-text text-transparent transition-none'
                    style={{
                      transform: `scale(${1 + scrollProgress * 0.15})`,
                    }}
                  >
                    {firstWord}
                  </motion.h2>
                </motion.div>
                <motion.div
                  className='relative'
                  style={{
                    transform: `translateX(${textTranslateX * 0.5}vw)`,
                    opacity: 1 - scrollProgress * 0.4
                  }}
                >
                  <motion.h2
                    className='text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] bg-clip-text text-transparent transition-none'
                    style={{
                      transform: `scale(${1 + scrollProgress * 0.15})`,
                    }}
                  >
                    {restOfTitle}
                  </motion.h2>
                </motion.div>
              </div>
            </div>

            <motion.div
              className='absolute inset-0 pointer-events-none'
              style={{
                background: `radial-gradient(circle at center, transparent ${50 - scrollProgress * 20}%, rgba(7, 7, 15, ${scrollProgress}))`,
              }}
            />

            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20 bg-[#0D0D1A]'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
