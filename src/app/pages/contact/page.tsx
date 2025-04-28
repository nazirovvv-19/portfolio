'use client'
import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, } from "lucide-react";
import Image from "next/image";
// import telegram from "../../public/telegram.svg";
import axios from "axios";
import { toast } from "sonner";
import useMyStore from "@/store/store";

const Contact: React.FC = () => {
  const [telegramPush, setTelegramPush] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {darkMode} = useMyStore()

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const res = await axios.get(
          `https://api.telegram.org/bot8112608582:AAFoEgpKw6IoIAsCMAuWxW4tVUwbDGqjCKg/getUpdates`
        );
        console.log(res.data);
        setTelegramPush(res.data);
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };

    fetchUpdates();
  }, []);
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const telegramMessage = `
      📩 Yangi xabar!
      👤 Ism: ${name}
      📧 Email: ${email}
      📝 Xabar: ${message}
    `;
  
    const TELEGRAM_BOT_TOKEN = "7090107076:AAEkcNnLmcCP_zjbh03bet9ZmG4sxpDDiyE";
    const TELEGRAM_CHAT_ID = "2124944409"; // CHAT ID ni to‘ldir
  
    try {
      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
        }
      );
      toast.success('This is a success message!');


      setName("");  
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Xabar yuborishda xato:", error);
      toast.error("Xabar yuborilmadi ❌");
    }
  };
  
  return (
    <section id="contact" className={`py-20  ${darkMode?'bg-gray-900': 'text-white'} `}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4  ${!darkMode?'text-gray-800': 'text-white'}`}>Contact</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to
            say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white  rounded-xl shadow-md p-8 animate-slideInLeft">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start animate-fadeIn animate-delay-100">
                <Mail
                  size={20}
                  className="text-blue-600 dark:text-blue-400 mt-1 mr-4"
                />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:ozodbek@example.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    ozodbeknazirov03@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start animate-fadeIn animate-delay-200">
                <Phone
                  size={20}
                  className="text-blue-600 dark:text-blue-400 mt-1 mr-4"
                />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+998950352200"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +998 95 035 22 00
                  </a>
                </div>
              </div>



              <div className="flex items-start animate-fadeIn animate-delay-300">
                <MapPin
                  size={20}
                  className="text-blue-600 dark:text-blue-400 mt-1 mr-4"
                />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tashkent, Uzbekistan
                  </p>
                </div>
              </div>
            </div>

          
          </div>

          <div className="bg-white  rounded-xl shadow-md p-8 animate-slideInRight">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form className="space-y-4" onSubmit={sendMessage}>
              <div className="animate-fadeIn animate-delay-100">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="animate-fadeIn animate-delay-200">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700  mb-1"
                >
                  Email
                </label>

                <input
                  value={email}
                  className="w-full p-3 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>



              <div className="animate-fadeIn animate-delay-300">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700  mb-1"
                >
                  Message
                </label>

                <textarea
                  value={message}
                  className="w-full p-3 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 animate-fadeIn animate-delay-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;