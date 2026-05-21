export default function Etoiles({ note }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} style={{ color: i <= note ? "#FFD700" : "#ccc", fontSize: "18px" }}>
                ★
            </span>
        );
    }

    return <div>{stars}</div>;
}
