import React from 'react'
import '../css/Widget.css'
import { Info } from '@material-ui/icons'

function Widget() {
    return (
        <>
            <div className="widget">
                <div className="widget_top">
                    <div className="widget_header">
                        <h4>LinkedIn News</h4>
                        <Info />
                    </div>
                    <div className="widget_body">
                        <ul className="widget_options">
                            <li>
                                <h4>Slaying Job Search Fees</h4>
                                <p>6d ago * 4,55 readers</p>
                            </li>
                            <li>
                                <h4>A Two Pizza rule for eating</h4>
                                <p>2d ago * 6,12 readers</p>
                            </li>
                            <li>
                                <h4>How to handle a workplace breakup</h4>
                                <p>3d ago * 4,45 readers</p>
                            </li>
                            <li>
                                <h4>Flexi leave is the new flexi</h4>
                                <p>4d ago * 3,55 readers</p>
                            </li>
                            <li>
                                <h4>Shorter hour boost productivity</h4>
                                <p>1d ago * 4,35 readers</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="widget_bottom">
                    <div className="widget_header">
                        <h4>Today's top courses</h4>
                        <Info />
                    </div>
                    <div className="widget_body">
                        <ul className="widget_options">
                            <li>
                                <h4>Leading with a Heavy Heat</h4>
                                <p>Kay Coly</p>
                            </li>
                            <li>
                                <h4>Building Resillience</h4>
                                <p>Tatianan Kolovau</p>
                            </li>
                            <li>
                                <h4>Critical Thinking for better judgement</h4>
                                <p>3d ago * 4,45 readers</p>
                            </li>
                            <li>
                                <h4>Flexi leave is the new flexi</h4>
                                <p>4d ago * 3,55 readers</p>
                            </li>
                            <li>
                                <h4>Shorter hour boost productivity</h4>
                                <p>1d ago * 4,35 readers</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Widget
