import React from "react";

import "./Card.css";

export interface CardProps {
    img: { src: string; alt: string };
    title: string;
}

export function Card ({
    img,
    title,
    children,
}: React.PropsWithChildren<CardProps>) {
    return (
      <article data-card>
    	<img data-card-img src={img.src} alt={img.alt} />
   	 <h2>{title}</h2>
   	 {children}
      </article>
    );
}

// export const Card = () => (<article>
//   Hello World
//   </article>)
// export function Card ({
//   img,
//   title,
//   children
// }: React.PropsWithChildren<CardProps>) {
//   return (
//     <article>
//       <img data-card-img src={img.src} alt={img.alt} />
//       Hello World2
//     </article>
//   )
// }