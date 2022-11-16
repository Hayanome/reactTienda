import React from "react";

export const Cartcontext = React.createContext([]);

const Cartprovider = ({ hijos }) => {
    return (
        <section>
            <Cartcontext.Provider>{hijos}</Cartcontext.Provider>
        </section>
    );
};
export default Cartprovider;
