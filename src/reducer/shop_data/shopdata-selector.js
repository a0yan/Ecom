import { createSelector } from "reselect";
const selectShopdata=state=>state.shopdata
export const selectShopitems=createSelector(
    [selectShopdata],
    (shopdata)=>shopdata.shopitems
)
export const selectShopitemsPreview=createSelector(
    [selectShopitems],
    (shopitems)=>shopitems?Object.keys(shopitems).map(key=>shopitems[key]):[]
)
export const selectCollectionItem=(title)=>{
        return(
    createSelector(
        [selectShopitems],
        (shopitems)=>shopitems?shopitems[title]:null
    ))
    }
export const selctCollectionLoading=createSelector(
    [selectShopdata],
    (shopdata)=>shopdata.loading
)
export const selectCollectionItemLoaded=createSelector(
    [selectShopdata],
    (shopdata)=>!!shopdata.shopitems
)