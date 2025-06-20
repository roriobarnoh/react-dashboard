import { Row, Col, Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Users',
      data: [30, 45, 60, 75],
      borderColor: 'rgb(75, 192, 192)',
    },
  ],
};

function Dashboard() {
  return (
    <>
      <h2 className="mb-4">Dashboard</h2>
      <Row className="mb-4">
        <Col><Card body>Users: 120</Card></Col>
        <Col><Card body>Sales: $3,400</Card></Col>
        <Col><Card body>Growth: +15%</Card></Col>
      </Row>
      <Card className="p-4">
        <h5>User Growth</h5>
        <Line data={data} />
      </Card>
    </>
  );
}
export default Dashboard;
