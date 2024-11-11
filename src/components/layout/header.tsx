import React from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <section className="flex flex-row bg-black p-8">
      <div>
        <span className="text-white">Logo Image</span>
      </div>
      <div className="ml-auto">
        <ul className="mr-10 flex flex-row gap-10">
          <li className="text-white">Courses</li>
          <li className="text-white">About us</li>
          <li className="text-white">Blog</li>
          <li className="text-white">Custom Course Solutions</li>
          <li className="text-white">Contacts</li>
        </ul>
      </div>
      <div>
        <Button
          variant="outline"
          className="w-40 rounded-full border-white bg-black text-xl font-bold text-white hover:bg-white hover:text-black"
        >
          Log In
        </Button>
      </div>
    </section>
  );
}
