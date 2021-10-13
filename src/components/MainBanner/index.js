import "./index.scss"

export const MainBanner = ({ Banner }) => {
    return (
        <section className="avanti__mainBanner">
            <article className="container">
                <img src={Banner} alt="Banner Principal" />
            </article>
        </section>
    )
}
