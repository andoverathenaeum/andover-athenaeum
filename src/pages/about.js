import React from 'react'
import Markdown from '../components/markdown'

export default function About() {
  return (
    <div className="pt-6 mx-auto max-w-6xl">
      <table className="w-full">
        <colgroup>
          <col
            span="1"
            style={{width: '15%'}}
          />
          <col
            span="1"
            style={{width: '85%'}}
          />
        </colgroup>
        <tbody>
        <tr className="border-b border-gray-500">
          <td className="align-top text-right pr-3 cinzel-sm text-xl">
            <p>Who We Are</p>
          </td>
          <td>
            <Markdown src="/ui-md/about-who-we-are.md" />
          </td>
        </tr>
        <tr className="border-b border-gray-500">
          <td className="py-5 align-top text-right pr-3 cinzel-sm text-xl">
            <p>Charter</p>
          </td>
          <td className="py-5">
            <Markdown src="/ui-md/about-charter.md" />
          </td>
        </tr>
        <tr>
          <td className="py-5 align-top text-right pr-3 cinzel-sm text-xl">
            <p>Write for Us</p>
          </td>
          <td className="py-5">
            <Markdown src="/ui-md/about-write-for-us.md" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}