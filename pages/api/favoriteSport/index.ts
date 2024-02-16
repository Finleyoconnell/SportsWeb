import { getServerSession } from 'next-auth/next';
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';
import { options } from '../auth/[...nextauth]';


export default async function handle(req, res) {
    const {id} = req.body;
    const session = await getServerSession(req, res, options)
    const result = await prisma.user.update({
        where: { email: session.user.email },
        data: {
            favoriteSports: {
                connect:{
                    id
                }
            }
        }
    })
    res.json(result);
}