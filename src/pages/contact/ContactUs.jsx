// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const ContactForm = () => {
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             phone: '',
//             email: '',
//             message: '',
//             agree: false
//         },
//         validationSchema: Yup.object({
//             name: Yup.string().required('Name is required'),
//             phone: Yup.string().required('Phone number is required'),
//             email: Yup.string().email('Invalid email address').required('Email is required'),
//             message: Yup.string().required('Message is required'),
//             agree: Yup.boolean().oneOf([true])
//         }),
//         onSubmit: (values) => {
//             console.log(values);
//         }
//     });

//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div className="min-w-fit box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-20">
//                 <label htmlFor="name"></label>
//                 <input
//                     className="border-none bg-transparent outline-none placeholder-fade-black font-roboto"
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="* Name"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.name}
//                 />
//                 {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
//             </div>

//             <div className="min-w-fit box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-20 ">
//                 <label htmlFor="phone"></label>
//                 <input
//                     className="border-none bg-transparent outline-none placeholder-fade-black"
//                     type="text"
//                     id="phone"
//                     name="phone"
//                     placeholder="* Phone"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.phone}
//                 />
//                 {formik.touched.phone && formik.errors.phone && <div>{formik.errors.phone}</div>}
//             </div>

//             <div className="min-w-fit box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-20 ">
//                 <label htmlFor="email"></label>
//                 <input
//                     className="border-none bg-transparent outline-none placeholder-fade-black"
//                     type="text"
//                     id="email"
//                     name="email"
//                     placeholder="* Email"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.email}
//                 />
//                 {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
//             </div>

//             <div className="min-w-fit  box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-64">
//                 <label htmlFor="message"></label>
//                 <textarea
//                     className=" outline-none text-lg box-border  border-transparent   h-56 bg-transparent  placeholder-fade-black "
//                     id="message"
//                     name="message"
//                     placeholder="* Message"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.message}
//                 />
//                 {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
//             </div>

//             <div className="pt-10 pl-3 flex">
//                 <label>
//                     <input
//                         className="w-8 h-8 "
//                         type="checkbox"
//                         id="agree"
//                         name="agree"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         checked={formik.values.agree}
//                     />
//                 </label>
//                 <span className="ml-3 font-roboto">
//                     {' '}
//                     I agree to frog collecting and processing my personal data to allow me to receive information on
//                     frog services.
//                 </span>
//                 {formik.touched.agree && formik.errors.agree && <div>{formik.errors.agree}</div>}
//             </div>
//             <div className="flex justify-center pt-4 ">
//                 <button
//                     className="bg-brand-blue w-95 rounded-6xl h-20 text-fade-white text-2xl font-roboto "
//                     type="submit"
//                     disabled={!formik.isValid}>
//                     SUBMIT
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default ContactForm;


import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        agree: false
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        agree: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let error = '';

        // Validation logic for specific fields
        if (type === 'text' && name === 'name' && !value.trim()) {
            error = 'Name is required';
        } else if (type === 'text' && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error = 'Invalid email address';
        } else if (type === 'text' && name === 'phone' && (!value.trim() || !/^\d+$/.test(value))) {
            error = 'Invalid phone number';
        }

        // Update the errors state for the specific field
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));

        // Update form data
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm(formData);
        if (Object.keys(formErrors).length === 0) {
            console.log(formData);
            // You can submit the form data here
        } else {
            setErrors(formErrors);
        }
    };

    const validateForm = (data) => {
        let errors = {};
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!data.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d+$/.test(data.phone.trim())) {
            errors.phone = 'Phone number must contain only digits';
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Invalid email address';
        }
        if (!data.message.trim()) {
            errors.message = 'Message is required';
        }
        if (!data.agree) {
            errors.agree = 'You must agree to the terms';
        }
        return errors;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="min-w-fit box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-20">
                <label htmlFor="name"></label>
                <input
                    className="border-none bg-transparent outline-none placeholder-fade-black font-roboto"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="* Name"
                    onChange={handleChange}
                    value={formData.name}
                />
                {errors.name && <div>{errors.name}</div>}
            </div>

            <div className="min-w-fit box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-20 ">
                <label htmlFor="phone"></label>
                <input
                    className="border-none bg-transparent outline-none placeholder-fade-black"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="* Phone"
                    onChange={handleChange}
                    value={formData.phone}
                />
                {errors.phone && <div>{errors.phone}</div>}
            </div>

            <div className="min-w-fit box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-20 ">
                <label htmlFor="email"></label>
                <input
                    className="border-none bg-transparent outline-none placeholder-fade-black"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="* Email"
                    onChange={handleChange}
                    value={formData.email}
                />
                {errors.email && <div>{errors.email}</div>}
            </div>

            <div className="min-w-fit  box-border mb-4 p-8 border-2 border-solid border-[#d9d8d8] background: hsla(0, 0%, 100%, 0.1) h-64">
                <label htmlFor="message"></label>
                <textarea
                    className=" outline-none text-lg box-border  border-transparent   h-56 bg-transparent  placeholder-fade-black "
                    id="message"
                    name="message"
                    placeholder="* Message"
                    onChange={handleChange}
                    value={formData.message}
                />
                {errors.message && <div>{errors.message}</div>}
            </div>

            <div className="pt-10 pl-3 flex">
                <label>
                    <input
                        className="w-8 h-8 "
                        type="checkbox"
                        id="agree"
                        name="agree"
                        onChange={handleChange}
                        checked={formData.agree}
                    />
                </label>
                <span className="ml-3 font-roboto">
                    {' '}
                    I agree to frog collecting and processing my personal data to allow me to receive information on
                    frog services.
                </span>
                {errors.agree && <div>{errors.agree}</div>}
            </div>
            <div className="flex justify-center pt-4 ">
                <button
                    className="bg-brand-blue w-95 rounded-6xl h-20 text-fade-white text-2xl font-roboto cursor-pointer"
                    type="submit"
                    disabled={Object.keys(errors).length > 0}>
                    SUBMIT
                </button>
            </div>
        </form>
    );
};

export default ContactForm;




