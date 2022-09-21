import axios from "axios"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const JobDetails = () => {
    const { _id } = useParams()
    const [job, setJob] = useState([])
    

    useEffect(() => {
       getSingleData() 
    },[job.length])

     const getSingleData = async () => {
       const res = await fetch(`https://tradify-app.herokuapp.com/jobs/${_id}`);
       const data = await res.json();
       //console.log(data.jobs)
        
         console.log(data)
        
       setJob(data);
    };
  

  return (
    <div className="jobsDetails">
      <div className="jobsmalldiv">
        <h2>Role :</h2>
        <h2>{job.role}</h2>
      </div>
      <div className="jobsmalldiv">
        <h2>Company :</h2>
        <h2>{job.company}</h2>
      </div>
      <div className="jobsmalldiv">
        <h2>Location :</h2>
        <h2>{job.location}</h2>
      </div>
      <div className="jobsmalldiv">
        <h2>Description :</h2>
        <h2>{job.description}</h2>
      </div>
      <div >
        <button className="applybtn">Apply Now</button>
      </div>
    </div>
  );
};
