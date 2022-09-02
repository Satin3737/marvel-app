import '../styles/general.scss'
import '../styles/parts/skeleton.scss'

const Skeleton = () => {
    return (
        <div className="skeleton">
            <div className="skeleton__title">
                Please select a character to see information
            </div>
            <div className="skeleton__wrapper">
                <div className="skeleton__item skeleton__item_first">
                    <div className="skeleton__round"></div>
                    <div className="skeleton__thin"></div>
                </div>
                <div className="skeleton__item"></div>
                <div className="skeleton__item"></div>
                <div className="skeleton__item"></div>
            </div>
        </div>
    )
}

export default Skeleton;