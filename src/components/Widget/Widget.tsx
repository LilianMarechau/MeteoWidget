import './Widget.css';

function Widget({data}) {
    console.log(data);

    const getCelciusTemp = (data) => {
        return Math.round(data.main.temp - 273.15);
    }
    
    return (
        <div className="widget__container">
            <h2>{data.name}</h2>
            <p>{getCelciusTemp(data) + '°C'}</p>
            <p>code postal</p>
        </div>
    )
}

export default Widget;