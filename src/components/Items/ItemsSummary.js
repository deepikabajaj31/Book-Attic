import classes from './ItemsSummary.module.css';

const ItemsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Your gateway to endless discoveries.</h2>
            <p>
                They say in every library there is a single book that can answer the question 
                <br></br>
                that burns like a fire in the mind.
            </p>
            <p>
                Use code READ15. Convenient delivery options. Discounts on bestsellers.
                Delve into the realm of imagination with Book Attic, your literary sanctuary.
            </p>
        </section>
    );
};

export default ItemsSummary;