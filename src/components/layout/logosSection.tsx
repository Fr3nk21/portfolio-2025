import Image from 'next/image';

const LogosSection = () => {
  return (
    <section className="flex h-36 flex-row items-center justify-between border-b-2 border-white bg-black">
      <div className="flex h-full w-full items-center justify-center border-x-2 border-white">
        <Image
          src="/logo-solana.webp"
          width={150}
          height={150}
          alt="Solana's logo"
        />
      </div>
      <div className="flex h-full w-full items-center justify-center border-r-2 border-white">
        <Image src="/logo-uni.webp" width={150} height={150} alt="Uni's logo" />
      </div>
      <div className="flex h-full w-full items-center justify-center border-r-2 border-white">
        <Image src="/logo-b.webp" width={150} height={150} alt="B's logo" />
      </div>
      <div className="flex h-full w-full items-center justify-center border-r-2 border-white">
        <Image
          src="/logo-ideasoft.webp"
          width={150}
          height={150}
          alt="Ideasoft's logo"
        />
      </div>
    </section>
  );
};

export default LogosSection;
