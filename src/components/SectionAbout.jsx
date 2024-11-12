import { useState } from "react"
import '../styles/SectionAbout.css'
import apropos from '../datas/apropos.json'
import imgUp from '../assets/chevron-up.svg'
import imgDown from '../assets/chevron-down.svg'


function SectionABout(){

    const [openItems, setOpenItems] = useState({})

    const toggleItem = (index) => {
        setOpenItems((prev) => ({...prev, [index]: !prev[index]}))
    }

    return (
        <div>
            <div className='section_about'>
                <div className='opacity_about'>
                </div>
            </div>
            <ul className="sectionAbout_ul">
                {apropos.map(({title, content}, index)=> (
                    <li key={index} className={`section_about_li ${openItems[index] ? 'open' : ''}`}>
                        <div>
                            <h2>{title}</h2>
                            <img src={openItems[index] ? imgDown : imgUp} alt="chevron" onClick={() => toggleItem(index)} />
                        </div>
                        {openItems[index] && <p className="section_about_content">{content}</p>}

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SectionABout