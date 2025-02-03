import React from 'react'

// function Card(props) {

//     // console.log("props", props);
//     console.log(props.username); // props is an object, so we can access it's properties using "." operator

// directly destructuring the object, so no need to write props.username again and again
function Card({ username, btnText = "Visit me" }) { // let developer does not pass the value of btnText we can either set it's default value

    console.log(username, btnText);

    return (
        < div className="max-w-xs rounded-md shadow-md bg-black text-gray-100" > {/* devui.io */}
            <img
                src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
                        soluta amet corporis accusantium aliquid consectetur eaque!
                    </p>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                >
                    {/* {btnText || "Visit me"} */} {/* or can use this too, just not more readable otherwise no issue performance wise */}
                    {btnText}
                </button>
            </div>
        </div >
    )
}

export default Card