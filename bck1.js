//console.log("hi faizan");

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid layout</title>
<style>

.box{

    display: grid;
grid-template-areas:
'navbar navbar navbar navbar'
'section section section aside'
'foter foter foter foter';

grid-gap: 1rem;

grid-template-columns: repeat(auto-fit,minmax(300px,1fr));


}

.item{

border: 2px solid black;
background-color: purple;

}

#navbar
{
    grid-area: navbar;
    display: flex;
    justify-content: center;
    text-align: center;

}

#section
{
    grid-area: section;
}

#aside
{
    grid-area: aside;
}

#foter
{
    grid-area: foter;
}

</style>

</head>
<body>
    
    <div class="box">

        <div id="navbar" class="item">about number contact us mail</div>

        <div id="section" class="item"> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit consectetur suscipit porro recusandae eum amet quibusdam sunt a ullam aliquid.
        </div>
<div id="aside" class="item">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam iure sit voluptate illum architecto pariatur perspiciatis nisi, nobis cupiditate asperiores nulla animi voluptatum. Consequuntur iste molestias rerum nam soluta?
</div>

<div id="foter" class="item">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio atque laborum nobis facere velit necessitatibus numquam ipsam pariatur suscipit animi!
</div>

    </div>




</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

