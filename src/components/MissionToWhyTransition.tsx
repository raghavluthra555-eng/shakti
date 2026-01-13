import { useEffect } from 'react';
import ScrollExpandMedia from './ScrollExpandMedia';
import WhyGirls from './WhyGirls';

export default function MissionToWhyTransition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScrollExpandMedia
      mediaType='iframe'
      mediaSrc='https://sketchfab.com/models/a148a4fd11e04bdca7b742555580d892/embed?autospin=1&autostart=1&ui_theme=dark&dnt=1&preload=1'
      bgImageSrc='https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1920&auto=format&fit=crop'
      title='Empowering Girls in Space'
      subtitle='One Cosmos • Infinite Possibilities'
      scrollToExpand='↓ Scroll to Explore ↓'
    >
      <WhyGirls />
    </ScrollExpandMedia>
  );
}
