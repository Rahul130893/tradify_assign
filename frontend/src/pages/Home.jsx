import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { SmallCard } from "../components/SmallCard";



export const Home = () => {
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
      getData()  
    },[])

  const getData = async () => {
    const res = await fetch("https://tradify-app.herokuapp.com/jobs");
    const data = await res.json();
    //console.log(data.jobs)
      let arr=data.jobs
    setJobs(arr)
  };
  //console.log(jobs)
  return (
    <div className="box">
        
          {jobs.map((e) => {
              return (
                <div key={e._id}>
                  <Link to={`/jobs/${e._id}`} style={{textDecoration:"none", color:"black"}}>
                    <SmallCard
                      role={e.role}
                      company={e.company}
                      location={e.location}
                    />
                  </Link>
                </div>
              );
          })}

          
    </div>
  );
};