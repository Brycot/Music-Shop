import React from "react";
import Button from "../../components/Button/Button";
import "./ProductInfo.scss";

function ProductInfo() {
    return (
        <>
            <div className="degradado" />
            <img
                className="image-product-detail"
                src="https://media.uaudio.com/assetlibrary/a/p/apollo_solo_og.jpg"
                alt="apolloSolo"
            />
            <div className="product-info">
                <p>$120,00</p>
                <p>Apollo Solo</p>
                <p>
                    Apollo Solo is the world’s finest Thunderbolt 3-powered
                    desktop recording audio interface for Mac and Windows —
                    delivering class‑leading audio conversion, two Unison™ mic
                    preamps, and a suite of onboard UAD plug-ins for recording
                    album‑quality results, in real time.
                </p>
                <Button
                    typeButton={"button"}
                    textButton={"ADD TO CART"}
                    type={"purchase-button add-to-cart-button"}
                    iconCart
                />
            </div>
        </>
    );
}

export default ProductInfo;
