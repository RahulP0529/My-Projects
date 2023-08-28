import React from 'react';
import { layout } from '../../../style';
import { valorant, valorant2023 } from '../../../assets';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div>
      {/* Big Image Banner */}
      <section>
        <img
          src={valorant}
          alt="Big Image"
          className="w-full h-[600px]"
        />
      </section>
      
            {/* Navigation Button */}
            <section className={`${layout.section} flex justify-center py-8`}>
        <Link to="/Player"> {/* Use the correct path */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded"
          >
            Go to Player Page
          </button>
        </Link>
      </section>

      {/* Centered Tables with Space */}
      <section className={`${layout.section} flex justify-center space-x-8 py-8`}>
        <div className="w-1/2">
          <table className="border-collapse border border-gray-300 bg-transparent w-full text-white">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 w-[75px]">Date</th>
                <th className="border border-gray-300 p-2 w-[150px]">Matchup</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Item A</td>
                <td className="border border-gray-300 p-2">$10.00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Item B</td>
                <td className="border border-gray-300 p-2">$15.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-1/2">
          <table className="border-collapse border border-gray-300 bg-transparent w-full text-white">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Product</th>
                <th className="border border-gray-300 p-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Product X</td>
                <td className="border border-gray-300 p-2">100 units</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Product Y</td>
                <td className="border border-gray-300 p-2">50 units</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* News Source Section */}
      <section className={`${layout.section} text-white`}>
        <div className={layout.sectionInfo}>
          <h2 className="font-poppins font-semibold text-2xl leading-8">
            Latest News
          </h2>
          <p className="font-poppins font-normal text-lg leading-6 mt-3">
            Stay updated with the latest news from trusted sources. Our curated news
            section brings you the most relevant and important stories.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Content;