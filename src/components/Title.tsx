import React from 'react'

interface TitleProps {
  title: string;
  title2: string;
  titleStyles: string;
  paraStyles: string;
}

const Title: React.FC<TitleProps> = ({title, title2, titleStyles, paraStyles}) => {
  return (
    <div className={`${titleStyles}`}>
        <h2 className={`h2`}>
            {title}
            <span className="text-secondary !font-light underline">{title2}</span>
        </h2>
        <p className={`${paraStyles}hidden`}>Discover the best deals on high qulity products,crafted <br />to elevate your everyday experience.</p>
    </div>
  )
}

export default Title