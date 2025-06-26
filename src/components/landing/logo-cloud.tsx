import React from 'react';
import { Figma, Framer, Github, Gitlab, Slack, Zap } from 'lucide-react';

const logos = [
  { name: 'GitHub', icon: Github },
  { name: 'GitLab', icon: Gitlab },
  { name: 'Slack', icon: Slack },
  { name: 'Zapier', icon: Zap },
  { name: 'Figma', icon: Figma },
  { name: 'Framer', icon: Framer },
];

export default function LogoCloud() {
  return (
    <section id="logo-cloud" className="py-6 border-y border-border/50">
      <div className="relative mx-auto max-w-screen-xl overflow-hidden px-4">
        <div className="absolute z-10 h-full w-[20%] -left-px top-0 bg-gradient-to-r from-background from-20% to-transparent"></div>
        <div className="absolute z-10 h-full w-[20%] -right-px top-0 bg-gradient-to-l from-background from-20% to-transparent"></div>
        <div className="flex overflow-hidden relative gap-32">
          <div className="flex animate-marquee items-center gap-12 justify-around min-w-full shrink-0">
            {logos.map((logo, index) => (
              <logo.icon key={`${logo.name}-${index}`} className="h-8 w-auto text-muted-foreground" aria-label={logo.name} />
            ))}
          </div>
          <div className="flex animate-marquee items-center gap-12 justify-around min-w-full shrink-0" aria-hidden="true">
            {logos.map((logo, index) => (
              <logo.icon key={`${logo.name}-2-${index}`} className="h-8 w-auto text-muted-foreground" aria-label={logo.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
