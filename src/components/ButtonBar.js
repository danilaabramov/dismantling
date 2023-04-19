import {useState} from 'react';

export default function ButtonBar({text, menu=false}) {
    return (
        <div className='button-bar' style={{width: menu ? '100vw' : 80}}>
            <div className='text-button-bar'>
                <div className='text-container-button-bar'>
                    {text}
                </div>
            </div>
        </div>
    );
}
