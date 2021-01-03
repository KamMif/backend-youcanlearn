import { app } from './app';
const effectivePort = process.env.PORT || 8080;

app.listen(effectivePort,()=>{
    console.log(`Server Started at Port, ${effectivePort}`)
})
