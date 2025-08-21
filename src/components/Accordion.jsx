import React from "react";

const Accordion = () => {
  return (
    <div className="border-t-[0.5px] pt-8 border-gray-300 grid grid-cols-1 md:grid-cols-3 gap-6 my-7 max-w-xs md:max-w-full mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-3xl tracking-wide leading-relaxed font-bold mb-5 md:w-3/4 mx-auto md:mx-0">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="w-full col-span-2 space-y-3">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I return an item?
          </div>
          <div className="collapse-content text-sm">
            To return an item, please contact our customer service within 30
            days of receiving your order. Ensure the item is in its original
            condition and packaging.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I exchange an item?
          </div>
          <div className="collapse-content text-sm">
            To exchange an item, please contact our customer service within 30
            days of receiving your order. Ensure the item is in its original
            condition and packaging. We will guide you through the exchange
            process.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
