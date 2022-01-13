import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import * as drinkActions from '../../../store/drinks';

function CreateDrinkModal({ setShowModal, currentUser }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [store, setStore] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        return setShowModal(false);
    }

    const handleCancel = (e) => {
        e.preventDefault();

        return setShowModal(false);
    }

    return (
        <div className="create-drink-container">
            <form onSubmit={handleSubmit} className="create-drink-form">

                <h1 className="create-drink-h1">Create Drink</h1>
                <div>
                    <label className="create-drink-label-name">
                        What's your drink's name?
                    </label>
                    <input
                        type='text'
                        className="create-drink-input-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label className="create-drink-label-location">
                        What bar makes this drink?
                    </label>
                    <input
                        type='text'
                        className="create-drink-input-location"
                        value={store}
                        onChange={(e) => setStore(e.target.value)}
                        required
                    />

                    <label className="create-drink-label-description">
                        Provide a description for the drink.
                    </label>
                    <input
                        type='text'
                        className="create-drink-input-description"
                        value={description}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label className="create-drink-label-imageurl">
                        Provide an image of the drink.
                    </label>
                    <input
                        type='text'
                        className="create-drink-input-imageurl"
                        value={imageUrl}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="OPTIONAL"
                    />

                    <button type="submit">Create Drink</button>
                    <button type="submit" onClick={handleCancel} >Cancel</button>
                </div>
            </form>
        </div>
    )
}
