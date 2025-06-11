import React from "react";

const faqs = [
  {
    question: "How does this food donation platform work?",
    answer:
      "Our platform connects food donors with recipients. Donors list available food, and those in need can request it. Once approved, they can pick it up from the specified location.",
  },
  {
    question: "Is it safe to request and consume donated food?",
    answer:
      "Yes. Donors are encouraged to share only fresh and properly stored food. Each listing includes an expiration date and pickup instructions for safety.",
  },
  {
    question: "Do I need to pay for the food?",
    answer:
      "No, all food shared on our platform is completely free. It’s a community effort to reduce waste and help those in need.",
  },
  {
    question: "Can anyone become a donor?",
    answer:
      "Yes, anyone with surplus food can become a donor. Simply sign up, provide food details, and list your donation for others to see.",
  },
  {
    question: "How do I know if my food request is accepted?",
    answer:
      "Once your request is approved, you’ll see it in myFoodRequests page in our with the pickup instructions.",
  },
];

const FaqSection = () => {
  return (
    <div className="max-w-[1400px] mx-auto w-11/12 mb-[70px]">
      <h1 className="text-3xl text-center font-bold font-inter">
        Frequently Asked <span className="text-primary">Questions</span>
      </h1>

      <div className="flex items-center justify-around gap-15 mt-[50px]">
        <div className="max-w-[400px] min-w-[320px]  hidden md:inline-block">
          <img className="w-full" src="/FrameQuestion.png" alt="" />
        </div>
        <div className="space-y-2 max-w-[600px]">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="collapse collapse-plus bg-base-100 border border-primary/30">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">
                {item.question}
              </div>
              <div className="collapse-content text-sm">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
