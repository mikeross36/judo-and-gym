import { motion } from "framer-motion";
import { SetSelectedPageType } from "../home/Home";
import { SelectedPage } from "../../utils/types";
import PageTitle from "../../utils/PageTitle";
import { useForm } from "react-hook-form";
import deki from "@/assets/deki.jpg";

const ContactUs = ({ setSelectedPage }: SetSelectedPageType) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const inputStyle =
    "mb-5 w-full rounded-lg bg-primary-500 px-5 py-3 placeholder-white";
  const pStyle = "font-semibold text-center text-secondary-400";

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 py-28">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <PageTitle>
            Join <span className="text-primary-300"> Now </span>To Get in Shape
          </PageTitle>
          <p className="my-5">
            After emerging from a global pandemic stronger than ever, World Gym
            holds their first Annual Convention in over 3 years, outlining its
            plans for the future. Send us a message!
          </p>
        </motion.div>
        <div className="grid md:mt-10 md:grid-cols-2 md:justify-items-end md:gap-10 lg:mx-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basic-3/5"
          >
            {/* action="https://formsubmit.co/your@email.com" */}
            <form
              onSubmit={handleFormSubmit}
              action=""
              method="POST"
              target="_blank"
            >
              <input
                type="text"
                className={inputStyle}
                placeholder="name..."
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className={pStyle}>
                  {errors.name.type === "required" && "This field is required!"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 chars!"}
                </p>
              )}
              <input
                type="email"
                className={inputStyle}
                placeholder="email..."
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className={pStyle}>
                  {errors.email.type === "required" &&
                    "This field is required!"}
                  {errors.email.type === "pattern" && "Email is invalid!"}
                </p>
              )}
              <textarea
                className={inputStyle}
                placeholder="message..."
                cols={50}
                rows={4}
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className={pStyle}>
                  {errors.message.type === "required" &&
                    "This field is required!"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 chars!"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-5 py-2 text-white shadow shadow-black transition duration-500 hover:bg-primary-500"
              >
                SEND
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mt-16 md:mt-0"
          >
            <div className="w-full before:absolute before:bottom-8 before:right-52 before:z-[1] before:drop-shadow-lg lg:before:content-footertext">
              <img
                src={deki}
                alt="contact screen pic"
                className="h-[32rem] rounded object-cover shadow-lg shadow-slate-600"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
