import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8" data-aos="zoom-in">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-indigo-600">Get in touch</h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-800">
            Contact Me
          </p>
          <p className="mt-4 text-base text-gray-500">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <form
          action="https://formspree.io/f/your_form_id" // Replace with your actual form ID
          method="POST"
          className="bg-white rounded-3xl shadow-xl p-10 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 shadow-sm resize-none focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block w-full sm:w-auto rounded-full bg-indigo-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
