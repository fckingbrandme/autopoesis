import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const About = () => {
  const { about } = config;
  const [firstItem, secondItem] = about.items;

  return (
    <section className={` py-8`} id="about">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {about.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-gray-400' : 'text-primary'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-300 font-bold leading-none mb-3`}
            >
              {firstItem?.title1}
            </h3>
            <p className={`text-gray-500`}>{firstItem?.description1}</p>
            <>
              <h3
                className={`text-3xl text-gray-300 font-bold leading-none mb-3 mt-10`}
              >
                {firstItem?.title2}
              </h3>
              <p className={`text-gray-500`}>{firstItem?.description2}</p>
            </>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title1}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title1}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-300 font-bold leading-none mb-3`}
              >
                {secondItem?.title1}
              </h3>
              <p className={`text-gray-500 mb-8`}>{secondItem?.description1}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
