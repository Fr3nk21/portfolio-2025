// import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      {/* SECTION 1 */}
      <section className="flex h-screen flex-row bg-red-500">
        <div className="flex w-1/2 flex-col justify-center bg-yellow-500 p-16">
          <h1 className="text-4xl font-bold">Titolo principale</h1>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            similique ducimus veniam, voluptatum ab rem, facere quisquam
            voluptatem vel commodi aperiam non labore adipisci minima. Veritatis
            tenetur quas minus et!
          </p>
          <div className="flex gap-10 bg-purple-500">
            <Button variant="outline" className="">
              Button
            </Button>
            <Button variant="outline" className="">
              Button
            </Button>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center bg-blue-500">
          <div className="h-60 w-40 bg-purple-500"></div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="flex h-screen items-center justify-between bg-green-500">
        <div className="flex flex-row gap-5 bg-yellow-500 p-10">
          <div className="rounded-xl bg-red-500 p-5">
            <h3 className="pb-5 text-3xl font-medium">Titolo scheda</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              earum deserunt quas aliquam! Obcaecati beatae laborum eveniet,
              dolorem sed sit eligendi laboriosam quis. Similique officia
              provident animi suscipit reiciendis ratione!
            </p>
          </div>
          <div className="rounded-xl bg-red-500 p-5">
            <h3 className="pb-5 text-3xl font-medium">Titolo scheda</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              earum deserunt quas aliquam! Obcaecati beatae laborum eveniet,
              dolorem sed sit eligendi laboriosam quis. Similique officia
              provident animi suscipit reiciendis ratione!
            </p>
          </div>
          <div className="rounded-xl bg-red-500 p-5">
            <h3 className="pb-5 text-3xl font-medium">Titolo scheda</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              earum deserunt quas aliquam! Obcaecati beatae laborum eveniet,
              dolorem sed sit eligendi laboriosam quis. Similique officia
              provident animi suscipit reiciendis ratione!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="flex h-screen flex-row bg-blue-500">
        <div className="flex w-1/2 flex-col justify-center p-16">
          <h2>Titolo sezione</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            excepturi, consequatur aspernatur perspiciatis fugit commodi
            repellendus culpa aliquam quasi ipsam perferendis sapiente obcaecati
            vel optio est doloribus unde velit maiores!
          </p>
          <Button variant="outline" className="">
            Button
          </Button>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center">
          <div className="h-60 w-40 bg-purple-500"></div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="flex h-screen flex-row bg-yellow-500">
        <div className="flex w-1/2 flex-col items-center justify-center">
          <div className="h-60 w-40 bg-purple-500"></div>
        </div>
        <div className="flex w-1/2 flex-col justify-center p-16">
          <h2>Titolo sezione</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            excepturi, consequatur aspernatur perspiciatis fugit commodi
            repellendus culpa aliquam quasi ipsam perferendis sapiente obcaecati
            vel optio est doloribus unde velit maiores!
          </p>
          <Button variant="outline" className="">
            Button
          </Button>
        </div>
      </section>
    </main>
  );
}
