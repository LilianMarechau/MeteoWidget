import './Widget.css';

function Widget({data}) {
    // console.log(data);    
    return (
        <div className="widget__container">
            <h2>{data.name}</h2>
            <p>{data.main.temp + '°C'}</p>
            <p>{}</p>
        </div>
    )
}

export default Widget;