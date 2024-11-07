// import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      {/* SECTION 1 */}
      <section className="flex flex-row bg-red-500">
        <div className="flex w-2/3 flex-col justify-center bg-yellow-500">
          <div className="h-2/3 border-4 bg-purple-500 p-10">
            <h1 className="text-4xl font-bold">
              Become a market - relevant blockchain developer with online
              courses
            </h1>
          </div>
          <div className="flex h-1/3 flex-row items-center justify-between border-4 bg-green-500 p-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et
              voluptatem quas ea facere quo sequi optio excepturi minus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              corrupti laboriosam reprehenderit!
            </p>
          </div>
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center bg-blue-500">
          <div className="h-2/3 w-full border-4">
            <img alt="image" />
          </div>
          <div className="h-1/3 w-full border-4 p-10">
            <Button variant="outline" className="">
              Button
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="flex items-center justify-center bg-red-500">
        <div className="border-4 bg-purple-500">
          <p className="w-96 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem
            exercitationem eum dolor, quod enim odit modi velit repellendus
            voluptatum et neque harum omnis perspiciatis, debitis, sunt ab
            dolorum adipisci!
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="flex items-center justify-center bg-yellow-500">
        <div className="border-4 bg-green-500">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem
            exercitationem eum dolor, quod enim odit modi velit repellendus
            voluptatum et neque harum omnis perspiciatis, debitis, sunt ab
            dolorum adipisci!
          </p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="flex h-96 flex-row items-center justify-between bg-yellow-500">
        <div className="w-full border-4">
          <img alt="image" />
        </div>
        <div className="w-full border-4">
          <img alt="image" />
        </div>
        <div className="w-full border-4">
          <img alt="image" />
        </div>
        <div className="w-full border-4">
          <img alt="image" />
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
