import ContactUsBody from './ContactForm';
import ContactUsHeroSection from './ContactHero/ContactHeroSection';

const Contact = () => {
    return (
        <div className="px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
            <ContactUsHeroSection />
            <ContactUsBody />
        </div>
    );
};

export default Contact;
