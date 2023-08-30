import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;
  const [firstPlan, secondPlan, thirdPlan] = items;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-around pt-12 my-12 sm:my-4`}
        >
          {/*          first plan */}
          <div
            className={`group flex flex-col w-5/6 sm:w-5/6 lg:w-1/4 lg:hover:w-1/2 mx-auto sm:mx-0 lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4 sm:-mt-6`}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=573192339290&text=Hola! quisiera consultar mi carta natal!"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
              >
                <div
                  className={`group-hover:w-full p-8  text-gray-400 group-hover:text-primary text-3xl font-bold text-center border-b-4 group-hover:border-b-8`}
                >
                  {firstPlan?.name}
                </div>
                <ul
                  className={`w-full text-center text-sm text-gray-400 group-hover:text-primary group-hover:text-base group-hover:font-bold`}
                >
                  {firstPlan?.features.map((feature) => (
                    <li
                      className={`border-b py-4`}
                      key={`${firstPlan.name}-${feature}`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
              >
                <div
                  className={`w-full pt-6 text-3xl group-hover:text-4xl text-gray-600 group-hover:text-primary font-bold text-center`}
                >
                  {firstPlan?.price}
                  <span className={`text-base`}>{firstPlan?.priceDetails}</span>
                </div>
              </div>
            </a>
          </div>
          {/*          second plan */}
          <div
            className={`group flex flex-col w-5/6 sm:w-5/6 lg:w-1/4 lg:hover:w-1/2 mx-auto sm:mx-0 lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4 sm:-mt-6`}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=573192339290&text=Hola! quisiera consultar mi carta de revolución solar!"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
              >
                <div
                  className={`group-hover:w-full p-8  text-gray-400 group-hover:text-primary text-3xl font-bold text-center border-b-4 group-hover:border-b-8`}
                >
                  {secondPlan?.name}
                </div>
                <ul
                  className={`w-full text-center text-sm text-gray-400 group-hover:text-primary group-hover:text-base group-hover:font-bold`}
                >
                  {secondPlan?.features.map((feature) => (
                    <li
                      className={`border-b py-4`}
                      key={`${secondPlan?.name}-${feature}`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
              >
                <div
                  className={`w-full pt-6 text-3xl group-hover:text-4xl text-gray-600 group-hover:text-primary font-bold text-center`}
                >
                  {secondPlan?.price}
                  <span className={`text-base`}>
                    {secondPlan?.priceDetails}
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/*          third plan */}
          <div
            className={`group flex flex-col w-5/6 sm:w-5/6 lg:w-1/4 lg:hover:w-1/2 mx-auto sm:mx-0 lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4 sm:-mt-6`}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=573192339290&text=Hola! quisiera participar en el taller de tarot terapéutico e intuitivo!"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
              >
                <div
                  className={`group-hover:w-full p-8  text-gray-400 group-hover:text-primary text-3xl font-bold text-center border-b-4 group-hover:border-b-8`}
                >
                  {thirdPlan?.name}
                </div>
                <ul
                  className={`w-full text-center text-sm text-gray-400 group-hover:text-primary group-hover:text-base group-hover:font-bold`}
                >
                  {thirdPlan?.features.map((feature) => (
                    <li
                      className={`border-b py-4`}
                      key={`${thirdPlan?.name}-${feature}`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
              >
                <div
                  className={`w-full pt-6 text-3xl group-hover:text-4xl text-gray-600 group-hover:text-primary font-bold text-center`}
                >
                  {thirdPlan?.price}
                  <span className={`text-base`}>{thirdPlan?.priceDetails}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
