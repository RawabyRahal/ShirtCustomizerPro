import express from 'express';
import * as dotenv from 'dotenv';
import Configuration from 'openai';
import OpenAIApi from 'openai';

dotenv.config()

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);
// console.log(openai)
router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })
        const image = aiResponse.data[0].b64_json;

        // const mockResponse = {
        //     data: [{
        //         url: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900'
        //     }]
        // };

        // // Use the mocked response instead of calling the API
        // const image = mockResponse.data[0].url;

        res.status(200).json({ photo: image });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" })
    }
})
export default router;