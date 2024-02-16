export default function Card(props){
    return(
        <>
        <div className="container">
            <div className="card">
                <div className="title">
                    {props.title}
                </div>
                <div className="content">
                 {props.children}
                </div>
            </div>
        </div>
            <style jsx>{`
            .card {
                transition: box-shadow 0.1s ease-in;
                height: 100px;
                border: 1px solid black;
                text-align: center;
                background-color: lightgrey;
                border-radius: 4px;
                
                
            }
            .content{
                padding: 4px;
            }
            .title{
                font-size: 18px;
                font-weight: bold;
                border-bottom: 1px solid black;
                padding: 4px;

            }
            .card:hover {
                box-shadow: 1px 1px 3px #aaa;
            }
           
            `}</style>
        </>
    )
}