import Link from "next/link"

import { Button } from "../button/Button"
import { CTABanner } from "../cta/CTABanner"
import { Section } from "../layout/Section"

const Banner = () => (
    <Section>
        <CTABanner
            title="Suntuk now on Google Playstore"
            subtitle="Download Now"
            button={
                <Link href="https://play.google.com/store/apps/details?id=com.bld.suntuk">
                    <a>
                        <Button>Download</Button>
                    </a>
                </Link>
            }
        />
    </Section>
)

export { Banner }
