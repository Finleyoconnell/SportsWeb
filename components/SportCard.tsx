import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa6";
import prisma from "../lib/prisma";
import Card from "./Card";

export default function SportCard(props) {

    async function onToggleSport() {
        const id = props.id
        await fetch('/api/favoriteSport', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });
    }
    return (
        <>
            <div className="container">
                <Link passHref href={{ pathname: `/sports/[name]`, query: { name: props.name } }}>
                    <a className="link">
                        <Card title={props.name}>
                            <span>this is a sport</span>
                        </Card>
                    </a>


                </Link>
                <button className="starBtn" onClick={onToggleSport}>{props.isFavorite ? <FaStar /> : <FaRegStar />}</button>
            </div>
            <style jsx>{`
                .starBtn {
                    margin-right:auto;
                }

                .container{
                    display: flex;
                    align-items: end;
                }
                .link{
                    flex-grow: 1;
                }

                
                
            `}</style>
        </>
    )

}