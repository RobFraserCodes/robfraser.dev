import React from 'react'
import { portfolio} from '../data/portfolio'

export default function PortfolioExample(props) {
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={props.key}>
        <a href={props.url}>
            <img src={props.img} loading="lazy" alt={props.title}  className="w-full h-48 rounded-t-md" />
            <div className="pt-3 ml-4 mr-2 mb-4">
                <h3 className="text-xl text-gray-900">
                    {props.title}
                </h3>
                <p className="text-gray-400 mt-1">{props.desc}</p>
            </div>
        </a>
    </article>
  )
}
