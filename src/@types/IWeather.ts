interface IWeather {
    nomVille: string,
    temperature: {
        temp: number, 
        ressenti: number, 
        humidité: number
    },
    description: string,
    icon: string,
}

export default IWeather;