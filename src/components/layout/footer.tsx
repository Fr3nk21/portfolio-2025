import React from 'react';
import { Send, Facebook, Twitter, Twitch } from 'lucide-react';

export default function Footer() {
  return (
    <section className="flex flex-col bg-black">
      <div className="flex flex-row border-b-2 border-t-2 bg-black text-white">
        <div className="justify-left flex w-8/12 items-center pl-10">
          <h4 className="text-3xl font-bold text-white">
            Subscribe to our social networks
          </h4>
        </div>
        <div className="flex w-1/12 items-center justify-center border-l-2 border-white bg-black py-12 text-center">
          <Send />
        </div>
        <div className="flex w-1/12 items-center justify-center border-l-2 border-white bg-black py-12 text-center">
          <Facebook />
        </div>
        <div className="flex w-1/12 items-center justify-center border-l-2 border-white bg-black py-12 text-center">
          <Twitch />
        </div>
        <div className="flex w-1/12 items-center justify-center border-l-2 border-white bg-black py-12">
          <Twitter />
        </div>
      </div>
      <div className="mb-10 flex bg-black">
        <div className="w-3/6 bg-black p-10">
          <span className="text-white">Logo</span>
        </div>
        <div className="w-1/6 bg-black pt-10">
          <ul>
            <li className="text-white">Home</li>
            <li className="text-white">Courses</li>
            <li className="text-white">Blog</li>
          </ul>
        </div>
        <div className="w-1/6 bg-black pt-10">
          <ul>
            <li className="text-white">Custom solutions</li>
            <li className="text-white">Contact us</li>
            <li className="text-white">GDPR</li>
          </ul>
        </div>
        <div className="w-1/6 bg-black pt-10">
          <ul>
            <li className="text-white">Cookie Policy</li>
            <li className="text-white">Privacy Policy & Notice</li>
          </ul>
        </div>
      </div>
      <div className="mb-auto p-10">
        <span className="text-white">2023 IdeaSoft Career Booster</span>
      </div>
    </section>
  );
}
