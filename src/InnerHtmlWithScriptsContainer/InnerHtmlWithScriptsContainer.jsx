import React, { useEffect } from 'react';

const InnerHtmlWithScriptsContainer = ({ html, ...props }) => {
  const containerRef = React.createRef();
  useEffect(() => {
    [...containerRef.current.getElementsByTagName("script")].map(script => {
      // console.log(script.dataset);
      const newScript = document.createElement("script");
      newScript.type = script.type;
      // console.log(script.dataset);
      Object.keys(script.dataset).map(attr => newScript.dataset[attr] = script.dataset[attr]);
      if (script.src) {
          newScript.src = script.src;
      } else if (script.textContent) {
        const newScriptText = script.textContent//.replace(/:/g, '\\\\:')
        // console.log(newScriptText);
        newScript.textContent = newScriptText;
      } else if (script.innerText) {
        const newScriptText = script.innerText //.replace('\\:\g', '\/\\:')
        // console.log(newScriptText);

        newScript.innerText = newScriptText;
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