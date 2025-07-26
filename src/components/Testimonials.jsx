import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const reviews = [
    {
      name: "Anika Rahman",
      feedback:
        "Great experience! The delivery was fast and the product quality is top-notch.",
    },
    {
      name: "Rifat Hossain",
      feedback:
        "Amazing deals! I got a smartwatch at 30% off. Will definitely shop again.",
    },
    {
      name: "Tania Ahmed",
      feedback:
        "Customer support was super helpful. Highly recommend this gadget store.",
    },
    {
      name: "Shakib Al Hasan",
      feedback:
        "Loved the user interface. Everything was smooth and easy to use.",
    },
    {
      name: "Sadia Kabir",
      feedback: "Very responsive team and excellent service. 10/10 experience!",
    },
    {
      name: "Junaid Islam",
      feedback:
        "Great value for money. I was surprised by the quick delivery too.",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white flex items-center justify-center py-16">
      <div className="w-11/12 max-w-screen-xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="flex flex-col items-center justify-between px-5 *:w-full gap-5">
          <div className="mb-5">
            <Marquee speed={50} pauseOnHover>
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="px-3 py-6 mr-8 bg-zinc-900 border border-zinc-700 rounded-xl shadow-md max-w-xs"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {review.name}
                  </h3>
                  <p className="text-gray-300 italic">"{review.feedback}"</p>
                </div>
              ))}
            </Marquee>
          </div>
          <div>
            <Marquee speed={50} pauseOnHover direction="right">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="px-3 py-6 mr-8 bg-zinc-900 border border-zinc-700 rounded-xl shadow-md max-w-xs"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {review.name}
                  </h3>
                  <p className="text-gray-300 italic">"{review.feedback}"</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
