import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AiTwotoneDelete } from "react-icons/ai";
import { client, urlFor } from '../client';
import { fetchUser } from '../utils/fetchUser';

const Pin = ({
    pin: {
        postedBy,
        image,
        _id,
        save
    }
}) => {

    const [postHovered, setPostHovered] = useState(false);
    const navigate = useNavigate();

    const user = fetchUser();
    const alreadySaved = !!save?.filter((item) => item.postedBy._id === user?.sub)?.length;
    const savePin = (id) => {
        if (!alreadySaved) {
            client.patch(id).setIfMissing({ save: [] }).insert("after", "save[-1]", [{
                _key: uuidv4(),
                userId: user?.sub,
                postedBy: {
                    _type: "postedBy",
                    _ref: user?.sub
                }
            },]).commit().then(() => {
                window.location.reload();
            });
        }


    }; const deletePin = (id) => {
        client
            .delete(id)
            .then(() => {
                window.location.reload();
            })
    }

    return (
        <div className="m-2">
            <div onMouseEnter={
                () => setPostHovered(true)
            }
                onMouseLeave={
                    () => setPostHovered(false)
                }
                onClick={
                    () => navigate(`/pin-detail/${_id}`)
                }
                className="relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-out">
                <img src={
                    urlFor(image).width(250).url()
                }
                    alt="user-post"
                    className="rounded-lg w-full" /> {
                    postHovered && (
                        <div className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
                            style={
                                { height: "100%" }
                            }>
                            <div className="flex items-center justify-between">
                                {
                                    alreadySaved ? (
                                        <button type="button" className="bg-red-300 opacity-80 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none">
                                            {save?.length }
                                            <p>Saved</p>
                                        </button>
                                    ) : (
                                        <button type="button" className="bg-red-500 opacity-80 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none"
                                            onClick={
                                                (e) => {
                                                    e.stopPropagation();
                                                    savePin(_id);
                                                }
                                            }>
                                            Save
                                        </button>
                                    )
                                } </div>
                            <div className="flex justify-between items-center gap-2 w-full">

                                {postedBy?._id == user.sub && (
                                    <button
                                        type="button"
                                        className="bg-red-500 opacity-80 hover:opacity-100 text-white font-bold text-base rounded-3xl hover:shadow-md outline-none p-1"
                                        onClick={
                                            (e) => {
                                                e.stopPropagation();
                                                deletePin(_id);
                                            }
                                        }>
                                        <AiTwotoneDelete />
                                    </button>
                                )}
                            </div>

                        </div>
                    )
                } </div>
            <Link to={`user-profile/${user?._id}`}
                className="flex gap-2 mt-2 items-center">
                <img
                    src={postedBy?.image}
                    alt="user-profile"
                    className="w-5 h-5  rounded-full object-cover"
                />
                <p className="font-semibold text-xs capitalize">{postedBy?.userName}</p>
            </Link>
        </div>
    )
}

export default Pin
