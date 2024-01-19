import Link from "next/link";
import Card from "./Card";

export default function SportCard(props){
    return(
        <Link passHref href={{pathname:`/sports/[name]`,query:{name:props.name}}}>
            <a>
            <Card>
                <span>{`${props.name}`}</span>
            </Card>
            </a>
            
            
        </Link>
    )
}