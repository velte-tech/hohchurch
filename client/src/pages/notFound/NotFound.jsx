import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div>
        <h1>Ooops sorry Page Not Found</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos labore alias voluptatibus ducimus exercitationem voluptates quidem suscipit rem aspernatur nisi.</p>
        <p>Please go back to the <Link to="/">Hompage</Link></p>
    </div>
  )
}