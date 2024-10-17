// src/app/dashboard/page.js
import Layout from '../../components/layout';
import LineChart from '../../components/lineChart';
import BarChart from '../../components/barChart';
import PieChart from '../../components/pieChart';


export default function Dashboard() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 text-[#fff] bg-[#18181b] min-h-screen">
      {/* First row: LineChart and PieChart */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:h-96 h-auto">
        <div className="flex-1 lg:w-80 md:w-3/4 chart-container bg-[#000] p-6 shadow-lg rounded-lg hover:shadow-xl transition-all transform hover:scale-105">
          <LineChart  />
        </div>
        <div className="flex-1 lg:w-20 md:w-3/4 chart-container bg-black p-6 shadow-lg rounded-lg hover:shadow-xl transition-all transform hover:scale-105">
          <PieChart  />
        </div>
      </div>

      {/* Second row: BarChart */}
      <div className="sm:w-2/3 md:w-3/4 mt-6">
        <div className="flex-1  chart-container bg-black p-6 shadow-lg rounded-lg hover:shadow-xl transition-all transform hover:scale-105">
          <BarChart/>
        </div>
      </div>
    </div>
    </Layout>
  );
}
