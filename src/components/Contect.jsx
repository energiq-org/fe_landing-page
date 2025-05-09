import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from "@iconify/react";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address' }),
  message: z.string().trim().min(10, { message: 'Message must be at least 10 characters' }),
});


const Contact = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    form.reset();
  };

  return (
        <div className="flex flex-col-reverse xl:flex-row xl:justify-between justify-around pt-10 xl:pt-0 xl:px-20 mx-auto gap-20 h-full ">
          <div className=" shadow-lg sm:w-4/5 xl:w-3/5 self-center mb-20 xl:m-0">
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
            <div className='flex justify-between gap-8'>
              <div className="space-y-2 w-1/2">
                <label className="text-xl mb-1 block text-white">Name</label>
                <input placeholder="Enter your Name" className="w-full bg-[#121212] text-[#FFFFFF] py-3 px-4  mt-1 border-b-2 focus:outline-none focus:ring-0 transition box-border border-[#3A3A3A] focus:border-[#BF4E30] " {...form.register('name')}/>
                <p className="text-sm text-[#CE1126]">{form.formState.errors.name?.message}</p>
              </div>
              <div className="space-y-2 w-1/2">
                <label className="text-xl mb-1 block text-white">Email</label>
                <input type="email" placeholder="Enter Your E-mail" className="w-full bg-[#121212] text-[#FFFFFF] py-3 px-4  mt-1 border-b-2 focus:outline-none focus:ring-0 transition box-border border-[#3A3A3A] focus:border-[#BF4E30] " {...form.register('email')}/>
                <p className="text-sm text-[#CE1126]">{form.formState.errors.email?.message}</p>
              </div>
              </div>
              <div className="space-y-2">
                <label className="text-xl mb-1 block text-white">Message</label>
                <textarea placeholder="Keep In Touch With Us ..." className="w-full bg-[#121212] text-[#FFFFFF] py-3 px-4  mt-1 border-b-2 focus:outline-none focus:ring-0 transition box-border border-[#3A3A3A] focus:border-[#BF4E30]" {...form.register('message')}/>
                <p className="text-sm text-[#CE1126]">{form.formState.errors.message?.message}</p>
              </div>

              <button type="submit" className="w-1/3 px-4 py-3 text-center rounded-0 transition-colors duration-200 focus:outline-none focus:ring-0 focus:ring-[#582213]/50 bg-[#BF4E30] hover:bg-[#9C3D26] text-white">
                Submit
              </button>
            </form>
          </div>

      <div className="flex flex-col items-center w-full xl:w-1/2 font-normal  leading-none text-7xl sm:text-9xl text-center xl:self-center xl:mb-20 [text-wrap:balance] z-10 text-[#BF4E30]">
        <h2 className="font-extrabold font-['Bebas_Neue']  tracking-[7px]">
          Get In Touch
        </h2>
        <div className="text-sm font-medium grid grid-cols-2 gap-x-24 sm:fipl-16 sm:gap-x-32 gap-8 px-100 pt-20 place-items-start">
        <div className='flex items-center gap-2 justify-center '>
          <Icon icon="garden:email-fill-26" width="26" height="26" />
          <p className='text-white sm:text-lg font-thin'>anyone@gmail.com</p>
        </div>
        <div className='flex items-center gap-2 justify-center '>
        <Icon icon="mdi:address-marker" width="24" height="24" />
        <p className='text-white sm:text-lg font-thin'>123 test ST, City</p>
        </div>
        <div className='flex items-center gap-2 justify-center '>
        <Icon icon="zondicons:network" width="20" height="20" />
        <p className='text-white sm:text-lg font-thin'>WWW.EV_CHARGING.com</p>
        </div>
                <div className='flex items-center gap-2 justify-center mt-0'>
          <Icon icon="ic:baseline-phone" width="24" height="24" />
          <p className='text-white sm:text-lg font-thin'>+1234564568</p>
        </div>
        </div>
          </div>
        </div>
  );
};

export default Contact;
