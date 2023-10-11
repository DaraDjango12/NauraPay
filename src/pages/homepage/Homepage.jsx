import phone from "../../assets/images/phone.png";
import airpods from "../../assets/images/airpods.png";
import chat from "../../assets/images/chat.png";
import watch from "../../assets/images/watch.png";
import naura from "../../assets/images/naura.png";
import mic from "../../assets/images/mic.png";
import lock from "../../assets/images/lock.png";
import all from "../../assets/images/icon/All.png";
import automate from "../../assets/images/icon/automate.png";
import bill from "../../assets/images/icon/bill.png";
import latest from "../../assets/images/icon/latest.png";
import projection from "../../assets/images/icon/projection.png";
import send from "../../assets/images/icon/send.png";
import support from "../../assets/images/icon/support.png";
import swap from "../../assets/images/icon/swap.png";
import vCard from "../../assets/images/icon/vCard.png";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="fullpage w-full">
      <section className="firstSect px-40  pb-20 ">
        <div>
          <img className="w-[40vw] mx-auto" src={phone} alt="phone" />
          <div className="flex justify-between">
            <img src={airpods} alt="airpods" />
            <img src={watch} alt="watch" />
          </div>
          <div>
            <p className="naura text-center text-9xl font-bold">Naura</p>
          </div>
        </div>
        <div className="text-center mt-44 ">
          <div className="w-full my-20 ">
            <div className="getEvery text-center w-[40vw] mx-auto text-5xl">
              <p>Get everyday transaction done with just your voice.</p>
              <p>Just say “Naura” or “Hey Naura” to start your request.</p>
            </div>
          </div>
        </div>

        {/* On the go */}

        <div className="onthegoSectdiv flex ">
          <div className="w-[50%]">
            <p className="onthego text-[10rem] font-semibold ">On the go.</p>
            <img
              className="airpods absolute top-[89rem] left-[25rem] "
              src={airpods}
              alt="airpods"
            />
            <img className="relative" src={naura} alt="Naura" />
          </div>
          <div className="text-4xl w-[50%] mt-[25rem]">
            <p className="mt-[]">
              Do it all even when your hands are full. Stay in touch, see latest
              Fx prices, or swap your Naira to dollars on the go. With
              back-to-back requests, you can give a command, then follow up with
              another once it’s complete — without having to say “Naura” again.
            </p>
          </div>
        </div>
        <div className="mt-[10rem] bg-white p-12 rounded-[3rem] flex">
          <div className="w-[50%]">
            <img className="mt-[]" src={naura} alt="Naura" />
          </div>
          <div className="w-[50%] my-auto">
            <img className="" src={chat} alt="chat" />
            <p className="text-5xl mt-20">Hey Naura,</p>
            <p className="text-5xl">‘Send 60k to Mom’</p>
          </div>
        </div>
        <div className="flex mt-20 gap-40">
          <div className="w-[50%] bg-slate-800 p-20 rounded-[50px] ">
            <img className="" src={chat} alt="chat" />

            <p className="text-5xl text-white mt-[2rem] h-[40rem]">
              <span className="text-red-400">Naura</span>, Swap my 50,000 Naira
              to dollars and fund my Virtual card.
            </p>
          </div>
          <div className="w-[50%] bg-white p-20 rounded-[50px] ">
            <img className="" src={chat} alt="chat" />

            <p className="text-5xl text-black mt-[2rem] h-[40rem]">
              <span className="text-red-400">Naura</span>, What’s today’s
              dollars to Naira Rate?
            </p>
          </div>
        </div>
      </section>

      {/* in the Car */}
      <section className="inthecarSect px-40 py-40">
        <div className="flex gap-20 h-[40rem]">
          <div className="w-50%">
            <p className="inthecar text-9xl font-bold pr-20">In the car.</p>
          </div>
          <div className="flex justify-center items-center w-[50%] h-[100%]">
            <p className="text-4xl">
              Drive safer with Naura. Use just your voice to schedule a
              transfer, send cash to beneficiaries, and let you know if you have
              enough money for a bill this month. All while you keep your eyes
              on the road.
            </p>
          </div>
        </div>
        <div className=" mt-20 rounded-[4rem] bg-white flex justify-center h-[40rem] ">
          <div className="w-[50%]"></div>
          <div className="flex justify-center w-[50%] h-[100%] mt-[12%]">
            <div>
              <img src={mic} alt="mic" />
              <p className="text-5xl text-black mt-[2rem]">
                <span className="text-purple-700">Hey Naura</span>,<br /> 'Check
                my balance? '
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-20 gap-20">
          <div className="w-[50%] bg-white p-20 rounded-[50px] ">
            <img className="" src={chat} alt="chat" />

            <p className="text-5xl text-black mt-[2rem] h-[40rem]">
              <span className="text-red-400">Naura</span>, How much have I spent
              on food this week.
            </p>
          </div>
          <div className="w-[50%] bg-slate-800 text-white p-20 rounded-[50px] ">
            <img className="" src={chat} alt="chat" />

            <p className="text-5xl text-white mt-[2rem] h-[40rem]">
              <span className="text-red-400">Naura</span>, Remember to pay my
              starlink bill 8:00PM today’s
            </p>
          </div>
        </div>
      </section>

      {/* In the Kitchen */}

      <section className="inthekitchenSect px-40 py-40">
        <div className="flex gap-20 h-[40rem]">
          <div className="w-50%">
            <p className="inthecar text-9xl font-bold px-20">In the kitchen.</p>
            <p className="text-4xl py-20 px-20">
              Multitask without the mess. Make an order and send payment Without
              getting pizza sauce all over your device.
            </p>
          </div>
          <div className="flex justify-center items-center w-[50%] h-[100%]"></div>
        </div>
        <div className=" mt-20 rounded-[4rem] bg-white h-[40rem] ">
          <div className="flex justify-center w-[50%] h-[100%] p-20">
            <div className="mt-12">
              <img src={chat} alt="chat" />
              <p className="text-5xl text-black mt-[2rem]">
                <span className="text-[#ba3c64]">Naura</span>,<br /> Naura, Send
                a payment to ToriKitchen 👩🏽‍🍳 for Tomatoes
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-20 gap-20">
          <div className="w-[50%] bg-white p-20 rounded-[50px] ">
            <img className="" src={chat} alt="chat" />

            <p className="text-5xl text-black mt-[2rem] h-[40rem]">
              <span className="text-red-400">Naura</span>, How much was spent on
              groceries last week.
            </p>
          </div>
          <div className="w-[50%] bg-slate-800 text-white p-20 rounded-[50px] ">
            <img className="" src={chat} alt="chat" />

            <p className="text-5xl text-white mt-[2rem] h-[40rem]">
              <span className="text-red-400">Naura</span>, How long before i run
              out of funds on food?
            </p>
          </div>
        </div>
      </section>

      {/* The most private fintech App */}

      <section className="bg-[#0c0c49]">
        <div className="py-20 px-40 rounded-[4rem]">
          <div className=" mt-30 px-[10rem] py-20 bg-black rounded-[4rem] mx-20">
            <div className="">
              <img className="mx-auto" src={lock} alt="lock" />
            </div>
            <div className="text-center text-white">
              <p className="text-[6rem]">The most private fintech App</p>
              <p className="text-[1.5rem]">
                Naura learns what you need. Not who you are. What you ask Naura
                isn’t associated with your Naura ID. The power of the
                NauraFinance Neural Engine ensures that the audio of your
                requests never leaves your device unless you choose to share it.
                On-app intelligence makes your experience with Naura personal —
                learning your preferences and what you might want — while
                maintaining your privacy.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[4rem] text-center text-white">
            Naura does all this. And more
          </p>

          <div className="flex w-[100vw] justify-center items-center mx-auto my-[8rem]">
            <div className="flex gap-8 px-40 items-center mx-auto">
              <div className="w-[10%] h-[10rem] flex flex-col items-center text-center">
                <img src={all} alt="All" />
                <p>All</p>
              </div>
              <div className="w-[8%] h-[10rem] flex flex-col items-center text-center">
                <img src={send} alt="send" />
                <p>Send & Receive Money</p>
              </div>

              <div className="w-[8%] h-[10rem] flex flex-col items-center text-center">
                <img src={projection} alt="projection" />
                <p>Finance Projection</p>
              </div>
              <div className="w-[8%] h-[10rem] flex flex-col items-center text-center">
                <img src={latest} alt="Latest" />
                <p>Get Latest FX Price</p>
              </div>
              <div className="w-[8%] h-[10rem] flex flex-col items-center text-center">
                <img src={vCard} alt="vCard" />
                <p>Create & Fund Virtual Cards </p>
              </div>
              <div className="w-[8%] h-[10rem] flex flex-col items-center text-center">
                <img src={automate} alt="Automate" />
                <p>Automate Payment</p>
              </div>
              <div className="w-[8%] h-[10rem] flex flex-col items-center justify-center text-center">
                <img src={bill} alt="bill" />
                <p>Make Bill Payment</p>
              </div>
              <div className="w-[8%] h-[10rem] flex flex-col items-center text-center">
                <img src={swap} alt="Swap currency" />
                <p>Support Currency Swap</p>
              </div>
              <div className="w-[8%] h-[10rem] flex flex-col items-center text-center">
                <img src={support} alt="Support language" />
                <p>Support 100+ Languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;