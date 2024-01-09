import Card from "./Card";

export default function SchoolCard(props){
    return(
        <>
            <Card key={props.id}>
                <span>{`${props.name}`}</span>
            </Card>
            
            
        </>
    )
}