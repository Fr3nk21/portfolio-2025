import Image from 'next/image';
import { Twitter } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="flex flex-col items-center justify-center border-t-2 border-white bg-black">
      {/* TITLE SECTION */}
      <div className="my-20 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">
          Pros & students `&apos` thoughts
        </h2>
      </div>

      {/* TESTIMONIALS */}
      <div className="flex w-full flex-row border-b-2 border-t-2 border-white bg-black">
        <div className="flex flex-col border-r-2 border-white p-10">
          <p className="max-w-96 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            minima repellendus, obcaecati ab neque vel cupiditate quas fugit,
            incidunt laudantium eveniet eaque illum distinctio placeat, ut
            corrupti deserunt quis itaque.
          </p>
          <div className="mt-10 flex h-32 flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div>
                <div className="-mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-red-600">
                  <Image
                    src="/head.webp"
                    alt="Solana's logo"
                    width={150}
                    height={150}
                    className="object-cover"
                    style={{
                      borderRadius: '50%',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="-rotate-6">
                  <span className="h-5 rounded-full bg-red-500 px-3 py-1 text-xs">
                    Expert
                  </span>
                </div>
              </div>
              <div className="ml-5">
                <p className="text-xl font-bold text-white">Mark Tsyrylnyk</p>
                <p className="text-sm text-white">
                  Blackchain Team Lead at Blaize
                </p>
              </div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center">
              <Twitter className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-r-2 border-white p-10">
          <p className="max-w-96 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            minima repellendus, obcaecati ab neque vel cupiditate quas fugit,
            incidunt laudantium eveniet eaque illum distinctio placeat, ut
            corrupti deserunt quis itaque.
          </p>
          <div className="mt-10 flex h-32 flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div>
                <div className="-mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-red-600">
                  <Image
                    src="/head.webp"
                    alt="Solana's logo"
                    width={150}
                    height={150}
                    className="object-cover"
                    style={{
                      borderRadius: '50%',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="-rotate-6">
                  <span className="h-5 rounded-full bg-red-500 px-3 py-1 text-xs">
                    Expert
                  </span>
                </div>
              </div>
              <div className="ml-5">
                <p className="text-xl font-bold text-white">Mark Tsyrylnyk</p>
                <p className="text-sm text-white">
                  Blackchain Team Lead at Blaize
                </p>
              </div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center">
              <Twitter className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-r-2 border-white p-10">
          <p className="max-w-96 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            minima repellendus, obcaecati ab neque vel cupiditate quas fugit,
            incidunt laudantium eveniet eaque illum distinctio placeat, ut
            corrupti deserunt quis itaque.
          </p>
          <div className="mt-10 flex h-32 flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div>
                <div className="-mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-red-600">
                  <Image
                    src="/head.webp"
                    alt="Solana's logo"
                    width={150}
                    height={150}
                    className="object-cover"
                    style={{
                      borderRadius: '50%',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="-rotate-6">
                  <span className="h-5 rounded-full bg-red-500 px-3 py-1 text-xs">
                    Expert
                  </span>
                </div>
              </div>
              <div className="ml-5">
                <p className="text-xl font-bold text-white">Mark Tsyrylnyk</p>
                <p className="text-sm text-white">
                  Blackchain Team Lead at Blaize
                </p>
              </div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center">
              <Twitter className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
