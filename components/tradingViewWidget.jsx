"use client"

// import React, { useEffect, useRef } from 'react';

// const TradingViewWidget = () => {
//   const containerRef = useRef();

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.async = true;
//     script.innerHTML = `
//     {
//       "autosize": true,
//       "symbol": "HDFCBANK",
//       "interval": "D",
//       "timezone": "Asia/Kolkata",
//       "theme": "light",
//       "style": "3",  
//       "locale": "en",
//       "toolbar_bg": "#f1f3f6",
//       "enable_publishing": false,
//       "hide_top_toolbar": false,
//       "container_id": "tradingview_chart"
//     }`;

//     containerRef.current.appendChild(script);

//     return () => {
//       containerRef.current.innerHTML = '';
//     };
//   }, []);

//   return (
//     <div className="tradingview-widget-container" ref={containerRef} style={{ height: "100%", width: "100%" }}>
//       <div id="tradingview_chart" className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
//     </div>
//   );
// };

// export default TradingViewWidget;


import React, { useEffect, useRef } from 'react';

const TradingViewWidget = ({ symbol }) => {
  const containerRef = useRef();

  useEffect(() => {
    const createWidget = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
          autosize: true,
          symbol: symbol,
          interval: 'D',
          timezone: 'Asia/Kolkata',
          theme: 'light',
          style: '3',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_top_toolbar: false,
          container_id: 'tradingview_chart',
        });

        containerRef.current.appendChild(script);
      }
    };

    createWidget();
  }, [symbol]);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: '100%', width: '100%' }}>
      <div id="tradingview_chart" className="tradingview-widget-container__widget" style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
};

export default TradingViewWidget;
