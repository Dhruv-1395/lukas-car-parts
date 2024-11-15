import React from 'react'
import '../Css/Dec_review.css'
import { useState } from 'react'
import Description from './Description';
import Review from './Review';

const DecRewview = () => {
    const [view, setView] = useState('desc');
    const getButtonStyle = (buttonView) => {
        if (buttonView === view) {
            return { backgroundColor: '#EEB644', color: 'black' };
        }
        return { backgroundColor: 'black', color: 'white' };
    };
    return (
        <>
            <div className="container">
            <div className="row menus">
            <div className="col-6 p-0">
                <button
                    onClick={() => setView('desc')}
                    style={getButtonStyle('desc')}
                >
                    DESCRIPTION
                </button>
            </div>
            <div className="col-6 p-0">
                <button
                    onClick={() => setView('review')}
                    style={getButtonStyle('review')}
                >
                    REVIEW
                </button>
            </div>
        </div>
                <div className="row">
                    <div className="col-12 content">
                        {
                            (view === 'desc') ?
                                <Description />
                                :
                                <Review />
                        }
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default DecRewview