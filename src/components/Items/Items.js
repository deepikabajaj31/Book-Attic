import { Fragment } from "react";

import ItemsSummary from './ItemsSummary';
import AvailableItems from "./AvailableItems";


const Items = (props) => {
    return (
        <Fragment>
            <ItemsSummary />
            {props.user !== null ? <AvailableItems /> : <h3 style={{textAlign: "center"}}>Please sign in to access the available books at Book Attic.</h3>}
        </Fragment>
    );
};

export default Items;