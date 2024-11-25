import Image from 'next/image';

const TextSection = () => {
  return (
    <section className="flex items-center justify-center border-b-2 border-white bg-black">
      <div className="w-4/5">
        <p className="py-48 text-center text-6xl text-white">
          The demand for
          <span className="group mx-6 inline-block align-middle">
            <Image
              src="/wide-pl.webp"
              width={100}
              height={100}
              alt="Placeholder image"
              className="transform rounded-xl transition-all duration-500 hover:-rotate-2 hover:scale-150"
            />
          </span>
          development is growing every year. The IT market needs
          <span className="group mx-6 inline-block align-middle">
            <Image
              src="/wide-pl.webp"
              width={100}
              height={100}
              alt="Placeholder image"
              className="transform rounded-xl transition-all duration-500 hover:-rotate-2 hover:scale-150"
            />
          </span>
          skilled Web3 developers, project managers, business analysts,
          designers, and other specialists. This is why
          <span className="group mx-6 inline-block align-middle">
            <Image
              src="/wide-pl.webp"
              width={100}
              height={100}
              alt="Placeholder image"
              className="transform rounded-xl transition-all duration-500 hover:-rotate-2 hover:scale-150"
            />
          </span>
          IdeaSoft Career Booster is working on market-relevant and highly
          practical online blockchain courses in a productive partnership with
          <span className="group mx-6 inline-block align-middle">
            <Image
              src="/wide-pl.webp"
              width={100}
              height={100}
              alt="Placeholder image"
              className="transform rounded-xl transition-all duration-500 hover:-rotate-2 hover:scale-150"
            />
          </span>
          Sigma Software University.
        </p>
      </div>
    </section>
  );
};

export default TextSection;
