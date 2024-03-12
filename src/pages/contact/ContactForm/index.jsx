import doubleQuotes from '../../../assets/icons/double-quotes.svg';
import gradientImage from '../../../assets/icons/ellipse.svg';
import abhinavKumarImage from '../../../assets/images/abhinav-kumar.png';
import nabarunImage from '../../../assets/images/nabarun.png';

import styles from './styles.module.css';
import ContactForm from '../ContactUs';

export const customerData = [
    {
        id: 1,
        quote: ' Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems. ',
        name: 'Mrs. Regina Christy',
        designation: 'Chief Digital Officer',
        company: 'Approlabs',
        image: {
            icon: abhinavKumarImage,
            alt: 'Man Image'
        }
    },

    {
        id: 2,
        quote: `"  Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems. " `,
        name: 'Mr. Abhinav Kumar',
        designation: 'Chief Technology Officer',
        company: 'Yumelabs',
        image: {
            icon: abhinavKumarImage,
            alt: "Abhinav Kumar's image"
        }
    },
    {
        id: 3,
        quote: `" Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems. " `,
        name: 'Mr. Nabarun Bhowmick',
        designation: 'Chief Design Officer',
        company: 'Yumelabs',
        image: {
            icon: nabarunImage,
            alt: "Nabarun Bhowmick's image"
        }
    }
];

const ContactUsBody = () => (
    <section className={styles.contactUsBody}>
        <div>
            <div className={styles.customersDetails}>
                <div className={styles.customerDetailsIcon}>
                    <img src={doubleQuotes} alt="double quote" />
                </div>
                <div className={styles.customerThoughts}>
                    <h3>{customerData[0].quote}</h3>
                </div>
            </div>

            <div className={styles.aboutCustomer}>
                <img className={styles.gradient} src={gradientImage} alt="gradient image" />
                <div className={styles.customerImage}>
                    <img
                        className={styles.manImage}
                        src={customerData[0].image.icon}
                        alt={customerData[0].image.alt}
                    />
                </div>
                <div>
                    <span className={styles.customerName}>{customerData[0].name}</span> <br />
                    <span className={styles.customerDesignnation}>{customerData[0].designation}</span>
                    <span className={styles.customerCompany}>{customerData[0].company}</span>
                </div>
            </div>
        </div>
        <ContactForm />
    </section>
);

export default ContactUsBody;
