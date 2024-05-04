export default function MainPage() {

    return (
        <>
            <main>
        <div className="cards-cont">
            <h1 id="cards-title">Qualities</h1>
            <div className="cards">
                <div className="card">
                        <h2>High-Performance Engine</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugit repudiandae quibusdam.
                        </p>
                </div>
                <div className="card">
                        <h2>Aerodynamic Design</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum perferendis inventore rem!
                        </p>
                </div>
                <div className="card">
                        <h2>Security</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit sunt numquam?</p>
                </div>
                <div className="card">
                        <h2>Advanced Technology</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugit repudiandae quibusdam.
                        </p>
                </div>
                <div className="card">
                        <h2>Comfort and Luxury</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum perferendis inventore rem!
                        </p>
                </div>
                <div className="card">
                        <h2>All-Wheel Drive</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit sunt numquam?</p>
                </div>
            </div>
        </div>
        <div className="sections">
                <h1 id="section-title">Performence</h1>
            <div className="performences">
                <div className="performence">
                    <h1>565</h1>
                    <h2>Horsepower</h2>
                </div>
                <div className="performence">
                    <h1>6</h1>
                    <h2>Transmission dual-speed</h2>
                </div>
                <div className="performence">
                    <h1>330kmph</h1>
                    <h2>Top Speed</h2>
                </div>
            </div>
        </div>

        <div className="form">
            <div className="form-title">
                <h1>Subscribe to our newsletter</h1>
            </div>

            <div className="form-content">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="email@example.com" />
                <button>Submit</button>
            </div>
        </div>
        <div className="last"></div>
        <footer>
            <p>&copy; Nissan GT-R 2023 | All rights reserved</p>
        </footer>
        <div className="to-top">
            <a href="#top"><i className="fa-solid fa-circle-arrow-up"></i></a>
        </div>
    </main>
        </>
    )
}