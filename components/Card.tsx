export default function Card(props){
    return(
        <>
            <div className="card">
                {props.children}
            </div>
            <style jsx>{`
            .card {
                transition: box-shadow 0.1s ease-in;
                height: 100px;
                border: 1px solid black;
                text-align: center;
                
            }

            .card:hover {
                box-shadow: 1px 1px 3px #aaa;
            }

           
            `}</style>
        </>
    )
}