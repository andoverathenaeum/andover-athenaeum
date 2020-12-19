import React, { useState } from 'react'
import { Remarkable } from 'remarkable'

const rmk = new Remarkable({ html: true })

export default function Markdown({ src, columns=1 }) {
  const [md, setMd] = useState('')
  fetch(src)
    .then((i) => i.text())
    .then((i) => setMd(rmk.render(i)))
    .catch(console.log)

  return (
    <div
      className="mx-auto prose article prose-indigo text-gray-500"
      dangerouslySetInnerHTML={{ __html: md }}
      style={{ columnCount: columns }}
    />
  )
}