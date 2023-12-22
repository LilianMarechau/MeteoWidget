import IWeather from '../../@types/IWeather';
import './WidgetList.css';
import Widget from './Widget';

interface IWidget {
    data: IWeather[],
}

function WidgetList({data}: IWidget) {
    return (
        <div>
        {data && data.map((city: IWeather) => 
        (
            <Widget city={city} />
        ))}
        </div>  
    )
}

export default WidgetList;
