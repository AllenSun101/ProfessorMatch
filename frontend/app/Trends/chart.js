'use client'

import { Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import dynamic from 'next/dynamic';

const LineChart = dynamic(() => (
    import("recharts").then(recharts => recharts.LineChart)
), { ssr: false });

export default function Chart(props){
    // client side processing of chart component

    var profs = [];
    var semesterRatings = [];


    Object.entries(props.props).forEach(([prof, ratings]) => {
        //console.log(`${prof}`);

        profs.push(prof);

        Object.entries(ratings).forEach(([semester, rating]) => {
            //console.log(`${semester} : ${rating}`);

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
        //console.log(semesterRatings);
    });

    //console.log(ratings);

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
        // Generate a random color in hexadecimal format
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    return(
        <div>
            <LineChart width={1000} height={500} data={semesterRatings}
                margin={{ top: 5, right: 60, left: 5, bottom: 80 }}>
                <XAxis dataKey="name" angle={-45} dy={45}/>
                <YAxis domain={[0, 5]} tickCount={11} ticks={[0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]}/>
                <Tooltip />
                {profs.map((element, index) => (
                    <Line
                        type="monotone"
                        dataKey={element}
                        stroke={generateRandomColor()}
                    />
                ))}
            </LineChart>
        </div>
    )
}