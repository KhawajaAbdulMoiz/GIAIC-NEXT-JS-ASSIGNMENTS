import Link from "next/link";
export default function Profile() {
    return (
        <div className="navbar">
            <ul className="list">
                <li>Home</li>
                <li>About</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>
        <div className="container">
            <img src="my-image.jpeg" alt="" />
            <h1>Khawaja Abdul Moiz</h1>
            <p>Backend Developer and Seo Enthusiast</p>
            <p className="para">I am a backend developer skilled in Python and C++, currently <br /> expanding my expertise by learning Next.js to enhance my full-stack <br />development capabilities.
            </p>
            <button>Contact Me</button>
        </div>
        </div>
    );
}
