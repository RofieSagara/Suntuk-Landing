import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Download Suntuk sekarang di Playstore"
      subtitle="Download Now"
      button={
        <Link href="https://play.google.com/store/apps/details?id=com.indev.suntuk">
          <a>
            <Button>Download</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
