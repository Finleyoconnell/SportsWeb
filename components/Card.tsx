export default function Card(props){
    return(
        <>
            <div className="card">
                {props.children}
            </div>
            <style jsx>{`
            .card {
                background: white;
                transition: box-shadow 0.1s ease-in;
            }

            .card:hover {
                box-shadow: 1px 1px 3px #aaa;
            }

            .card + .card {
                margin-top: 2rem;
            }
            `}</style>
        </>
    )
}