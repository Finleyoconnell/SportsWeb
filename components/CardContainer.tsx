export default function CardContainer(props){
    return(
        <>
            <div className="card-container">
                {props.children}
            </div>
            <style jsx>{`
                .card-container {
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 20px;
                    display: grid;
                  }
            `}

            </style>
        </>
    )
}