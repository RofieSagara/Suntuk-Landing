import {Background} from "../../background/Background";
import {Section} from "../../layout/Section";
import {NavbarTwoColumns} from "../../navigation/NavbarTwoColumns";
import {Logo} from "../../templates/Logo";
import Link from "next/link";
import {HeroOneButton} from "../../hero/HeroOneButton";
import {Button} from "../../button/Button";

const Delete = () => (
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
                        {"Remove account, Please send email to\n"}
                        <span className="text-primary-500">hello@suntuk.xyz</span>
                    </>
                }
                description=""
                button={
                    <Link href="mailto:hello@suntuk.xyz?subject=Delete%20Account">
                        <a>
                            <Button xl>Delete Account</Button>
                        </a>
                    </Link>
                }
            />
        </Section>
    </Background>
)

export default Delete