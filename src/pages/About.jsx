import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function About() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="bg-base-100 container mt-6">
      <div className="flex flex-col">
        <div className="rounded-lg shadow-lg bg-base-300 flex flex-col items-center lg:justify-between lg:flex-row">
          <div className="flex flex-col items-center  my-6 mx-6">
            <img
              className="rounded-lg "
              src={
                "https://media-exp1.licdn.com/dms/image/C4E03AQHwngRe50fsoQ/profile-displayphoto-shrink_400_400/0/1652905601081?e=1665619200&v=beta&t=cCq27h-t6AIiGKlffmBYo-cZnQjGqofX8mXSoaVw1-k"
              }
            />
            <h1 className="text-3xl font-extrabold mt-3">Wojciech Basiński</h1>
            <div className="flex gap-3 items-center">
              <h3>Javascript Intern developer</h3>
              <button
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/in/wojciech-basinski/")
                }
                className="btn btn-ghost"
              >
                <AiFillLinkedin />
              </button>
              <button
                onClick={() => openInNewTab("https://github.com/bas0N")}
                className="btn btn-ghost"
              >
                <AiFillGithub />
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between  mx-12 ">
            <div
              tabindex="0"
              class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box "
            >
              <div class="collapse-title text-xl font-medium">
                What is CRYPTEX?
              </div>
              <div class="collapse-content">
                <p>
                  CRYPTEX is an open-source platform allowing free
                  cryptocurrencies data exploration.
                </p>
                <p className="mt-3">
                  It utilizes
                  <a
                    onClick={() => openInNewTab("https://docs.coincap.io/")}
                    className="font-bold cursor-pointer"
                  >
                    {" CoinCap API 2.0 "}
                  </a>
                  and has been devloped with React framework.
                </p>
              </div>
            </div>
            <div
              tabindex="0"
              class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium">
                How does it work?
              </div>
              <div class="collapse-content">
                <p>
                  To use CRYPTEX, it is enough to scroll through the list of
                  available crypo assets.{" "}
                </p>
                <p className="mt-3">
                  You can also search for the asset you are intrested in by
                  pressing the search icon above search result.
                </p>
              </div>
            </div>
            <div
              tabindex="0"
              class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium">
                How can I support CRYPTEX?
              </div>
              <div class="collapse-content">
                <p>
                  Because of its "open source" nature, CRYPTEX project is opened
                  for any new deas or suggestions.
                </p>
                <p className="mt-3">
                  Saying that, we highly recommend you to contribute to the
                  source code.
                </p>
                <p className="mt-3 btn">
                  <a
                    onClick={() =>
                      openInNewTab("https://github.com/bas0N/crypto-searcher")
                    }
                    className="font-bold cursor-pointer text-primary"
                  >
                    {"Linked repo"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
