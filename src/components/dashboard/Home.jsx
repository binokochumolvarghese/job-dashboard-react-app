import { useEffect, useState } from "react";
import Card from "../UI/Card";

const Home = () => {
  const url = "/data/SampleData.json";

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      console.log("Inside fetchData ");
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(()=> fetchData(), 30000);
    return ()=> {
        clearInterval(interval);
    }
  }, []);

  return (
    <>
      {error && <p> {error} </p>}

      { !error && 

      <div className="bodyComponent container mx-auto pb-4 pt-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 ">
          {data &&
            data.header.map((header,index) => {
              return (
                <Card key={index} props={{ details: header.head, value: header.value }} />
              );
            })}
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-2 xl:grid-cols-3 2xl:gap-2 pt-5">
          <table className="min-w-full divide-y divide-gray-200 bg-white mt-4 col-span-2">
            <thead>
              <tr>
                <th className="px-6 py-3  text-xl font-medium text-gray-500 text-left">
                  #
                </th>
                <th className="px-6 py-3  text-xl font-medium text-gray-500 text-left">
                  Name
                </th>
                <th className="px-6 py-3  text-xl font-medium text-gray-500 text-right">
                  Total Jobs
                </th>
                <th className="px-6 py-3  text-xl font-medium text-gray-500 text-right">
                  Completed Jobs
                </th>
                <th className="px-6 py-3  text-xl font-medium text-gray-500 text-right">
                  Pending Jobs
                </th>
              </tr>
            </thead>

            {data &&
              data.details.map((items,index) => {
                return (
                  <tbody>
                    <tr key={items.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 text-left">
                        {items.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 text-left">
                        {items.EmployeeName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-blue-500 text-right">
                        {items.TotalJobs}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-green-500 text-right">
                        {items.CompletedJobs}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-red-500 text-right">
                        {items.PendingJobs}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>

          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 bg-white mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2  text-xl font-medium text-gray-500 text-left">
                  #
                </th>
                <th className="px-4 py-2  text-xl font-medium text-gray-500 text-left">
                  Job Details
                </th>
                <th className="px-4 py-2  text-xl font-medium text-gray-500 text-left">
                  Employee
                </th>
              </tr>
            </thead>

            {data &&
              data.JobDetails.map((jobItems,index) => {
                return (
                  <tbody key={jobItems.id}>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-lg font-medium text-gray-800 text-left">
                        {jobItems.id}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-lg font-medium text-gray-800 text-left">
                        {jobItems.JobName}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-lg font-medium text-gray-800 text-left">
                        {jobItems.Employee}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
}
    </>
  );
};

export default Home;
