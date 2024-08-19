export default function CustomizedDot({ cx, cy, payload, month }) {
    if (payload.name === month) {
        return (
            <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="lightblue">
                <g transform="translate(10 10)">
                    <circle r="10" fill="white" />
                    <circle r="8" fill="lightblue" />
                </g>
            </svg>
        )
    }
  
    return null;
}