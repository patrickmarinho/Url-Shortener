import fastify from "fastify";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import Url from './src/model/Url.js'
dotenv.config()

const server = fastify()

mongoose.connect(process.env.DB_CONNECTION)


server.post('/url',  async(request, reply) => {
    const { OriginalUrl } = request.body;

    try {
        const existingUrl = await Url.findOne({OriginalUrl})
        if(existingUrl){
            reply.send("localhost:3000/"+existingUrl.ShortUrl)
        } else{
            const newUrl = await Url.create({OriginalUrl})
            reply.send("localhost:3000/"+newUrl.ShortUrl)
        }
    }catch{
        reply.status(500).send("Erro ao encurtar a URL")
    }
})

server.get('/:shortUrl', async (request, reply) => {
    const { shortUrl } = request.params;

    try {
        const url = await Url.findOne({ ShortUrl: shortUrl });

        if (url) {
            reply.redirect(url.OriginalUrl);
        } else {
            reply.status(404).send('URL encurtada não encontrada.');
        }
    } catch (error) {
        reply.status(500).send('Erro ao redirecionar para a URL original.');
    }
});

server.listen({
    port:3000,
})