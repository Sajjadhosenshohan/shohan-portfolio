"use client";

import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface ContactFormProps {
  user?: User; // এখানে `user` অবজেক্টের টাইপ নির্দিষ্ট করা হলো
}
const ContactForm = (user: ContactFormProps) => {
//   console.log(user?.user?.email);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data: FieldValues) => {

    const res = await axios.post(
      "https://blog-and-portfilio-backend.vercel.app/api/message/add-message",
      data
    );

    // console.log(res.data);
    if (res?.data?.success) {
      toast.success("Message send Successfully", { duration: 2000 });
      reset();
    }
  };
  return (
    <div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-5"
        >
          <input
            data-aos-duration="1000"
            data-aos="fade-up"
            className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2"
            required
            type="text"
            placeholder="Name"
            disabled
            {...register("name", { required: true })}
            defaultValue={(user?.user?.name as string) || "Your Name"}
          />

          <input
            data-aos-duration="1000"
            data-aos="fade-up"
            className="block px-3 py-2 w-full rounded-lg bg-gray-800"
            required
            type="text"
            {...register("phone", { required: true })}
            placeholder="Phone Number"
          />
          <select
            data-aos-duration="1000"
            data-aos="fade-up"
            className="block px-3 py-2 w-full rounded-lg bg-gray-800"
            defaultValue={""}
            {...register("subject", { required: true })}
          >
            <option value="" disabled>
              Select Subject
            </option>
            <option value="Web Development">Web Development</option>
            <option value="Bug Fixing">Bug Fixing</option>
            <option value="Consultation">Consultation</option>
          </select>

          <input
            data-aos-duration="1000"
            data-aos="fade-up"
            className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2"
            required
            type="email"
            {...register("email", { required: true })}
            placeholder="Email Address"
            disabled
            defaultValue={(user?.user?.email as string) || "Your Email"}
          />
          <textarea
            data-aos-duration="1000"
            data-aos="fade-up"
            className="block px-3 py-2 w-full rounded-lg col-span-2 bg-gray-800"
            required
            {...register("message", { required: true })}
            placeholder="Your Message"
          />
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="flex col-span-2 justify-center item-center "
          >
            {user?.user?.email === undefined ? (
              <button
                disabled
                onClick={() => toast.error("Please login")}
                className=" bg-gradient-to-r from-black to-gray-500 text-white px-7 py-2 rounded-md hover:opacity-90 transition-opacity text-xl"
              >
                Your want to login first
              </button>
            ) : (
              <button
                type="submit"
                className="bg-gradient-to-r from-black to-gray-500 text-white px-7 py-2 rounded-md hover:opacity-90 transition-opacity text-xl"
              >
                Send
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
