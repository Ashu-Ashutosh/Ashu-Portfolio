import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5">
                  <span className="text-tertiary">{key} : </span>
                  <span className="text-tertiary">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[500px]">

          <dotlottie-player
            src="https://lottie.host/bdcfa72a-dc36-41d8-8523-6d487c2fa8ea/oZv0UdZftW.lottie"
            background="transparent"
            speed="1"
            loop autoplay>
          </dotlottie-player>

        </div>
      </div>
    </div>
  );
}

export default Contact;
