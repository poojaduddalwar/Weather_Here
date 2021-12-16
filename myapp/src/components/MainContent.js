import { useState, useEffect } from 'react';
import '../css_files/MainContent.css';
import pictures from '../pictures/logo.png';

const MainContent = () => {
    const [temp, settemp] = useState('');
    const [speed, setspeed] = useState('');
    const [humidity, sethumidity] = useState('');
    const [weather, setweather] = useState('');
    const [data, setdata] = useState([]);
    const [input, setinput] = useState('');


    //fetching data
    const fetchfun = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=35e386a86afa91fd5fe2f621229de466`)
        if (res.ok) {
            const res2 = await res.json()
            // console.log(res2)
            const { main, weather, name, wind } = res2
            setdata(res2)
            setweather(weather[0])
            settemp(main.temp)
            setspeed(wind.speed)
            sethumidity(main.humidity)
        }
        else {
            throw window.alert('Please enter another City')
        }
        // console.log(res2)
        // const { main, weather, name, wind } = res2
        // setdata(res2)
        // setweather(weather[0])
    }


    //Date
    const today = new Date();
    const day = today.getDay();
    const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];


    //Current Time
    var hours = today.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var minutes = today.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var myTime = hours + " : " + minutes + " " + ampm;


    const handleChange = (e) => {
        setinput(e.target.value)
    }


    const handlesubmit = (e) => {
        // e.preventDefault()
        fetchfun()
        document.querySelector('.searchinput').value = ""
        // if (componentRendered == true) {
        //     e.preventDefault()
        //     fetchfun()
        // }
        // else {
        //     return (componentRendered = false)
        // }
    }

    //to refresh the page
    const refresh = () => {
        window.location.reload();
    }


    // useEffect(() => {
    //     fetchfun(input)
    // }, [input])

    return (
        <div>
            <div className="logo">
                <img src={pictures} alt="logo img" />
            </div>
            <div className="searchbar">
                <input type="text" placeholder='Search City' id='searchBar' onChange={handleChange} className='searchinput' />
                <label htmlFor="searchBar" id='searchLabel' className='searchlabel'><i className="fas fa-search" onClick={handlesubmit}></i></label>
            </div>
            {/* {(typeof data.main != 'undefined') ? ( */}
            <div>
                <div className="card mb-3 position-absolute top-50 start-50 translate-middle" id='mainContent'>
                    <div className="row g-0">
                        <i className='button fa-sync fas' onClick={refresh}></i>
                        <div className="col-md-4">
                            {/* <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} className="img-fluid rounded-start img-class" alt="..." style={{ width: "150px", height: "150px", marginTop: "10px" }}></img> */}

                            {(typeof weather.icon != 'undefined') ? (<img src={`http://openweathermap.org/img/w/${weather.icon}.png`} className="img-fluid rounded-start img-class imgdiv" alt="..." ></img>) : (<img src="https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png" className="img-fluid rounded-start img-class imgdiv" alt="..."></img>)}

                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{data.name}</h1>
                                <p className="card-text">Day - {daylist[day]}</p>
                                <p className="card-text">Time - {myTime}</p>
                                <p className="card-text">Temperature - {temp}<span>&#8451;</span></p>
                                <p className="card-text">{weather.description}</p>
                                <p className="card-text">Wind Speed - {speed}meter/sec</p>
                                <p className="card-text">Humidity - {humidity} %</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ) : (<div className="card mb-3 position-absolute top-50 start-50 translate-middle" id='mainContent'>
                <div className="row g-0">
                    <i className='button fa-sync fas'></i>
                    <div className="col-md-4">
                        <i className="fas fa-cloud-sun-rain" style={{
                            width: "150px", height: "150px", marginTop: "10px", fontSize: "100px"
                        }}></i>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title"></h1>
                            <p className="card-text">Day -</p>
                            <p className="card-text">Time - </p>
                            <p className="card-text">Temperature - </p>
                            <p className="card-text"></p>
                            <p className="card-text">Wind Speed - </p>
                            <p className="card-text">Humidity - </p>
                        </div>
                    </div>
                </div>
            </div>)
            } */}
        </div>
    );
}

export default MainContent;