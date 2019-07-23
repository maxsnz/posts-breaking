import React, { useEffect } from 'react';

const InnerHtmlWithScriptsContainer = ({ html, ...props }) => {
  const containerRef = React.createRef();
  useEffect(() => {
    [...containerRef.current.getElementsByTagName("script")].map(script => {
      const newScript = document.createElement("script");
      if (script.src) {
          newScript.src = script.src;
      } else if (script.textContent) {
          newScript.textContent = script.textContent;
      } else if (script.innerText) {
          newScript.innerText = script.innerText;
      }
      document.body.appendChild(newScript);
      script.parentNode.removeChild(script);
      return script;
    });
  });

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} {...props} />
  );
};

export default InnerHtmlWithScriptsContainer;