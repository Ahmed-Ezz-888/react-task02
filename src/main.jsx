import { CiHeart } from "react-icons/ci";
import {
  FaShoppingCart,
  FaTwitter,
  FaFacebookF,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import {
  IoPerson,
  IoChevronUp,
  IoChevronBack,
  IoChevronForward,
  IoOptionsOutline,
} from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { createRoot } from "react-dom/client";
import "./index.css";
import img1 from "./assets/Logo.png";
import img2 from "./assets/Iphone 14 pro 1.png";
import img3 from "./assets/Iphone 14 pro 1 (1).png";
import img4 from "./assets/Iphone 14 pro 1 (2).png";

createRoot(document.getElementById("root")).render(
  <div className="w-full h-dvh overflow-auto flex flex-col" data-theme="light">
    <header className="w-full border-b flex  justify-center">
      <div className="container justify-between flex items-center py-4 px-4 lg:px-0 ">
        <img className="w-16.25" src={img1} />
        <div className="relative hidden lg:flex">
          <input
            type="text"
            placeholder="search"
            className="input pl-12 bg-[#F5F5F5]"
          />
          <CiSearch className="absolute top-3 left-5 " />
        </div>
        <nav className="hidden lg:flex gap-13  ">
          <a className="font-roboto font-medium ">Home</a>
          <a className="font-roboto font-medium ">About</a>
          <a className="font-roboto font-medium ">contact US</a>
          <a className="font-roboto font-medium ">Blog</a>
        </nav>
        <div className="flex gap-7.5 hidden lg:flex">
          <CiHeart />
          <FaShoppingCart />
          <IoPerson />
        </div>
        <CiMenuBurger className="flex lg:hidden" />
      </div>
    </header>

    <main className="w-full flex justify-center py-6 lg:py-10">
      <div className="container flex flex-col lg:flex-row gap-5 lg:gap-8 px-4 lg:px-0">
        <label
          htmlFor="filters"
          className="lg:hidden flex justify-between items-center border rounded-lg px-4 py-3 font-roboto cursor-pointer"
        >
          Filters
          <IoOptionsOutline />
        </label>
        <input id="filters" type="checkbox" className="peer hidden" />

        <aside className="hidden peer-checked:flex lg:flex flex-col gap-4 w-full lg:w-64 shrink-0 border rounded-lg p-4 lg:border-0 lg:rounded-none lg:p-0">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-roboto font-medium">Categories</h3>
            <IoChevronUp />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="input w-full pl-10 bg-[#F5F5F5]"
            />
            <CiSearch className="absolute top-3 left-3" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm font-roboto cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-neutral"
              />
              smartphones
            </label>
            <label className="flex items-center gap-2 text-sm font-roboto cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-neutral"
              />
              laptops
            </label>
            <label className="flex items-center gap-2 text-sm font-roboto cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-neutral"
              />
              skincare
            </label>
            <label className="flex items-center gap-2 text-sm font-roboto cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-neutral"
              />
              sunglasses
            </label>
            <label className="flex items-center gap-2 text-sm font-roboto cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-neutral"
              />
              motorcycle
            </label>
            <label className="flex items-center gap-2 text-sm font-roboto cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-neutral"
              />
              lighting
            </label>
            <label className="flex items-center gap-2 text-sm font-roboto cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-neutral"
              />
              furniture
            </label>
            <label className="flex items-center gap-2 text-sm font-roboto cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-neutral"
              />
              men shirts
            </label>
            <label className="flex items-center gap-2 text-sm font-roboto cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-neutral"
              />
              women bags
            </label>
          </div>
          <label htmlFor="filters" className="btn bg-black text-white">
            Apply
          </label>
        </aside>

        <section className="flex-1 flex flex-col gap-4">
          <p className="font-roboto">
            Available Products: <b className="text-lg">85</b>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#F6F6F6] rounded-lg p-4 flex flex-col gap-3">
              <img className="w-full h-38 object-cover rounded" src={img2} />
              <h4 className="font-roboto text-sm font-medium">
                Apple iPhone 14 Pro 512GB Gold (MQ233)
              </h4>
              <p className="font-roboto">$1437</p>
              <button className="btn bg-black text-white">Add To Cart</button>
            </div>
            <div className="bg-[#F6F6F6] rounded-lg p-4 flex flex-col gap-3">
              <img className="w-full h-38 object-cover rounded" src={img3} />
              <h4 className="font-roboto text-sm font-medium">
                Apple iPhone 11 128GB White (MQ233)
              </h4>
              <p className="font-roboto">$510</p>
              <button className="btn bg-black text-white">Add To Cart</button>
            </div>
            <div className="bg-[#F6F6F6] rounded-lg p-4 flex flex-col gap-3">
              <img className="w-full h-38 object-cover rounded" src={img4} />
              <h4 className="font-roboto text-sm font-medium">
                Apple iPhone 11 128GB White (MQ233)
              </h4>
              <p className="font-roboto">$550</p>
              <button className="btn bg-black text-white">Add To Cart</button>
            </div>
            <div className="bg-[#F6F6F6] rounded-lg p-4 flex flex-col gap-3">
              <img className="w-full h-38 object-cover rounded" src={img2} />
              <h4 className="font-roboto text-sm font-medium">
                Apple iPhone 14 Pro 512GB Gold (MQ233)
              </h4>
              <p className="font-roboto">$1437</p>
              <button className="btn bg-black text-white">Add To Cart</button>
            </div>
            <div className="bg-[#F6F6F6] rounded-lg p-4 flex flex-col gap-3">
              <img className="w-full h-38 object-cover rounded" src={img3} />
              <h4 className="font-roboto text-sm font-medium">
                Apple iPhone 11 128GB White (MQ233)
              </h4>
              <p className="font-roboto">$510</p>
              <button className="btn bg-black text-white">Add To Cart</button>
            </div>
            <div className="bg-[#F6F6F6] rounded-lg p-4 flex flex-col gap-3">
              <img className="w-full h-38 object-cover rounded" src={img4} />
              <h4 className="font-roboto text-sm font-medium">
                Apple iPhone 11 128GB White (MQ233)
              </h4>
              <p className="font-roboto">$550</p>
              <button className="btn bg-black text-white">Add To Cart</button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-3 mt-4">
            <IoChevronBack />
            <button className="btn btn-sm bg-black text-white font-roboto">
              1
            </button>
            <button className="btn btn-sm btn-ghost font-roboto">2</button>
            <button className="btn btn-sm btn-ghost font-roboto">3</button>
            <button className="btn btn-sm btn-ghost font-roboto">...</button>
            <button className="btn btn-sm btn-ghost font-roboto">12</button>
            <IoChevronForward />
          </div>
        </section>
      </div>
    </main>

    <footer className="w-full bg-[#1C1C1C] text-white py-10 lg:py-16">
      <div className="container w-full flex flex-col lg:flex-row justify-between gap-8 px-6 lg:px-8">
        <div className="w-full lg:w-80 flex flex-col gap-6 lg:justify-between">
          <div className="flex flex-col gap-4">
            <img className="w-16.25 brightness-0 invert" src={img1} />
            <p className="font-roboto text-xs">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div className="flex gap-6">
            <FaTwitter />
            <FaFacebookF />
            <FaTiktok />
            <FaInstagram />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-roboto font-medium">Services</h4>
          <a className="font-roboto text-xs text-gray-400">Bonus program</a>
          <a className="font-roboto text-xs text-gray-400">Gift cards</a>
          <a className="font-roboto text-xs text-gray-400">
            Credit and payment
          </a>
          <a className="font-roboto text-xs text-gray-400">Service contracts</a>
          <a className="font-roboto text-xs text-gray-400">Non-cash account</a>
          <a className="font-roboto text-xs text-gray-400">Payment</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-roboto font-medium">Assistance to the buyer</h4>
          <a className="font-roboto text-xs text-gray-400">Find an order</a>
          <a className="font-roboto text-xs text-gray-400">Terms of delivery</a>
          <a className="font-roboto text-xs text-gray-400">
            Exchange and return of goods
          </a>
          <a className="font-roboto text-xs text-gray-400">Guarantee</a>
          <a className="font-roboto text-xs text-gray-400">
            Frequently asked questions
          </a>
          <a className="font-roboto text-xs text-gray-400">
            Terms of use of the site
          </a>
        </div>
      </div>
    </footer>
  </div>,
);