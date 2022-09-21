import { Link } from "react-router-dom";

export const Navbar = () => {
 const nav = [
   { title: "HomePage", to: "/" },
   { title: "Register", to: "/register" },
   { title: "Login", to: "/login" },
   
 ];

    return (
        <div className="nav">
            {
                nav.map((e, i) => (
                    <Link key={i} to={e.to} style={{textDecoration:"none", color: "black"}}>
                        {e.title}
                    </Link>
                ))
            }

        </div>
    )
}