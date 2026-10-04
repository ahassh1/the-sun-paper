import React from 'react';

const BanglaDate = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
    return (
        <div>
            <p className="text-xs text-gray-500">
              {date}
            </p>
        </div>
    );
};

export default BanglaDate;