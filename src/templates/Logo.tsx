import { AppConfig } from "../utils/AppConfig"

type ILogoProps = {
    xl?: boolean
}

const Logo = (props: ILogoProps) => {
    //const size = props.xl ? "44" : "32"
    const fontStyle = props.xl ? "font-semibold text-3xl" : "font-semibold text-xl"

    return (
        <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
            <img src={"../assets/images/icons.svg"}  alt={""} width={"44px"} height={"44px"} className={"px-1"}/>
            {AppConfig.site_name}
        </span>
    )
}

export { Logo }
