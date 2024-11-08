// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ScrollingCarousel from '@/components/ui/carousel';

export default function Home() {
  return (
    <main>
      {/* SECTION 1 */}
      <section className="flex h-2/4 flex-row bg-red-500">
        <div className="flex w-3/4 flex-col justify-center bg-yellow-500">
          <div className="flex h-2/3 items-center justify-between border-b-2 border-r-2 border-t-2 border-white bg-black p-10">
            <h1 className="text-4xl font-bold uppercase text-white">
              Become a market - relevant blockchain developer with online
              courses
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
              className="w-96 rounded-full border-white text-xl font-bold text-white"
            >
              Button
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="flex items-center justify-center border-b-2 border-white bg-black">
        <div className="w-4/5">
          <p className="py-48 text-center text-6xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem
            exercitationem eum dolor, quod enim odit modi velit repellendus
            voluptatum et neque harum omnis perspiciatis, debitis, sunt ab
            dolorum adipisci!
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="flex items-center justify-center border-b-2 border-white bg-black">
        <ScrollingCarousel />
      </section>

      {/* SECTION 4 */}
      <section className="flex h-96 flex-row items-center justify-between border-b-2 border-white bg-black">
        <div className="flex h-full w-full items-center justify-center border-r-2 border-white">
          <Image
            src="/logo-pl.webp"
            width={150}
            height={150}
            alt="Placeholder image"
          />
        </div>
        <div className="flex h-full w-full items-center justify-center border-r-2 border-white">
          <Image
            src="/logo-pl.webp"
            width={150}
            height={150}
            alt="Placeholder image"
          />
        </div>
        <div className="flex h-full w-full items-center justify-center border-r-2 border-white">
          <Image
            src="/logo-pl.webp"
            width={150}
            height={150}
            alt="Placeholder image"
          />
        </div>
        <div className="flex h-full w-full items-center justify-center border-white">
          <Image
            src="/logo-pl.webp"
            width={150}
            height={150}
            alt="Placeholder image"
          />
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="flex flex-row items-center justify-between">
        <div className="h-96 w-1/2 bg-blue-500">
          <img alt="image" />
        </div>
        <div className="h-96 w-1/2 bg-yellow-400">
          <div className="h-2/4 bg-green-500">
            <h2>Titolo sezione</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="h-1/4 bg-purple-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="h-1/4 bg-red-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
