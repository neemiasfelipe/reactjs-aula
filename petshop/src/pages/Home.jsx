import React from "react";

const Home = () => {
    return (
        <main className="container">
            <div>
                <h2 className="titulo-pagina">Pet notícias</h2>
            </div>
            <section className="container flex flex--centro">
                <article className="cartao post">
                    <h2 className="cartao__titulo">Banho no cão</h2>
                    <p className="cartao__texto">Banhos ... cachorro</p>
                </article>
            </section>
        </main>
    )
}

export default Home