import { FaHome, FaPhoneSquareAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mx-auto w-4/5 py-12">
      <address className="items-center justify-center gap-16 md:flex">
        <div className="flex p-5">
          <div className="p-4">
            <FaHome size={30} />
          </div>
          <div className="mt-4">
            <h4>Visit Us</h4>
            <h5>Doža Đerđa 4</h5>
            <h5>Novi Sad, Serbia</h5>
            <h5>mon - sat: 8.00 - 22.00</h5>
            <h5>sun 15.00 - 22.00</h5>
          </div>
        </div>
        <div className="flex p-5">
          <div className="p-4">
            <FaPhoneSquareAlt size={30} />
          </div>
          <div className="mt-4">
            <h4>Call Us</h4>
            <h5>mon - sat: 8.00 - 22.00</h5>
            <h5>General Manager</h5>
            <h5>+381 65 554 05 95</h5>
          </div>
        </div>
      </address>
      <a
        href="https://www.vladimir-monarov.com/"
        target="_blank"
        rel="noreferrer"
        className="text-center"
      >
        <p className="py-12  text-sm">
          &copy;Copyright 2020 DodaDesign all rights reserved
        </p>
      </a>
    </footer>
  );
}
