'use client'

import { Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const LineChart = dynamic(() => (
    import("recharts").then(recharts => recharts.LineChart)
), { ssr: false });

export default function Chart(props){
    // client side processing of chart component

    const [selectedLines, setSelectedLines] = useState([]);

    const handleCheckboxChange = (index) => {
        if (selectedLines.includes(index)) {
        setSelectedLines(selectedLines.filter((i) => i !== index));
        } else {
        setSelectedLines([...selectedLines, index]);
        }
    };

    const handleSelectAll = () => {
        const allIndices = Array.from({ length: profs.length }, (_, index) => index);
        setSelectedLines(allIndices);
    };
    
    const handleSelectNone = () => {
        setSelectedLines([]);
    };

    var profs = [];
    var semesterRatings = [];


    Object.entries(props.props).forEach(([prof, ratings]) => {

        profs.push(prof);

        Object.entries(ratings).forEach(([semester, rating]) => {

            if(rating === 0){
                rating = "N/A";
            }

            const containsValue = semesterRatings.some(obj => obj.name === semester);

            // if semester is found, then add rating 
            if(containsValue){
                const foundSem = semesterRatings.find(obj => obj.name === semester);
                foundSem[prof] = rating;
            }
            // otherwise, create semester object and add rating
            else{
                var sem = {name: semester};
                sem[prof] = rating;
                semesterRatings.push(sem);
            }
        });
    });


    // sort semester
    const getSortableSemesterValue = (semester) => {
        const parts = semester.split(' ');
        const season = parts[0].toLowerCase();
        const year = parseInt(parts[1]);
        
        // Assign numeric values to seasons for sorting
        const seasonValues = {
            spring: 1,
            summer: 2,
            fall: 3,
        };

        return year * 10 + seasonValues[season];
    };

    
    semesterRatings.sort((a, b) => {
        const valueA = getSortableSemesterValue(a.name);
        const valueB = getSortableSemesterValue(b.name);
        return valueA - valueB;
    });

    function generateRandomColor() {
        // Function to generate a random integer within a specific range
        const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

        // Set the ranges for red, green, and blue values (avoiding white)
        const red = randomInt(50, 200); // Adjust the range as needed
        const green = randomInt(50, 200);
        const blue = randomInt(50, 200);

        // Convert the values to hexadecimal format and concatenate
        const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

        return color;
    }
    

    return(
        <div>
            <div className="grid grid-cols-3 gap-4 text-center">
                <label className="mb-2">
                    <input type="checkbox" onChange={handleSelectAll} checked={selectedLines.length === profs.length} className='checkbox '/>
                    Select All
                </label>
                <label className="mb-2">
                    <input type="checkbox" onChange={handleSelectNone} checked={selectedLines.length === 0} className='checkbox '/>
                    Select None
                </label>
                {profs.map((element, index) => (
                    <label key={index} className="mb-2">
                        <input
                        type="checkbox"
                        checked={selectedLines.includes(index)}
                        onChange={() => handleCheckboxChange(index)}
                        className="mr-2 checkbox "
                        />
                        {element}
                    </label>
                ))}
            </div>
            <LineChart width={1000} height={500} data={semesterRatings}
                margin={{ top: 5, right: 60, left: 5, bottom: 80 }}>
                <XAxis dataKey="name" angle={-45} dy={45}/>
                <YAxis domain={[0, 5]} tickCount={11} ticks={[0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]}/>
                <Tooltip />
                {profs.map((element, index) => (selectedLines.includes(index) && (
                    <Line
                        key={index}
                        type="monotone"
                        dataKey={element}
                        stroke={generateRandomColor()}
                        
                    />
                )))}
            </LineChart>
        </div>
    )
}