import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Suntuk - Anonymous Chat"
    description="Telah hadir sebuah applikasi anonymous chat dengan semua feature yang menarik. Ayo tunggu apalagi download sekarang."
  >
    <VerticalFeatureRow
      title="Posting Text, Image atau Voice"
      description="Yah, benar tidak hanya text. kamu dapat membuat posting dengan menggunakan Image atau bahkan Voice biar orang orang bisa dengar suara indah mu."
      image="https://bucket.suntuk.xyz/suntuk/public/server/004.jpg"
      imageAlt="Timeline"
    />
    <VerticalFeatureRow
      title="Private chat? Bukan Masalah."
      description="Temukan soulmate kamu dan ajak dia untuk chat secara pribadi biar kalian makin dengan satu sama lain tanpa ada gangguan dari orang lain."
      image="https://bucket.suntuk.xyz/suntuk/public/server/005.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Tambahkan Comment di posting yang kamu suka."
      description="Ayo jangan takut untuk membuat komen karena di sini semua nya anonymous jadi semua orang tidak akan tau siapa yg melakukan Posting."
      image="https://bucket.suntuk.xyz/suntuk/public/server/006.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
