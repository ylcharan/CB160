import Image from "next/image";
import cloud from "../public/cloud.svg";
import calender from "../public/calender.svg";
import pin from "../public/pin.svg";
import moon from "../public/moon.svg";

export default function Home() {
  return (
    <div className="w-[95%] mx-auto max-w-[1440px] md:w-[90%] py-[30px] flex gap-[30px]">
      <div className="flex flex-col w-[250px] gap-[20px]">
        <div className="flex flex-col gap-[3px] bg-zinc-100 rounded-lg p-[10px]">
          <div className="flex flex-col gap-[5px]">
            <p>Now</p>
            <div className="flex gap-[10px]">
              <div className="flex items-center gap-[3px]">
                <div className="text-[24px] font-[800]">15</div>
                <p>°C</p>
              </div>
              <Image src={cloud} alt="" />
            </div>
            <p className="border-b pb-[10px]">Partially Clouds</p>
          </div>
          <div>
            <div className="flex gap-[5px] items-center mt-[10px]">
              <Image src={calender} alt="" className="w-[20px] h-[20px]" />
              <p className="leading-none">wednesday</p>
            </div>
            <div className="flex gap-[5px] items-center mt-[10px]">
              <Image src={pin} alt="" className="w-[20px] h-[20px]" />
              <p className="leading-none">Jalandhar, Punjab</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="pr-[15px]">5 Days Forecast</p>
          <div className="flex flex-col gap-[10px] bg-zinc-100 rounded-lg p-[10px] mt-[10px]">
            <div className="flex justify-between">
              <div className="flex gap-[3px] items-center justify-between w-full">
                <div className="flex gap-1">
                  <Image src={moon} alt="" />
                  <p>18°</p>
                </div>
                <p className="text-[10px]">24 Feb</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[3px] items-center justify-between w-full">
                <div className="flex gap-1">
                  <Image src={moon} alt="" />
                  <p>21°</p>
                </div>
                <p className="text-[10px]">25 Feb</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[3px] items-center justify-between w-full">
                <div className="flex gap-1">
                  <Image src={moon} alt="" />
                  <p>21°</p>
                </div>
                <p className="text-[10px]">26 Feb</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[3px] items-center justify-between w-full">
                <div className="flex gap-1">
                  <Image src={moon} alt="" />
                  <p>17°</p>
                </div>
                <p className="text-[10px]">27 Feb</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[3px] items-center justify-between w-full">
                <div className="flex gap-1">
                  <Image src={moon} alt="" />
                  <p>13°</p>
                </div>
                <p className="text-[10px]">28 Feb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-zinc-100 rounded-lg p-[20px]">
        <div>Todays Highlights</div>
      </div>
    </div>
  );
}
