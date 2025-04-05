import { VerticalFeatureRow } from "../feature/VerticalFeatureRow"
import { Section } from "../layout/Section"

const VerticalFeatures = () => (
    <Section
        title="Suntuk"
        description="Telah hadir sebuah aplikasi anonymous chat dengan semua fitur yang menarik. Ayo tunggu apalagi download sekarang.">
        <VerticalFeatureRow
            title="Posting Text, Image atau Voice"
            description="Yah, benar tidak hanya text. kamu dapat membuat posting dengan menggunakan Image atau bahkan Voice biar orang orang bisa dengar suara indah mu."
            image="../assets/images/Suntuk-Home.png"
            imageAlt="Timeline"
        />
        <VerticalFeatureRow
            title="Private chat? Bukan Masalah."
            description="Temukan soulmate kamu dan ajak dia untuk chat secara pribadi biar kalian makin dengan satu sama lain tanpa ada gangguan dari orang lain."
            image="../assets/images/Suntuk-Thread.png"
            imageAlt="Second feature alt text"
            reverse
        />
        <VerticalFeatureRow
            title="Tambahkan Comment di posting yang kamu suka."
            description="Ayo jangan takut untuk membuat komen karena di sini semua nya anonymous jadi semua orang tidak akan tau siapa yg melakukan Posting."
            image="../assets/images/Suntuk-Chat.png"
            imageAlt="Third feature alt text"
        />
    </Section>
)

export { VerticalFeatures }
