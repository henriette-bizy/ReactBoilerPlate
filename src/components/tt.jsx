import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const Chart = () =>{
    const data = {
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct"],
        datasets: [{
            labels: "Sales of the Week",
            data: [6,3,4,2,5,6,8,5],
            backgroundColor: 'black',
            borderColor: '#0086FF',
            pointBorderColor: 'black',
            fill: true,
            tension: 0.4
        }]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y:{
                min: 0,
                max: 9
            }
        }
    }
    return(
        <div>
            <Line data={data} options={options}></Line>
        </div>
    )
}

export default Chart;