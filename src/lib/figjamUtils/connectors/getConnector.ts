async function sortConnectorsByLayer(connectors) {
    let sortedConnectorsByLayer = connectors.sort((A, B) => {
        let delta;
        let indexA = getChildIndex(A);
        let indexB = getChildIndex(B);
        delta = indexA - indexB;
        return delta;
    });
    return sortedConnectorsByLayer;
}