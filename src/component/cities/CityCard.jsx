import "../../styles/App.css"

function CityCard(props){
  
    return(
        <div className="card">
            <h1>{props.city.name}</h1>
        </div>
    )
}

export default CityCard