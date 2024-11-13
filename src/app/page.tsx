// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ScrollingCarousel from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="no-scrollbar relative w-full overflow-x-hidden bg-black">
      <div className="mx-auto max-w-[1920px]">
        {/* SECTION 1 */}
        <section className="flex h-2/4 flex-row">
          <div className="flex w-3/4 flex-col justify-center">
            <div className="flex h-2/3 items-center justify-between border-b-2 border-r-2 border-t-2 border-white bg-black p-10">
              <h1 className="text-4xl font-bold uppercase text-white">
                Become a market - relevant blockchain developer with online
                courses
              </h1>
            </div>
            <div className="flex h-1/3 flex-row items-center justify-between gap-10 border-b-2 border-r-2 border-white bg-black p-10">
              <p className="w-1/2 text-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                et voluptatem quas ea facere quo!
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

        {/* SECTION 2 */}
        <section className="flex items-center justify-center border-b-2 border-white bg-black">
          <div className="w-4/5">
            <p className="py-48 text-center text-6xl text-white">
              Lorem ipsum dolor sit{' '}
              <span className="group mx-6 inline-block align-middle">
                <Image
                  src="/wide-pl.webp"
                  width={100}
                  height={100}
                  alt="Placeholder image"
                  className="transform rounded-xl transition-all duration-500 hover:-rotate-2 hover:scale-150"
                />
              </span>{' '}
              amet consectetur adipisicing elit. Quis rem exercitationem eum
              dolor
              <span className="group mx-6 inline-block align-middle">
                <Image
                  src="/wide-pl.webp"
                  width={100}
                  height={100}
                  alt="Placeholder image"
                  className="transform rounded-xl transition-all duration-500 hover:-rotate-2 hover:scale-150"
                />
              </span>
              quod enim odit modi velit repellendus voluptatum et neque harum
              omnis perspiciatis debitis, sunt ab dolorum{' '}
              <span className="group mx-6 inline-block align-middle">
                <Image
                  src="/wide-pl.webp"
                  width={100}
                  height={100}
                  alt="Placeholder image"
                  className="transform rounded-xl transition-all duration-500 hover:-rotate-2 hover:scale-150"
                />
              </span>{' '}
              adipisci!
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="flex items-center justify-center border-b-2 border-white bg-black">
          <ScrollingCarousel />
        </section>

        {/* SECTION 4 */}
        <section className="flex h-60 flex-row items-center justify-between border-b-2 border-white bg-black">
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
        <section className="flex flex-row">
          <div className="flex w-1/2 items-center justify-center overflow-hidden border-b-2 border-r-2 border-white">
            <Image
              src="/image-pl.webp"
              width={800}
              height={800}
              alt="Placeholder image"
            />
          </div>
          <div className="flex w-1/2 flex-col bg-black">
            <div className="flex h-2/4 flex-col justify-center border-b-2 border-white bg-black p-20 text-left">
              <h2 className="mb-4 text-4xl font-bold text-white">
                Titolo sezione 5
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex h-1/4 items-center justify-between border-b-2 border-white bg-black p-20">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex h-1/4 items-center justify-between border-b-2 border-white bg-black p-20">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 */}
        <section className="flex flex-col items-center justify-center bg-black p-10">
          <h2 className="mb-10 text-4xl font-bold text-white">
            Titolo sezione 6
          </h2>
          <div className="flex w-full flex-col">
            <div className="flex flex-row items-center justify-center">
              <div className="flex h-52 w-1/2 items-center justify-center bg-black p-10">
                <Image
                  src="/logo-pl.webp"
                  width={150}
                  height={150}
                  alt="Placeholder image"
                />
              </div>
              <div className="items-left flex h-52 w-1/2 flex-col justify-center bg-black p-10">
                <h3 className="text-2xl font-bold text-white">Titolo blocco</h3>
                <p className="text-white">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="flex h-52 w-1/2 items-center justify-center bg-black p-10">
                <Image
                  src="/logo-pl.webp"
                  width={150}
                  height={150}
                  alt="Placeholder image"
                />
              </div>
              <div className="items-left flex h-52 w-1/2 flex-col justify-center bg-black p-10">
                <h3 className="text-2xl font-bold text-white">Titolo blocco</h3>
                <p className="text-white">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="flex h-52 w-1/2 items-center justify-center bg-black p-10">
                <Image
                  src="/logo-pl.webp"
                  width={150}
                  height={150}
                  alt="Placeholder image"
                />
              </div>
              <div className="items-left flex h-52 w-1/2 flex-col justify-center bg-black p-10">
                <h3 className="text-2xl font-bold text-white">Titolo blocco</h3>
                <p className="text-white">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="flex h-52 w-1/2 items-center justify-center bg-black p-10">
                <Image
                  src="/logo-pl.webp"
                  width={150}
                  height={150}
                  alt="Placeholder image"
                />
              </div>
              <div className="items-left flex h-52 w-1/2 flex-col justify-center bg-black p-10">
                <h3 className="text-2xl font-bold text-white">Titolo blocco</h3>
                <p className="text-white">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="flex h-52 w-1/2 items-center justify-center bg-black p-10">
                <Image
                  src="/logo-pl.webp"
                  width={150}
                  height={150}
                  alt="Placeholder image"
                />
              </div>
              <div className="items-left flex h-52 w-1/2 flex-col justify-center bg-black p-10">
                <h3 className="text-2xl font-bold text-white">Titolo blocco</h3>
                <p className="text-white">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="flex h-52 w-1/2 items-center justify-center bg-black p-10">
                <Image
                  src="/logo-pl.webp"
                  width={150}
                  height={150}
                  alt="Placeholder image"
                />
              </div>
              <div className="items-left flex h-52 w-1/2 flex-col justify-center bg-black p-10">
                <h3 className="text-2xl font-bold text-white">Titolo blocco</h3>
                <p className="text-white">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section className="flex flex-col items-center justify-center border-t-2 border-white bg-black pt-10">
          <div className="flex items-center justify-center">
            <h2 className="mb-10 text-4xl font-bold text-white">
              Titolo sezione 7
            </h2>
          </div>
          <div className="flex flex-row border-b-2 border-t-2 border-white bg-black">
            <div className="flex flex-col border-r-2 border-white p-10">
              <p className="max-w-96 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique minima repellendus, obcaecati ab neque vel cupiditate
                quas fugit, incidunt laudantium eveniet eaque illum distinctio
                placeat, ut corrupti deserunt quis itaque.
              </p>
              <h4 className="mt-5 text-2xl font-bold text-white">
                Testimonial
              </h4>
            </div>
            <div className="flex flex-col border-r-2 border-white p-10">
              <p className="max-w-96 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique minima repellendus, obcaecati ab neque vel cupiditate
                quas fugit, incidunt laudantium eveniet eaque illum distinctio
                placeat, ut corrupti deserunt quis itaque.
              </p>
              <h4 className="mt-5 text-2xl font-bold text-white">
                Testimonial
              </h4>
            </div>
            <div className="flex flex-col border-r-2 border-white p-10">
              <p className="max-w-96 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique minima repellendus, obcaecati ab neque vel cupiditate
                quas fugit, incidunt laudantium eveniet eaque illum distinctio
                placeat, ut corrupti deserunt quis itaque.
              </p>
              <h4 className="mt-5 text-2xl font-bold text-white">
                Testimonial
              </h4>
            </div>
            <div className="flex flex-col p-10">
              <p className="max-w-96 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique minima repellendus, obcaecati ab neque vel cupiditate
                quas fugit, incidunt laudantium eveniet eaque illum distinctio
                placeat, ut corrupti deserunt quis itaque.
              </p>
              <h4 className="mt-5 text-2xl font-bold text-white">
                Testimonial
              </h4>
            </div>
          </div>
        </section>

        {/* SECTION 8 */}
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

        {/* SECTION 9 */}
        <section className="flex items-center justify-center border-b-2 border-white bg-black">
          <ScrollingCarousel />
        </section>

        {/* SECTION 10 */}
        <section className="flex h-screen flex-row bg-black p-10">
          <div className="w-1/2 bg-black">
            <h2 className="mb-4 bg-black text-4xl font-bold text-white">
              Titolo sezione 10
            </h2>
            <p className="w-10/12 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              vero, labore qui debitis impedit rem et sed, minus veritatis quod
              eum sapiente. Nisi accusantium placeat provident minus quos ab
              corporis.
            </p>
          </div>
          <div className="w-1/2 bg-black text-white">Contact Form</div>
        </section>
      </div>
    </main>
  );
}
