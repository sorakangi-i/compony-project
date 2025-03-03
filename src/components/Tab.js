import React from 'react';

const Tab = ({ tabs, activeTab, onTabChange }) => {
  return (
    <section className='tab-container flex border-b mb-6'>
      {/* tab 목록 */}
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`py-2 px-4 ${
            activeTab === tab.id ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.content}
        </button>
      ))}
    </section>
  );
};

export default Tab;
