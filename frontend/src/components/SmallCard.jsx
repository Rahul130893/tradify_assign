 export const SmallCard = ({role, company, location}) => {
    return (
      <div className="smallcard">
        <div className="smallbox">
          <p>Role: {role}</p>
          <p>Company: {company}</p>
          <p>Location: {location}</p>
        </div>
      </div>
    );
}