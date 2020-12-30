import React, {useEffect, useState} from 'react'
import { Remarkable } from 'remarkable'

const rmk = new Remarkable({ html: true })

export default function Markdown({ src, columns=1 }) {
  const [md, setMd] = useState('')
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const srcDir = src.substring(0, src.lastIndexOf('/'))

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  fetch(src)
    .then((i) => i.text())
    .then((i) => setMd(rmk.render(i
        .replace(/<flex>/g, '<div style="display: flex;">') /* this is for some stupid ass backwards compat from athenaeum v1 and can be ignored */
        .replace(/<\/flex>/g, '</div>')
        .replace(/<c>/g, '<center>')
        .replace(/<\/c>/g, '</center>')
        .replace(/<big>/g, '<h3>')
        .replace(/<\/big>/g, '</h3>')
        .replace(/<h>/g, '<h2>')
        .replace(/<\/h>/g, '</h2>')
        // .replace(/<b>/g, '<h4>')
        // .replace(/<\/b>/g, '</h4>')
        .replace(/<Image>(.*?)<\/Image>/g, `<img src="${srcDir}/$1"  alt="$1"/>`)
        .replace(/<Image width:(.*?)>(.*?)<\/Image>/g, `<img src="${srcDir}/$2"  alt="$2" style="width: $1;"/>`)
        .replace(/<Image float:(.*?)>(.*?)<\/Image>/g, `<img src="${srcDir}/$2"  alt="$2" style="float: $1;"/>`)
    )))
    .catch(console.log)

  console.log(md)

  let columnCount = columns
  if (windowSize?.width <= 768) {
    columnCount = 1
  }

  return (
    <div
      className="mx-auto prose article prose-indigo text-gray-500"
      dangerouslySetInnerHTML={{ __html: md }}
      style={{ columnCount, padding: windowSize?.width <= 768 ? '0 20px' : 0 }}
    />
  )
}