import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row p-5 sm:py-10 sm:px-20 justify-between">
        <div className="flex flex-col w-full sm:w-[50%]">
          <p className="text-center sm:text-left text-7xl sm:text-8xl font-bold mb-4 break-normal inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Makers Tech
          </p>
          <p className="text-2xl flex flex-wrap text-center sm:text-left mb-6 break-normal">
            Discover the ultimate shopping experience at Makers Tech, your
            one-stop destination for top-notch products.
          </p>
          <div className="flex flex-col">
            <div className="flex justify-center sm:justify-start mb-10 sm:mb-0">
                <Button color="primary" variant="shadow" className="p-6 bg-gradient-to-r from-indigo-400 to-blue-600">
                  <p className="text-xl">
                    Learn more
                  </p>
                </Button>
            </div>
            <div>
              <Image src="/images/shopImage.png" className="block sm:hidden w-full h-auto object-contain" />
            </div>
          </div>
          

        </div>
        <div className="justify-end w-[50%] items-center hidden sm:flex">
          <Image src="/images/shopImage.png" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
