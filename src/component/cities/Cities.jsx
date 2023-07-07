import "../../styles/App.css"
import {useEffect } from "react";
import CityCard from "./CityCard";
import Search from "./Search";
import {useDispatch, useSelector } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";

function Cities() {
    const dispatch = useDispatch()

    let searchResult = useSelector(store => store.citiesReducer.searchResult)
    const cities = useSelector(store=>store.citiesReducer.cities)

    useEffect(() => {
        dispatch(citiesActions.getCities())           
    }, []) 

    return (
        <div className="mainContainer">
            <Search cities={cities} />
            <div className="cardContainer">
                {cities.length > 0 ?

                    searchResult.map((city, index) => {
                        return <CityCard key={index} city={city} />
                    })
                    : <h1>....LOADING</h1>
                }
            </div>
        </div>
    )
}

export default Cities;