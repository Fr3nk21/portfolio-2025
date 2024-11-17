import Image from 'next/image';

const TextSection = () => {
  return (
    <section className="flex items-center justify-center border-b-2 border-white bg-black">
      <div className="w-4/5">
        <p className="py-48 text-center text-6xl text-white">
          Lorem ipsum dolor sit
          <span className="group mx-6 inline-block align-middle">
            <Image
              src="/wide-pl.webp"
              width={100}
              height={100}
              alt="Placeholder image"
              className="transform rounded-xl transition-all duration-500 hover:-rotate-2 hover:scale-150"
            />
          </span>
          amet consectetur adipisicing elit. Quis rem exercitationem eum dolor
          <span className="group mx-6 inline-block align-middle">
            <Image
              src="/wide-pl.webp"
              width={100}
              height={100}
              alt="Placeholder image"
              className="transform rounded-xl transition-all duration-500 hover:-rotate-2 hover:scale-150"
            />
          </span>
          quod enim odit modi velit repellendus voluptatum et neque harum omnis
          perspiciatis debitis, sunt ab dolorum
          <span className="group mx-6 inline-block align-middle">
            <Image
              src="/wide-pl.webp"
              width={100}
              height={100}
              alt="Placeholder image"
              className="transform rounded-xl transition-all duration-500 hover:-rotate-2 hover:scale-150"
            />
          </span>
          adipisci!
        </p>
      </div>
    </section>
  );
};

export default TextSection;
