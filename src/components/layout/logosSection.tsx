import Image from 'next/image';

const LogosSection = () => {
  return (
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
  );
};

export default LogosSection;
