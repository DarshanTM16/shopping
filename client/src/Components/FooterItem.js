import React from 'react';
import './../styles/footeritems.css';

const FooterItem = (props) => {
    let data = props.data;
    return(
        <>
         <div className="footeritem">
             <ul>
                 <li id="firstchild">{props.title}</li>
                 <li className='f-items'>{data.f1}</li>
                 <li className='f-items'>{data.f2}</li>
                 <li className='f-items'>{data.f3}</li>
                 <li className='f-items'>{data.f4}</li>
             </ul>
         </div>
        </>
    )
};

export default FooterItem;
