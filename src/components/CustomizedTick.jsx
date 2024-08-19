export default function CustomizedTick({ x, y, payload, month }) {
    function getColor() {
        return (
            payload.value === month ? "lightblue" : "black"
        )
    }

    return (
        <text x={x - 15} y={y + 10} style={{ fill: getColor() }}>
            { payload.value }
        </text>
    );
}