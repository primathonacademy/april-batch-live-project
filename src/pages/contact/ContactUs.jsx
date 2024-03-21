import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
            agree: false
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            phone: Yup.string().required('Phone number is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required'),
            agree: Yup.boolean().oneOf([true])
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="min-w-fit box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-20">
                <label htmlFor="name"></label>
                <input
                    className="border-none bg-transparent outline-none placeholder-fade-black font-roboto"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="* Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
            </div>

            <div className="min-w-fit box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-20 ">
                <label htmlFor="phone"></label>
                <input
                    className="border-none bg-transparent outline-none placeholder-fade-black"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="* Phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && <div>{formik.errors.phone}</div>}
            </div>

            <div className="min-w-fit box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-20 ">
                <label htmlFor="email"></label>
                <input
                    className="border-none bg-transparent outline-none placeholder-fade-black"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="* Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            </div>

            <div className="min-w-fit  box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-64">
                <label htmlFor="message"></label>
                <textarea
                    className=" outline-none text-lg box-border  border-transparent   h-56 bg-transparent  placeholder-fade-black "
                    id="message"
                    name="message"
                    placeholder="* Message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
            </div>

            <div className="pt-10 pl-3 flex">
                <label>
                    <input
                        className="w-8 h-8 "
                        type="checkbox"
                        id="agree"
                        name="agree"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.agree}
                    />
                </label>
                <span className="ml-3 font-roboto">
                    {' '}
                    I agree to frog collecting and processing my personal data to allow me to receive information on
                    frog services.
                </span>
                {formik.touched.agree && formik.errors.agree && <div>{formik.errors.agree}</div>}
            </div>
            <div className="flex justify-center pt-4 ">
                <button
                    className="bg-brand-blue w-95 rounded-6xl h-20 text-fade-white text-2xl font-roboto "
                    type="submit"
                    disabled={!formik.isValid}>
                    SUBMIT
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
