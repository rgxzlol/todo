import { FC, ReactNode, useEffect, useRef } from 'react'

interface ITransitionProps {
  children: ReactNode, 
  className: string, 
  hide: boolean, 
  onClick?: ()=>void
}

const Transition: FC<ITransitionProps> = ({children, className, hide, onClick}) => {
    const div = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if (div.current && hide) {
            div.current.classList.add('active')
        } 
        else if (div.current) {
            div.current.classList.remove('active')
        }
    })
    // console.log(div);
  return (
    <div onMouseDown={onClick} ref={div} className={className}>{children}</div>
  )
}

export default Transition