import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="flex h-2/4 flex-row">
      <div className="flex w-3/4 flex-col justify-center">
        <div className="flex h-2/3 items-center justify-between border-b-2 border-r-2 border-t-2 border-white bg-black p-10">
          <h1 className="text-4xl font-bold uppercase text-white">
            Become a market - relevant blockchain developer with online courses
          </h1>
        </div>
        <div className="flex h-1/3 flex-row items-center justify-between gap-10 border-b-2 border-r-2 border-white bg-black p-10">
          <p className="w-1/2 text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et
            voluptatem quas ea facere quo!
          </p>
          <p className="w-1/2 text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            corrupti laboriosam reprehenderit!
          </p>
        </div>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center bg-black">
        <div className="h-2/3 w-full overflow-hidden border-b-2 border-t-2 border-white">
          <Image
            src="/image-pl.webp"
            width={500}
            height={500}
            alt="Placeholder image"
          />
        </div>
        <div className="flex h-1/3 w-full items-center justify-center border-b-2 border-white p-10">
          <Button
            variant="outline"
            className="w-96 rounded-full border-white bg-black text-xl font-bold text-white hover:bg-white hover:text-black"
          >
            Button <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
