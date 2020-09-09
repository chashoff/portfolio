import React from 'react';
import './index.css';

const Social = () => (
    <div style={{ position: 'relative'}}>
        <img onClick={()=> window.open("https://twitter.com/chashoff1", "_blank")} className="social-icon" src="/images/iconfinder_twitter.svg" alt="" />
        <img  onClick={()=> window.open("https://github.com/chasehoff", "_blank")} className="social-icon" src="/images/iconfinder_github.svg" alt="" />
    </div>
)
export default Social;