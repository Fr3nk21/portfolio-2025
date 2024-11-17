import Image from 'next/image';

const ImageLeftSection = () => {
  return (
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
  );
};

export default ImageLeftSection;
