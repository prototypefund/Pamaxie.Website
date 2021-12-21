import React from 'react';

import headerImage from "../../assets/img/bg-header.png"
import headerLogo from "../../assets/img/pamaxie-text-logo.png"
import fundingLogo from "../../assets/img/prototype-funding-image.png"

export default function Header() {
    return (
        <div className="h-screen-12 flex flex-col">
            <div className="relative sm:h-2 md:h-2-5 h-1-2">
                <img src={headerImage} alt="" className="absolute h-full w-full object-cover"/>
                <div className="absolute h-full w-full blur"/>
                <div
                    className="flex flex-col absolute m-auto top-0 bottom-0 left-0 right-0 h-fit md:w-53r items-center">
                    <img src={headerLogo} alt="" className="md:h-32 h-24 object-contain"/>
                    <h1 className="md:text-4xl text-xl text-center text-gray-primary">Content detection at your
                        fingertips</h1>
                    <p className="m-3 text-xs md:text-2xl text-gray-primary text-center">We are a content classification
                        service that focuses on privacy and removing barriers. This helps applications developers and
                        community moderators focus on more important things.</p>
                </div>
            </div>
            {/*sm:text-4xl xl:text-5xl*/}
            <div className="flex-1" style={{backgroundColor: '#3A3A51'}}>
                <div
                    className="flex flex-col m-auto top-0 bottom-0 left-0 right-0 h-full md:w-53r items-center justify-center">
                    <img src={fundingLogo} alt=""
                         className="h-1-5 h-max-9r w-full object-contain"/>
                    <h1 className="md:text-4xl text-xl text-gray-primary">Funded via Prototypefund</h1>
                    <p className="m-3 md:text-2xl text-xs text-gray-primary text-center">
                        We are officially part of Prototypefund's 12th round, we are happy to develop together with the
                        open knowledge foundation Germany.
                        <br/>
                            Wanna know more?
                    </p>
                    <button
                        className="p-2-4 left-0 right-0 bg-tertiary rounded-full border-none text-gray-primary">Learn
                        More
                    </button>
                </div>
            </div>
        </div>
    );
}