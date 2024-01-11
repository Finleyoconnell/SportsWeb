import Card from "./Card";

export default function GameCard(props){
    return(
        <>
            <Card>
                <span>{`${props.team1} vs ${props.team2}`}</span>
            </Card>
            
        </>
    )
}