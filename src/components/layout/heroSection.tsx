import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="flex h-2/4 flex-row">
      <div className="flex w-3/4 flex-col justify-center">
        <div className="flex h-2/3 items-center justify-between border-b-2 border-r-2 border-t-2 border-white bg-black px-20 py-10">
          <h1 className="flex max-w-4xl flex-col text-6xl font-black uppercase leading-tight text-white">
            <span>Become</span>
            <div className="flex items-center gap-2">
              <span>A Market</span>
              <span className="mx-4">-</span>
              <span>Relevant</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/blockchain.webp"
                  width={240}
                  height={50}
                  alt="Blackchain text"
                  className="object-contain"
                />
              </div>
              <span>Developer</span>
            </div>
            <div className="flex items-center gap-4">
              <span>With</span>
              <div className="mt-2 h-3 w-3 rounded-full bg-green-500"></div>
              <span>Online Courses</span>
            </div>
          </h1>
        </div>
        <div className="flex h-1/3 flex-row items-center justify-between gap-10 border-b-2 border-r-2 border-white bg-black px-20 py-10">
          <p className="w-1/2 text-lg text-white">
            IdeaSoft Career Booster is an online education platform with
            blockchain courses for beginners and advanced IT specialists.
          </p>
          <p className="w-1/2 text-lg text-white">
            We help beginners start a career in Web3 development. Middle and
            senior specialists, as well as team leads, take ICB training to
            improve their skills.
          </p>
        </div>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center bg-black">
        <div className="h-2/3 w-full overflow-hidden border-b-2 border-t-2 border-white">
          <Image
            src="/illustration.webp"
            width={500}
            height={500}
            alt="Placeholder image"
          />
        </div>
        <div className="flex h-1/3 w-full items-center justify-center border-b-2 border-white p-10">
          <Button
            variant="outline"
            className="h-14 w-72 rounded-full border-white bg-black text-xl font-bold text-white hover:bg-white hover:text-black"
          >
            Boost your career
            <Image
              src="/button-arrow.svg"
              width={20}
              height={20}
              alt="Placeholder image"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
