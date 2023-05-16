import React, { useRef } from "react";
import img from '../assets/specialBg.png'
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef()

    const sendMail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_0rvhsey', 'template_hugd7hs', form.current, 'qpgwAT2dGFPdLMZ05')
            .then((result) => console.log(result.text), (error) => console.log(error.text))
    }
    return <div className="w-screen h-screen items-center overflow-hidden bg-[#dec89d] flex">
        <form className="flex w-full lg:w-1/2 justify-center space-x-3" ref={form} onSubmit={sendMail}>
            <div className="w-full  lg:max-w-2xl h-full lg:mx-0 mx-10 px-5 py-10 m-auto mt-10 bg-white border border-[#7f2e21] rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                    Contact us !
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" name="user_name" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#7f2e21] focus:border-transparent" placeholder="Name" />
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" name="user_email" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#7f2e21] focus:border-transparent" placeholder="email" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" htmlFor="name">
                            <textarea name='user_message' className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#7f2e21] focus:border-transparent" id="comment" placeholder="Enter your comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div className="col-span-2 text-right">
                        <button type="submit" className="py-2 px-4  bg-[#7f2e21] hover:bg-transparent hover:text-[#7f2e21] hover:border-[#7f2e21] focus:ring-[#7f2e23] focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
        <div className="w-1/2 lg:block hidden h-full">
            <img src={img} alt="img" className="w-full bg-cover" />
        </div>
    </div>;
};

export default ContactUs;
