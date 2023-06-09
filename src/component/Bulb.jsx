import '../styles/App.css'

function Bulb(props){


 let lightClass = props.isON ? "light-bulb on" : "light-bulb off";
        return (
          <div className={lightClass}></div>
        )     
}

export default Bulb;