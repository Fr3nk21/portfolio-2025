import Image from 'next/image';

const ImageLeftSection = () => {
  return (
    <section className="flex flex-row">
      <div className="flex w-1/2 items-end justify-center overflow-hidden border-b-2 border-r-2 border-white">
        <Image
          src="/job-offer.webp"
          width={700}
          height={700}
          alt="Job offer illustration image"
        />
      </div>
      <div className="flex w-1/2 flex-col bg-black">
        <div className="flex h-2/4 flex-col justify-center border-b-2 border-white bg-black p-20 text-left">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Wanna learn web3 programming and get hired by TOP companies?
          </h2>
          <p className="mt-4 flex flex-row text-xl text-white">
            Check out our free Blockchain development courses!
            <Image
              src="/arrow-down.webp"
              width={140}
              height={140}
              alt="Orange arrow down"
              className="absolute right-36"
            />
          </p>
        </div>
        <div className="flex h-1/4 items-center justify-between border-b-2 border-white bg-black p-20">
          <p className="flex flex-row justify-between text-xl font-bold text-white">
            Rust + Solana development for beginners
            <Image
              src="/button-arrow.svg"
              width={25}
              height={25}
              alt="Placeholder image"
              className="ml-5"
            />
          </p>
        </div>
        <div className="flex h-1/4 items-center justify-between border-b-2 border-white bg-black p-20">
          <p className="flex flex-row justify-between text-xl font-bold text-white">
            Rust + Solana development Advance
            <Image
              src="/button-arrow.svg"
              width={25}
              height={25}
              alt="Placeholder image"
              className="ml-5"
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageLeftSection;
