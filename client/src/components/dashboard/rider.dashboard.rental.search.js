import React,{ useState, useEffect } from 'react';
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { AirlineSeatIndividualSuiteSharp } from '@material-ui/icons';

const defaultValues = {
    ReactSelect: { value: "hyderabad", label: "Hyderabad" },
    select: { value: "hyderabad", label: "Hyderabad" }
}

function RiderRentalSearch() {
    const [data, setData] = useState({
        city: "hyderabad",
        location: "all"
    });
    const [city,setCity] = useState();
    
    const sendData = () => {
        console.log(data)
    }
    const handleChange = ({value},{name}) => {
        if (name === "city"){
            setData({
                city: value,
                location: "all"
            })
        }

        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
       
        
    }
    useEffect(()=>{
        sendData()
    },[data])
    
    const cities = [
        {value: "hyderabad",label: "Hyderabad"},
        {value: "bangalore",label: "Bangalore"},
        {value: "mumbai",label: "Mumbai"}
    ]

    const options = {
        "hyderabad": [
            {value: "all",label: "All"},
            {value: "kukatpally",label: "Kukatpally"},
            {value: "secunderabad",label: "Secunderabad"},
            {value: "uppal",label: "Uppal"},
            {value: "kukatpally",label: "Kukatpally"},
            {value: "secunderabad",label: "Secunderabad"},
            {value: "uppal",label: "Uppal"},
            {value: "kukatpally",label: "Kukatpally"},
            {value: "secunderabad",label: "Secunderabad"},
            {value: "uppal",label: "Uppal"},
            {value: "kukatpally",label: "Kukatpally"},
            {value: "secunderabad",label: "Secunderabad"},
            {value: "uppal",label: "Uppal"}
        ],
        "bangalore": [
            {value: "all",label: "All"},
            {value: "b1",label: "b1"},
            {value: "b2",label: "b2"},
            {value: "b3",label: "b3"}
        ],
        "mumbai": [
            {value: "all",label: "All"},
            {value: "m1",label: "m1"},
            {value: "m2",label: "m2"},
            {value: "m3",label: "m3"}
        ],
    }
    // console.log(options[data.city])
    return (
        <form style={{width:"100%",display:"flex",flexDirection:"row"}} >
            <div style={{width:"50%",padding:"0 5px"}}>
                <section >
                    <Select options={cities}
                            value = {cities.filter(city => city.value === data.city)}
                            name = "city"
                            placeholder = "select city"
                            onChange = {handleChange}
                    />
                </section>
            </div>
            <div style={{width:"50%"}}>
                <section >
                    <Select options={options[data.city]}
                            value = {options[data.city].filter(location => location.value === data.location)}
                            name = "location"
                            placeholder = "select city"
                            onChange = {handleChange}
                    />
                </section>
            </div>
           
        </form>
    )
}

export default RiderRentalSearch
