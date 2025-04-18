import Link from "next/link"

import { Background } from "../background/Background"
import { Button } from "../button/Button"
import { HeroOneButton } from "../hero/HeroOneButton"
import { Section } from "../layout/Section"
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns"
import { Logo } from "./Logo"

const Hero = () => (
    <Background color="bg-gray-100">
        <Section yPadding="py-6">
            <NavbarTwoColumns logo={<Logo xl />}>
                <li>
                    <Link href="https://play.google.com/store/apps/details?id=com.bld.suntuk">
                        <a>Download</a>
                    </Link>
                </li>
            </NavbarTwoColumns>
        </Section>

        <Section yPadding="pt-20 pb-32">
            <HeroOneButton
                title={
                    <>
                        {"The modern social media for\n"}
                        <span className="text-primary-500">Anonymous User</span>
                    </>
                }
                description="Download Suntuk on Google Playstore."
                button={
                    <Link href="https://play.google.com/store/apps/details?id=com.bld.suntuk">
                        <a>
                            <Button xl>Download</Button>
                        </a>
                    </Link>
                }
            />
        </Section>
    </Background>
)

export { Hero }
