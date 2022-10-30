import React from 'react';
import { TiSocialInstagram } from 'react-icons/ti';
import { ImTwitter, ImYoutube } from 'react-icons/im';
import { RiFacebookBoxFill } from 'react-icons/ri';

export default () => {
    const newDate = new Date();
    const IconStyle = {
        height: "30px",
        width: "41px",
        marginRight: "8px",
        cursor: "pointer",
    }
    const DetailStyle = {
        listStyle: "none",
        marginBottom: "5px",
        flexBasis: "25%",
        textalign: "center",
        cursor: "pointer"
    }
    return (
        <footer className='text-gray-300'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex mb-3' >
                    <RiFacebookBoxFill style={IconStyle} />
                    <TiSocialInstagram style={IconStyle} />
                    <ImTwitter style={IconStyle} />
                    <ImYoutube style={IconStyle} />
                </div>
                <ul className='flex justify-around ' style={DetailStyle} >
                    <li className='mx-3 underline'>About</li>
                    <li className='mx-3 underline'>Contact us</li>
                    <li className='mx-3 underline'>Be Creator</li>
                    <li className='mx-3 underline'>Our Programs</li>

                </ul>
                <div className='flex flex-col justify-center items-center'>
                    <div>Clone right goes to @TilakKhatri</div>
                    <span>© 1997-{newDate.getFullYear()} Netflix, Inc.</span>
                </div>
            </div>
        </footer>
    )
}