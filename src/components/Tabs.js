import React, { useState } from 'react'

const Tabs = (props)=>{
    const [tab,setTab]=useState('Tab 1');
    const setTabs = (id)=>{
        setTab(`Tab ${id}`);
    }
    return (
        <>
            <ul>
                <li onClick={()=>{
                    setTabs(1);
                }}>Tab 1</li>
                <li onClick={()=>{
                    setTabs(2);
                }}>Tab 2</li>
                <li onClick={()=>{
                    setTabs(3);
                }}>Tab 3</li>
            </ul>
            <p>This is the content for {tab}.</p>
        </>
    )
}

export default Tabs;