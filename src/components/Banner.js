import '../styles/general.scss'
import '../styles/parts/banner.scss'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__wrapper">
                    <h2 className="banner__title">
                        New comics every week!
                        Stay tuned!
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Banner;