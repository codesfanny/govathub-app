import React from "react";

const Contact = () => {
  return (
    <div className="lg:pt-16 pb-16 pt-2 bg-blue-950 lg:bg-[url(/images/investing-16-1.jpg)] bg-cover bg-no-repeat bg-center flex flex-col lg:text-center">
      <div className="w-[80%] mx-auto flex flex-col lg:text-center space-y-2 pt-16 pb-16 text-white">
        <p className="text-[#1d48c0] font-medium">CONTACT</p>
        <h1 className="text-4xl font-semibold mt-4 mb-4 lg:text-black">
          Get In Touch
        </h1>
        <p className="lg:text-black">Ready to take the next step?</p>
        <p className="lg:text-black">
          Contact our team to learn how we can guide and support your journey
        </p>
      </div>
      <div className="w-[80%] lg:w-[40%] mx-auto">
        <div className=" space-y-10 flex flex-col justify-items-start">
          <input
            type="text"
            name="Name"
            className="text-black border-b border-[#b8b8b8] pb-2 lg:pb-5 lg:pl-6 placeholder:text-[#b8b8b8]"
            placeholder="Name"
          />
          <input
            type="text"
            name="Email Address"
            className="text-black border-b border-[#b8b8b8] pb-2 lg:pb-5 lg:pl-6 placeholder:text-[#b8b8b8]"
            placeholder="Email Address"
          />
          <textarea
            name="Message"
            className="text-black border-b border-[#b8b8b8] pb-2 lg:pb-5 lg:pl-6 placeholder:text-[#b8b8b8] min-h-25"
            placeholder="Message"
          />
          <div className="mx-auto flex flex-col items-end transition-all duration-300">
            <button className="bg-[#1d48c0] hover:bg-white hover:text-[#1b48c0] border-2 border-[#1b48c0] py-3.5 px-18 text-lg text-white font-semibold mt-10 cursor-pointer">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
