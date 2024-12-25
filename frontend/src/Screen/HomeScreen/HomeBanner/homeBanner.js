import React from "react";
import './homeBanner.css'
import homeBannerItemProduct from '../../../homeProduct.json';
const HomeBanner = () => {
    return (
        <div className="homeBanner">


            <div className="grayBgBanner"></div>

            <div className="homeBannerItemDiv">
                {
                    homeBannerItemProduct.product.map((item, ind) => {
                        return (
                            <div className="homeBannerItemDivCard">
                                <div className="homeBannerItemDivCardTitle">[item.itemTitle]</div>
                                <div className="imghomeBannerItemDivCard">
                                    {
                                        item.img.map((it, ind) => {
                                            return (
                                                <div className="imgBannerHomeDiv">
                                                    <img className="imgBannerimgDivimg" src={it} />
                                                    <div className="imgBannerImgName">Home Storage</div>
                                                </div>
                                            );
                                        })
                                    }



                                </div>
                                <div className="seeMoreHomeBanner">See More</div>
                            </div>
                        );
                    })
                }



        

            </div>
        </div>

    )
}
export default HomeBanner