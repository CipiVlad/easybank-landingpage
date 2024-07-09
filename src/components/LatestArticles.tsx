const LatestArticles = () => {
    return (
        <section id="latest-articles">
            <h2>Latest Articles</h2>
            <article className="articles-cards">
                <div className="card-img"></div>
                <div className="card-description">
                    <p className="card-author">By Claire Robinson</p>
                    <a href="#" className="card-link">
                        <h4 className="card-title">Receive money in any currency with no fees</h4>
                    </a>
                    <p className="card-text">

                        The world is getting smaller and we’re becoming more mobile. So why should you be
                        forced to only receive money in a single …
                    </p>
                </div>
            </article>
            <article className="articles-cards">
                <div className="card-img"></div>
                <div className="card-description">
                    <p className="card-author">By Wilson Hutton</p>
                    <a href="#" className="card-link">
                        <h4 className="card-title">Treat yourself without worrying about money</h4>
                    </a>
                    <p className="card-text">
                        Our simple budgeting feature allows you to separate out your spending and set
                        realistic limits each month. That means you …
                    </p>
                </div>
            </article>
            <article className="articles-cards">
                <div className="card-img"></div>
                <div className="card-description">
                    <p className="card-author">By Wilson Hutton</p>
                    <a href="#" className="card-link">
                        <h4 className="card-title">Take your Easybank card wherever you go
                        </h4>
                    </a>
                    <p className="card-text">
                        We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                        while you’re abroad. We’ll even show you …
                    </p>
                </div>
            </article>
            <article className="articles-cards">
                <div className="card-img"></div>
                <div className="card-description">
                    <p className="card-author">By Claire Robinson</p>
                    <a href="#" className="card-link">
                        <h4 className="card-title">Our invite-only Beta accounts are now live!</h4>
                    </a>
                    <p className="card-text">
                        After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                        It’s easy to request an invite through the site ...
                    </p>
                </div>
            </article>
        </section>
    )
}
export default LatestArticles