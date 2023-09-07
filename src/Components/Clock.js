import React, {useState} from 'react'

function Clock() {
    const [hour, setHour] = useState(new Date().getHours())
    const [minute, setMinute] = useState( new Date().getMinutes())
    const [second, setSecond] = useState(new Date().getSeconds())
    const [day, setDay] = useState(new Date().getDate())
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay())
    const [AmPm, setAmPm] = useState("")
    const [abbreviation, setAbbreviation] = useState("")

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const Month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    const updateTime = setInterval(() => {
        // const now = new Date().toLocaleTimeString();
        const nowHour = new Date().getHours();
        const nowMinute = new Date().getMinutes();
        const nowSecond = new Date().getSeconds();
        const nowDay = new Date().getDate();
        const nowMonth = new Date().getMonth();
        const nowYear = new Date().getFullYear();
        const nowDayOfWeek = new Date().getDay();
        setMinute(addZeros(nowMinute))
        setSecond(addZeros(nowSecond))
        setDay(nowDay)
        setMonth(Month[nowMonth])
        setYear(nowYear)
        setDayOfWeek(days[nowDayOfWeek])

        if (nowHour >= 12) {
            setHour(nowHour - 12)
            setAmPm("PM")
            abbreviationDay(nowDay)
        } else {
            setHour(nowHour)
            setAmPm("AM")
            abbreviationDay(nowDay)
        }
        
        return(
            clearInterval(updateTime)
            )
        }, 999);

    const abbreviationDay = (props) =>{
        if (props===1||31){
            setAbbreviation("st")
        }
        if (props===2){
            setAbbreviation("nd")
        }
        if (props===3){
            setAbbreviation("rd")
        }
        else{
            setAbbreviation("th")
        }

    }
    
    const addZeros = Number =>{
        if (Number.toString().length <2 ) return "0".concat(Number)
        return Number;
    }

    return (
        <div className='Container'>
            <section className='dateBox'>
                <p>{dayOfWeek} {day}{abbreviation} {month} {year}</p>
            </section>
            <section className='timeBox'>
                <h3>{hour}:{minute}:{second} {AmPm}</h3>
            </section>
        </div>
    )

}

export {Clock}