import Card from "./Card";

export default function SchoolCard(props){
    return(
        <>
            <Card className="schoolcard">
                <span>{`${props.name}`}</span>
            </Card>
            
            <style jsx>{`
            .schoolcard .card {
                border-color: ${props.primaryColor};
            }
            `}
        
            </style>
        </>
    )
}