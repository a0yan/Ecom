import React,{useEffect} from 'react'
import CollectionOverview from '../../components/Collection-Overview/collection_overview.component'
import { Route } from 'react-router-dom'
import Collection from '../Collection/collection.component';
import { fetchData } from "../../reducer/shop_data/shopdata-actions";
import { connect } from 'react-redux'
import withSpinner from "../../hoc/withSpinner";
import {selctCollectionLoading,selectCollectionItemLoaded} from '../../reducer/shop_data/shopdata-selector'
import {createStructuredSelector} from 'reselect'
const collectionOverviewSpinner = withSpinner(CollectionOverview)
const collectionSpinner = withSpinner(Collection)
const Shoppage=(props)=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            useEffect(()=>{props.fetchdata()},[])
            return (
                <div>
                    <Route exact path={`${props.match.path}`} render={(props)=>collectionOverviewSpinner(props.loading,{...props})}></Route>
                    <Route exact path={`${props.match.path}/:collectionId`} render={(propTopass)=>collectionSpinner(!props.collection_loaded,{...propTopass})}></Route>
                </div>
        )            
            
}
const mapDispatchToProps = dispatch => ({
            fetchdata:()=>dispatch(fetchData())
})
const mapStateToProps=createStructuredSelector(
    {
    loading:selctCollectionLoading,
    collection_loaded:selectCollectionItemLoaded
    })

export default connect(mapStateToProps, mapDispatchToProps)(Shoppage)